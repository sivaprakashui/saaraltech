import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { PageHero } from '@/src/components/PageHero';
import { ContactBanner } from '@/src/components/ContactBanner';
import { SITE_IMAGES } from '@/src/assets/images';
import { ProjectItem, SAMPLE_PROJECTS } from '@/src/data/siteData';
import { animateCategoryBadges } from '@/src/utils/gsapAnimations';

const CATEGORIES = [
  'All',
  'AI & Data Engineering',
  'Data Analysis & BI',
  'PHP Modernization',
  'DevOps & Cloud',
] as const;

const INDUSTRIES_FILTER = [
  'All Industries',
  'Supply Chain & Logistics',
  'Insurance',
  'Retail',
  'Banking & Financial Services',
] as const;

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return animateCategoryBadges(showcaseRef.current);
  }, [selectedCategory, selectedIndustry]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredProjects = SAMPLE_PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesIndustry =
      selectedIndustry === 'All Industries' || project.industry === selectedIndustry;
    return matchesCategory && matchesIndustry;
  });

  const getCardTheme = (index: number) => {
    if (index < 3) {
      return {
        label: 'Blockchain',
        bgColor: '#8013b8',
      };
    }
    return {
      label: 'Internet of Things',
      bgColor: '#13b88e',
    };
  };

  return (
    <Layout activePage="projects">
      <PageHero
        sectionLabel="Projects Portfolio"
        breadcrumbCurrent="Projects"
        title="Sample Solution Architectures & Engineering Blueprints"
        description="Explore representative sample projects illustrating how SaaralTech Solutions designs data platforms, business intelligence systems, modernized PHP applications, and automated cloud infrastructure."
        backgroundImage={SITE_IMAGES.projectsHeroBg}
        overlayClassName="bg-gradient-to-r from-black/70 via-black/35 to-transparent"
      />

      {/* Filter Controls */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by service">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === category
                      ? 'bg-[#1D354C] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <label htmlFor="industry-filter" className="text-xs font-semibold text-slate-600 whitespace-nowrap">
                Industry:
              </label>
              <select
                id="industry-filter"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-[#1D354C] focus:border-[#3AA3DC] focus:outline-none focus:ring-2 focus:ring-[#3AA3DC]/30"
              >
                {INDUSTRIES_FILTER.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Grid (clean white background matching reference white-papers) */}
      <section ref={showcaseRef} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#eee] pb-4">
            <p className="text-sm font-medium text-[#333333]">
              Showing <span className="font-bold text-[#000000] tabular-nums">{filteredProjects.length}</span> representative sample solution architectures
            </p>
            {(selectedCategory !== 'All' || selectedIndustry !== 'All Industries') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedIndustry('All Industries');
                }}
                className="text-xs font-semibold text-[#10b857] underline hover:text-[#0D9647]"
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-[#e6e6e6] bg-white p-12 text-center space-y-4">
              <h2 className="text-[21px] lg:text-[24px] font-semibold text-[#333333]">
                No sample blueprints match the current filter combination
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#333333]">
                Try resetting the service category or industry filter to view all six sample architectures.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedIndustry('All Industries');
                }}
                className="inline-flex items-center justify-center rounded-md bg-[#1D354C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#10B857] transition-colors"
              >
                Show All Sample Projects
              </button>
            </div>
          ) : (
            <div
              data-gsap="stagger-group"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white border-t border-l border-[#eee]"
            >
              {filteredProjects.map((project, index) => {
                const theme = getCardTheme(index);
                return (
                  <article
                    key={project.id}
                    data-gsap-item
                    className="flex flex-col justify-between bg-white p-8 sm:p-10 lg:px-10 lg:py-14 border-b border-r border-[#eee]"
                  >
                    <div>
                      <div
                        data-gsap="cat-badge"
                        className="inline-block overflow-hidden px-3 py-1.5 text-[13px] lg:text-[14px] font-bold text-white tracking-wide"
                        style={{ background: theme.bgColor }}
                      >
                        <span data-gsap="cat-badge-text" className="inline-block whitespace-nowrap">
                          {theme.label}
                        </span>
                      </div>

                      <h2 className="mt-6 text-[21px] lg:text-[24px] font-semibold text-[#333333] leading-[1.35]">
                        {project.title}
                      </h2>

                      <h3 className="mt-4 text-[14px] lg:text-[16px] font-semibold text-[#333333] leading-[1.72]">
                        {project.sampleLabel} · {project.industry}
                      </h3>
                    </div>

                    <div className="mt-6">
                      <p className="text-[16px] lg:text-[18px] font-normal text-[#333333] leading-[1.45]">
                        {project.summary}
                      </p>

                      <p className="mt-4 text-[13px] font-medium text-[#666666]">
                        {project.technologies.join(' · ')}
                      </p>

                      <div className="mt-8">
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-2 rounded-full border-2 border-[#10b857] px-7 py-2.5 text-[15px] font-semibold text-[#10b857] hover:bg-gradient-to-r hover:from-[#10b857] hover:to-[#17b7df] hover:text-white hover:border-transparent transition-all duration-200 whitespace-nowrap"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Architecture Blueprint Detail Modal (Content-only, no image) */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-xs"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 sm:px-8">
              <div
                className="inline-block px-3 py-1.5 text-[13px] font-bold text-white"
                style={{
                  background:
                    SAMPLE_PROJECTS.findIndex((p) => p.id === activeProject.id) < 3
                      ? '#8013b8'
                      : '#13b88e',
                }}
              >
                {SAMPLE_PROJECTS.findIndex((p) => p.id === activeProject.id) < 3
                  ? 'Blockchain'
                  : 'Internet of Things'}
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close architecture details"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-[#333333] hover:bg-slate-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-[14px] font-semibold text-[#333333]">
                  {activeProject.sampleLabel} · {activeProject.category} · {activeProject.industry}
                </p>
                <h2 id="project-modal-title" className="text-[22px] sm:text-[24px] font-semibold text-[#333333] leading-[1.35]">
                  {activeProject.title}
                </h2>
              </div>

              <div className="space-y-4 text-[16px] leading-[1.6] text-[#333333]">
                <div>
                  <h3 className="font-semibold text-[#000000] mb-1">Sample Scenario</h3>
                  <p>{activeProject.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#000000] mb-1">Reference Architecture</h3>
                  <p>{activeProject.architectureOverview}</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 space-y-3">
                <h3 className="text-[15px] font-semibold text-[#000000]">
                  Representative Benchmark Outcomes
                </h3>
                <ul className="space-y-2">
                  {activeProject.outcomeMetrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2.5 text-[15px] text-[#333333]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10b857]" aria-hidden="true" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <p className="text-[13px] font-medium text-[#666666]">
                  Technologies: {activeProject.technologies.join(' · ')}
                </p>
                <a
                  href={`/contact.html?service=${encodeURIComponent(activeProject.category)}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#10b857] bg-[#10b857] px-6 py-2.5 text-[15px] font-semibold text-white hover:bg-[#0D9647] hover:border-[#0D9647] transition-colors whitespace-nowrap"
                >
                  <span>Request Similar Scope</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactBanner
        title="Want to Adapt One of These Architectures to Your Stack?"
        description="Contact SaaralTech Solutions to review your current workloads, target milestones, and delivery timeline."
        backgroundImage={SITE_IMAGES.projectsShowcaseBg}
      />
    </Layout>
  );
};
