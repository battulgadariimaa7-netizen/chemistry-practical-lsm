import React from 'react';
import { ArtFrame, ArtProps, BenchLine, Clipboard, colors, glass, labelText, line } from './primitives';

const water = '#7dd3fc';

const Eye: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <path d={`M${x - 34} ${y} Q${x} ${y - 28} ${x + 34} ${y} Q${x} ${y + 26} ${x - 34} ${y} Z`} fill="#f8fafc" stroke={colors.stroke} strokeWidth="2" />
    <circle cx={x} cy={y} r="11" fill="#0e7490" />
    <circle cx={x} cy={y} r="5" fill="#020617" />
    <circle cx={x + 3} cy={y - 3} r="2" fill="#f8fafc" />
  </g>
);

const EyeSplash = () => (
  <g>
    <Eye x={120} y={46} />
    <path d="M72 148 C72 112 84 92 100 70" fill="none" stroke={water} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M168 148 C168 112 156 92 140 70" fill="none" stroke={water} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M60 148 H84 L80 158 H64 Z M156 148 H180 L176 158 H160 Z" fill="#22c55e" stroke="#4ade80" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M44 158 H196 L184 174 H56 Z" fill="#334155" stroke={colors.muted} strokeWidth="2" strokeLinejoin="round" />
  </g>
);

const Tap: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <path d={`M${x - 46} ${y} H${x - 14} Q${x} ${y} ${x} ${y + 14} V${y + 22}`} fill="none" stroke={colors.muted} strokeWidth="9" strokeLinecap="round" />
    <rect x={x - 32} y={y - 13} width="12" height="9" rx="2" fill={colors.accent} />
  </g>
);

/** Forearm and hand as one simple silhouette reaching in from the left. */
const Forearm: React.FC<{ y: number; fill?: string }> = ({ y, fill = '#e2b48c' }) => (
  <path
    d={`M6 ${y - 12} H122 C132 ${y - 16} 148 ${y - 18} 166 ${y - 14} C176 ${y - 12} 176 ${y - 4} 166 ${y - 4} H148 C156 ${y} 158 ${y + 10} 146 ${y + 13} H120 C110 ${y + 14} 104 ${y + 13} 96 ${y + 13} H6 Z`}
    fill={fill}
    stroke="#92400e"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);

const SkinContact = () => (
  <g>
    <Tap x={118} y={24} />
    <path d="M110 50 V96 M118 50 V96 M126 50 V96" stroke={water} strokeWidth="3" strokeLinecap="round" />
    <Forearm y={112} />
    <ellipse cx="118" cy="104" rx="16" ry="5" fill="#dc2626" opacity="0.55" />
    <path d="M106 128 V150 M118 128 V156 M130 128 V150" stroke={water} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    <path d="M70 160 H170 L160 174 H80 Z" fill="#334155" stroke={colors.muted} strokeWidth="2" strokeLinejoin="round" />
  </g>
);

const ChemicalSpill = () => (
  <g>
    <BenchLine y={160} />
    <path d="M28 158 C48 146 86 146 122 150 C150 150 196 148 206 156 C208 160 200 160 196 160 H34 C26 160 26 158 28 158 Z" fill="#a3e635" opacity="0.7" />
    <path d="M18 158 Q18 136 44 136 H196 Q222 136 222 158" fill="none" stroke="#fbbf24" strokeWidth="5" strokeDasharray="1 9" strokeLinecap="round" />
    <g transform="rotate(68 74 92)">
      <rect x="50" y="62" width="48" height="66" rx="6" {...glass} />
      <rect x="62" y="48" width="24" height="15" {...glass} />
      <rect x="56" y="82" width="36" height="24" fill="#f8fafc" />
    </g>
    <path d="M150 104 L184 44 L218 104 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
    <path d="M184 64 V86" stroke="#020617" strokeWidth="5" strokeLinecap="round" />
    <circle cx="184" cy="95" r="3" fill="#020617" />
  </g>
);

const FlameShape: React.FC<{ x: number; y: number; s: number }> = ({ x, y, s }) => (
  <g>
    <path d={`M${x} ${y} C${x - s} ${y - s * 0.3} ${x - s * 0.9} ${y - s * 1.2} ${x - s * 0.25} ${y - s * 1.9} C${x - s * 0.2} ${y - s * 1.2} ${x + s * 0.05} ${y - s * 1.2} ${x + s * 0.2} ${y - s * 2.2} C${x + s * 0.9} ${y - s * 1.5} ${x + s} ${y - s * 0.5} ${x} ${y} Z`} fill="#f97316" />
    <path d={`M${x} ${y} C${x - s * 0.5} ${y - s * 0.2} ${x - s * 0.4} ${y - s * 0.8} ${x + s * 0.05} ${y - s * 1.2} C${x + s * 0.45} ${y - s * 0.7} ${x + s * 0.5} ${y - s * 0.2} ${x} ${y} Z`} fill="#fde047" />
  </g>
);

const LabFire = () => (
  <g>
    <BenchLine y={160} />
    <FlameShape x={72} y={158} s={30} />
    <FlameShape x={112} y={158} s={18} />
    <rect x="164" y="62" width="34" height="98" rx="9" fill="#dc2626" stroke="#fca5a5" strokeWidth="1.5" />
    <rect x="172" y="42" width="18" height="20" rx="2" fill="#475569" stroke={colors.muted} />
    <path d="M172 48 H146 L136 62" fill="none" stroke="#020617" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M136 62 L120 80 M136 62 L114 66 M136 62 L126 88" stroke={colors.muted} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 6" />
    <rect x="168" y="92" width="26" height="30" fill="#f8fafc" />
    <text x="181" y="111" textAnchor="middle" {...labelText} fill="#020617" fontWeight="700">CO₂</text>
  </g>
);

const BrokenGlass = () => (
  <g>
    <BenchLine y={160} />
    <path d="M38 158 V96 L52 110 L60 88 L74 112 L92 96 V158 Z" {...glass} />
    <path d="M106 158 L120 138 L132 158 Z M140 158 L150 146 L160 158 Z M96 158 L104 150 L110 158 Z" {...glass} fill="rgba(186, 230, 253, 0.28)" />
    <path d="M160 96 L222 96 L212 158 L170 158 Z" fill="#334155" stroke={colors.muted} strokeWidth="2" strokeLinejoin="round" />
    <path d="M168 84 L214 84 L222 96 H160 Z" fill="#475569" stroke={colors.muted} strokeWidth="2" strokeLinejoin="round" />
    <path d="M178 118 L192 106 L204 118 L194 124 L198 142 L184 132 Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M60 60 L104 30" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
    <path d="M56 56 L40 72 L50 84 L66 66 Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" strokeLinejoin="round" />
  </g>
);

const Vapor: React.FC<{ d: string; opacity?: number }> = ({ d, opacity = 0.8 }) => (
  <path d={d} fill="none" stroke="#a3e635" strokeWidth="5" strokeLinecap="round" opacity={opacity} />
);

const ToxicGas = () => (
  <g>
    <rect x="22" y="18" width="130" height="152" rx="4" fill="#1e293b" stroke={colors.stroke} strokeWidth="2" />
    <rect x="52" y="4" width="70" height="14" fill="#334155" stroke={colors.muted} />
    <rect x="34" y="30" width="106" height="84" fill="rgba(186, 230, 253, 0.12)" stroke={colors.stroke} strokeWidth="1.5" />
    <rect x="34" y="114" width="106" height="4" fill={colors.accent} />
    <rect x="34" y="130" width="106" height="30" fill="#334155" />
    <Vapor d="M70 110 C60 94 82 84 70 66 C62 54 80 46 74 34" />
    <Vapor d="M104 110 C94 94 116 84 104 66 C96 54 114 46 108 34" />
    <path d="M87 12 V-4" stroke={colors.accent} strokeWidth="3" />
    <rect x="178" y="48" width="44" height="122" rx="2" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
    <circle cx="214" cy="110" r="3" fill="#4ade80" />
    <path d="M156 118 H174 M166 108 L176 118 L166 128" {...line} stroke="#4ade80" strokeWidth={4} />
  </g>
);

const Rubric = () => (
  <g>
    <Clipboard x={65} y={22}>
      <text x="120" y="56" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="700">AO3</text>
      {['MMO', 'PDO', 'ACE'].map((skill, i) => (
        <g key={skill}>
          <text x="82" y={84 + i * 24} fill="#334155" fontSize="9" fontWeight="700">{skill}</text>
          <rect x="108" y={77 + i * 24} width="50" height="8" rx="4" fill="#e2e8f0" />
          <rect x="108" y={77 + i * 24} width={[46, 34, 40][i]} height="8" rx="4" fill="#0891b2" />
        </g>
      ))}
    </Clipboard>
  </g>
);

const Meniscus = () => {
  const ticks = [];
  for (let i = 0; i <= 10; i++) {
    const y = 24 + i * 13;
    ticks.push(<line key={i} x1="158" y1={y} x2={i % 5 === 0 ? 132 : 142} y2={y} stroke={colors.stroke} strokeWidth="1.5" />);
  }
  return (
    <g>
      <path d="M116 61 Q137 78 158 61 V180 H116 Z" fill="rgba(125, 211, 252, 0.45)" />
      <path d="M116 0 V180 M158 0 V180" {...line} />
      {ticks}
      <text x="170" y="28" {...labelText} fill="#e2e8f0" fontSize={11}>24</text>
      <text x="170" y="93" {...labelText} fill="#e2e8f0" fontSize={11}>24.5</text>
      <text x="170" y="158" {...labelText} fill="#e2e8f0" fontSize={11}>25</text>
      {/* 24.35 sits 35% of the way from the 24 mark (y=24) to the 25 mark (y=154) */}
      <line x1="52" y1="69.5" x2="186" y2="69.5" stroke={colors.accent} strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M16 69.5 Q34 48.5 52 69.5 Q34 90.5 16 69.5 Z" fill="#f8fafc" />
      <circle cx="36" cy="69.5" r="7" fill="#0e7490" />
      <circle cx="37" cy="69.5" r="3" fill="#020617" />
      <text x="192" y="72.5" {...labelText} fill={colors.accent} fontWeight="700">24.35</text>
    </g>
  );
};

const scenes: Record<string, React.FC> = {
  eye_splash: EyeSplash,
  skin_contact: SkinContact,
  chemical_spill: ChemicalSpill,
  lab_fire: LabFire,
  broken_glass: BrokenGlass,
  toxic_gas: ToxicGas,
  rubric: Rubric,
  meniscus: Meniscus,
};

export const SafetyArt: React.FC<ArtProps & { id: string }> = ({ id, label, className }) => {
  const Scene = scenes[id];
  return (
    <ArtFrame label={label} className={className}>
      {Scene && <Scene />}
    </ArtFrame>
  );
};
