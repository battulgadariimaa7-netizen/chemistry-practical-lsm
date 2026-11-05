import React from 'react';
import { ArtFrame, ArtProps, BenchLine, ConicalFlask, colors, line } from './primitives';

// Rule 6 is the one golden rule still drawn: no photo showing the technique correctly could be found.
// Never taste: waft vapour towards the nose at arm's length.

const SKIN = '#e2b48c';
const HAIR = '#334155';

const CheckBadge: React.FC<{ x: number; y: number; r?: number }> = ({ x, y, r = 13 }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="#16a34a" stroke="#bbf7d0" strokeWidth="1.5" />
    <path d={`M${x - r * 0.45} ${y} L${x - r * 0.1} ${y + r * 0.38} L${x + r * 0.5} ${y - r * 0.4}`} fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

const Prohibit: React.FC<{ x: number; y: number; r: number; width?: number }> = ({ x, y, r, width = 7 }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="none" stroke="#dc2626" strokeWidth={width} />
    <line x1={x - r * 0.7} y1={y - r * 0.7} x2={x + r * 0.7} y2={y + r * 0.7} stroke="#dc2626" strokeWidth={width} />
  </g>
);

/** Side-on head facing left. */
const ProfileHead: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <rect x={x - 8} y={y + 18} width="20" height="24" fill={SKIN} />
    <circle cx={x} cy={y} r="24" fill={SKIN} />
    <path d={`M${x - 22} ${y - 4} L${x - 33} ${y + 8} L${x - 21} ${y + 10} Z`} fill={SKIN} />
    <path d={`M${x - 20} ${y - 12} C${x - 18} ${y - 34} ${x + 26} ${y - 32} ${x + 25} ${y + 2} C${x + 20} ${y + 16} ${x + 10} ${y + 10} ${x + 8} ${y - 2} C${x + 2} ${y - 10} ${x - 10} ${y - 12} ${x - 20} ${y - 12} Z`} fill={HAIR} />
    <path d={`M${x - 24} ${y + 17} H${x - 14}`} stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
  </g>
);

/** Open hand, fingers up, wrist at the bottom. Scale and rotate through `transform`. */
const Hand: React.FC<{ transform: string }> = ({ transform }) => (
  <g transform={transform}>
    <g stroke={SKIN} strokeWidth="11" strokeLinecap="round">
      <line x1="-15" y1="-34" x2="-17" y2="-62" />
      <line x1="-3" y1="-36" x2="-4" y2="-72" />
      <line x1="9" y1="-36" x2="10" y2="-70" />
      <line x1="21" y1="-32" x2="23" y2="-58" />
      <line x1="-24" y1="-4" x2="-38" y2="-26" />
    </g>
    <path d="M-22 -40 H28 V6 Q26 20 18 24 H-14 Q-22 20 -24 6 Z" fill={SKIN} />
  </g>
);

export const WaftingArt: React.FC<ArtProps> = ({ label, className }) => (
  <ArtFrame label={label} className={className}>
    <g>
      <BenchLine />
      <ConicalFlask x={54} y={170} width={62} height={76} level={0.42} />
      <path d="M54 88 C70 74 88 86 104 74 C122 62 138 72 156 64" {...line} stroke="#94a3b8" strokeDasharray="4 5" />
      <path d="M60 98 C78 88 94 98 112 88 C128 78 142 84 158 76" {...line} stroke="#94a3b8" strokeDasharray="4 5" />
      <path d="M150 54 L158 64 L146 68" {...line} stroke="#94a3b8" />
      <ProfileHead x={196} y={66} />
      <Hand transform="translate(112 128) rotate(62) scale(0.62)" />
      <path d="M92 150 Q116 164 146 146 M100 164 Q122 172 142 160" {...line} stroke={colors.accent} strokeWidth={2} />
      {/* Tongue with a prohibition sign: never taste */}
      <g>
        <path d="M14 26 Q30 34 46 26" fill="none" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
        <path d="M21 30 H39 V40 Q39 50 30 50 Q21 50 21 40 Z" fill="#f472b6" />
        <path d="M30 32 V44" stroke="#be185d" strokeWidth="1.5" />
        <Prohibit x={30} y={35} r={23} width={5} />
      </g>
      <CheckBadge x={218} y={126} />
    </g>
  </ArtFrame>
);
