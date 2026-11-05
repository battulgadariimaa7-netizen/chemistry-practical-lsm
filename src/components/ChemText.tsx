import React from 'react';

// Inter has no ⇌ or ∝, so these two are drawn to keep them from falling back to another font.
const DrawnSymbol: React.FC<{ symbol: string }> = ({ symbol }) => {
  const shape = symbol === '⇌'
    ? { viewBox: '0 0 20 12', d: 'M2 4.5h16l-4-3.5M18 7.5H2l4 3.5', size: 'w-[1.25em] h-[0.75em]' }
    : { viewBox: '0 0 14 10', d: 'M13 1.5C9 1.5 8.5 3 7 5S5 8.5 3.2 8.5C1.6 8.5 1 7 1 5s.6-3.5 2.2-3.5C5 1.5 5.5 3 7 5s2 3.5 6 3.5', size: 'w-[0.9em] h-[0.65em]' };
  return (
    <svg
      viewBox={shape.viewBox}
      role="img"
      aria-label={symbol}
      className={`inline-block align-baseline ${shape.size}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={shape.d} />
    </svg>
  );
};

// Writes H2O, (NH3)2 and V_mean with real subscripts and 10^(-pKa) with a real superscript.
const pattern = /([A-Z][a-z]?|\))(\d+)|_([A-Za-zА-Яа-яӨөҮү0-9/+]+)|\^\(([^)]+)\)|([⇌∝])/g;

export const ChemText: React.FC<{ text: string }> = ({ text }) => {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    parts.push(text.slice(last, match.index), match[1] ?? '');
    if (match[5]) parts.push(<DrawnSymbol key={match.index} symbol={match[5]} />);
    else if (match[4]) parts.push(<sup key={match.index}>{match[4]}</sup>);
    else parts.push(<sub key={match.index}>{match[2] ?? match[3]}</sub>);
    last = match.index + match[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
};
