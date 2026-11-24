import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/src/data/siteData';

interface ContactBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  backgroundImage?: string;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({
  title = 'Ready to Architect Your Next Engineering Initiative?',
  description = 'Discuss your data pipelines, legacy PHP migration roadmap, or cloud infrastructure goals directly with our engineering operations team.',
  primaryLabel = 'Schedule a Technical Consultation',
  backgroundImage,
}) => {
  if (backgroundImage) {
    return (
      <section
        className="relative overflow-hidden bg-cover bg-center border-t border-slate-200"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundColor: '#07B0BB',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#062E3D]/75 via-[#074454]/50 to-[#063847]/30"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div
            data-gsap="reveal"
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-7 space-y-4 text-white">
              <p className="text-sm font-semibold tracking-wide text-[#89FAEC]">
                Work With SaaralTech Solutions
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
                {title}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-100">
                {description}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-xl space-y-6">
                <div className="h-[3px] w-10 rounded-full bg-[#10B857]" aria-hidden="true" />
                <div className="space-y-3 text-sm text-slate-700">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 font-medium text-[#0B2536] hover:text-[#0D9647] transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#10B857]" aria-hidden="true" />
                    <span className="break-all">{COMPANY_INFO.email}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.mobileHref}
                    className="flex items-center gap-3 font-medium text-[#0B2536] hover:text-[#0D8FB0] transition-colors tabular-nums"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[#17B7DF]" aria-hidden="true" />
                    <span>{COMPANY_INFO.mobile}</span>
                  </a>
                </div>

                <a
                  href="/contact.html"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-[#10B857] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#0D9647] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B857]"
                >
                  <span>{primaryLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-transparent border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div
          data-gsap="reveal"
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 bg-transparent"
        >
          {/* Left narrative column with black typography */}
          <div className="lg:col-span-7 space-y-4 text-black">
            <p className="text-sm font-semibold tracking-wide text-black">
              Work With SaaralTech Solutions
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl leading-tight">
              {title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-black/85">
              {description}
            </p>
          </div>

          {/* Right transparent/clean action column with black text */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-black/15 bg-transparent p-7 sm:p-8 space-y-6">
              <div className="space-y-3 text-sm text-black">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 font-medium text-black hover:underline transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-black" aria-hidden="true" />
                  <span className="break-all">{COMPANY_INFO.email}</span>
                </a>
                <a
                  href={COMPANY_INFO.mobileHref}
                  className="flex items-center gap-3 font-medium text-black hover:underline transition-colors tabular-nums"
                >
                  <Phone className="h-4 w-4 shrink-0 text-black" aria-hidden="true" />
                  <span>{COMPANY_INFO.mobile}</span>
                </a>
              </div>

              <a
                href="/contact.html"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-md border border-black bg-black px-6 py-3.5 text-sm font-semibold text-white hover:bg-black/85 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
