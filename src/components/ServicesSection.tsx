import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/projects';
import { ChevronDown, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 lg:py-28 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
            Practice Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-900 tracking-tight">
            Integrated Spatial Capabilities
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            From initial site solar topology simulations to turnkey craft procurement, we deliver
            integrated architectural execution without fragmented subcontract handoffs.
          </p>
        </div>

        {/* Numbered Editorial Service Accordion / Cards */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-stone-900 shadow-sm'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                {/* Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full p-6 lg:p-8 flex items-center justify-between text-left cursor-pointer focus:outline-hidden"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-6 sm:gap-8">
                    <span className="font-mono text-sm lg:text-base font-semibold text-stone-400 tabular-nums">
                      {service.number}.
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-stone-900">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-stone-500 line-clamp-1">
                        {service.lead}
                      </p>
                    </div>
                  </div>

                  <div className="ml-4 shrink-0 p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-stone-900' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Detailed Content */}
                {isExpanded && (
                  <div className="px-6 pb-8 lg:px-8 border-t border-stone-100 pt-6">
                    <p className="text-stone-700 text-sm leading-relaxed mb-6">
                      {service.lead}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-50 p-6 rounded-lg border border-stone-200/80 mb-6">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                          Verified Scope Deliverables
                        </div>
                        <ul className="space-y-2">
                          {service.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-700">
                              <Check className="w-3.5 h-3.5 text-stone-800 shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-between space-y-4">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                            Typical Execution Phase
                          </div>
                          <div className="text-xs font-mono font-medium text-stone-800">
                            {service.timeline}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                            Governance Protocol
                          </div>
                          <div className="text-xs text-stone-600">
                            {service.governance}
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => onInquireService(service.title)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer shadow-2xs"
                          >
                            <span>Commission {service.title.split('&')[0]}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
