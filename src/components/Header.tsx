import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_IMAGES } from '@/src/assets/images';
import { COMPANY_INFO, NAV_ITEMS, NavItem } from '@/src/data/siteData';

interface HeaderProps {
  activePage: NavItem['key'];
}

export const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const useLightSurface = isScrolled || mobileMenuOpen;
  const activeLogo = useLightSurface
    ? SITE_IMAGES.logoOriginalTransparent
    : SITE_IMAGES.logoWhite;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-colors duration-200 ${
        useLightSurface
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Pure white transparent SaaralTech logo at top, colored transparent on scroll */}
        <a
          href="/index.html"
          className="block h-10 sm:h-11 aspect-[1208/228] shrink-0 bg-contain bg-left bg-no-repeat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B857] rounded"
          style={{ backgroundImage: `url('${activeLogo}')` }}
          aria-label="SaaralTech Solutions Home"
        >
          <span className="sr-only">SaaralTech Solutions</span>
        </a>

        {/* Zone 2: Single-line primary navigation links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === activePage;
            return (
              <a
                key={item.key}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B857] rounded ${
                  useLightSurface
                    ? isActive
                      ? 'text-[#0B2536] font-semibold'
                      : 'text-slate-700 hover:text-[#0B2536]'
                    : isActive
                      ? 'text-white font-semibold'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 transition-transform duration-200 origin-left ${
                    useLightSurface ? 'bg-[#10B857]' : 'bg-[#7CF5B4]'
                  } ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Contact CTA & Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/contact.html"
            aria-current={activePage === 'contact' ? 'page' : undefined}
            className={`hidden sm:inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B857] ${
              useLightSurface
                ? activePage === 'contact'
                  ? 'bg-[#0B2536] text-white'
                  : 'bg-[#10B857] text-white hover:bg-[#0D9647]'
                : activePage === 'contact'
                  ? 'bg-white text-[#0B2536]'
                  : 'border border-white/75 bg-white/10 text-white hover:bg-white hover:text-[#0B2536]'
            }`}
          >
            Contact Us
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B857] ${
              useLightSurface
                ? 'border-slate-200 bg-slate-50 text-[#0B2536] hover:bg-slate-100'
                : 'border-white/25 bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 sm:px-6 shadow-lg"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = item.key === activePage;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-[44px] items-center justify-between rounded-md px-4 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#10B857]/10 text-[#0D9647] border border-[#10B857]/30'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#0B2536]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs font-semibold text-[#0D9647]">Current</span>}
                </a>
              );
            })}
            <a
              href="/contact.html"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex min-h-[44px] items-center justify-center rounded-md bg-[#10B857] px-5 py-3 text-base font-semibold text-white hover:bg-[#0D9647] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="mt-6 border-t border-slate-200 pt-5 flex flex-col gap-2 text-sm text-slate-600">
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#0D9647] transition-colors">
              {COMPANY_INFO.email}
            </a>
            <a href={COMPANY_INFO.mobileHref} className="hover:text-[#0D9647] transition-colors tabular-nums">
              {COMPANY_INFO.mobile}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
