import React from 'react';

const ink = '#111827';

const FlameMark: React.FC<{ transform?: string }> = ({ transform }) => (
  <g transform={transform}>
    <path d="M52 18 C54 30 66 36 66 52 C66 62 58 68 50 68 C42 68 34 62 34 52 C34 44 40 40 42 32 C45 38 47 40 49 40 C51 34 50 26 52 18 Z" fill={ink} />
    <path d="M50 48 C52 54 57 55 57 60 C57 64 53 66 50 66 C47 66 43 64 43 60 C43 56 48 54 50 48 Z" fill="#fff" />
  </g>
);

const symbols: Record<string, React.ReactNode> = {
  // Exploding bomb
  GHS01: (
    <g>
      <circle cx="50" cy="60" r="11" fill={ink} />
      <path d="M50 44 V26 M38 48 L26 34 M62 48 L74 34 M34 60 H18 M66 60 H82 M38 72 L30 80 M62 72 L70 80" stroke={ink} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="44" y="24" width="4" height="4" fill={ink} transform="rotate(20 46 26)" />
      <rect x="28" y="44" width="5" height="5" fill={ink} transform="rotate(30 30 46)" />
      <rect x="67" y="44" width="5" height="5" fill={ink} transform="rotate(15 69 46)" />
    </g>
  ),
  // Flame
  GHS02: (
    <g>
      <FlameMark />
      <rect x="31" y="72" width="38" height="4" fill={ink} />
    </g>
  ),
  // Flame over circle
  GHS03: (
    <g>
      <FlameMark transform="translate(19 8) scale(0.62)" />
      <circle cx="50" cy="62" r="11" fill="none" stroke={ink} strokeWidth="4.5" />
      <rect x="31" y="77" width="38" height="4" fill={ink} />
    </g>
  ),
  // Gas cylinder
  GHS04: (
    <g transform="rotate(-38 50 52)">
      <rect x="26" y="42" width="44" height="20" rx="8" fill={ink} />
      <rect x="70" y="47" width="6" height="10" fill={ink} />
      <rect x="76" y="44" width="3.5" height="16" fill={ink} />
    </g>
  ),
  // Corrosion: two tubes pouring onto a metal bar and a hand
  GHS05: (
    <g>
      <rect x="31" y="14" width="10" height="27" rx="2.5" fill={ink} transform="rotate(50 36 27)" />
      <rect x="59" y="14" width="10" height="27" rx="2.5" fill={ink} transform="rotate(-50 64 27)" />
      <path d="M26 42 V52 M31 44 V50 M74 42 V52 M69 44 V50" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 60 H42 V68 H18 Z" fill={ink} />
      <path d="M24 60 L27 65 L30 60 Z M32 60 L35 64 L38 60 Z" fill="#fff" />
      <path d="M52 68 C52 61 58 59 64 59 H82 V64 H72 V68 Z" fill={ink} />
      <path d="M68 59 L71 64 L74 59 Z" fill="#fff" />
      <rect x="20" y="73" width="60" height="4" fill={ink} />
    </g>
  ),
  // Skull and crossbones
  GHS06: (
    <g>
      <path d="M50 20 C62 20 68 29 68 38 C68 45 64 49 61 51 V57 H39 V51 C36 49 32 45 32 38 C32 29 38 20 50 20 Z" fill={ink} />
      <circle cx="42" cy="38" r="5" fill="#fff" />
      <circle cx="58" cy="38" r="5" fill="#fff" />
      <path d="M50 44 l-3 5 h6 Z" fill="#fff" />
      <path d="M30 62 L70 76 M70 62 L30 76" stroke={ink} strokeWidth="5.5" strokeLinecap="round" />
    </g>
  ),
  // Exclamation mark
  GHS07: (
    <g>
      <path d="M44 20 H56 L53 60 H47 Z" fill={ink} />
      <circle cx="50" cy="71" r="6.5" fill={ink} />
    </g>
  ),
  // Serious health hazard: bust with a starburst on the chest
  GHS08: (
    <g>
      <circle cx="50" cy="26" r="9" fill={ink} />
      <path d="M26 80 C26 50 36 38 50 38 C64 38 74 50 74 80 Z" fill={ink} />
      <path d="M50 44 L53 54 L63 50 L57 59 L66 64 L55 65 L56 76 L50 67 L44 76 L45 65 L34 64 L43 59 L37 50 L47 54 Z" fill="#fff" />
    </g>
  ),
  // Environment: dead tree and fish
  GHS09: (
    <g>
      <path d="M36 66 V30 M36 46 L24 34 M36 40 L46 28 M36 56 L46 48 M30 40 L26 26" stroke={ink} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M46 72 C54 62 66 62 72 70 L82 64 V78 L72 72 C66 80 54 80 46 72 Z" fill={ink} />
      <path d="M51 69 l4 4 M55 69 l-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 67 H40 M20 82 H50" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
};

export const GhsPictogram: React.FC<{ code: string; label?: string; className?: string }> = ({ code, label, className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    className={`block ${className}`}
    {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
  >
    <polygon points="50,4 96,50 50,96 4,50" fill="#fff" stroke="#dc2626" strokeWidth="7" strokeLinejoin="miter" />
    {symbols[code]}
  </svg>
);

/** Pulls the code out of data strings such as "GHS05 (Corrosion)". */
export const ghsCodeOf = (pictogram: string) => pictogram.slice(0, 5);
