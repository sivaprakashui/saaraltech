import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { ContactBanner } from '@/src/components/ContactBanner';
import { SmartImage } from '@/src/components/SmartImage';
import { SITE_IMAGES } from '@/src/assets/images';
import {
  INDUSTRIES,
  SAMPLE_PROJECTS,
  SERVICES,
} from '@/src/data/siteData';

const HERO_METRICS = [
  { value: '99.95%', label: 'Target SLA across production data pipelines' },
  { value: '68%', label: 'Reduction in deployment release cycle time' },
  { value: '3.4x', label: 'API throughput gain after PHP 8.3 modernization' },
];

export const HomePage: React.FC = () => {
  const featuredProjects = SAMPLE_PROJECTS.slice(0, 3);

  return (
    <Layout activePage="home">
      {/* 1. Hero Section inspired by talentica.com (no slider, centered layout, frosted stat cards) */}
      <section
        aria-label="SaaralTech Solutions Overview"
        className="relative overflow-hidden bg-[#0B2536] bg-cover bg-center text-white"
        style={{ backgroundImage: `url('${SITE_IMAGES.homeHeroBg}')` }}
      >
        {/* Subtle contrast scrim preserving the emerald-to-blue wave background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#061D2E]/78 via-[#0A2F44]/52 to-[#062233]/72"
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-38 sm:pb-20 lg:px-8 lg:pt-44 lg:pb-24">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <p
              data-gsap="hero-stagger"
              className="text-sm font-semibold tracking-wide text-[#7CF5B4]"
            >
              AI · Data Engineering · PHP Modernization · Cloud DevOps
            </p>
            <h1
              data-gsap="hero-stagger"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] leading-[1.12]"
            >
              We Don&apos;t Just Engineer Software.
              <br className="hidden sm:block" /> We Ship Production Platforms With AI.
            </h1>
            <p
              data-gsap="hero-stagger"
              className="mx-auto max-w-2xl text-base leading-relaxed text-slate-100 sm:text-xl"
            >
              SaaralTech Solutions helps enterprises build, modernize, and productionize intelligent data pipelines, PHP 8.3+ applications, and resilient cloud systems.
            </p>

            <div
              data-gsap="hero-stagger"
              className="flex flex-wrap items-center justify-center gap-4 pt-3"
            >
              <a
                href="/services/"
                className="inline-flex items-center gap-2 rounded-md bg-[#10B857] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0D9647] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-sm"
              >
                <span>Explore Engineering Services</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/contact-us/"
                className="inline-flex items-center gap-2 rounded-md border border-white/55 bg-[#082433]/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-[#0B2536] transition-colors whitespace-nowrap shrink-0 backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Schedule a Consultation</span>
              </a>
            </div>
          </div>

          {/* 3-Column Frosted Metric Cards mirroring reference hero bottom strip */}
          <div
            data-gsap="stagger-group"
            className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16"
          >
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                data-gsap-item
                className="rounded-2xl border border-white/25 bg-[#061E2E]/45 p-6 text-center backdrop-blur-md"
              >
                <p className="text-3xl font-bold text-white tabular-nums">{metric.value}</p>
                <p className="mt-2 text-sm leading-snug text-slate-100">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div data-gsap="reveal" className="lg:col-span-6 space-y-6">
              <p className="text-sm font-semibold text-[#0D9647]">
                About SaaralTech Solutions
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B2536] sm:text-4xl leading-tight">
                Engineering Discipline Across Cloud, Data, Testing, and Delivery
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                SaaralTech Solutions partners with technology and operations leaders to modernize legacy applications, build dependable data platforms, and automate cloud infrastructure. Every engagement is structured around measurable operational reliability rather than short-lived prototypes.
              </p>
              <ul className="space-y-3 pt-1">
                {[
                  'Full-lifecycle architecture from ingestion pipelines to executive BI workspaces',
                  'Zero-downtime PHP 5/7 modernization into typed PHP 8.3+ and modular APIs',
                  'Automated infrastructure-as-code, CI/CD release gates, and cloud FinOps',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#10B857]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <a
                  href="/about-us/"
                  className="inline-flex items-center gap-2 rounded-md border border-[#0B2536] px-5 py-3 text-sm font-semibold text-[#0B2536] hover:bg-[#10B857] hover:border-[#10B857] hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>Read Our Company Story</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div data-gsap="image-reveal" className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-[4/3]">
                <SmartImage
                  src={SITE_IMAGES.about.overview}
                  alt="SaaralTech Solutions enterprise systems architecture"
                  className="h-full w-full object-cover"
                  fallbackTitle="SaaralTech Architecture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities (DevX AI Pods reference palette: dark #0d1b2a -> #0e2a1e, #10b857 green, #9fb0c3 light slate) */}
      <section className="bg-devx-pods border-b border-white/10 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div data-gsap="reveal" className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#10b857]">Core Capabilities</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Focused Engineering Services Built for <span className="text-[#10b857]">Production</span>
              </h2>
            </div>
            <a
              href="/services/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#10b857] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All Service Specifications</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div data-gsap="stagger-group" className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {SERVICES.map((service, index) => {
              const spanClass =
                index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
              return (
                <article
                  key={service.id}
                  data-gsap-item
                  className={`${spanClass} group relative overflow-hidden flex flex-col justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] p-7 sm:p-8 transition-colors hover:border-[#10b857]/60`}
                >
                  <div className="devx-card-top-bar absolute inset-x-0 top-0 h-[3px]" aria-hidden="true" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <span className="font-mono text-sm font-semibold text-[#10b857] tabular-nums">
                        {service.index}
                      </span>
                      <span className="text-xs font-medium text-[#7a9aad]">
                        {service.stack.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#10b857] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#9fb0c3]">
                      {service.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div className="text-xs text-[#9fb0c3]">
                      <span className="font-bold text-[#10b857] tabular-nums">
                        {service.outcomes[0].value}
                      </span>{' '}
                      <span>{service.outcomes[0].label}</span>
                    </div>
                    <a
                      href={`/services/#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#10b857] hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Details</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Industries */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div data-gsap="reveal" className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#0D9647]">Industry Domains</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B2536] sm:text-4xl">
                Domain Architectures for Complex Operations
              </h2>
            </div>
            <a
              href="/industries/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2536] hover:text-[#0D8FB0] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div data-gsap="stagger-group" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <a
                key={industry.id}
                href={`/industries/#${industry.id}`}
                data-gsap-item
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-[#17B7DF]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#0B2536]">
                  <SmartImage
                    src={industry.image}
                    alt={industry.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    fallbackTitle={industry.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="font-mono text-xs font-semibold text-[#0D8FB0] tabular-nums">
                      {industry.index}
                    </p>
                    <h3 className="text-lg font-bold text-[#0B2536] group-hover:text-[#0D9647] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {industry.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B2536] group-hover:text-[#0D8FB0] transition-colors">
                    <span>View Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Solution Blueprints (WHY US / What sets us apart reference background & card style) */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('${SITE_IMAGES.ctaSetsApartBg}')`,
          backgroundColor: '#07B0BB',
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div data-gsap="reveal" className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold tracking-wide text-white">Solution Blueprints</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Representative Sample Project Architectures
              </h2>
              <p className="text-sm text-white/95">
                Sample engineering architectures illustrating how our systems solve throughput, visibility, and modernization challenges.
              </p>
            </div>
            <a
              href="/projects/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              <span>Browse Full Portfolio</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div
            data-gsap="stagger-group"
            className="grid grid-cols-1 md:grid-cols-3 bg-white border border-[#e6e6e6] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]"
          >
            {featuredProjects.map((project, index) => {
              const isIoT = index === 2;
              const badgeLabel = isIoT ? 'Internet of Things' : 'Blockchain';
              const badgeColor = isIoT ? '#13b88e' : '#8013b8';

              return (
                <article
                  key={project.id}
                  data-gsap-item
                  className="flex flex-col justify-between bg-white p-8 sm:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-[#eee]"
                >
                  <div>
                    <div
                      data-gsap="cat-badge"
                      className="inline-block overflow-hidden px-3 py-1.5 text-[13px] lg:text-[14px] font-bold text-white tracking-wide"
                      style={{ background: badgeColor }}
                    >
                      <span data-gsap="cat-badge-text" className="inline-block whitespace-nowrap">
                        {badgeLabel}
                      </span>
                    </div>

                    <h3 className="mt-6 text-[21px] lg:text-[24px] font-semibold text-[#333333] leading-[1.35]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-[14px] lg:text-[16px] font-semibold text-[#333333]">
                      {project.sampleLabel} · {project.industry}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-[16px] lg:text-[18px] font-normal text-[#333333] leading-[1.45]">
                      {project.summary}
                    </p>

                    <div className="mt-8">
                      <a
                        href="/projects/"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#10b857] px-7 py-2.5 text-[15px] font-semibold text-[#10b857] hover:bg-gradient-to-r hover:from-[#10b857] hover:to-[#17b7df] hover:text-white hover:border-transparent transition-all duration-200 whitespace-nowrap"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA ("Work With SaaralTech Solutions") */}
      <ContactBanner />
    </Layout>
  );
};
