import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Plus, X } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { PageHero } from '@/src/components/PageHero';
import { ContactBanner } from '@/src/components/ContactBanner';
import { SITE_IMAGES } from '@/src/assets/images';
import { SERVICES, ServiceCaseStudy } from '@/src/data/siteData';
import { animateCategoryBadges } from '@/src/utils/gsapAnimations';

const SERVICE_BADGE_COLORS: Record<string, string> = {
  'ai-data': 'rgb(129, 215, 66)',
  'data-bi': 'rgb(128, 19, 184)',
  'php-modernization': 'rgb(27, 164, 198)',
  'devops-cloud': 'rgb(225, 139, 48)',
};

const CaseStudyWrapper: React.FC<{ caseStudies: ServiceCaseStudy[] }> = ({
  caseStudies,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="rounded-[14px] border border-[#E5EDE7] bg-white overflow-hidden font-sans">
      {caseStudies.map((study, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={study.title}
            className="border-b border-[#E5EDE7] last:border-b-0 bg-white"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setActiveIndex(isOpen ? null : idx)}
              className="w-full text-left flex items-center justify-between gap-4 px-5 py-5 sm:px-7 sm:py-6 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-3.5 min-w-0">
                <span className="inline-flex items-center justify-center rounded-[5px] bg-[#1DA05F]/10 text-[#1DA05F] px-[9px] py-[4px] text-[11px] font-bold uppercase tracking-[1px] leading-[18px] whitespace-nowrap shrink-0">
                  {study.tag}
                </span>
                <span className="text-[15px] sm:text-[16px] font-semibold text-black leading-[1.35]">
                  {study.title}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-black"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-[#E5EDE7] bg-white px-5 py-5 sm:px-7 sm:py-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.8px] text-[#666666] mb-1.5">
                      The problem
                    </span>
                    <p className="text-[14px] font-normal leading-[1.65] text-[#555555]">
                      {study.problem}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.8px] text-[#666666] mb-1.5">
                      What we built
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-[14px] font-normal leading-[1.65] text-[#555555]">
                      {study.built.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.8px] text-[#15251D] mb-1.5">
                      Result
                    </span>
                    <p className="text-[14px] font-semibold leading-[1.65] text-[#15251D]">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const ServicesPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('all');
  const showcaseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return animateCategoryBadges(showcaseRef.current);
  }, [selectedServiceId]);

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
        backgroundImage={SITE_IMAGES.servicesHeroBg}
        overlayClassName="bg-gradient-to-r from-black/70 via-black/35 to-transparent"
      />

      {/* Interactive Service Filter / Quick Jump Controls */}
      <section className="bg-white border-b border-slate-200 font-sans">
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
                  : 'bg-slate-100 text-[#333333] hover:bg-slate-200'
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
                    : 'bg-slate-100 text-[#333333] hover:bg-slate-200'
                }`}
              >
                {service.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Service Sections */}
      <section ref={showcaseRef} className="bg-[#F8FAFC] font-sans">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-12">
          {visibleServices.map((service) => {
            const badgeColor = SERVICE_BADGE_COLORS[service.id] ?? 'rgb(27, 164, 198)';
            return (
              <article
                key={service.id}
                id={service.id}
                data-gsap="reveal"
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white shadow-sm"
              >
                <div className="flex flex-col">
                  {/* Text & Specification Section */}
                  <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eee] pb-4">
                        <div
                          data-gsap="cat-badge"
                          className="inline-block max-w-full overflow-hidden text-white tracking-wide"
                          style={{ background: badgeColor }}
                        >
                          <span
                            data-gsap="cat-badge-text"
                            className="inline-block whitespace-normal sm:whitespace-nowrap px-3 py-1.5 text-[13px] lg:text-[18px] leading-[1.5] lg:leading-[1.7] font-bold"
                          >
                            {service.title}
                          </span>
                        </div>
                        <span className="text-[13px] lg:text-[14px] font-medium text-[#666666]">
                          {service.stack.join(' · ')}
                        </span>
                      </div>

                      <h2 className="text-[18px] md:text-[21px] lg:text-[24px] font-semibold tracking-tight text-[#333333] leading-[1.44] lg:leading-[1.28]">
                        {service.summary}
                      </h2>
                      <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-[#333333]">
                        {service.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <h3 className="text-[14px] lg:text-[16px] font-semibold text-[#333333] leading-[1.72]">
                          Key Engineering Deliverables
                        </h3>
                        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[14px] lg:text-[16px] font-normal leading-[1.6] text-[#333333]"
                            >
                              <CheckCircle2
                                className="mt-1 h-4 w-4 shrink-0 text-[#10b857]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Outcomes & Direct CTA */}
                    <div className="flex flex-col justify-between gap-6 border-t border-[#eee] pt-6 sm:flex-row sm:items-end">
                      <div className="grid grid-cols-2 gap-6">
                        {service.outcomes.map((outcome) => (
                          <div key={outcome.label}>
                            <p className="text-[20px] lg:text-[24px] font-semibold text-black tabular-nums">
                              {outcome.value}
                            </p>
                            <p className="mt-0.5 text-[14px] text-[#333333] max-w-[200px]">
                              {outcome.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <a
                        href={`/contact-us/?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#10b857] px-6 py-2.5 text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#10b857] hover:bg-gradient-to-r hover:from-[#10b857] hover:to-[#17b7df] hover:text-white hover:border-transparent transition-all duration-200 whitespace-nowrap shrink-0"
                      >
                        <span>Request Consultation</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Case Study Wrapper Bottom Section */}
                  <div
                    className="bg-[#F8FAFC] bg-cover bg-center border-t border-[#E5EDE7] p-6 sm:p-8 lg:p-10"
                    style={{ backgroundImage: `url('${SITE_IMAGES.aboutMissionBg}')` }}
                  >
                    <CaseStudyWrapper caseStudies={service.caseStudies} />
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
