import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onInquireClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onInquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        isScrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-stone-200 shadow-xs'
          : 'bg-stone-50 border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-12 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-stone-900 font-display whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          Aethel
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#works"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Selected Works
          </a>
          <a
            href="#services"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Disciplines
          </a>
          <a
            href="#estimator"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Feasibility Calculator
          </a>
          <a
            href="#philosophy"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Materiality
          </a>
          <a
            href="#proof"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Impact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onInquireClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:translate-y-px"
          >
            <span>Commission Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile navigation toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-6 py-4 space-y-3">
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-900 py-1"
          >
            Selected Works
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-900 py-1"
          >
            Disciplines
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-900 py-1"
          >
            Feasibility Calculator
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-900 py-1"
          >
            Materiality
          </a>
          <a
            href="#proof"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-900 py-1"
          >
            Impact
          </a>
        </div>
      )}
    </header>
  );
};
