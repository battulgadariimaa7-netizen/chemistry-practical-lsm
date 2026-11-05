import React from 'react';

interface VisualBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
  /** Shown under the picture, for a photo that needs its credit. */
  credit?: React.ReactNode;
  children: React.ReactNode;
}

/** Text-and-picture panel shared by the feature pages. Dark unless the page asks for light. */
export const VisualBanner: React.FC<VisualBannerProps> = ({ eyebrow, title, description, light, credit, children }) => (
  <div
    className={`rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
      light ? 'bg-linear-to-br from-cyan-50 via-white to-sky-100 border border-cyan-100 shadow-sm' : 'bg-slate-900 text-white border border-slate-800'
    }`}
  >
    <div className="w-full md:w-3/5 space-y-2">
      <span className={`text-[11px] uppercase tracking-wider font-semibold ${light ? 'text-cyan-700' : 'text-cyan-400'}`}>{eyebrow}</span>
      <h3 className={`font-bold ${light ? 'text-xl sm:text-2xl text-slate-900' : 'text-lg text-white'}`}>{title}</h3>
      <p className={`leading-relaxed ${light ? 'text-sm text-slate-600' : 'text-xs text-slate-300'}`}>{description}</p>
    </div>
    <figure className="w-full md:w-2/5 space-y-1">
      <div className={`aspect-[4/3] rounded-xl overflow-hidden shadow-md ${light ? 'border border-white ring-1 ring-cyan-100' : 'border border-slate-700'}`}>
        {children}
      </div>
      {credit}
    </figure>
  </div>
);
