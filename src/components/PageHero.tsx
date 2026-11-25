import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SITE_IMAGES } from '@/src/assets/images';

interface PageHeroProps {
  sectionLabel: string;
  title: string;
  description: string;
  breadcrumbCurrent: string;
  backgroundImage?: string;
  overlayClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  sectionLabel,
  title,
  description,
  breadcrumbCurrent,
  backgroundImage = SITE_IMAGES.homeHeroBg,
  overlayClassName = 'bg-gradient-to-br from-[#061D2E]/88 via-[#0A2F44]/74 to-[#0B3D54]/58',
  titleClassName = 'text-[30px] sm:text-[40px] lg:text-[54px] font-semibold tracking-tight text-white leading-[1.2]',
  descriptionClassName = 'max-w-2xl text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-slate-100',
}) => {
  return (
    <section
      className="relative overflow-hidden bg-[#060D0A] bg-cover bg-center text-white font-sans"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${overlayClassName}`}
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-36 lg:pb-22">
        <nav aria-label="Breadcrumb" data-gsap="hero-stagger" className="mb-6 flex items-center gap-2 text-[14px] md:text-[15px] font-normal text-slate-200">
          <a href="/" className="hover:text-[#7CF5B4] transition-colors">
            Home
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
          <span className="text-[#7CF5B4]">{breadcrumbCurrent}</span>
        </nav>

        <div className="max-w-3xl space-y-4">
          <p data-gsap="hero-stagger" className="text-[15px] md:text-[16px] lg:text-[18px] font-normal uppercase tracking-wide text-[#7CF5B4]">
            {sectionLabel}
          </p>
          <h1 data-gsap="hero-stagger" className={titleClassName}>
            {title}
          </h1>
          <p data-gsap="hero-stagger" className={descriptionClassName}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
