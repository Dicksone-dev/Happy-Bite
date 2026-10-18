import React from 'react';

interface ArchitecturalGraphicProps {
  projectId: string;
  viewMode?: 'render' | 'blueprint';
  aspectRatio?: '16:9' | '4:3' | '1:1';
  className?: string;
}

export const ArchitecturalGraphic: React.FC<ArchitecturalGraphicProps> = ({
  projectId,
  viewMode = 'render',
  aspectRatio = '4:3',
  className = '',
}) => {
  const aspectClass =
    aspectRatio === '16:9' ? 'aspect-video' : aspectRatio === '1:1' ? 'aspect-square' : 'aspect-[4/3]';

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden bg-stone-900 select-none ${className}`}
    >
      {viewMode === 'blueprint' ? (
        <BlueprintView projectId={projectId} />
      ) : (
        <PerspectiveView projectId={projectId} />
      )}
    </div>
  );
};

// Blueprint technical orthographic drawing
const BlueprintView: React.FC<{ projectId: string }> = ({ projectId }) => {
  return (
    <div className="absolute inset-0 bg-[#0c1322] text-cyan-200/90 font-mono text-[10px] p-6 flex flex-col justify-between">
      {/* Blueprint Grid Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#smallGrid)" />
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0284c7" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Header technical annotation */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-800/60 pb-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-cyan-400">PLAN SEC. 04-A</span>
          <span className="text-cyan-600">·</span>
          <span>SCALE 1:100</span>
          <span className="text-cyan-600">·</span>
          <span>BIM MODEL REV 3.2</span>
        </div>
        <div className="text-cyan-400/80">DATUM: +14.850m ASL</div>
      </div>

      {/* Main Structural Vector Illustration */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-4">
        <svg viewBox="0 0 600 300" className="w-full h-full max-h-56 stroke-cyan-400 fill-none" strokeWidth="1.2">
          {/* Ground & topography plinth */}
          <path d="M 20 250 L 580 250" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 3" />
          <path d="M 40 260 L 560 260" stroke="#0369a1" strokeWidth="1" strokeDasharray="3 3" />

          {/* Project Specific Profiles */}
          {projectId === 'villa-kura' && (
            <g>
              {/* Foundation caissons */}
              <rect x="120" y="220" width="30" height="30" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="260" y="220" width="30" height="30" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Ground level stone core */}
              <rect x="100" y="140" width="220" height="80" stroke="#7dd3fc" strokeWidth="2" />
              {/* Cantilever mass timber box */}
              <rect x="160" y="80" width="300" height="70" stroke="#38bdf8" strokeWidth="2" />
              {/* Overhang roof plane */}
              <line x1="140" y1="75" x2="480" y2="75" stroke="#bae6fd" strokeWidth="3" />
              {/* Glazing vertical mullions */}
              <line x1="200" y1="80" x2="200" y2="150" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="260" y1="80" x2="260" y2="150" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="320" y1="80" x2="320" y2="150" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="380" y1="80" x2="380" y2="150" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="440" y1="80" x2="440" y2="150" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
              {/* Dimension lines */}
              <line x1="160" y1="50" x2="460" y2="50" stroke="#0ea5e9" strokeWidth="1" />
              <text x="310" y="44" fill="#38bdf8" textAnchor="middle" fontSize="10">24,000 mm CANTILEVER SPAN</text>
            </g>
          )}

          {projectId === 'glyptotek-atrium' && (
            <g>
              {/* Classical Travertine Plinth */}
              <rect x="80" y="210" width="440" height="40" stroke="#7dd3fc" strokeWidth="2" />
              {/* Perforated facade screen columns */}
              <rect x="110" y="90" width="380" height="120" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Skylight monitors */}
              <polygon points="120,90 150,50 180,90" stroke="#bae6fd" strokeWidth="1.5" />
              <polygon points="200,90 230,50 260,90" stroke="#bae6fd" strokeWidth="1.5" />
              <polygon points="280,90 310,50 340,90" stroke="#bae6fd" strokeWidth="1.5" />
              <polygon points="360,90 390,50 420,90" stroke="#bae6fd" strokeWidth="1.5" />
              <polygon points="440,90 470,50 500,90" stroke="#bae6fd" strokeWidth="1.5" />
              {/* Sunken amphitheater cut */}
              <path d="M 220 210 L 250 240 L 350 240 L 380 210" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="300" y="160" fill="#38bdf8" textAnchor="middle" fontSize="11">PERFORATED BRONZE ACOUSTIC ENVELOPE</text>
            </g>
          )}

          {projectId === 'cenote-atelier' && (
            <g>
              {/* Jungle platform and water court */}
              <rect x="90" y="190" width="420" height="60" stroke="#7dd3fc" strokeWidth="1.5" />
              <ellipse cx="300" cy="220" rx="90" ry="18" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Open timber post-and-beam columns */}
              <line x1="120" y1="110" x2="120" y2="190" stroke="#38bdf8" strokeWidth="2" />
              <line x1="200" y1="110" x2="200" y2="190" stroke="#38bdf8" strokeWidth="2" />
              <line x1="400" y1="110" x2="400" y2="190" stroke="#38bdf8" strokeWidth="2" />
              <line x1="480" y1="110" x2="480" y2="190" stroke="#38bdf8" strokeWidth="2" />
              {/* Louvered timber roof canopy */}
              <polygon points="90,110 510,110 490,95 110,95" stroke="#bae6fd" strokeWidth="2" />
              <text x="300" y="145" fill="#38bdf8" textAnchor="middle" fontSize="10">PASSIVE NATURAL BREEZEWAY CONVECTION</text>
            </g>
          )}

          {projectId !== 'villa-kura' && projectId !== 'glyptotek-atrium' && projectId !== 'cenote-atelier' && (
            <g>
              {/* Generic refined structural grid */}
              <rect x="100" y="100" width="400" height="150" stroke="#38bdf8" strokeWidth="2" />
              <line x1="100" y1="175" x2="500" y2="175" stroke="#7dd3fc" strokeWidth="1.5" />
              <line x1="200" y1="100" x2="200" y2="250" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="300" y1="100" x2="300" y2="250" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="400" y1="100" x2="400" y2="250" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="100" y1="90" x2="500" y2="90" stroke="#bae6fd" strokeWidth="2" />
              <text x="300" y="140" fill="#38bdf8" textAnchor="middle" fontSize="11">STRUCTURAL HYBRID ENVELOPE</text>
            </g>
          )}
        </svg>
      </div>

      {/* Blueprint Footer Specification */}
      <div className="relative z-10 flex items-center justify-between border-t border-cyan-800/60 pt-2 text-cyan-500">
        <div>COORDINATES: 59°54'N 010°45'E</div>
        <div>AETHEL ARCHITECTURE STUDIO</div>
      </div>
    </div>
  );
};

// High-fidelity architectural vector perspective view
const PerspectiveView: React.FC<{ projectId: string }> = ({ projectId }) => {
  // Select distinct atmospheric lighting, geometric forms, and materials for each project
  if (projectId === 'villa-kura') {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c232e] via-[#2d3748] to-[#12171f] flex items-center justify-center">
        {/* Sky / Fjord twilight atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-transparent to-black/60" />

        <svg viewBox="0 0 800 500" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="fjordWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0b0f17" />
            </linearGradient>
            <linearGradient id="concreteWall" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#78716c" />
              <stop offset="100%" stopColor="#44403c" />
            </linearGradient>
            <linearGradient id="timberCeiling" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
            <linearGradient id="warmInteriorGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Distant fjord mountain silhouette */}
          <polygon points="0,260 140,210 280,240 420,190 620,230 800,200 800,320 0,320" fill="#1e293b" opacity="0.6" />
          <polygon points="180,250 360,205 520,235 720,185 800,210 800,340 0,340" fill="#0f172a" opacity="0.8" />

          {/* Fjord Water Surface with Reflections */}
          <rect x="0" y="320" width="800" height="180" fill="url(#fjordWater)" />
          <ellipse cx="440" cy="380" rx="200" ry="25" fill="#f59e0b" opacity="0.15" filter="blur(14px)" />

          {/* Granitic Cliff Plinth */}
          <polygon points="60,290 280,270 320,380 40,410" fill="#292524" />
          <polygon points="280,270 460,285 430,420 320,380" fill="#1c1917" />

          {/* Cantilever Lower Stone Volume */}
          <polygon points="120,260 380,250 390,340 130,350" fill="url(#concreteWall)" />

          {/* Upper Cantilever Mass Timber Pavilion */}
          <polygon points="220,140 680,120 740,240 280,270" fill="#1c1917" />
          {/* Overhanging Warm Wood Ceiling plane */}
          <polygon points="220,140 680,120 670,165 210,185" fill="url(#timberCeiling)" />

          {/* Floor-to-ceiling panoramic glass facade */}
          <polygon points="250,180 670,160 660,265 240,280" fill="url(#warmInteriorGlow)" opacity="0.85" />

          {/* Interior minimal furniture and silhouettes */}
          <rect x="360" y="210" width="140" height="40" fill="#292524" opacity="0.9" rx="2" />
          <circle cx="480" cy="205" r="8" fill="#fef3c7" opacity="0.9" />

          {/* Glass mullions */}
          <line x1="330" y1="175" x2="320" y2="275" stroke="#1c1917" strokeWidth="4" />
          <line x1="420" y1="170" x2="410" y2="270" stroke="#1c1917" strokeWidth="4" />
          <line x1="510" y1="165" x2="500" y2="265" stroke="#1c1917" strokeWidth="4" />
          <line x1="600" y1="160" x2="590" y2="260" stroke="#1c1917" strokeWidth="4" />

          {/* Cantilever Deck & Subtle Guardrail */}
          <polygon points="180,275 720,250 760,270 220,295" fill="#292524" />
          <line x1="220" y1="260" x2="745" y2="235" stroke="#78716c" strokeWidth="2" opacity="0.8" />
        </svg>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30 pointer-events-none" />
      </div>
    );
  }

  if (projectId === 'glyptotek-atrium') {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1815] via-[#2c221b] to-[#120f0d] flex items-center justify-center">
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bronzeScreen" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="travertinePlinth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e7e5e4" />
              <stop offset="100%" stopColor="#a8a29e" />
            </linearGradient>
            <linearGradient id="atriumLightBeam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Sky glow */}
          <rect x="0" y="0" width="800" height="300" fill="#26211c" />

          {/* Travertine monolithic base */}
          <polygon points="80,280 720,280 770,440 30,440" fill="url(#travertinePlinth)" />

          {/* Sunken amphitheater steps */}
          <polygon points="260,330 540,330 580,410 220,410" fill="#78716c" />
          <polygon points="300,360 500,360 530,410 270,410" fill="#57534e" />

          {/* Central Classical Sculpture Silhouette */}
          <path d="M 400 330 Q 395 310 400 290 Q 408 275 400 260 Q 410 275 412 290 Q 415 310 400 330 Z" fill="#fafaf9" />

          {/* Perforated Bronze Columns & Louvers */}
          <g fill="url(#bronzeScreen)">
            <rect x="140" y="80" width="30" height="200" rx="1" />
            <rect x="220" y="80" width="30" height="200" rx="1" />
            <rect x="300" y="80" width="30" height="200" rx="1" />
            <rect x="380" y="80" width="30" height="200" rx="1" />
            <rect x="460" y="80" width="30" height="200" rx="1" />
            <rect x="540" y="80" width="30" height="200" rx="1" />
            <rect x="620" y="80" width="30" height="200" rx="1" />
          </g>

          {/* Bronze Roof Entablature */}
          <rect x="110" y="55" width="570" height="30" fill="#92400e" rx="2" />
          <rect x="90" y="45" width="610" height="15" fill="#b45309" rx="1" />

          {/* Atmospheric light rays falling down into atrium */}
          <polygon points="360,60 440,60 580,420 220,420" fill="url(#atriumLightBeam)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20 pointer-events-none" />
      </div>
    );
  }

  if (projectId === 'cenote-atelier') {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f231c] via-[#162f26] to-[#0a1813] flex items-center justify-center">
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="jungleWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#042f2e" />
            </linearGradient>
            <linearGradient id="stuccoWall" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d6d3d1" />
              <stop offset="100%" stopColor="#a8a29e" />
            </linearGradient>
          </defs>

          {/* Tropical Canopy backdrop */}
          <circle cx="120" cy="180" r="160" fill="#064e3b" opacity="0.7" />
          <circle cx="680" cy="160" r="180" fill="#047857" opacity="0.6" />
          <circle cx="400" cy="110" r="140" fill="#065f46" opacity="0.5" />

          {/* Cenote Natural Plunge Pool */}
          <ellipse cx="400" cy="380" rx="260" ry="70" fill="url(#jungleWater)" opacity="0.9" />

          {/* Minimalist Chukum Stucco Pavilion */}
          <polygon points="160,200 480,180 500,320 180,340" fill="url(#stuccoWall)" />
          {/* Sliced Breezeway opening */}
          <polygon points="240,225 410,210 420,315 250,325" fill="#0f172a" />
          {/* Reclaimed timber pergola beams */}
          <g stroke="#78350f" strokeWidth="6">
            <line x1="140" y1="175" x2="520" y2="155" />
            <line x1="140" y1="165" x2="520" y2="145" />
            <line x1="140" y1="155" x2="520" y2="135" />
          </g>

          {/* Ambient Warm Work Light from within breezeway */}
          <ellipse cx="330" cy="270" rx="60" ry="30" fill="#fef08a" opacity="0.35" filter="blur(10px)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20 pointer-events-none" />
      </div>
    );
  }

  // Default elegant minimalist architectural scene for other projects
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#18181b] via-[#27272a] to-[#09090b] flex items-center justify-center">
      <svg viewBox="0 0 800 500" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="warmAmberBeam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Subtle geometric planes */}
        <polygon points="100,160 520,100 680,220 260,280" fill="#3f3f46" />
        <polygon points="260,280 680,220 720,390 300,450" fill="#27272a" />
        <polygon points="100,160 260,280 300,450 140,330" fill="#18181b" />
        {/* Luminous aperture slice */}
        <polygon points="290,200 480,160 490,260 300,300" fill="url(#warmAmberBeam)" />
        <line x1="100" y1="160" x2="520" y2="100" stroke="#71717a" strokeWidth="1.5" />
        <line x1="520" y1="100" x2="680" y2="220" stroke="#a1a1aa" strokeWidth="1.5" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-stone-950/10 pointer-events-none" />
    </div>
  );
};
