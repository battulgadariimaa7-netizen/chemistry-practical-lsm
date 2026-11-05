import React from 'react';
import { ArtFrame, ArtProps, colors } from './primitives';

interface BottleStyle {
  formula: string;
  glass: string;
  contents: 'liquid' | 'solid';
  color: string;
}

const clearGlass = 'rgba(148, 163, 184, 0.12)';
const clearLiquid = 'rgba(186, 230, 253, 0.3)';

// Appearance as stored in a school lab: amber glass for light-sensitive AgNO3, real crystal, pellet and indicator colours.
const bottles: Record<string, BottleStyle> = {
  hydrochloric_acid: { formula: 'HCl', glass: clearGlass, contents: 'liquid', color: clearLiquid },
  nitric_acid: { formula: 'HNO₃', glass: clearGlass, contents: 'liquid', color: clearLiquid },
  sulfuric_acid: { formula: 'H₂SO₄', glass: clearGlass, contents: 'liquid', color: clearLiquid },
  sodium_hydroxide: { formula: 'NaOH', glass: clearGlass, contents: 'solid', color: '#f8fafc' },
  ammonia: { formula: 'NH₃', glass: clearGlass, contents: 'liquid', color: clearLiquid },
  calcium_hydroxide: { formula: 'Ca(OH)₂', glass: clearGlass, contents: 'solid', color: '#f8fafc' },
  copper_sulfate: { formula: 'CuSO₄·5H₂O', glass: clearGlass, contents: 'solid', color: '#2563eb' },
  barium_chloride: { formula: 'BaCl₂·2H₂O', glass: clearGlass, contents: 'solid', color: '#f8fafc' },
  barium_nitrate: { formula: 'Ba(NO₃)₂', glass: clearGlass, contents: 'solid', color: '#f8fafc' },
  potassium_manganate: { formula: 'KMnO₄', glass: clearGlass, contents: 'solid', color: '#581c87' },
  silver_nitrate: { formula: 'AgNO₃', glass: 'rgba(146, 64, 14, 0.75)', contents: 'solid', color: '#f8fafc' },
  ethanol: { formula: 'C₂H₅OH', glass: clearGlass, contents: 'liquid', color: 'rgba(186, 230, 253, 0.22)' },
  starch: { formula: '(C₆H₁₀O₅)ₙ', glass: clearGlass, contents: 'solid', color: '#f8fafc' },
  methyl_orange: { formula: 'C₁₄H₁₄N₃NaO₃S', glass: clearGlass, contents: 'solid', color: '#ea580c' },
  bromophenol_blue: { formula: 'C₁₉H₁₀Br₄O₅S', glass: clearGlass, contents: 'solid', color: '#c08497' },
  thymol_blue: { formula: 'C₂₇H₃₀O₅S', glass: clearGlass, contents: 'solid', color: '#6b7f4f' },
  thymolphthalein: { formula: 'C₂₈H₃₀O₄', glass: clearGlass, contents: 'solid', color: '#f8fafc' },
};

const particles: [number, number][] = [];
for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 7; col++) {
    particles.push([86 + col * 11.5 + (row % 2) * 5, 164 - row * 9]);
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
  return (
    <Frame label={label} className={className}>
      <rect x="76" y="118" width="88" height="54" fill={style.contents === 'liquid' ? style.color : 'none'} />
      {style.contents === 'solid' &&
        particles.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5.5" fill={style.color} stroke="rgba(15, 23, 42, 0.45)" strokeWidth="1" />)}
      <path
        d="M104 44 V54 C104 62 74 66 74 84 V164 Q74 172 82 172 H158 Q166 172 166 164 V84 C166 66 136 62 136 54 V44 Z"
        fill={style.glass}
        stroke={light ? '#64748b' : colors.stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="98" y="20" width="44" height="24" rx="3" fill="#334155" stroke={colors.muted} strokeWidth="1.5" />
      <rect x="82" y="84" width="76" height="30" rx="2" fill="#f8fafc" stroke={light ? '#cbd5e1' : 'none'} />
      <text x="120" y="104" textAnchor="middle" fill="#0f172a" fontSize={style.formula.length > 10 ? 9 : 11} fontWeight="700">
        {style.formula}
      </text>
    </Frame>
  );
};
