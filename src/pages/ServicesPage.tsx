import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { PageHero } from '@/src/components/PageHero';
import { ContactBanner } from '@/src/components/ContactBanner';
import { SmartImage } from '@/src/components/SmartImage';
import { SITE_IMAGES } from '@/src/assets/images';
import { SERVICES } from '@/src/data/siteData';

export const ServicesPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('all');

  const visibleServices =
    selectedServiceId === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.id === selectedServiceId);

  return (
    <Layout activePage="services">
      <PageHero
        sectionLabel="Services"
        breadcrumbCurrent="Services"
        title="Specialized Engineering Services From Data Ingestion to Cloud Operations"
        description="Explore our four core technology practices—each structured to modernize critical systems, establish governed analytics, and eliminate operational bottlenecks."
      />

      {/* Interactive Service Filter / Quick Jump Controls */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter services">
            <button
              type="button"
              role="tab"
              aria-selected={selectedServiceId === 'all'}
              onClick={() => setSelectedServiceId('all')}
              className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                selectedServiceId === 'all'
                  ? 'bg-[#1D354C] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Services (4)
            </button>
            {SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={selectedServiceId === service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  selectedServiceId === service.id
                    ? 'bg-[#1D354C] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {service.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Service Sections */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-12">
          {visibleServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                data-gsap="reveal"
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                  {/* Text & Specification Column */}
                  <div
                    className={`p-7 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-between space-y-8 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 font-sans">
                        <span className="text-[15px] md:text-[16px] font-semibold text-[#1D7CB3]">
                          {service.index} Service Practice
                        </span>
                        <span className="text-[14px] font-medium text-[#666666]">
                          {service.stack.join(' · ')}
                        </span>
                      </div>

                      <h2 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-semibold tracking-tight text-black leading-[1.35]">
                        {service.title}
                      </h2>
                      <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-[#333333]">
                        {service.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <h3 className="text-[15px] lg:text-[16px] font-semibold text-black">
                          Key Engineering Deliverables
                        </h3>
                        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[15px] md:text-[16px] font-normal leading-[1.6] text-[#333333]"
                            >
                              <CheckCircle2
                                className="mt-1 h-4 w-4 shrink-0 text-[#1DA05F]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Outcomes & Direct CTA */}
                    <div className="flex flex-col justify-between gap-6 border-t border-slate-100 pt-6 sm:flex-row sm:items-end">
                      <div className="grid grid-cols-2 gap-6">
                        {service.outcomes.map((outcome) => (
                          <div key={outcome.label}>
                            <p className="text-[20px] lg:text-[24px] font-semibold text-black tabular-nums">
                              {outcome.value}
                            </p>
                            <p className="mt-0.5 text-[14px] text-[#333333] max-w-[180px]">
                              {outcome.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <a
                        href={`/contact-us/?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 rounded-md bg-[#1D354C] px-5 py-3 text-[15px] font-semibold text-white hover:bg-[#10B857] transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>Request Consultation</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Visual Column */}
                  <div
                    className={`bg-[#132435] lg:col-span-5 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="h-full min-h-[260px] lg:min-h-full">
                      <SmartImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="h-full w-full object-cover"
                        fallbackTitle={service.title}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ContactBanner
        title="Need a Custom Scope Across Multiple Practices?"
        description="Many engagements pair legacy PHP modernization with Cloud DevOps automation or AI data pipelines. Tell us about your architecture."
        backgroundImage={SITE_IMAGES.industriesSectionBg}
      />
    </Layout>
  );
};
