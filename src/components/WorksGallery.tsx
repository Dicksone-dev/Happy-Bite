import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/projects';
import { ArchitecturalGraphic } from './ArchitecturalGraphic';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

interface WorksGalleryProps {
  onInquireProject: (projectTitle: string) => void;
}

type CategoryFilter = 'All' | 'Residential' | 'Cultural & Civic' | 'Workspaces' | 'Adaptive Reuse';

export const WorksGallery: React.FC<WorksGalleryProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cardViewModes, setCardViewModes] = useState<Record<string, 'render' | 'blueprint'>>({});

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const toggleCardView = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCardViewModes((prev) => ({
      ...prev,
      [projectId]: prev[projectId] === 'blueprint' ? 'render' : 'blueprint',
    }));
  };

  return (
    <section id="works" className="py-20 lg:py-28 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Natural Editorial Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
              Portfolio Archive
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-900 tracking-tight">
              Selected Commissions
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              Each building is a specific response to geographic topology, solar azimuths, and sovereign material provenance.
            </p>
          </div>

          {/* Interactive Filter Tabs / Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 rounded-lg border border-stone-200">
            {(['All', 'Residential', 'Cultural & Civic', 'Workspaces', 'Adaptive Reuse'] as CategoryFilter[]).map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === category
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const currentView = cardViewModes[project.id] || 'render';
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-white rounded-xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
              >
                {/* Visual Viewport with in-card toggle */}
                <div className="relative overflow-hidden bg-stone-950">
                  <ArchitecturalGraphic
                    projectId={project.id}
                    viewMode={currentView}
                    aspectRatio="4:3"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Single-Line Quick Mode Switch */}
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={(e) => toggleCardView(project.id, e)}
                      className="px-2.5 py-1 text-[11px] font-medium bg-stone-900/80 hover:bg-stone-900 text-stone-200 rounded-md backdrop-blur-xs border border-stone-700 transition-colors whitespace-nowrap"
                      title="Switch between perspective vignette and technical orthographic plan"
                    >
                      {currentView === 'render' ? 'View Plan' : 'View Render'}
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.footprint}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-stone-900 group-hover:text-stone-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-stone-600 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Quantitative Benchmark Callout & Action Footer */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div className="text-[11px] text-stone-500 font-medium truncate">
                      {project.specs.energyStandard}
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:translate-x-0.5 transition-transform shrink-0">
                      <span>Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Adjacency Proof Callout: Real Impact Metric */}
        <div className="mt-14 p-6 bg-stone-100 rounded-xl border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              Performance Rigor
            </div>
            <div className="mt-1 text-base font-semibold text-stone-900">
              100% of Aethel completed structures exceed sovereign energy efficiency baselines by at least 35%.
            </div>
            <p className="mt-1 text-xs text-stone-600">
              Validated by thermal imaging audits and post-occupancy sensor telemetries over 36 consecutive months.
            </p>
          </div>

          <a
            href="#estimator"
            className="px-4 py-2 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-50 rounded-md border border-stone-200 transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Model Your Project Performance
          </a>
        </div>
      </div>

      {/* Project Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={onInquireProject}
      />
    </section>
  );
};
