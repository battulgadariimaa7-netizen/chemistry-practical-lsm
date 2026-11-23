import React, { useState } from 'react';
import { BookOpenCheck, CheckCircle2, Lock, Printer } from 'lucide-react';
import { Language, UserRole } from '../types/chemistry';
import { enrichmentLessons } from '../lessons/lessons';
import { enrichmentAnswerKey } from '../lessons/answerKey';
import { useStoredState } from '../hooks/useStoredState';
import { StaffCard } from './StaffCard';

// The answer key to the check questions of the Enrichment worksheets, for marking students' reports.
// Like Exam Preparation, it is hidden on screen when Student is chosen in the menu.

interface EnrichmentAnswerKeyProps {
  language: Language;
  role: UserRole;
}

const keyedLessons = enrichmentAnswerKey
  .map((key) => ({ key, lesson: enrichmentLessons.find((l) => l.id === key.lessonId) }))
  .filter((item): item is { key: (typeof enrichmentAnswerKey)[number]; lesson: (typeof enrichmentLessons)[number] } => !!item.lesson);

export const EnrichmentAnswerKey: React.FC<EnrichmentAnswerKeyProps> = ({ language, role }) => {
  const en = language === 'en';
  const [lessonId, setLessonId] = useStoredState<string>('chem_lab_answer_key_lesson', keyedLessons[0]?.key.lessonId ?? '');
  const [showModel, setShowModel] = useState(true);

  if (role === 'student') {
    return (
      <StaffCard icon={Lock} tone="amber" title={en ? 'For Staff Only' : 'Зөвхөн ажилтанд'}>
        <p className="text-sm text-slate-700">
          {en
            ? 'The answer key holds the answers to the Enrichment worksheets. Choose Teacher or Lab Staff at the bottom of the menu to open it.'
            : 'Энэ хэсэгт хөгжүүлэх хичээлийн ажлын хуудасны хариулт байгаа. Нээхийн тулд цэсний доод хэсгээс «Багш» эсвэл «Лаборант»-ыг сонгоно уу.'}
        </p>
      </StaffCard>
    );
  }

  const current = keyedLessons.find((item) => item.key.lessonId === lessonId) ?? keyedLessons[0];
  if (!current) return null;
  const theoryCount = enrichmentLessons.filter((l) => l.kind === 'theory').length;

  return (
    <div className="space-y-6">
      <StaffCard
        icon={BookOpenCheck}
        tone="emerald"
        title={en ? 'Enrichment Lessons: Answer Key' : 'Хөгжүүлэх хичээл: хариултын түлхүүр'}
        subtitle={
          en
            ? 'Answers to the check questions of each worksheet, with the points to look for when marking a student’s report. The worksheets are in Mongolian, so the answers are too.'
            : 'Ажлын хуудас бүрийн «Шалгах асуултууд»-ын хариулт, сурагчийн тайланг дүгнэхэд харах гол санаатай.'
        }
        actions={
          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <label className="inline-flex items-center gap-2 text-xs text-slate-700">
              <input type="checkbox" checked={showModel} onChange={(e) => setShowModel(e.target.checked)} className="accent-emerald-700" />
              <span>{en ? 'Show model answers' : 'Жишиг хариулт харуулах'}</span>
            </label>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{en ? 'Print' : 'Хэвлэх'}</span>
            </button>
          </div>
        }
      >
        <div role="group" aria-label={en ? 'Worksheet' : 'Ажлын хуудас'} className="flex flex-wrap gap-2 print:hidden">
          {keyedLessons.map(({ key, lesson }) => {
            const active = key.lessonId === current.key.lessonId;
            return (
              <button
                key={key.lessonId}
                aria-pressed={active}
                onClick={() => setLessonId(key.lessonId)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-colors text-left ${
                  active ? 'bg-emerald-700 border-emerald-700 text-white font-semibold' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {lesson.title.mn}
                <span className={`ml-1.5 tabular-nums ${active ? 'text-emerald-100' : 'text-slate-400'}`}>· {key.answers.length}</span>
              </button>
            );
          })}
        </div>
        {theoryCount > 0 && (
          <p className="text-[11px] text-slate-500 print:hidden">
            {en ? 'The theory lesson has no check questions, so it is not listed here.' : 'Онолын хичээлд шалгах асуулт байхгүй тул энд ороогүй.'}
          </p>
        )}
      </StaffCard>

      <section aria-labelledby="answer-key-title" className="bg-white border border-slate-200/80 rounded-2xl shadow-sm p-5 sm:p-6 space-y-5 print:border-0 print:shadow-none print:p-0">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
            {en ? 'Answer key' : 'Хариултын түлхүүр'}
          </div>
          <h3 id="answer-key-title" className="text-lg font-bold text-slate-900">{current.lesson.title.mn}</h3>
        </div>
        <ol className="space-y-4">
          {current.key.answers.map((item, i) => (
            <li key={item.question} className="rounded-xl border border-slate-200 p-4 space-y-3 break-inside-avoid">
              <h4 className="text-sm font-bold text-slate-900">
                <span className="text-emerald-700 tabular-nums">{i + 1}.</span> {item.question}
              </h4>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                  {en ? 'Marking points' : 'Дүгнэх гол санаа'}
                </div>
                <ul className="space-y-1">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {showModel && (
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-1">
                    {en ? 'Model answer' : 'Жишиг хариулт'}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
              {item.working && (
                <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 space-y-0.5">
                  {item.working.map((line) => (
                    <p key={line} className="text-xs text-slate-800 font-mono leading-relaxed">{line}</p>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
