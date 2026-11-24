import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Animates Blockchain / Internet of Things category badges on scroll,
 * matching the reference left-to-right bar expansion + delayed label fade.
 */
export function animateCategoryBadges(root: HTMLElement | null): () => void {
  if (!root || prefersReducedMotion()) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const badges = root.querySelectorAll<HTMLElement>('[data-gsap="cat-badge"]');
    badges.forEach((badge) => {
      const label = badge.querySelector<HTMLElement>('[data-gsap="cat-badge-text"]');

      gsap.fromTo(
        badge,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.95,
          ease: 'power2.out',
          clearProps: 'clipPath',
          scrollTrigger: {
            trigger: badge,
            start: 'top 92%',
            once: true,
          },
        }
      );

      if (label) {
        gsap.fromTo(
          label,
          { opacity: 0 },
          {
            opacity: 1,
            delay: 0.45,
            duration: 0.75,
            ease: 'power1.out',
            clearProps: 'opacity',
            scrollTrigger: {
              trigger: badge,
              start: 'top 92%',
              once: true,
            },
          }
        );
      }
    });
  }, root);

  return () => ctx.revert();
}

/**
 * Initializes page-level entrance and scroll-triggered animations inside a scoped gsap.context.
 */
export function initPageAnimations(root: HTMLElement | null): () => void {
  if (!root || prefersReducedMotion()) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    // Hero immediate stagger
    const heroItems = root.querySelectorAll('[data-gsap="hero-stagger"]');
    if (heroItems.length > 0) {
      gsap.from(heroItems, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }

    // Individual section reveals
    const revealEls = root.querySelectorAll('[data-gsap="reveal"]');
    revealEls.forEach((el) => {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          once: true,
        },
      });
    });

    // Staggered card / list groups
    const staggerGroups = root.querySelectorAll('[data-gsap="stagger-group"]');
    staggerGroups.forEach((group) => {
      const items = group.querySelectorAll('[data-gsap-item]');
      if (items.length === 0) return;

      gsap.from(items, {
        y: 24,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: group,
          start: 'top 84%',
          once: true,
        },
      });
    });

    // Media container subtle scale reveal
    const mediaEls = root.querySelectorAll('[data-gsap="image-reveal"]');
    mediaEls.forEach((el) => {
      gsap.from(el, {
        scale: 0.96,
        opacity: 0,
        duration: 0.85,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });
  }, root);

  const cleanupBadges = animateCategoryBadges(root);

  return () => {
    cleanupBadges();
    ctx.revert();
  };
}

export { gsap, ScrollTrigger };
