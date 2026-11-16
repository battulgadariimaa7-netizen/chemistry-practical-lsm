import React, { useEffect, useState } from 'react';
import { Language } from '../types/chemistry';
import type { LessonSlide } from '../lessons/lessons';
import { ArrowLeft, ArrowRight, ChevronDown, MessageSquareText } from 'lucide-react';

// A deck of slides exported from PowerPoint, read one at a time: Back and Next, a numbered dot for each slide
// (green once read), the arrow keys, the slide's words as text, and its speaker notes as the explanation.
// The parent keeps the current slide and which ones were read, so it can send the reader to a slide.

interface SlideViewerProps {
  slides: LessonSlide[];
  language: Language;
  slide: number;
  onSlide: (index: number) => void;
  /** The slides already read, marked on their dots. */
  seen?: Set<number>;
  /** A line above the picture, such as that the slides are in Mongolian. */
  note?: string;
  /** Shown under the slides, such as a button to go on. */
  children?: React.ReactNode;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slides, language, slide, onSlide, seen, note, children }) => {
  const en = language === 'en';
  const total = slides.length;
  const [showText, setShowText] = useState(false);
  const goTo = (index: number) => onSlide(Math.max(0, Math.min(total - 1, index)));

  // The arrow keys turn the slides, except while typing.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (event.key === 'ArrowRight') goTo(slide + 1);
      if (event.key === 'ArrowLeft') goTo(slide - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const current = slides[slide];
  if (!current) return null;
  const read = (index: number) => seen?.has(index) ?? false;

  return (
    <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
      {note && <p className="text-[11px] text-slate-500">{note}</p>}
      <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video">
        <img src={current.picture} alt={current.text} className="w-full h-full object-contain" />
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => goTo(slide - 1)}
          disabled={slide === 0}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{en ? 'Back' : 'Өмнөх'}</span>
        </button>
        <span className="text-xs font-semibold text-slate-700 tabular-nums" aria-live="polite">
          {en ? `Slide ${slide + 1} of ${total}` : `${total}-аас ${slide + 1}-р слайд`}
        </span>
        <button
          type="button"
          onClick={() => goTo(slide + 1)}
          disabled={slide === total - 1}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-cyan-700 bg-cyan-700 text-white hover:bg-cyan-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <span>{en ? 'Next' : 'Дараах'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-1.5" role="group" aria-label={en ? 'Slides' : 'Слайдууд'}>
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={en ? `Slide ${index + 1}${read(index) ? ', read' : ''}` : `${index + 1}-р слайд${read(index) ? ', уншсан' : ''}`}
            aria-current={index === slide ? 'true' : undefined}
            className={`w-7 h-7 rounded-full text-[11px] font-semibold tabular-nums border transition-colors ${
              index === slide ? 'bg-cyan-700 border-cyan-700 text-white' : read(index) ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-white border-slate-200 text-slate-500 hover:border-cyan-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {current.notes && (
        <div className="p-3 rounded-lg bg-cyan-50/60 border border-cyan-100 text-xs text-slate-800 leading-relaxed flex items-start gap-2">
          <MessageSquareText className="w-4 h-4 mt-0.5 shrink-0 text-cyan-700" aria-hidden="true" />
          <p>
            <span className="font-semibold text-cyan-900">{en ? 'Explanation: ' : 'Тайлбар: '}</span>
            {current.notes}
          </p>
        </div>
      )}
      <div>
        <button type="button" onClick={() => setShowText(!showText)} aria-expanded={showText} className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-700 hover:text-cyan-800">
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showText ? 'rotate-180' : ''}`} />
          <span>{en ? 'Read the slide as text' : 'Слайдын текстийг унших'}</span>
        </button>
        {showText && <p className="mt-1.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed">{current.text}</p>}
      </div>
      {children}
    </div>
  );
};
