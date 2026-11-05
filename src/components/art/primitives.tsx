import React from 'react';

// Shared drawing parts for the lab illustrations. Every scene uses a 240x180 canvas (4:3, matching the site photos).

// The first five can be changed for a whole page with the .art-light class in index.css.
export const colors = {
  background: 'var(--art-background, #0f172a)',
  grid: 'var(--art-grid, #1e293b)',
  stroke: 'var(--art-stroke, #cbd5e1)',
  muted: 'var(--art-muted, #94a3b8)',
  accent: 'var(--art-accent, #22d3ee)',
  water: 'rgba(125, 211, 252, 0.28)',
  clear: 'rgba(186, 230, 253, 0.16)',
};

export const glass = {
  fill: 'rgba(148, 163, 184, 0.1)',
  stroke: colors.stroke,
  strokeWidth: 2,
  strokeLinejoin: 'round',
  strokeLinecap: 'round',
} as const;

export const line = {
  fill: 'none',
  stroke: colors.stroke,
  strokeWidth: 2,
  strokeLinejoin: 'round',
  strokeLinecap: 'round',
} as const;

export const steel = { fill: '#475569', stroke: colors.muted, strokeWidth: 1.5, strokeLinejoin: 'round' } as const;

export const labelText = { fill: colors.muted, fontSize: 9 } as const;

const gridLines = 'M0 30H240M0 60H240M0 90H240M0 120H240M0 150H240M40 0V180M80 0V180M120 0V180M160 0V180M200 0V180';

export interface ArtProps {
  /** Spoken description. Leave empty when the visible text beside the picture already says the same. */
  label?: string;
  className?: string;
}

export const ArtFrame: React.FC<ArtProps & { children: React.ReactNode }> = ({ label, className = '', children }) => (
  <svg
    viewBox="0 0 240 180"
    className={`block w-full h-full bg-[var(--art-background,#0f172a)] ${className}`}
    {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
  >
    <rect width="240" height="180" fill={colors.background} />
    <path d={gridLines} stroke={colors.grid} strokeWidth="1" fill="none" />
    {children}
  </svg>
);

export const BenchLine: React.FC<{ y?: number }> = ({ y = 170 }) => (
  <line x1="10" y1={y} x2="230" y2={y} stroke={colors.muted} strokeWidth="2" strokeLinecap="round" />
);

export const Flame: React.FC<{ x: number; y: number; size?: number }> = ({ x, y, size = 14 }) => (
  <g>
    <path
      d={`M${x} ${y} C${x - size * 0.6} ${y - size * 0.5} ${x - size * 0.35} ${y - size * 1.2} ${x} ${y - size * 2} C${x + size * 0.35} ${y - size * 1.2} ${x + size * 0.6} ${y - size * 0.5} ${x} ${y} Z`}
      fill="#38bdf8"
      opacity="0.8"
    />
    <path
      d={`M${x} ${y} C${x - size * 0.28} ${y - size * 0.3} ${x - size * 0.16} ${y - size * 0.7} ${x} ${y - size * 1.1} C${x + size * 0.16} ${y - size * 0.7} ${x + size * 0.28} ${y - size * 0.3} ${x} ${y} Z`}
      fill="#e0f2fe"
    />
  </g>
);

/** Bunsen burner standing with its base on y, gas hose leaving to the left and a blue flame on top. */
export const Burner: React.FC<{ x: number; y: number; flame?: boolean }> = ({ x, y, flame = true }) => (
  <g>
    <path d={`M${x - 14} ${y - 5} C${x - 40} ${y - 5} ${x - 44} ${y + 2} ${x - 70} ${y}`} fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
    <rect x={x - 18} y={y - 6} width="36" height="6" rx="2" {...steel} />
    <rect x={x - 4} y={y - 40} width="8" height="34" {...steel} />
    <rect x={x - 6} y={y - 18} width="12" height="7" rx="1" fill="#334155" stroke={colors.muted} strokeWidth="1.5" />
    {flame && <Flame x={x} y={y - 41} />}
  </g>
);

/** Retort stand: base on y, rod at x reaching up to top. */
export const Stand: React.FC<{ x: number; y: number; top: number; baseWidth?: number }> = ({ x, y, top, baseWidth = 76 }) => (
  <g>
    <rect x={x - 12} y={y - 6} width={baseWidth} height="6" rx="1.5" {...steel} />
    <rect x={x - 2} y={top} width="4" height={y - top - 6} {...steel} />
  </g>
);

/** Vertical burette with clamp arm from the stand rod. Drips into whatever sits below the jet. */
export const Burette: React.FC<{
  x: number;
  rodX: number;
  top: number;
  bottom: number;
  level: number;
  fill?: string;
  drop?: boolean;
}> = ({ x, rodX, top, bottom, level, fill = colors.water, drop = true }) => {
  const tapY = bottom - 18;
  const ticks = [];
  for (let y = top + 8; y < tapY - 6; y += 8) {
    ticks.push(<line key={y} x1={x + 5} y1={y} x2={x + (y % 40 === 0 ? 1 : 3)} y2={y} stroke={colors.stroke} strokeWidth="1" />);
  }
  return (
    <g>
      <rect x={Math.min(rodX, x)} y={top + 30} width={Math.abs(x - rodX)} height="4" {...steel} />
      <rect x={x + (rodX < x ? -9 : 5)} y={top + 26} width="4" height="12" {...steel} />
      <rect x={x - 5} y={level} width="10" height={tapY - level} fill={fill} />
      <path d={`M${x - 5} ${top} V${tapY} H${x + 5} V${top}`} {...line} />
      {ticks}
      <rect x={x - 9} y={tapY} width="18" height="6" rx="2" fill="#334155" stroke={colors.muted} strokeWidth="1.5" />
      <rect x={x + 9} y={tapY + 1} width="8" height="4" rx="1" fill={colors.accent} />
      <path d={`M${x - 3} ${tapY + 6} L${x - 1} ${bottom} H${x + 1} L${x + 3} ${tapY + 6}`} {...line} />
      {drop && <path d={`M${x} ${bottom + 4} c-2 3 -2 6 0 6 c2 0 2 -3 0 -6 Z`} fill={fill === colors.water ? '#7dd3fc' : fill} />}
    </g>
  );
};

/** Conical flask with its base centred on (x, y). `level` is the filled share of the cone height. */
export const ConicalFlask: React.FC<{
  x: number;
  y: number;
  width?: number;
  height?: number;
  fill?: string;
  level?: number;
  stopper?: boolean;
}> = ({ x, y, width = 70, height = 84, fill = colors.water, level = 0.42, stopper = false }) => {
  const half = width / 2;
  const neckHalf = width * 0.15;
  const neckTop = y - height;
  const coneTop = neckTop + height * 0.28;
  const coneHeight = y - coneTop;
  const liquidY = y - coneHeight * level;
  const liquidHalf = half - (half - neckHalf) * level;
  return (
    <g>
      <path d={`M${x - liquidHalf} ${liquidY} L${x - half} ${y - 3} Q${x - half} ${y} ${x - half + 3} ${y} H${x + half - 3} Q${x + half} ${y} ${x + half} ${y - 3} L${x + liquidHalf} ${liquidY} Z`} fill={fill} />
      <path d={`M${x - neckHalf} ${neckTop} V${coneTop} L${x - half} ${y - 3} Q${x - half} ${y} ${x - half + 3} ${y} H${x + half - 3} Q${x + half} ${y} ${x + half} ${y - 3} L${x + neckHalf} ${coneTop} V${neckTop}`} fill="rgba(148, 163, 184, 0.08)" stroke={colors.stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <line x1={x - neckHalf - 2} y1={neckTop} x2={x + neckHalf + 2} y2={neckTop} stroke={colors.stroke} strokeWidth="2" strokeLinecap="round" />
      {stopper && <rect x={x - neckHalf - 1} y={neckTop - 7} width={neckHalf * 2 + 2} height="11" rx="1.5" fill="#334155" stroke={colors.muted} strokeWidth="1.5" />}
    </g>
  );
};

/** Beaker with its base centred on (x, y). `level` is the filled share of the height. */
export const Beaker: React.FC<{
  x: number;
  y: number;
  width?: number;
  height?: number;
  fill?: string;
  level?: number;
}> = ({ x, y, width = 70, height = 70, fill = colors.water, level = 0.6 }) => {
  const left = x - width / 2;
  const right = x + width / 2;
  const top = y - height;
  const liquidTop = y - height * level;
  return (
    <g>
      <rect x={left} y={liquidTop} width={width} height={y - liquidTop} rx="3" fill={fill} />
      <path d={`M${left - 4} ${top} L${left} ${top + 5} V${y - 4} Q${left} ${y} ${left + 4} ${y} H${right - 4} Q${right} ${y} ${right} ${y - 4} V${top}`} fill="rgba(148, 163, 184, 0.08)" stroke={colors.stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </g>
  );
};

/** Test tube hanging from (x, top). A precipitate colour settles in the rounded bottom. */
export const TestTube: React.FC<{
  x: number;
  top: number;
  height?: number;
  width?: number;
  fill?: string;
  level?: number;
  precipitate?: string;
  coating?: string;
}> = ({ x, top, height = 96, width = 18, fill = colors.water, level = 0.55, precipitate, coating }) => {
  const r = width / 2;
  const bottom = top + height;
  const liquidTop = bottom - height * level;
  const body = `M${x - r} ${top} V${bottom - r} A${r} ${r} 0 0 0 ${x + r} ${bottom - r} V${top}`;
  return (
    <g>
      <path d={`M${x - r} ${liquidTop} V${bottom - r} A${r} ${r} 0 0 0 ${x + r} ${bottom - r} V${liquidTop} Z`} fill={coating ?? fill} />
      {precipitate && (
        <path d={`M${x - r} ${bottom - r - 7} Q${x} ${bottom - r - 11} ${x + r} ${bottom - r - 7} V${bottom - r} A${r} ${r} 0 0 1 ${x - r} ${bottom - r} Z`} fill={precipitate} />
      )}
      <path d={body} fill="none" stroke={colors.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1={x - r - 2} y1={top} x2={x + r + 2} y2={top} stroke={colors.stroke} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

/** Wooden test tube rack holding one tube per entry, with optional labels under each. */
export const TubeRack: React.FC<{
  tubes: { fill?: string; precipitate?: string; label?: string }[];
  y?: number;
  top?: number;
  gap?: number;
}> = ({ tubes, y = 162, top = 34, gap = 44 }) => {
  const spacing = Math.min(gap, 190 / tubes.length);
  const startX = 120 - (spacing * (tubes.length - 1)) / 2;
  const rackLeft = startX - 24;
  const rackRight = startX + spacing * (tubes.length - 1) + 24;
  return (
    <g>
      {tubes.map((tube, i) => (
        <TestTube key={i} x={startX + i * spacing} top={top} height={y - top - 22} width={20} fill={tube.fill} precipitate={tube.precipitate} level={0.58} />
      ))}
      <rect x={rackLeft} y={top + 24} width={rackRight - rackLeft} height="6" rx="1.5" fill="#92400e" stroke="#b45309" strokeWidth="1.5" />
      <rect x={rackLeft} y={y - 8} width={rackRight - rackLeft} height="8" rx="1.5" fill="#92400e" stroke="#b45309" strokeWidth="1.5" />
      <rect x={rackLeft} y={top + 24} width="5" height={y - top - 24} fill="#92400e" />
      <rect x={rackRight - 5} y={top + 24} width="5" height={y - top - 24} fill="#92400e" />
      {tubes.map((tube, i) =>
        tube.label ? (
          <text key={i} x={startX + i * spacing} y={y + 12} textAnchor="middle" {...labelText}>
            {tube.label}
          </text>
        ) : null
      )}
    </g>
  );
};

/** Dropping pipette with rubber bulb, tip at (x, y). */
export const Dropper: React.FC<{ x: number; y: number; bulb?: string; drop?: string }> = ({ x, y, bulb = '#f97316', drop = '#7dd3fc' }) => (
  <g>
    <path d={`M${x - 1} ${y} L${x - 3} ${y - 14} V${y - 28} H${x + 3} V${y - 14} L${x + 1} ${y} Z`} {...glass} strokeWidth={1.5} />
    <rect x={x - 5} y={y - 44} width="10" height="17" rx="5" fill={bulb} />
    <path d={`M${x} ${y + 4} c-2 3 -2 6 0 6 c2 0 2 -3 0 -6 Z`} fill={drop} />
  </g>
);

export const Stopwatch: React.FC<{ x: number; y: number; r?: number; text?: string }> = ({ x, y, r = 15, text }) => (
  <g>
    <rect x={x - 3} y={y - r - 6} width="6" height="5" rx="1" {...steel} />
    <circle cx={x} cy={y} r={r} fill="#1e293b" stroke={colors.stroke} strokeWidth="2" />
    {text ? (
      <text x={x} y={y + 3} textAnchor="middle" fill={colors.accent} fontSize="9" fontWeight="700">
        {text}
      </text>
    ) : (
      <path d={`M${x} ${y} V${y - r + 4} M${x} ${y} L${x + r * 0.5} ${y + r * 0.2}`} stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
    )}
  </g>
);

export const Thermometer: React.FC<{ x: number; top: number; bottom: number; level: number }> = ({ x, top, bottom, level }) => (
  <g>
    <path d={`M${x - 3} ${top} V${bottom - 4} A5 5 0 1 0 ${x + 3} ${bottom - 4} V${top} A3 3 0 0 0 ${x - 3} ${top} Z`} fill="rgba(226, 232, 240, 0.12)" stroke={colors.stroke} strokeWidth="1.5" />
    <rect x={x - 1} y={level} width="2" height={bottom - level} fill="#ef4444" />
    <circle cx={x} cy={bottom} r="3.5" fill="#ef4444" />
  </g>
);

/** Rising bubbles for gas evolution. */
export const Bubbles: React.FC<{ points: [number, number, number][]; stroke?: string }> = ({ points, stroke = '#e2e8f0' }) => (
  <g>
    {points.map(([x, y, r], i) => (
      <circle key={i} cx={x} cy={y} r={r} fill="none" stroke={stroke} strokeWidth="1.2" />
    ))}
  </g>
);

/** Lab-bench clipboard, used by the checklist-style scenes. */
export const Clipboard: React.FC<{ x: number; y: number; width?: number; height?: number; children?: React.ReactNode }> = ({
  x,
  y,
  width = 110,
  height = 140,
  children,
}) => (
  <g>
    <rect x={x} y={y} width={width} height={height} rx="6" fill="#92400e" stroke="#b45309" strokeWidth="2" />
    <rect x={x + 8} y={y + 12} width={width - 16} height={height - 20} rx="2" fill="#f8fafc" />
    <rect x={x + width / 2 - 18} y={y - 5} width="36" height="14" rx="3" {...steel} />
    {children}
  </g>
);
