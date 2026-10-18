import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { ArchitecturalGraphic } from './ArchitecturalGraphic';

interface HeroProps {
  onExploreClick: () => void;
  onEstimatorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onEstimatorClick }) => {
  const [heroViewMode, setHeroViewMode] = useState<'render' | 'blueprint'>('render');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Trust Marker */}
        <div className="flex items-center gap-3 text-xs font-medium text-stone-500 uppercase tracking-widest mb-6">
          <span>Zurich</span>
          <span aria-hidden="true">·</span>
          <span>London</span>
          <span aria-hidden="true">·</span>
          <span>Copenhagen</span>
          <span aria-hidden="true">/</span>
          <span className="text-stone-700">RIBA Chartered Practice</span>
        </div>

        {/* 2-Column Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Proposition & Primary Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-display leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Sculpting enduring architecture between light, timber & stone.
            </h1>

            <p className="mt-6 text-base lg:text-lg text-stone-600 leading-relaxed max-w-xl">
              Aethel is an international architectural atelier. We conceive high-performance private
              residences, cultural pavilions, and adaptive heritage conversions rooted in low-carbon
              permanence and quiet tectonic clarity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer shadow-xs active:translate-y-px"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onEstimatorClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 bg-stone-200/70 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-stone-600" />
                <span>Calculate Project Timeline</span>
              </button>
            </div>

            {/* Environmental & Quality Assurance Anchor */}
            <div className="mt-10 pt-6 border-t border-stone-200/80 flex items-center gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-stone-700 shrink-0" />
                <span>Passivhaus & Minergie-P Certified Lead Architects</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <div>LOD 400 BIM Delivery</div>
            </div>
          </div>

          {/* Right Column: Hero Visual Focal Anchor */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative rounded-xl overflow-hidden border border-stone-300/80 shadow-md bg-stone-900">
              {/* Graphic Component */}
              <ArchitecturalGraphic
                projectId="villa-kura"
                viewMode={heroViewMode}
                aspectRatio="16:9"
                className="h-full min-h-[320px] lg:min-h-[420px]"
              />

              {/* Interactive Viewport Controller Overlay */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 p-1 bg-stone-900/80 backdrop-blur-md rounded-lg border border-stone-700">
                <button
                  onClick={() => setHeroViewMode('render')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    heroViewMode === 'render'
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Perspective
                </button>
                <button
                  onClick={() => setHeroViewMode('blueprint')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    heroViewMode === 'blueprint'
                      ? 'bg-cyan-600 text-white'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Orthographic Plan
                </button>
              </div>

              {/* Bottom Caption Pill-Free Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-stone-950/85 backdrop-blur-sm p-4 text-xs text-stone-300 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white">Villa Kura</span>
                  <span className="text-stone-500 mx-2">·</span>
                  <span>Hardanger Fjord, Norway</span>
                </div>
                <div className="font-mono text-amber-400 tabular-nums">520 m² / Passivhaus Plus</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 3-Column Proof Strip directly below the hero split */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-200">
          <div className="p-6 bg-white rounded-lg border border-stone-200/80 shadow-xs">
            <div className="text-3xl lg:text-4xl font-bold font-display text-stone-900 tabular-nums">
              48 Comps.
            </div>
            <div className="mt-2 text-sm font-medium text-stone-800">
              Built Across 11 European & Global Territories
            </div>
            <p className="mt-1 text-xs text-stone-500 leading-relaxed">
              Every commission executed with bespoke tectonic craftsmanship and local sovereign fabrication partners.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-stone-200/80 shadow-xs">
            <div className="text-3xl lg:text-4xl font-bold font-display text-stone-900 tabular-nums">
              -42% Carbon
            </div>
            <div className="mt-2 text-sm font-medium text-stone-800">
              Average Operational Emissions Reduction
            </div>
            <p className="mt-1 text-xs text-stone-500 leading-relaxed">
              Rigorous passive solar envelope simulations and mass-timber structural frameworks replacing high-carbon steel.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-stone-200/80 shadow-xs">
            <div className="text-3xl lg:text-4xl font-bold font-display text-stone-900 tabular-nums">
              14 Honors
            </div>
            <div className="mt-2 text-sm font-medium text-stone-800">
              RIBA & Swiss Architectural Distinctions
            </div>
            <p className="mt-1 text-xs text-stone-500 leading-relaxed">
              Recognized internationally for environmental performance, historic conservation, and spatial poise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
