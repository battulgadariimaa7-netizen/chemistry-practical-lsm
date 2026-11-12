import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { Language, LabNotebookEntry } from '../types/chemistry';
import { enrichmentLessons } from '../lessons/lessons';
import { useStoredState } from '../hooks/useStoredState';
import { ExamSubmit } from './ExamSubmit';

// Enrichment lessons («Хөгжүүлэх хичээл»). A worksheet is a complete page with its own script, so a frame keeps it
// apart from the site. Like Exam Practice, it fills the screen under the navigation, and the student's work can
// be sent straight to the teacher's Student Reports.

interface EnrichmentLessonsProps {
  language: Language;
}

export const EnrichmentLessons: React.FC<EnrichmentLessonsProps> = ({ language }) => {
  const en = language === 'en';
  const [lessonId, setLessonId] = useStoredState<string>('chem_lab_enrichment_lesson', enrichmentLessons[0].id);
  const lesson = enrichmentLessons.find((l) => l.id === lessonId) ?? enrichmentLessons[0];
  const [loaded, setLoaded] = useState<{ id: string; html: string } | null>(null);
  const [frameReady, setFrameReady] = useState<string | null>(null);
  const [submit, setSubmit] = useState<{ entry: LabNotebookEntry; summary: [string, string][] } | null>(null);
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let current = true;
    lesson.load().then((html) => current && setLoaded({ id: lesson.id, html }));
    return () => {
      current = false;
    };
  }, [lesson]);

  const page = loaded && loaded.id === lesson.id ? loaded.html : null;

  return (
    <div className="h-[calc(100dvh-4rem)] lg:h-dvh flex flex-col">
      <div className="min-h-12 px-4 sm:px-6 py-2 flex flex-wrap items-center gap-x-4 gap-y-2 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2 min-w-0 max-w-full">
          <label htmlFor="enrichment-lesson" className="text-xs font-semibold text-slate-600 whitespace-nowrap">
            {en ? 'Enrichment lesson' : 'Хөгжүүлэх хичээл'}
          </label>
          <select
            id="enrichment-lesson"
            value={lesson.id}
            onChange={(event) => setLessonId(event.target.value)}
            className="min-w-0 max-w-md px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500"
          >
            {enrichmentLessons.map((l) => (
              <option key={l.id} value={l.id}>
                {l.title[language]}
              </option>
            ))}
          </select>
        </div>
        {en && lesson.language === 'mn' && <span className="text-xs text-slate-500">This worksheet is in Mongolian.</span>}
        <button
          type="button"
          disabled={frameReady !== lesson.id}
          onClick={() => {
            const doc = frame.current?.contentDocument;
            if (doc) setSubmit(lesson.capture(doc));
          }}
          title={en ? 'Send what you filled in on the worksheet straight to your teacher’s Student Reports.' : 'Ажлын хуудсанд бөглөснөө багшийн «Сурагчдын тайлан» руу шууд илгээнэ.'}
          className="sm:ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{en ? 'Submit to teacher' : 'Багшид илгээх'}</span>
        </button>
      </div>
      {page ? (
        <iframe
          ref={frame}
          key={lesson.id}
          title={lesson.title[language]}
          srcDoc={page}
          onLoad={() => setFrameReady(lesson.id)}
          className="w-full flex-1 min-h-0 block border-0 bg-slate-100"
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-sm text-slate-500">{en ? 'Opening the worksheet…' : 'Ажлын хуудсыг нээж байна…'}</div>
      )}
      {submit && <ExamSubmit entry={submit.entry} details={submit.summary} language={language} onClose={() => setSubmit(null)} />}
    </div>
  );
};
