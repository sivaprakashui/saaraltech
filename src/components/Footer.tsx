import React from 'react';
import { Globe, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { SITE_IMAGES } from '@/src/assets/images';
import { COMPANY_INFO, NAV_ITEMS, SERVICES } from '@/src/data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-talentica-footer text-white border-t border-white/15">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8 lg:pt-16 lg:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column with all-white transparent SaaralTech logo */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="/index.html"
              className="block h-11 sm:h-12 aspect-[1208/228] max-w-full bg-contain bg-left bg-no-repeat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              style={{ backgroundImage: `url('${SITE_IMAGES.logoWhite}')` }}
              aria-label="SaaralTech Solutions"
            >
              <span className="sr-only">SaaralTech Solutions</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-white/95">
              SaaralTech Solutions builds production-grade data platforms, AI workflows, modernized PHP enterprise systems, and resilient cloud infrastructure for regulated and high-growth organizations.
            </p>
            <p className="text-xs font-semibold tracking-wide text-white">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Useful Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-sm font-bold text-white tracking-wide">Company</h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-white/90 hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contact.html"
                  className="text-white/90 hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold text-white tracking-wide">Core Services</h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services.html#${service.id}`}
                    className="text-white/90 hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold text-white tracking-wide">Get in Touch</h2>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-white group-hover:bg-white group-hover:text-[#0d1b2a] transition-colors">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="break-all">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.mobileHref}
                  className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors tabular-nums"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-white group-hover:bg-white group-hover:text-[#0d1b2a] transition-colors">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{COMPANY_INFO.mobile}</span>
                </a>
              </li>
              <li>
                <a
                  href="/index.html"
                  className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-white group-hover:bg-white group-hover:text-[#0d1b2a] transition-colors">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{COMPANY_INFO.website}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-white">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <address className="not-italic leading-snug text-white/95">
                  {COMPANY_INFO.addressLines[0]}
                  <br />
                  {COMPANY_INFO.addressLines[1]}
                </address>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="/contact.html"
                className="inline-flex items-center gap-2 rounded-md border border-white/80 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white hover:text-[#0d1b2a] transition-colors whitespace-nowrap"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Centered copyright inside the same footer container */}
        <div className="mt-12 border-t border-white/25 pt-7 text-center">
          <p className="text-xs font-medium text-white">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
