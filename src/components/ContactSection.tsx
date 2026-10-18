import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialTypology?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialTypology = '',
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    typology: initialTypology || 'Private Villa / Residence',
    location: '',
    budget: '€1.5M – €3M',
    consultationMode: 'Zurich Atelier',
    targetTimeline: 'Within 6–12 Months',
    message: initialNotes || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Update when prop changes
  React.useEffect(() => {
    if (initialTypology) {
      setFormData((prev) => ({ ...prev, typology: initialTypology }));
    }
  }, [initialTypology]);

  React.useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n${initialNotes}` : initialNotes,
      }));
    }
  }, [initialNotes]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.location.trim()) {
      errs.location = 'Target project site location is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = `AET-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(randomCode);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      name: '',
      email: '',
      organization: '',
      typology: 'Private Villa / Residence',
      location: '',
      budget: '€1.5M – €3M',
      consultationMode: 'Zurich Atelier',
      targetTimeline: 'Within 6–12 Months',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
                Inquire & Retain
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-900 tracking-tight">
                Commission the Atelier
              </h2>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                We accept a restricted cohort of private and institutional commissions per calendar year
                to ensure continuous principal oversight through all design and construction stages.
              </p>
            </div>

            {/* Studio Offices */}
            <div className="space-y-6 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-stone-900">Zurich Atelier (Headquarters)</div>
                  <div className="text-stone-600">Seefeldstrasse 114, 8008 Zürich, Switzerland</div>
                  <div className="text-stone-400 font-mono text-xs mt-0.5">+41 44 288 91 00</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-stone-900">London Practice</div>
                  <div className="text-stone-600">28 Clerkenwell Close, London EC1R 0AU, UK</div>
                  <div className="text-stone-400 font-mono text-xs mt-0.5">+44 20 7490 8211</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-stone-900">Direct Inquiries</div>
                  <div className="text-stone-600 font-mono">commissions@aethel-studio.ch</div>
                </div>
              </div>
            </div>

            {/* Process note */}
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 leading-relaxed">
              <strong>Initial Feasibility Protocol:</strong> Upon review of your site coordinates and project
              brief, a Partner will schedule a 45-minute confidential spatial and zoning consultation.
            </div>
          </div>

          {/* Right Column: Interactive Form or Receipt */}
          <div className="lg:col-span-7">
            {submittedRef ? (
              /* Submission Success Receipt */
              <div className="p-8 lg:p-10 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700 font-mono">
                  Commission Brief Received
                </div>

                <h3 className="text-2xl font-bold font-display text-stone-900 mt-2">
                  Reference: {submittedRef}
                </h3>

                <p className="mt-3 text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-stone-900">{formData.name}</span>.
                  Your brief for <span className="font-semibold text-stone-900">{formData.typology}</span> in{' '}
                  <span className="font-semibold text-stone-900">{formData.location}</span> has been logged into
                  our client register.
                </p>

                <div className="my-6 p-4 bg-white rounded-lg border border-stone-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Contact:</span>
                    <span className="font-medium text-stone-900">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Target Budget:</span>
                    <span className="font-medium text-stone-900">{formData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Consultation Venue:</span>
                    <span className="font-medium text-stone-900">{formData.consultationMode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Schedule Response:</span>
                    <span className="font-semibold text-amber-600">Within 24 Business Hours</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-8 lg:p-10 bg-stone-50 rounded-2xl border border-stone-200 shadow-xs space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Thorne"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-hidden transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-stone-300 focus:border-stone-900'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. m.thorne@estate.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-hidden transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-stone-300 focus:border-stone-900'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization / Family Office */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Entity / Family Office (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Thorne Family Trust"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-hidden focus:border-stone-900 transition-colors"
                    />
                  </div>

                  {/* Project Site Location */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Target Site Location *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Lucerne, Switzerland"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-hidden transition-colors ${
                        errors.location
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-stone-300 focus:border-stone-900'
                      }`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-xs text-red-600">{errors.location}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Typology */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Typology
                    </label>
                    <select
                      value={formData.typology}
                      onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-stone-300 rounded-md focus:outline-hidden focus:border-stone-900"
                    >
                      <option>Private Villa / Residence</option>
                      <option>Cultural / Museum Pavilion</option>
                      <option>Boutique Creative Workspace</option>
                      <option>Adaptive Reuse Landmark</option>
                      <option>Interior Joinery & Spatial Commission</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Estimated Capital
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-stone-300 rounded-md focus:outline-hidden focus:border-stone-900"
                    >
                      <option>€750K – €1.5M</option>
                      <option>€1.5M – €3M</option>
                      <option>€3M – €7M</option>
                      <option>€7M+</option>
                      <option>Subject to Feasibility Modeling</option>
                    </select>
                  </div>

                  {/* Consultation Mode */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Consultation Venue
                    </label>
                    <select
                      value={formData.consultationMode}
                      onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-stone-300 rounded-md focus:outline-hidden focus:border-stone-900"
                    >
                      <option>Zurich Atelier</option>
                      <option>London Practice</option>
                      <option>Virtual Global Briefing</option>
                      <option>Direct Site Meeting</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Project Notes & Spatial Vision
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the site terrain, existing structures, desired spatial program, or target delivery year..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-hidden focus:border-stone-900 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-2">
                  <div className="text-[11px] text-stone-500">
                    All communications governed by strict confidentiality protocols.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 disabled:opacity-50 rounded-md transition-colors cursor-pointer shadow-xs active:translate-y-px whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Validating Brief...</span>
                    ) : (
                      <>
                        <span>Submit Commission Brief</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
