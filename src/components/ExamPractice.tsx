import React, { useEffect, useMemo, useState } from 'react';
import interFontUrl from 'inter-ui/variable/InterVariable.woff2?url';
import { Language, UserRole } from '../types/chemistry';
import { examPapers, paperLabel } from '../exams/papers';
import { useStoredState } from '../hooks/useStoredState';

// Each paper is a complete page with its own script, so a frame keeps it apart from the rest of the site.
// It fills the screen under the navigation and the paper chooser: its whiteboard and buttons are placed against the screen.
// Text in a paper is written as @@English|||Mongolian@@, and one language is chosen before it opens.
//
// The marking points of the mark scheme and the identities from the Confidential Instructions are for the
// teacher and lab staff. For a student, the teacher's notes are hidden and each Check shows only the marks.
// This only hides them on screen: the page itself still contains them.
const teacherNotes = /<details class="teach">(\s*<summary>(?:(?!<\/summary>)[\s\S])*?(?:Teacher|Багшийн тайлбар|Багшид)(?:(?!<\/summary>)[\s\S])*<\/summary>)/g;
const marksOnly = (language: Language) =>
  `'<div class="small muted">${language === 'en' ? 'The marking points are shown to the teacher and lab staff.' : 'Онооны дэлгэрэнгүйг багш, лаборантад харуулна.'}</div>'`;
const paperIn = (html: string, language: Language, staff: boolean) => {
  let page = html.replace('__INTER_FONT_URL__', interFontUrl).replace('__LANG__', language);
  if (!staff) {
    page = page
      .replace(teacherNotes, '<details class="teach teacher-only">$1')
      .replace('function fbBlock(lines,got,max){return lines.join("")+', `function fbBlock(lines,got,max){return ${marksOnly(language)}+`)
      .replace('</head>', '<style>.teacher-only{display:none!important}</style></head>');
  }
  return page.replace(/@@([\s\S]*?)\|\|\|([\s\S]*?)@@/g, (_, english: string, mongolian: string) => (language === 'en' ? english : mongolian));
};

const years = [...new Set(examPapers.map((p) => p.year))];

export const ExamPractice: React.FC<{ language: Language; role: UserRole }> = ({ language, role }) => {
  const en = language === 'en';
  const staff = role !== 'student';
  const [paperId, setPaperId] = useStoredState<string>('chem_lab_exam_paper', examPapers[0].id);
  const paper = examPapers.find((p) => p.id === paperId) ?? examPapers[0];
  const [loaded, setLoaded] = useState<{ id: string; html: string } | null>(null);

  useEffect(() => {
    let current = true;
    paper.load().then((html) => {
      if (current) setLoaded({ id: paper.id, html });
    });
    return () => {
      current = false;
    };
  }, [paper]);

  const page = useMemo(() => (loaded && loaded.id === paper.id ? paperIn(loaded.html, language, staff) : null), [loaded, paper.id, language, staff]);
  const label = paperLabel(paper, language);

  return (
    <div>
      <div className="h-12 px-4 sm:px-6 flex items-center gap-3 bg-white border-b border-slate-200">
        <label htmlFor="exam-paper" className="text-xs font-semibold text-slate-600 whitespace-nowrap">
          {en ? 'Exam paper' : 'Шалгалт'}
        </label>
        <select
          id="exam-paper"
          value={paper.id}
          onChange={(event) => setPaperId(event.target.value)}
          className="min-w-0 max-w-xs px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500"
        >
          {years.map((year) => (
            <optgroup key={year} label={String(year)}>
              {examPapers.filter((p) => p.year === year).map((p) => (
                <option key={p.id} value={p.id}>{paperLabel(p, language)}</option>
              ))}
            </optgroup>
          ))}
        </select>
        <span className="hidden sm:inline text-xs text-slate-500 truncate">
          {en ? `${examPapers.length} papers, newest first` : `${examPapers.length} шалгалт, сүүлийнх нь эхэндээ`}
        </span>
      </div>
      {page ? (
        <iframe
          key={paper.id}
          title={en ? `Exam practice: ${label}` : `Шалгалтын дадлага: ${label}`}
          srcDoc={page}
          className="w-full h-[calc(100dvh-7rem)] lg:h-[calc(100dvh-3rem)] block border-0"
        />
      ) : (
        <div className="h-[calc(100dvh-7rem)] lg:h-[calc(100dvh-3rem)] flex items-center justify-center text-sm text-slate-500">
          {en ? 'Opening the paper…' : 'Шалгалтыг нээж байна…'}
        </div>
      )}
    </div>
  );
};
