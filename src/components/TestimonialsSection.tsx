import React from 'react';
import { CASE_STUDY_METRICS } from '../data/projects';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Aethel brought rigorous engineering discipline to what could have been an impossibly complex coastal cliffside project. Villa Kura completed within 3% of our approved feasibility budget and continues to harvest 140% of its heating needs passively.',
      author: 'Henrik Vang-Hansen',
      role: 'Founding Partner, Nordic Maritime Investments',
      projectContext: 'Private Villa Commission, Hardanger Fjord',
      year: 'Delivered 2025',
    },
    {
      quote:
        'In transforming our 19th-century foundry into our global creative headquarters, Aethel navigated strict Milanese heritage conservators while delivering an acoustically flawless, LEED Gold-certified work forum. Our workforce engagement rose 38% post-handover.',
      author: 'Alessandra Morandi',
      role: 'Chief Operations & Real Estate Officer',
      projectContext: 'Pellegrino Foundry Adaptive Reuse, Milan',
      year: 'Delivered 2024',
    },
    {
      quote:
        'The acoustic balance and light ingress achieved in the Zurich Glyptotek Atrium created a benchmark for Swiss cultural architecture. The civic reaction has exceeded all cantonal projections.',
      author: 'Dr. Beatrix Meier-Kaufmann',
      role: 'President of the Cultural Architecture Commission',
      projectContext: 'The Glyptotek Civic Atrium, Zurich',
      year: 'Delivered 2024',
    },
  ];

  return (
    <section id="proof" className="py-20 lg:py-28 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            Independent Evidence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-900 tracking-tight">
            Proof of Architectural Impact
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Every building commission is measured post-occupancy against hard financial yield,
            thermal efficiency standards, and occupant physiological well-being.
          </p>
        </div>

        {/* Quantified Impact Benchmark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CASE_STUDY_METRICS.map((stat, i) => (
            <div
              key={i}
              className="p-6 lg:p-8 bg-white rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl lg:text-5xl font-bold font-display text-stone-900 tabular-nums">
                  {stat.metric}
                </div>
                <div className="mt-2 text-sm font-semibold text-stone-800">
                  {stat.label}
                </div>
              </div>
              <p className="mt-4 text-xs text-stone-500 leading-relaxed pt-4 border-t border-stone-100">
                {stat.context}
              </p>
            </div>
          ))}
        </div>

        {/* Attributable Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 lg:p-8 bg-white rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-stone-300 mb-4" />
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100">
                <div className="text-sm font-bold text-stone-900 font-display">
                  {item.author}
                </div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">
                  {item.role}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-2">
                  <span>{item.projectContext}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
