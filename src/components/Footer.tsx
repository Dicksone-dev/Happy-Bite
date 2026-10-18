import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-stone-800">
          {/* Col 1: Wordmark & Statement */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="/"
              className="text-2xl font-bold font-display text-white tracking-tight"
            >
              Aethel
            </a>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Architectural atelier and spatial research practice. Designing enduring residences,
              civic pavilions, and adaptive heritage transformations across Europe and worldwide.
            </p>
            <div className="text-xs text-stone-500">
              RIBA Chartered Practice · SIA Schweizerischer Ingenieur- und Architektenverein
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#works" className="hover:text-white transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Integrated Disciplines
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Feasibility & Capital Modeler
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Materiality & Methodology
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-white transition-colors">
                  Client Impact Proof
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Commission Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Atelier Locations */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Atelier Locations
            </div>
            <div className="space-y-3 text-xs text-stone-400">
              <div>
                <strong className="text-stone-200">Zürich Headquarters:</strong> Seefeldstrasse 114, 8008 Zürich
              </div>
              <div>
                <strong className="text-stone-200">London Practice:</strong> 28 Clerkenwell Close, London EC1R 0AU
              </div>
              <div>
                <strong className="text-stone-200">Copenhagen Studio:</strong> Bredgade 34, 1260 København K
              </div>
              <div className="pt-2 text-stone-300 font-mono text-[11px]">
                commissions@aethel-studio.ch
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Aethel Architecture & Spatial Design GmbH. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Terms of Engagement</span>
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Imprint</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
