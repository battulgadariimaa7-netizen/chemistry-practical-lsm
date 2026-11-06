import React, { useId } from 'react';
import { ArtFrame, ArtProps } from './primitives';

interface BottleStyle {
  formula: string;
  contents: 'liquid' | 'solid';
  color: string;
}

const clearLiquid = '#e0f2fe';

// Every reagent sits in an amber glass bottle with a screw cap, as in a school store room.
// The contents keep their own colour, seen darkened through the brown glass.
const bottles: Record<string, BottleStyle> = {
  hydrochloric_acid: { formula: 'HCl', contents: 'liquid', color: clearLiquid },
  nitric_acid: { formula: 'HNO₃', contents: 'liquid', color: clearLiquid },
  sulfuric_acid: { formula: 'H₂SO₄', contents: 'liquid', color: clearLiquid },
  sodium_hydroxide: { formula: 'NaOH', contents: 'solid', color: '#f8fafc' },
  ammonia: { formula: 'NH₃', contents: 'liquid', color: clearLiquid },
  calcium_hydroxide: { formula: 'Ca(OH)₂', contents: 'solid', color: '#f8fafc' },
  copper_sulfate: { formula: 'CuSO₄·5H₂O', contents: 'solid', color: '#2563eb' },
  barium_chloride: { formula: 'BaCl₂·2H₂O', contents: 'solid', color: '#f8fafc' },
  barium_nitrate: { formula: 'Ba(NO₃)₂', contents: 'solid', color: '#f8fafc' },
  potassium_manganate: { formula: 'KMnO₄', contents: 'solid', color: '#581c87' },
  silver_nitrate: { formula: 'AgNO₃', contents: 'solid', color: '#f8fafc' },
  ethanol: { formula: 'C₂H₅OH', contents: 'liquid', color: clearLiquid },
  starch: { formula: '(C₆H₁₀O₅)ₙ', contents: 'solid', color: '#f8fafc' },
  methyl_orange: { formula: 'C₁₄H₁₄N₃NaO₃S', contents: 'solid', color: '#ea580c' },
  bromophenol_blue: { formula: 'C₁₉H₁₀Br₄O₅S', contents: 'solid', color: '#c08497' },
  thymol_blue: { formula: 'C₂₇H₃₀O₅S', contents: 'solid', color: '#6b7f4f' },
  thymolphthalein: { formula: 'C₂₈H₃₀O₄', contents: 'solid', color: '#f8fafc' },
};

// The outline of the bottle: neck, rounded shoulders and a flat base.
const BOTTLE = 'M106 44 V52 C106 61 72 62 72 84 V160 Q72 170 82 170 H158 Q168 170 168 160 V84 C168 62 134 61 134 52 V44 Z';

// Granules for powders and crystals, settled in a heap.
const granules: [number, number, number][] = [];
for (let row = 0; row < 6; row++) {
  const count = 9 - Math.floor(row / 2);
  for (let col = 0; col < count; col++) {
    const x = 80 + (88 / count) * col + (row % 2) * 4 + ((col * 7 + row * 3) % 5);
    granules.push([x, 165 - row * 6.5, 3.2 + ((col + row) % 3) * 0.7]);
  }
}

const LightFrame: React.FC<ArtProps & { children: React.ReactNode }> = ({ label, className = '', children }) => (
  <svg
    viewBox="0 0 240 180"
    className={`block w-full h-full bg-slate-50 ${className}`}
    {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
  >
    {children}
  </svg>
);

export const ReagentBottle: React.FC<ArtProps & { id: string; light?: boolean }> = ({ id, label, className, light }) => {
  const style = bottles[id] ?? bottles.ethanol;
  const Frame = light ? LightFrame : ArtFrame;
  // Several bottles share a page, so each drawing needs its own gradient names.
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const ref = (name: string) => `url(#${name}-${uid})`;
  // Smaller type for longer formulas, so each one fits inside the 74-wide label.
  const length = style.formula.length;
  const fontSize = length <= 6 ? 14 : length <= 9 ? 12 : length <= 11 ? 10.5 : 9;

  return (
    <Frame label={label} className={className}>
      <defs>
        <linearGradient id={`amber-${uid}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#2b1204" stopOpacity="0.95" />
          <stop offset="0.16" stopColor="#6b300a" stopOpacity="0.88" />
          <stop offset="0.42" stopColor="#a4520f" stopOpacity="0.74" />
          <stop offset="0.7" stopColor="#7c3a0c" stopOpacity="0.84" />
          <stop offset="1" stopColor="#2b1204" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`depth-${uid}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#000000" stopOpacity="0" />
          <stop offset="1" stopColor="#1c0a02" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`shine-${uid}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.25" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.8" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`cap-${uid}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="0.35" stopColor="#475569" />
          <stop offset="0.6" stopColor="#1e293b" />
          <stop offset="1" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id={`paper-${uid}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#e7e1d2" />
          <stop offset="0.18" stopColor="#fbf9f3" />
          <stop offset="0.8" stopColor="#fbf9f3" />
          <stop offset="1" stopColor="#e2dccb" />
        </linearGradient>
        <clipPath id={`inside-${uid}`}>
          <path d={BOTTLE} />
        </clipPath>
        <filter id={`soft-${uid}`} x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      {/* Bench and the bottle's shadow */}
      <rect x="0" y="166" width="240" height="14" fill={light ? '#e8edf3' : 'rgba(148, 163, 184, 0.12)'} />
      <ellipse cx="122" cy="170" rx="54" ry="4.5" fill="#0f172a" opacity="0.22" filter={ref('soft')} />

      {/* Contents, seen through the glass */}
      <g clipPath={ref('inside')}>
        {style.contents === 'liquid' ? (
          <>
            {/* Filled to below the label, so the liquid line shows. */}
            <rect x="70" y="136" width="100" height="36" fill={style.color} />
            <rect x="70" y="136" width="100" height="36" fill="#1c0a02" opacity="0.28" />
            <ellipse cx="120" cy="136" rx="48" ry="2.4" fill="#fde7c7" opacity="0.55" />
          </>
        ) : (
          <>
            <path d="M70 172 V150 Q96 128 120 130 Q146 128 170 150 V172 Z" fill={style.color} />
            {granules.map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} fill={style.color} stroke="rgba(15, 23, 42, 0.35)" strokeWidth="0.8" />
            ))}
          </>
        )}
      </g>

      {/* Amber glass */}
      <path d={BOTTLE} fill={ref('amber')} />
      <path d={BOTTLE} fill={ref('depth')} />
      <path d={BOTTLE} fill="none" stroke="#2b1204" strokeOpacity="0.85" strokeWidth="1.6" strokeLinejoin="round" />
      {/* Light on the glass */}
      <rect x="79" y="88" width="6" height="74" rx="3" fill={ref('shine')} />
      <rect x="159" y="92" width="2.5" height="64" rx="1.25" fill="#ffffff" opacity="0.22" />
      <path d="M108 54 C108 62 84 66 80 80" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="109" y="44" width="3" height="10" rx="1.5" fill="#ffffff" opacity="0.35" />

      {/* Screw cap with grip ridges */}
      <rect x="103" y="40" width="34" height="5" rx="1.5" fill="#3b1a06" opacity="0.9" />
      <rect x="100" y="17" width="40" height="25" rx="3.5" fill={ref('cap')} />
      {Array.from({ length: 9 }, (_, i) => (
        <line key={i} x1={104 + i * 4} y1="20" x2={104 + i * 4} y2="39" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.2" />
      ))}
      <rect x="100" y="17" width="40" height="3" rx="1.5" fill="#ffffff" opacity="0.12" />

      {/* Paper label */}
      <rect x="83" y="91" width="74" height="36" rx="2" fill={ref('paper')} stroke="rgba(41, 37, 36, 0.18)" strokeWidth="0.8" />
      <rect x="83" y="91" width="74" height="4" fill="#b45309" opacity="0.85" />
      <text x="120" y={113 + fontSize * 0.3} textAnchor="middle" fill="#1c1917" fontSize={fontSize} fontWeight="700">
        {style.formula}
      </text>
    </Frame>
  );
};
