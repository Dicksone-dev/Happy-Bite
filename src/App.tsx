/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorksGallery } from './components/WorksGallery';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ServicesSection } from './components/ServicesSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiryTypology, setInquiryTypology] = useState<string>('');
  const [inquiryNotes, setInquiryNotes] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireFromHeader = () => {
    scrollToSection('contact');
  };

  const handleInquireProject = (projectTitle: string) => {
    setInquiryTypology('Private Villa / Residence');
    setInquiryNotes(`Inquiring regarding architectural typologies and spatial language similar to: ${projectTitle}`);
    scrollToSection('contact');
  };

  const handleInquireService = (serviceTitle: string) => {
    setInquiryNotes(`Primary discipline requested: ${serviceTitle}`);
    scrollToSection('contact');
  };

  const handleApplyEstimator = (params: {
    typology: string;
    area: number;
    tier: string;
    standard: string;
    costRange: string;
    timeline: string;
  }) => {
    setInquiryTypology(params.typology);
    setInquiryNotes(
      `Feasibility Model Parameters:\n- Target Footprint: ${params.area} m²\n- Material Tier: ${params.tier}\n- Environmental Target: ${params.standard}\n- Estimated Investment: ${params.costRange}\n- Target Timeline: ${params.timeline}`
    );
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-stone-800 selection:text-stone-100">
      <Header onInquireClick={handleInquireFromHeader} />

      <main className="flex-1">
        <Hero
          onExploreClick={() => scrollToSection('works')}
          onEstimatorClick={() => scrollToSection('estimator')}
        />

        <WorksGallery onInquireProject={handleInquireProject} />

        <ProjectEstimator onApplyToInquiry={handleApplyEstimator} />

        <ServicesSection onInquireService={handleInquireService} />

        <PhilosophySection />

        <TestimonialsSection />

        <ContactSection
          initialTypology={inquiryTypology}
          initialNotes={inquiryNotes}
        />
      </main>

      <Footer />
    </div>
  );
}
