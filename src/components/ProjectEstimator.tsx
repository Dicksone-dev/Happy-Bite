import React, { useState } from 'react';
import { Sliders, Calculator, CheckCircle2, ArrowDown, FileText } from 'lucide-react';

interface ProjectEstimatorProps {
  onApplyToInquiry: (params: {
    typology: string;
    area: number;
    tier: string;
    standard: string;
    costRange: string;
    timeline: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyToInquiry }) => {
  const [typology, setTypology] = useState<'residential' | 'cultural' | 'workspace' | 'adaptive'>('residential');
  const [area, setArea] = useState<number>(450);
  const [tier, setTier] = useState<'contemporary' | 'artisanal' | 'heritage'>('artisanal');
  const [standard, setStandard] = useState<'standard' | 'passivhaus' | 'circular'>('passivhaus');
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Dynamic rates per m²
  const baseRates = {
    residential: 2900,
    cultural: 3400,
    workspace: 2600,
    adaptive: 3100,
  };

  const tierMultipliers = {
    contemporary: 1.0,
    artisanal: 1.25,
    heritage: 1.45,
  };

  const standardMultipliers = {
    standard: 1.0,
    passivhaus: 1.15,
    circular: 1.28,
  };

  const unitRate = Math.round(
    baseRates[typology] * tierMultipliers[tier] * standardMultipliers[standard]
  );

  const totalMin = Math.round((unitRate * area * 0.95) / 10000) * 10000;
  const totalMax = Math.round((unitRate * area * 1.12) / 10000) * 10000;

  // Timeline computation
  const designMonths = area > 1000 ? 12 : area > 500 ? 8 : 6;
  const buildMonths = Math.round((area / 35) * (tier === 'heritage' ? 1.3 : 1.1));

  // Carbon savings
  const carbonSaving = standard === 'circular' ? 52 : standard === 'passivhaus' ? 42 : 18;

  const typologyLabels = {
    residential: 'Private Villa / Residence',
    cultural: 'Cultural / Museum Pavilion',
    workspace: 'Boutique Creative Workspace',
    adaptive: 'Adaptive Reuse Landmark',
  };

  const tierLabels = {
    contemporary: 'Refined Contemporary (Engineered Timber & Clean Concrete)',
    artisanal: 'Handcrafted Artisanal (Mass Timber, Bespoke Joinery & Honed Stone)',
    heritage: 'Sovereign Heritage (Museum-Grade Restoration & Custom Bronze)',
  };

  const standardLabels = {
    standard: 'Sovereign Building Code (Exceeds Local Regulations by 20%)',
    passivhaus: 'Passivhaus / Minergie-P Certified (Net-Zero Envelope)',
    circular: 'Circular Cradle-to-Cradle (Carbon Negative Natural Materials)',
  };

  const costRangeFormatted = `€${(totalMin / 1000000).toFixed(2)}M – €${(totalMax / 1000000).toFixed(2)}M`;
  const timelineFormatted = `${designMonths} mos design · ${buildMonths} mos construction`;

  const handleApply = () => {
    onApplyToInquiry({
      typology: typologyLabels[typology],
      area,
      tier: tierLabels[tier],
      standard: standardLabels[standard],
      costRange: costRangeFormatted,
      timeline: timelineFormatted,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopySummary = () => {
    const text = `Aethel Feasibility Model:
Typology: ${typologyLabels[typology]}
Footprint: ${area} m²
Material Tier: ${tierLabels[tier]}
Energy Standard: ${standardLabels[standard]}
Estimated Cost: ${costRangeFormatted}
Timeline: ${timelineFormatted}
Carbon Offset: -${carbonSaving}% operational carbon`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            Interactive Planning Tool
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-900 tracking-tight">
            Spatial Feasibility & Capital Modeler
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Configure your commission parameters to calculate structural cost ranges, statutory
            permitting schedules, and lifecycle carbon metrics based on our empirical European benchmark data.
          </p>
        </div>

        {/* 2-Column Split: Controls vs Real-Time Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 p-6 lg:p-8 bg-stone-50 rounded-xl border border-stone-200">
            {/* 1. Typology Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                01. Structural Typology
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { key: 'residential', label: 'Private Residence' },
                  { key: 'cultural', label: 'Cultural Pavilion' },
                  { key: 'workspace', label: 'Atelier / Workspace' },
                  { key: 'adaptive', label: 'Adaptive Reuse' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setTypology(item.key as any)}
                    className={`px-3 py-2.5 text-xs font-medium rounded-md border text-left transition-colors cursor-pointer ${
                      typology === item.key
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Footprint Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  02. Target Floor Footprint
                </label>
                <span className="font-mono text-sm font-bold text-stone-900 tabular-nums">
                  {area} m² / {Math.round(area * 10.7639)} sq ft
                </span>
              </div>
              <input
                type="range"
                min={150}
                max={1800}
                step={25}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
              />
              <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                <span>150 m²</span>
                <span>800 m²</span>
                <span>1,800 m²</span>
              </div>
            </div>

            {/* 3. Specification Tier */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                03. Material & Tectonic Tier
              </label>
              <div className="space-y-2">
                {[
                  {
                    key: 'contemporary',
                    title: 'Refined Contemporary',
                    desc: 'Precision architectural mass timber, board-marked concrete, high-efficiency aluminum glazing.',
                  },
                  {
                    key: 'artisanal',
                    title: 'Handcrafted Artisanal',
                    desc: 'Hand-split slate, charred Norwegian larch, bespoke master joinery, custom patinated brass.',
                  },
                  {
                    key: 'heritage',
                    title: 'Sovereign Heritage / Monumental',
                    desc: 'Museum-grade acoustic stonework, restored iron trusses, hand-cast bronze and Roman travertine.',
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setTier(item.key as any)}
                    className={`w-full p-3 text-left rounded-md border transition-colors cursor-pointer ${
                      tier === item.key
                        ? 'bg-white border-stone-900 ring-1 ring-stone-900 shadow-xs'
                        : 'bg-stone-100/60 border-stone-200 hover:bg-white'
                    }`}
                  >
                    <div className="text-xs font-semibold text-stone-900">{item.title}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Environmental Standard */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                04. Ecological Standard
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { key: 'standard', label: 'Standard Code (+20%)' },
                  { key: 'passivhaus', label: 'Passivhaus / Minergie' },
                  { key: 'circular', label: 'Circular Net-Zero' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setStandard(item.key as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                      standard === item.key
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Feasibility Dashboard Column */}
          <div className="lg:col-span-5 p-6 lg:p-8 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold tracking-wider uppercase text-stone-300">
                  Model Output Summary
                </span>
              </div>
              <span className="font-mono text-[10px] text-stone-500">REV. 2026.4</span>
            </div>

            {/* Estimated Capital Investment */}
            <div>
              <div className="text-xs text-stone-400">Projected Construction Investment</div>
              <div className="text-3xl sm:text-4xl font-bold font-display text-white mt-1 tabular-nums">
                {costRangeFormatted}
              </div>
              <div className="mt-1 text-xs text-stone-400 font-mono">
                Est. unit benchmark: ~€{unitRate.toLocaleString()}/m²
              </div>
            </div>

            {/* Key Schedule Metrics */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-stone-800">
              <div>
                <div className="text-xs text-stone-400">Design & Statutory</div>
                <div className="text-xl font-bold font-display text-amber-400 mt-0.5 tabular-nums">
                  {designMonths} Months
                </div>
                <div className="text-[10px] text-stone-500">Planning & tender stage</div>
              </div>
              <div>
                <div className="text-xs text-stone-400">On-Site Construction</div>
                <div className="text-xl font-bold font-display text-amber-400 mt-0.5 tabular-nums">
                  {buildMonths} Months
                </div>
                <div className="text-[10px] text-stone-500">To client handover</div>
              </div>
            </div>

            {/* Carbon & Efficiency Indicator */}
            <div className="p-4 bg-stone-800/80 rounded-lg border border-stone-700/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-300">Operational Carbon vs Baseline</span>
                <span className="font-bold font-mono text-emerald-400 tabular-nums">
                  -{carbonSaving}%
                </span>
              </div>
              <div className="w-full bg-stone-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${carbonSaving * 1.8}%` }}
                />
              </div>
              <div className="text-[11px] text-stone-400">
                Calculated under EN 15978 whole-life structural carbon standards.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleApply}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors cursor-pointer shadow-xs active:translate-y-px"
              >
                <span>Transfer Parameters to Commission Inquiry</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleCopySummary}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-md border border-stone-700 transition-colors cursor-pointer"
              >
                {copiedSummary ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Feasibility Brief Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    <span>Copy Feasibility Brief</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
