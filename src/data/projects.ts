export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Cultural & Civic' | 'Workspaces' | 'Adaptive Reuse';
  location: string;
  footprint: string;
  year: number;
  highlightMetric: string;
  description: string;
  scope: string[];
  materials: string[];
  specs: {
    architecturalStyle: string;
    energyStandard: string;
    constructionDuration: string;
    clientType: string;
  };
  quote?: {
    text: string;
    author: string;
    title: string;
  };
  colorTheme: {
    bg: string;
    accent: string;
    border: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'villa-kura',
    title: 'Villa Kura',
    subtitle: 'Cantilevered mass timber & stone cliffside sanctuary',
    category: 'Residential',
    location: 'Hardanger Fjord, Norway',
    footprint: '520 m²',
    year: 2025,
    highlightMetric: '+140% Natural daylight harvest with net-zero thermal bridge leakage',
    description: 'Conceived as an organic continuation of the granite cliffs overlooking the Hardanger Fjord, Villa Kura balances monumental structural honesty with refined tactile calm. A double-cantilevered mass timber envelope projects over the water, sheltered by charred spruce screens that modulate low Nordic sun angles.',
    scope: ['Full Architectural Design', 'Interior Spatial Planning', 'Custom Joinery', 'Environmental Envelope Engineering'],
    materials: ['Charred Norwegian Larch', 'Honed Otteraen Granite', 'Triple-Glazed Solar Control Glass', 'Raw Cast Bronze Hardware'],
    specs: {
      architecturalStyle: 'Nordic Organic Brutalism',
      energyStandard: 'Passivhaus Certified Plus',
      constructionDuration: '22 Months',
      clientType: 'Private Commission',
    },
    quote: {
      text: 'Aethel translated our desire for wilderness connection into an enduring architectural masterpiece. In winter storms or summer midnight sun, the light inside is transcendent.',
      author: 'Eirik & Astrid Løvseth',
      title: 'Private Owners, Villa Kura',
    },
    colorTheme: {
      bg: 'from-stone-900 to-stone-950',
      accent: '#d97706',
      border: 'border-stone-800',
    },
  },
  {
    id: 'glyptotek-atrium',
    title: 'The Glyptotek Atrium',
    subtitle: 'Perforated bronze & travertine civic gallery pavilion',
    category: 'Cultural & Civic',
    location: 'Zurich, Switzerland',
    footprint: '2,800 m²',
    year: 2024,
    highlightMetric: '42% Reduction in Lifecycle Embodied Carbon vs. Swiss Benchmark',
    description: 'Commissioned by the Cantonal Arts Trust, the Glyptotek Atrium provides light-tempered exhibition galleries for classical sculpture and modern installations. Custom perforated bronze louvers calculate sun positions to shield fragile Roman marble without sacrificing ambient illumination.',
    scope: ['Competition 1st Prize', 'Civic Master Planning', 'Acoustic Engineering', 'Exhibition Architecture'],
    materials: ['Perforated Architectural Bronze', 'Roman Travertine Slabs', 'Acoustic Lime Plaster', 'Cast Terrazzo'],
    specs: {
      architecturalStyle: 'Contemporary Monolithic Classical',
      energyStandard: 'Minergie-P-ECO Standard',
      constructionDuration: '34 Months',
      clientType: 'Cantonal Cultural Directorate',
    },
    quote: {
      text: 'The spatial restraint and acoustic silence achieved in the Atrium creates one of the most sublime museum encounters in central Europe.',
      author: 'Dr. Helena von Berg',
      title: 'Curatorial Director, Zurich Arts Council',
    },
    colorTheme: {
      bg: 'from-amber-950/80 to-stone-900',
      accent: '#f59e0b',
      border: 'border-amber-900/30',
    },
  },
  {
    id: 'cenote-atelier',
    title: 'Cenote Atelier',
    subtitle: 'Biophilic open breezeway studio & botanical laboratory',
    category: 'Workspaces',
    location: 'Tulum, Mexico',
    footprint: '890 m²',
    year: 2025,
    highlightMetric: '100% Off-grid solar power with biological greywater root filtration',
    description: 'Designed as a creative retreat for industrial designers and researchers, Cenote Atelier is nestled within a jungle clearing. Permeable limestone breezeways, natural chukum stucco walls, and passive thermal mass eliminate the need for mechanical air conditioning.',
    scope: ['Holistic Architecture', 'Hydrological Water Ecology', 'Bespoke Studio Furniture', 'Landscape Integration'],
    materials: ['Mayan Chukum Stucco', 'Reclaimed Zapote Hardwood', 'Porous Coral Stone', 'Hand-Forged Black Iron'],
    specs: {
      architecturalStyle: 'Vernacular Tropical Modernism',
      energyStandard: 'Living Building Challenge Petal Certified',
      constructionDuration: '16 Months',
      clientType: 'Design Foundation Incubator',
    },
    quote: {
      text: 'Working in the atelier shifts your circadian rhythm. You breathe the jungle air while working in absolute ergonomic comfort.',
      author: 'Mateo Sandoval',
      title: 'Creative Principal, Materia Collective',
    },
    colorTheme: {
      bg: 'from-stone-900 to-emerald-950/50',
      accent: '#10b981',
      border: 'border-stone-800',
    },
  },
  {
    id: 'pellegrino-foundry',
    title: 'Pellegrino Foundry',
    subtitle: '19th-century bronze works transformed into creative headquarters',
    category: 'Adaptive Reuse',
    location: 'Milan, Italy',
    footprint: '1,650 m²',
    year: 2024,
    highlightMetric: '€4.2M Property Valuation Lift Post-Restoration',
    description: 'A delicate dialogue between industrial heritage and crisp contemporary insertions. The original riveted iron trusses and brick perimeter were seismically retrofitted, housing suspended acoustic glass pods and a central double-height communal forum.',
    scope: ['Heritage Conservation', 'Seismic Retrofit', 'Workplace Strategy', 'Lighting Design'],
    materials: ['Patinated Riveted Iron', 'Restored Terracotta Brickwork', 'Fluted Cast Glass', 'Industrial End-Grain Oak'],
    specs: {
      architecturalStyle: 'Industrial Heritage Transformation',
      energyStandard: 'LEED Gold Existing Buildings',
      constructionDuration: '18 Months',
      clientType: 'Global Luxury Publishing Group',
    },
    quote: {
      text: 'Aethel honored every historic scar in the brickwork while providing us with cutting-edge acoustics and collaborative environments.',
      author: 'Gianluca Rossi',
      title: 'Chief Operating Officer, Editrice Moderna',
    },
    colorTheme: {
      bg: 'from-stone-900 to-orange-950/40',
      accent: '#ea580c',
      border: 'border-stone-800',
    },
  },
  {
    id: 'kyoto-tea-pavilion',
    title: 'Kyoto Hillside Retreat',
    subtitle: 'Minimalist cedar retreat with zero-fastener traditional joinery',
    category: 'Residential',
    location: 'Kyoto, Japan',
    footprint: '310 m²',
    year: 2025,
    highlightMetric: 'Zero-screw joinery engineered to withstand Magnitude 8.2 seismic events',
    description: 'Resting on stone plinths amidst ancient bamboo groves, this private retreat is an exercise in structural reduction. Every joint is locked with traditional Japanese kigumi woodworking, framed by sliding washi shoji screens and deep overhang engawa verandas.',
    scope: ['Conceptual Architecture', 'Master Carpenter Collaboration', 'Traditional Tea Room Design', 'Dry Rock Garden Master Plan'],
    materials: ['Scented Hinoki Cypress', 'Split Slate Roofing', 'Handmade Echizen Washi', 'Basalt Boulder Plinths'],
    specs: {
      architecturalStyle: 'Neo-Sukiya Traditionalism',
      energyStandard: 'CASBEE S-Rank (Highest Japanese Rating)',
      constructionDuration: '24 Months',
      clientType: 'Private Family Collection',
    },
    colorTheme: {
      bg: 'from-stone-950 to-stone-900',
      accent: '#d97706',
      border: 'border-stone-800',
    },
  },
  {
    id: 'st-jude-archive',
    title: 'St. Jude Civic Library & Vault',
    subtitle: 'Subterranean acoustic archive and triple-height public atrium',
    category: 'Cultural & Civic',
    location: 'London, United Kingdom',
    footprint: '3,400 m²',
    year: 2023,
    highlightMetric: 'RIBA National Award Winner · BREEAM Outstanding 94.6%',
    description: 'An urban intervention combining subterranean archival climate vaults with a luminous public reading hall. Low-carbon GGBS concrete walls absorb sound while clerestory monitors draw cool northern daylight deep into the central book stacks.',
    scope: ['Full Architectural Services', 'Structural Optimization', 'Environmental Modeling', 'Public Realm Landscaping'],
    materials: ['Low-Carbon Slag Concrete', 'Polished Anodised Brass', 'Fumed European Oak', 'Acoustic Wool Felt'],
    specs: {
      architecturalStyle: 'Urban Tectonic Civic',
      energyStandard: 'BREEAM Outstanding (94.6%)',
      constructionDuration: '30 Months',
      clientType: 'Borough Civic Trust',
    },
    quote: {
      text: 'A profound contribution to London public architecture, proving that monumental civic dignity and carbon minimalism can coexist seamlessly.',
      author: 'Marcus Thornton, OBE',
      title: 'Trustee, Architectural Heritage Foundation',
    },
    colorTheme: {
      bg: 'from-slate-950 to-stone-900',
      accent: '#3b82f6',
      border: 'border-slate-800',
    },
  },
];

export interface ServiceItem {
  number: string;
  title: string;
  lead: string;
  deliverables: string[];
  timeline: string;
  governance: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Architectural Design & Master Planning',
    lead: 'Comprehensive architectural commissions from schematic site exploration to certified construction documentation and on-site contract administration.',
    deliverables: [
      'Site solar and micro-climate wind computational fluid dynamics',
      'Full 3D Building Information Modeling (BIM LOD 400)',
      'Statutory planning permission and heritage authority filings',
      'Construction specification packages and contractor tender management',
    ],
    timeline: '6 to 14 Months (Design & Permitting)',
    governance: 'Lead Architect & Principal Review at each stage gate',
  },
  {
    number: '02',
    title: 'Interior Architecture & Bespoke Joinery',
    lead: 'Tailored interior spatial design focusing on acoustic tactility, natural light choreography, and bespoke furniture crafted by master artisans.',
    deliverables: [
      'Spatial layout optimization and partition engineering',
      'Custom millwork, cabinetry, and ironmongery detail drawings',
      'Lighting choreography plans and circadian lux calculations',
      'Curated physical materials, stone slabs, and textile boards',
    ],
    timeline: '4 to 8 Months',
    governance: 'Full mock-up approvals prior to workshop fabrication',
  },
  {
    number: '03',
    title: 'Adaptive Reuse & Historic Transformation',
    lead: 'Breathing high-performance contemporary life into industrial landmarks, listed heritage villas, and neglected urban infrastructures.',
    deliverables: [
      'Comprehensive non-destructive structural fabric survey',
      'Heritage conservation justification reports for municipal boards',
      'Thermal and moisture envelope upgrades without altering historic facades',
      'Seismic and acoustic decoupled interior floor plates',
    ],
    timeline: '8 to 18 Months',
    governance: 'Rigorous preservation compliance audits',
  },
  {
    number: '04',
    title: 'Environmental Envelope & Carbon Advisory',
    lead: 'Independent performance modeling delivering certified Passivhaus, Minergie-P, or Net-Zero operational performance across building lifecycles.',
    deliverables: [
      'Embodied carbon calculations (LCA EN 15978 standard)',
      'Thermal bridge zero-tolerance structural simulations',
      'Off-grid energy, geothermal loop, and rainwater harvesting blueprints',
      'Post-occupancy environmental sensor calibration',
    ],
    timeline: 'Concurrent with architectural lifecycle',
    governance: 'Third-party green building verification',
  },
];

export interface StudioMaterial {
  name: string;
  origin: string;
  properties: string;
  tactileDesc: string;
  sustainabilityGrade: string;
}

export const STUDIO_MATERIALS: StudioMaterial[] = [
  {
    name: 'Charred Nordic Larch',
    origin: 'Trøndelag, Norway',
    properties: 'Fire, fungal, and insect resistant via ancient Shou Sugi Ban surface carbonization; requires zero chemical sealants.',
    tactileDesc: 'Silvery-black matte relief that weathers gently with maritime winds.',
    sustainabilityGrade: 'FSC Certified · Carbon Negative',
  },
  {
    name: 'Honed Roman Travertine',
    origin: 'Tivoli, Italy',
    properties: 'Thermal mass with high solar capacitance; naturally porous for acoustic dampening when unsealed.',
    tactileDesc: 'Warm creamy alabaster with subtle horizontal sediment striations.',
    sustainabilityGrade: 'Quarried with 100% water recirculation',
  },
  {
    name: 'Architectural Perforated Bronze',
    origin: 'Essen, Germany',
    properties: '92% Copper alloy with self-healing natural brown-gold oxide patina; 100% infinitely recyclable.',
    tactileDesc: 'Satin micro-brushed finish that develops rich organic warmth over decades.',
    sustainabilityGrade: '78% Recycled Content Input',
  },
  {
    name: 'Low-Carbon GGBS Concrete',
    origin: 'St. Gallen, Switzerland',
    properties: 'Blended with ground granulated blast-furnace slag, cutting Portland cement emissions by up to 65%.',
    tactileDesc: 'Soft velvet-smooth board-marked timber grain impressions.',
    sustainabilityGrade: 'A+ Green Guide Rating',
  },
];

export interface CaseStudyStat {
  metric: string;
  label: string;
  context: string;
}

export const CASE_STUDY_METRICS: CaseStudyStat[] = [
  {
    metric: '42%',
    label: 'Operational Carbon Reduction',
    context: 'Average lifecycle energy savings compared to standard building codes across all 2020–2025 completions.',
  },
  {
    metric: '€18.6M',
    label: 'Client Asset Value Appreciation',
    context: 'Independently assessed valuation lift across 6 commercial adaptive reuse transformations.',
  },
  {
    metric: '98.4%',
    label: 'On-Schedule Commission Delivery',
    context: 'Rigorous cost-control and stage-gate governance across 48 completed international projects.',
  },
];
