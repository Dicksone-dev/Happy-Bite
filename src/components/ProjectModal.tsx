import React, { useState } from 'react';
import { X, Check, Layers, Clock, Shield, MapPin, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';
import { ArchitecturalGraphic } from './ArchitecturalGraphic';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  const [viewMode, setViewMode] = useState<'render' | 'blueprint'>('render');

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-stone-950/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-stone-50 rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="text-stone-900 font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Ref. {project.id.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-0.5 bg-stone-100 rounded-lg border border-stone-200">
              <button
                onClick={() => setViewMode('render')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'render'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Perspective
              </button>
              <button
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'blueprint'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Orthographic
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-100 transition-colors"
              aria-label="Close Project Dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Visual Viewport */}
        <div className="relative w-full bg-stone-950 border-b border-stone-200">
          <ArchitecturalGraphic
            projectId={project.id}
            viewMode={viewMode}
            aspectRatio="16:9"
            className="w-full max-h-[380px]"
          />
        </div>

        {/* Content Body */}
        <div className="p-6 lg:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Title & Metadata */}
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>{project.location}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.footprint}</span>
              <span aria-hidden="true">·</span>
              <span>Delivered {project.year}</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 font-display">
              {project.title}
            </h2>
            <p className="mt-1 text-base text-stone-600 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Quantitative Impact Callout */}
          <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-lg">
            <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">
              Performance Benchmark
            </div>
            <div className="text-sm font-medium text-amber-950">
              {project.highlightMetric}
            </div>
          </div>

          {/* Architectural Description */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Architectural Statement
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* 2-Column Grid: Specifications & Materiality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
            {/* Scope Deliverables */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Scope & Execution</span>
              </div>
              <ul className="space-y-2">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <Check className="w-3.5 h-3.5 text-stone-800 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material Palette */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                <Shield className="w-3.5 h-3.5" />
                <span>Specified Materials</span>
              </div>
              <ul className="space-y-2">
                {project.materials.map((mat, i) => (
                  <li key={i} className="text-xs text-stone-700 pb-1 border-b border-stone-200/60 flex justify-between">
                    <span className="font-medium">{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-stone-100 rounded-lg text-xs">
            <div>
              <div className="text-stone-400">Typology Style</div>
              <div className="font-medium text-stone-900 mt-0.5">{project.specs.architecturalStyle}</div>
            </div>
            <div>
              <div className="text-stone-400">Energy Standard</div>
              <div className="font-medium text-stone-900 mt-0.5">{project.specs.energyStandard}</div>
            </div>
            <div>
              <div className="text-stone-400">Build Timeline</div>
              <div className="font-medium text-stone-900 mt-0.5">{project.specs.constructionDuration}</div>
            </div>
            <div>
              <div className="text-stone-400">Commission Type</div>
              <div className="font-medium text-stone-900 mt-0.5">{project.specs.clientType}</div>
            </div>
          </div>

          {/* Testimonial Quote if present */}
          {project.quote && (
            <div className="p-5 bg-white border border-stone-200 rounded-lg">
              <p className="italic text-stone-700 text-sm leading-relaxed">
                "{project.quote.text}"
              </p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-900">{project.quote.author}</span>
                <span className="text-stone-500">{project.quote.title}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-100 border-t border-stone-200">
          <div className="text-xs text-stone-500 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>Schedule initial feasibility review for similar typologies</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onInquireProject(project.title);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
          >
            <span>Inquire on this Typology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
