import React from 'react';
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldCheck, Target } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { PageHero } from '@/src/components/PageHero';
import { ContactBanner } from '@/src/components/ContactBanner';
import { SmartImage } from '@/src/components/SmartImage';
import { SITE_IMAGES } from '@/src/assets/images';

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Engineering Accountability',
    description:
      'We document architectural trade-offs openly, write automated tests before cutover, and measure success against production uptime and latency targets.',
  },
  {
    icon: Layers,
    title: 'Modular Longevity',
    description:
      'Systems should outlast trends. We favor clean service boundaries, typed interfaces, and infrastructure-as-code so internal teams can maintain every component.',
  },
  {
    icon: Target,
    title: 'Business-Outcome Alignment',
    description:
      'Every data model, dashboard, or migration milestone ties directly to cycle-time compression, cost transparency, or operational risk reduction.',
  },
  {
    icon: Compass,
    title: 'Transparent Collaboration',
    description:
      'Clear sprint deliverables, predictable communication channels, and structured knowledge transfer ensure seamless continuity across every engagement.',
  },
];

const DELIVERY_APPROACH = [
  {
    title: 'Architecture & Codebase Discovery',
    detail:
      'We audit existing data schemas, legacy application dependencies, cloud spend, and operational bottlenecks to establish a realistic technical baseline.',
  },
  {
    title: 'Incremental Build & Strangler Migration',
    detail:
      'Rather than risky big-bang rewrites, we deliver modular pipelines, modernized PHP 8.3+ services, and Terraform environments in verifiable phases.',
  },
  {
    title: 'Automated Quality & Security Testing',
    detail:
      'Continuous integration suites validate schema contracts, regression behavior, container vulnerabilities, and peak-load resilience prior to release.',
  },
  {
    title: 'Production Hardening & Placement Support',
    detail:
      'We establish observability dashboards, runbooks, and specialized technical placement support so your operational capacity scales smoothly post-launch.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <Layout activePage="about">
      <PageHero
        sectionLabel="About Us"
        breadcrumbCurrent="About Us"
        title="Practical Technology Engineering for Complex Enterprise Systems"
        description="SaaralTech Solutions combines cloud engineering, automated quality testing, full-stack modernization, and technical placement to help organizations run resilient digital operations."
        backgroundImage={SITE_IMAGES.aboutHeroBg}
        overlayClassName="bg-gradient-to-r from-black/75 via-black/40 to-transparent"
      />

      {/* Company Overview */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div data-gsap="reveal" className="lg:col-span-6 space-y-6">
              <p className="text-sm font-semibold text-[#1D7CB3]">Company Overview</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#1D354C] sm:text-4xl leading-tight">
                Built Around Four Interconnected Disciplines: Cloud, Testing, Dev, and Placement
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Modern enterprises rarely struggle from a lack of software tools—they struggle when legacy applications, fragmented data warehouses, and manual deployment processes slow critical business decisions.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                SaaralTech Solutions bridges that operational gap. We design high-integrity AI and data pipelines, turn raw records into governed Business Intelligence, modernize mission-critical PHP estates without business interruption, and automate multi-cloud DevOps workflows.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {[
                  'Enterprise Data & AI Foundations',
                  'Governed BI & Forecasting',
                  'Legacy PHP 8.3+ Modernization',
                  'Cloud DevOps & Technical Placement',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#1D354C]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3AA3DC]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="image-reveal" className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-[4/3]">
                <SmartImage
                  src={SITE_IMAGES.about.overview}
                  alt="SaaralTech Solutions systems architecture overview"
                  className="h-full w-full object-cover"
                  fallbackTitle="SaaralTech Enterprise Overview"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div data-gsap="stagger-group" className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <article
              data-gsap-item
              className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10 space-y-4"
            >
              <p className="text-xs font-semibold tracking-wide text-[#1D7CB3]">Our Mission</p>
              <h2 className="text-2xl font-bold text-[#1D354C]">
                Eliminate Technical Fragility From Core Operations
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                To engineer reliable data pipelines, modernized software platforms, and automated cloud infrastructure that allow organizations in logistics, insurance, retail, and financial services to operate with clarity and speed.
              </p>
            </article>

            <article
              data-gsap-item
              className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10 space-y-4"
            >
              <p className="text-xs font-semibold tracking-wide text-[#1D7CB3]">Our Vision</p>
              <h2 className="text-2xl font-bold text-[#1D354C]">
                The Trusted Long-Term Engineering Partner for Regulated Growth
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                To be recognized for engineering craftsmanship that stands the test of scale—where every modernized codebase, AI workflow, and cloud deployment remains auditable, cost-efficient, and adaptable for years ahead.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div data-gsap="reveal" className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#1D7CB3]">Operating Principles</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1D354C] sm:text-4xl">
              Values That Govern Every Deliverable
            </h2>
          </div>

          <div data-gsap="stagger-group" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  data-gsap-item
                  className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1D354C] text-[#60C3F7]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1D354C]">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Approach (How We Deliver - white background, 2-col layout & Poppins typography matching reference) */}
      <section className="bg-white font-sans">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div data-gsap="reveal" className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-2 text-[15px] md:text-[16px] lg:text-[18px] font-normal uppercase tracking-wide text-[#333333]">
                How We Deliver
              </p>
              <h2 className="mb-4 text-[30px] sm:text-[34px] md:text-[40px] lg:text-[54px] font-semibold tracking-tight text-black leading-[1.35] lg:leading-[1.2]">
                A Structured Four-Stage Engineering Methodology
              </h2>
              <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-[#333333]">
                We move from architectural discovery to production hardening, engineering for real data, real scale, and real users along the way.
              </p>
            </div>
            <a
              href="/services/"
              className="inline-flex items-center gap-2 text-[15px] lg:text-[16px] font-semibold text-[#1DA05F] hover:text-[#17B7DF] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore Technical Services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div
            data-gsap="stagger-group"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-[65px] gap-y-6"
          >
            {DELIVERY_APPROACH.map((stage) => (
              <div
                key={stage.title}
                data-gsap-item
                className="rounded-[16px] border-[2.36px] border-[#E0EBE3] bg-white px-[30px] py-[27px]"
              >
                <div className="flex h-full flex-col justify-start">
                  <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-semibold leading-[1.35] lg:leading-[1.5] text-black">
                    {stage.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-[#333333]">
                    {stage.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner
        title="Discuss Your Technical Roadmap With SaaralTech Solutions"
        description="Whether you need an architectural audit, a zero-downtime PHP upgrade, or cloud engineering capacity, our operations desk responds within one business day."
        backgroundImage={SITE_IMAGES.industriesSectionBg}
      />
    </Layout>
  );
};
