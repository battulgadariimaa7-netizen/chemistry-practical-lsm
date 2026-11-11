import React, { useEffect, useMemo, useRef, useState } from 'react';
import interFontUrl from 'inter-ui/variable/InterVariable.woff2?url';
import { LabNotebookEntry, Language, UserRole } from '../types/chemistry';
import { examPapers, paperLabel } from '../exams/papers';
import { questionsOn, topics } from '../exams/examTopics';
import { captureExam } from '../exams/examCapture';
import { NotebookPen } from 'lucide-react';
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

interface ExamPracticeProps {
  language: Language;
  role: UserRole;
  /** Takes the student's work in the open paper to the Lab Notebook, from where it is sent to the teacher. */
  onCopyToNotebook: (entry: LabNotebookEntry) => void;
}

export const ExamPractice: React.FC<ExamPracticeProps> = ({ language, role, onCopyToNotebook }) => {
  const en = language === 'en';
  const staff = role !== 'student';
  const [paperId, setPaperId] = useStoredState<string>('chem_lab_exam_paper', examPapers[0].id);
  const [topicKey, setTopicKey] = useStoredState<string>('chem_lab_exam_topic', '');
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

  // With a topic chosen, only the papers that test it are listed, and the paper opens at its first question on it.
  const topic = topics.find((item) => item.key === topicKey) ?? null;
  const listed = topic ? examPapers.filter((p) => questionsOn(p.id, topic.key).length > 0) : examPapers;
  const target = topic ? questionsOn(paper.id, topic.key)[0] : undefined;
  const optionLabel = (p: (typeof examPapers)[number]) => {
    if (!topic) return paperLabel(p, language);
    const qs = questionsOn(p.id, topic.key);
    return `${paperLabel(p, language)} · ${en ? `Q${qs.join(', Q')}` : `${qs.join(', ')}-р асуулт`}`;
  };
  const chooseTopic = (key: string) => {
    setTopicKey(key);
    const chosen = topics.find((item) => item.key === key);
    if (chosen && questionsOn(paper.id, chosen.key).length === 0) {
      const first = examPapers.find((p) => questionsOn(p.id, chosen.key).length > 0);
      if (first) setPaperId(first.id);
    }
  };

  const frame = useRef<HTMLIFrameElement>(null);
  const [frameReady, setFrameReady] = useState<string | null>(null);
  useEffect(() => {
    if (!target || frameReady !== paper.id) return;
    frame.current?.contentDocument?.querySelector<HTMLButtonElement>(`#tabs button[data-tab="q${target}"]`)?.click();
  }, [target, frameReady, paper.id]);

  const selectClass = 'min-w-0 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500';

  return (
    <div className="h-[calc(100dvh-4rem)] lg:h-dvh flex flex-col">
      <div className="min-h-12 px-4 sm:px-6 py-2 flex flex-wrap items-center gap-x-4 gap-y-2 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2 min-w-0 max-w-full">
          <label htmlFor="exam-topic" className="text-xs font-semibold text-slate-600 whitespace-nowrap">
            {en ? 'Topic' : 'Сэдэв'}
          </label>
          <select id="exam-topic" value={topic?.key ?? ''} onChange={(event) => chooseTopic(event.target.value)} className={`${selectClass} max-w-[16rem]`}>
            <option value="">{en ? 'All topics' : 'Бүх сэдэв'}</option>
            {topics.map((item) => {
              const count = examPapers.filter((p) => questionsOn(p.id, item.key).length > 0).length;
              return <option key={item.key} value={item.key}>{`${item[language]} (${count})`}</option>;
            })}
          </select>
        </div>
        <div className="flex items-center gap-2 min-w-0 max-w-full">
          <label htmlFor="exam-paper" className="text-xs font-semibold text-slate-600 whitespace-nowrap">
            {en ? 'Exam paper' : 'Шалгалт'}
          </label>
          <select id="exam-paper" value={paper.id} onChange={(event) => setPaperId(event.target.value)} className={`${selectClass} max-w-xs`}>
            {years.map((year) => {
              const inYear = listed.filter((p) => p.year === year);
              return inYear.length ? (
                <optgroup key={year} label={String(year)}>
                  {inYear.map((p) => <option key={p.id} value={p.id}>{optionLabel(p)}</option>)}
                </optgroup>
              ) : null;
            })}
          </select>
        </div>
        <span className="hidden xl:inline text-xs text-slate-500 truncate">
          {topic
            ? (en ? `${listed.length} papers on this topic, newest first` : `Энэ сэдвээр ${listed.length} шалгалт, сүүлийнх нь эхэндээ`)
            : (en ? `${examPapers.length} papers, newest first` : `${examPapers.length} шалгалт, сүүлийнх нь эхэндээ`)}
        </span>
        <button
          type="button"
          disabled={frameReady !== paper.id}
          onClick={() => {
            const entry = frame.current && captureExam(frame.current, paper, language);
            if (entry) onCopyToNotebook(entry);
          }}
          title={en ? 'Your answers, marks and whiteboard go to the Lab Notebook, from where you send them to your teacher.' : 'Хариулт, оноо, самбараа цахим дэвтэрт хуулж, тэндээсээ багшдаа илгээнэ.'}
          className="sm:ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-800 hover:bg-cyan-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          <NotebookPen className="w-3.5 h-3.5" />
          <span>{en ? 'Copy to Lab Notebook' : 'Цахим дэвтэрт хуулах'}</span>
        </button>
      </div>
      {page ? (
        <iframe
          ref={frame}
          key={paper.id}
          title={en ? `Exam practice: ${label}` : `Шалгалтын дадлага: ${label}`}
          srcDoc={page}
          onLoad={() => setFrameReady(paper.id)}
          className="w-full flex-1 min-h-0 block border-0"
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-sm text-slate-500">
          {en ? 'Opening the paper…' : 'Шалгалтыг нээж байна…'}
        </div>
      )}
    </div>
  );
};
