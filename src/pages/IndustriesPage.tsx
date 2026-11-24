import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { PageHero } from '@/src/components/PageHero';
import { ContactBanner } from '@/src/components/ContactBanner';
import { SITE_IMAGES } from '@/src/assets/images';
import { INDUSTRIES, IndustryItem } from '@/src/data/siteData';
import { animateCategoryBadges } from '@/src/utils/gsapAnimations';

const INDUSTRY_BADGE_COLORS: Record<string, string> = {
  'supply-chain': 'rgb(129, 215, 66)',
  insurance: 'rgb(128, 19, 184)',
  retail: 'rgb(27, 164, 198)',
  banking: 'rgb(225, 139, 48)',
};

const IndustryDetailBlock: React.FC<{ industry: IndustryItem }> = ({ industry }) => {
  const badgeColor = INDUSTRY_BADGE_COLORS[industry.id] ?? 'rgb(27, 164, 198)';

  return (
    <article
      id={industry.id}
      className="scroll-mt-24 h-full overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white shadow-sm p-7 sm:p-10 flex flex-col justify-between space-y-6 font-sans"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eee] pb-4">
          <div
            data-gsap="cat-badge"
            className="inline-block overflow-hidden text-white tracking-wide"
            style={{ background: badgeColor }}
          >
            <span
              data-gsap="cat-badge-text"
              className="inline-block whitespace-nowrap px-3 py-1.5 text-[13px] lg:text-[18px] leading-[1.5] lg:leading-[1.7] font-bold"
            >
              {industry.title}
            </span>
          </div>
          <span className="text-[13px] lg:text-[14px] font-medium text-[#666666]">
            {industry.technologies.join(' · ')}
          </span>
        </div>

        <h2 className="text-[18px] md:text-[21px] lg:text-[24px] font-semibold text-[#333333] leading-[1.44] lg:leading-[1.2]">
          {industry.headline}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-1">
          <div className="rounded-lg border border-[#e6e6e6] bg-[#F8FAFC] p-4 sm:p-5 space-y-2">
            <h3 className="text-[14px] lg:text-[16px] font-semibold text-[#666666] leading-[1.5]">
              Operational Challenge
            </h3>
            <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.5] lg:leading-[1.4] text-[#333333]">
              {industry.challenge}
            </p>
          </div>
          <div className="rounded-lg border border-[#e6e6e6] bg-[#F8FAFC] p-4 sm:p-5 space-y-2">
            <h3 className="text-[14px] lg:text-[16px] font-semibold text-[#10b857] leading-[1.5]">
              SaaralTech Solution
            </h3>
            <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.5] lg:leading-[1.4] text-[#333333]">
              {industry.solution}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-[14px] lg:text-[16px] font-semibold text-[#333333] leading-[1.72]">
            Applied Technology Capabilities
          </h3>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {industry.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-start gap-2.5 text-[14px] lg:text-[16px] font-normal leading-[1.72] text-[#333333]"
              >
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0 text-[#10b857]"
                  aria-hidden="true"
                />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#eee] pt-6">
        <a
          href="/projects/"
          className="text-[14px] lg:text-[16px] font-semibold text-[#10b857] hover:text-[#17b7df] transition-colors"
        >
          See Sample Industry Blueprints
        </a>
        <a
          href={`/contact-us/?service=${encodeURIComponent(industry.title)}`}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#10b857] px-6 py-2.5 text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#10b857] hover:bg-gradient-to-r hover:from-[#10b857] hover:to-[#17b7df] hover:text-white hover:border-transparent transition-all duration-200 whitespace-nowrap shrink-0"
        >
          <span>Discuss Domain Architecture</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export const IndustriesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const showcaseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return animateCategoryBadges(showcaseRef.current);
  }, [selectedIndustry]);

  const visibleIndustries =
    selectedIndustry === 'all'
      ? INDUSTRIES
      : INDUSTRIES.filter((ind) => ind.id === selectedIndustry);

  const firstRowIndustries = visibleIndustries.slice(0, 2);
  const secondRowIndustries = visibleIndustries.slice(2, 4);

  return (
    <Layout activePage="industries">
      <PageHero
        sectionLabel="Industries"
        breadcrumbCurrent="Industries"
        title="Technology Architectures Tailored to Regulated & High-Volume Industries"
        description="We apply data engineering, analytics, PHP modernization, and cloud DevOps to solve domain-specific bottlenecks across logistics, insurance, retail, and financial services."
        backgroundImage={SITE_IMAGES.industriesHeroBg}
        overlayClassName="bg-gradient-to-r from-black/75 via-black/40 to-transparent"
        titleClassName="text-[32px] sm:text-[44px] lg:text-[56px] font-semibold tracking-tight text-white leading-[1.13] lg:leading-[1.24]"
        descriptionClassName="max-w-2xl text-[15px] sm:text-[16px] lg:text-[18px] font-light leading-[1.5] lg:leading-[1.4] text-slate-100"
      />

      {/* Interactive Industry Filter Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter industries">
            <button
              type="button"
              role="tab"
              aria-selected={selectedIndustry === 'all'}
              onClick={() => setSelectedIndustry('all')}
              className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                selectedIndustry === 'all'
                  ? 'bg-[#1D354C] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Industries (4)
            </button>
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.id}
                type="button"
                role="tab"
                aria-selected={selectedIndustry === industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  selectedIndustry === industry.id
                    ? 'bg-[#1D354C] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Industry Solutions (Row 1: 1 & 2 side-by-side, Row 2: 3 & 4 side-by-side, no card images) */}
      <section ref={showcaseRef} className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8 lg:pt-16 lg:pb-8">
          {/* Row 1: Industries 1 & 2 with gap */}
          <div className="pb-8 lg:pb-10">
            <div
              data-gsap="reveal"
              className={`grid grid-cols-1 gap-8 items-stretch ${
                firstRowIndustries.length > 1 ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'
              }`}
            >
              {firstRowIndustries.map((industry) => (
                <IndustryDetailBlock key={industry.id} industry={industry} />
              ))}
            </div>
          </div>

          {/* Row 2: Industries 3 & 4 with gap */}
          {secondRowIndustries.length > 0 && (
            <div className="pb-8 lg:pb-10">
              <div
                data-gsap="reveal"
                className={`grid grid-cols-1 gap-8 items-stretch ${
                  secondRowIndustries.length > 1 ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'
                }`}
              >
                {secondRowIndustries.map((industry) => (
                  <IndustryDetailBlock key={industry.id} industry={industry} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactBanner
        title="Planning an Industry-Specific Platform Modernization?"
        description="Speak with SaaralTech Solutions about data governance, legacy application upgrades, and scalable cloud architecture for your sector."
        backgroundImage={SITE_IMAGES.industriesSectionBg}
      />
    </Layout>
  );
};

