import React, { useState } from 'react';
import { STUDIO_MATERIALS, StudioMaterial } from '../data/projects';
import { Sparkles, Leaf, Eye } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<StudioMaterial>(STUDIO_MATERIALS[0]);

  return (
    <section id="philosophy" className="py-20 lg:py-28 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Split: Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
              Studio Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-900 tracking-tight leading-tight">
              Spaces engineered to outlive the century.
            </h2>
            <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              We reject transient architectural fashion. Architecture is the physical framing of human
              memory, silence, and natural elements. By combining regional mass timber engineering with
              durable mineral envelopes, we craft buildings that age with grace and dignity.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200/80">
              <div className="w-8 h-8 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-800 mb-4">
                <span className="font-mono text-xs font-bold">01</span>
              </div>
              <h3 className="text-base font-bold font-display text-stone-900 mb-2">
                Monolithic Honesty
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                No decorative veneers hiding false walls. Load-bearing materials are exposed in their
                raw tactile dignity: mass timber, natural stone, and board-marked concrete.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200/80">
              <div className="w-8 h-8 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-800 mb-4">
                <span className="font-mono text-xs font-bold">02</span>
              </div>
              <h3 className="text-base font-bold font-display text-stone-900 mb-2">
                Light Choreography
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Sun angles and sky gradients dictate room orientation. Morning light fills quiet
                breakfast alcoves; soft diffused northern light illuminates working spaces.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200/80">
              <div className="w-8 h-8 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-800 mb-4">
                <span className="font-mono text-xs font-bold">03</span>
              </div>
              <h3 className="text-base font-bold font-display text-stone-900 mb-2">
                Ecological Permanence
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Passive envelope airtightness, high thermal inertia, and 100% circular deconstructability
                reduce building operational and embodied carbon over 100-year lifespans.
              </p>
            </div>
          </div>
        </div>

        {/* Materiality Archive Showcase */}
        <div className="p-8 lg:p-10 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-1">
                Materiality Archive
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-display text-white">
                Sovereign Provenance & Tactile Integrity
              </h3>
            </div>
            <p className="text-xs text-stone-400 max-w-md">
              Select an architectural material below to review harvest provenance, aging behavior, and environmental certification.
            </p>
          </div>

          {/* Interactive Material Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {STUDIO_MATERIALS.map((mat) => {
              const isSelected = selectedMaterial.name === mat.name;
              return (
                <button
                  key={mat.name}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-3 text-left rounded-lg border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-stone-800 border-amber-500 text-white shadow-xs'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800/40'
                  }`}
                >
                  <div className="text-xs font-bold">{mat.name}</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">{mat.origin}</div>
                </button>
              );
            })}
          </div>

          {/* Material Detail Inspection Box */}
          <div className="p-6 bg-stone-950 rounded-xl border border-stone-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-mono">
                Harvest Provenance
              </div>
              <div className="text-sm font-semibold text-white">
                {selectedMaterial.origin}
              </div>
              <div className="mt-3 text-xs text-amber-400/90 font-mono">
                {selectedMaterial.sustainabilityGrade}
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-mono">
                Structural & Thermal Properties
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {selectedMaterial.properties}
              </p>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-mono">
                Tactile & Weathering Behavior
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {selectedMaterial.tactileDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
