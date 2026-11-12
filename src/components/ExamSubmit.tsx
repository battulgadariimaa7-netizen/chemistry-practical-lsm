import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Send, X } from 'lucide-react';
import { Language, LabNotebookEntry } from '../types/chemistry';
import { downloadReport } from '../data/reportFiles';
import { sendReport } from '../data/reportServer';
import { notebookSamples } from '../data/notebookSamples';
import { useStoredState } from '../hooks/useStoredState';

// Sends a student's finished work (an exam paper or an enrichment worksheet) straight to the teacher's
// Student Reports, without going through the Lab Notebook. With no internet, it is downloaded as a report file.

interface ExamSubmitProps {
  /** The student's work, as taken from the open paper or worksheet. */
  entry: LabNotebookEntry;
  /** What is being sent, shown before sending: label and value. */
  details: [string, string][];
  language: Language;
  onClose: () => void;
}

const samples = [notebookSamples.en.studentName, notebookSamples.mn.studentName];

/** The name the student last used here, or the one in their Lab Notebook. */
const notebookName = () => {
  try {
    const name = String(JSON.parse(localStorage.getItem('chem_lab_notebook_draft') || '{}').studentName || '').trim();
    return samples.includes(name) ? '' : name;
  } catch {
    return '';
  }
};

export const ExamSubmit: React.FC<ExamSubmitProps> = ({ entry, details, language, onClose }) => {
  const en = language === 'en';
  const [savedName, setSavedName] = useStoredState<string>('chem_lab_student_name', '');
  // A name written on the worksheet itself comes first.
  const [name, setName] = useState(() => entry.studentName.trim() || savedName || notebookName());
  const [state, setState] = useState<'ready' | 'sending' | 'sent' | 'file'>('ready');
  const [nameMissing, setNameMissing] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInput.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault();
    const studentName = name.trim();
    if (!studentName || samples.includes(studentName)) {
      setNameMissing(true);
      nameInput.current?.focus();
      return;
    }
    setSavedName(studentName);
    const report: LabNotebookEntry = { ...entry, studentName, status: 'submitted' };
    setState('sending');
    try {
      await sendReport(report);
      setState('sent');
    } catch {
      downloadReport(report);
      setState('file');
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/50" onClick={(e) => e.target === e.currentTarget && state !== 'sending' && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="exam-submit-title" className="w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200">
        <div className="flex items-start justify-between gap-3 px-5 pt-4">
          <h2 id="exam-submit-title" className="text-base font-bold text-slate-900">
            {en ? 'Submit to your teacher' : 'Багшдаа илгээх'}
          </h2>
          <button type="button" onClick={onClose} disabled={state === 'sending'} className="p-1 -mr-1 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-40" aria-label={en ? 'Close' : 'Хаах'}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {state === 'sent' || state === 'file' ? (
          <div className="px-5 pb-5 pt-3 space-y-4">
            <div className={`flex items-start gap-2.5 p-3 rounded-lg border text-sm ${state === 'sent' ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-amber-50 border-amber-300 text-amber-900'}`} role="status">
              <CheckCircle2 className={`w-5 h-5 flex-none ${state === 'sent' ? 'text-emerald-600' : 'text-amber-600'}`} />
              <p>
                {state === 'sent'
                  ? entry.examPaperId
                    ? en
                      ? 'Sent. Your teacher can now see your answers, marks and whiteboard in Student Reports.'
                      : 'Илгээгдлээ. Багш таны хариулт, оноо, самбарыг «Сурагчдын тайлан» хэсгээс харах боломжтой.'
                    : en
                      ? 'Sent. Your teacher can now see your worksheet in Student Reports.'
                      : 'Илгээгдлээ. Багш таны ажлын хуудсыг «Сурагчдын тайлан» хэсгээс харах боломжтой.'
                  : en
                    ? 'Your teacher’s inbox could not be reached, so your work was downloaded as a file. Send this file to your teacher.'
                    : 'Багшийн хайрцагт хүрч чадсангүй тул таны ажил файл болж татагдлаа. Энэ файлыг багшдаа илгээнэ үү.'}
              </p>
            </div>
            <div className="text-right">
              <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg">
                {en ? 'Done' : 'Болсон'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSend} className="px-5 pb-5 pt-3 space-y-4">
            <dl className="text-sm rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-200">
              {details.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-3 px-3 py-2">
                  <dt className="text-slate-500">{label}</dt>
                  <dd className="font-medium text-slate-900 text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <label className="block text-sm text-slate-700">
              <span className="block font-medium mb-1">{en ? 'Your name' : 'Таны нэр'}</span>
              <input
                ref={nameInput}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameMissing(false);
                }}
                autoComplete="name"
                aria-invalid={nameMissing}
                className={`w-full px-3 py-2 bg-white border rounded-lg ${nameMissing ? 'border-amber-500' : 'border-slate-300'}`}
              />
              {nameMissing && (
                <span className="block mt-1 text-xs text-amber-800">
                  {en ? 'Write your own name, so your teacher knows whose work it is.' : 'Өөрийн нэрээ бичнэ үү, тэгвэл багш хэний ажил болохыг мэднэ.'}
                </span>
              )}
            </label>
            <p className="text-xs text-slate-500">
              {entry.examPaperId
                ? en
                  ? 'Your answers, the marks of the parts you checked and your whiteboard pages are sent. Check them before you send.'
                  : 'Таны хариулт, шалгасан хэсгүүдийн оноо, самбарын хуудсууд илгээгдэнэ. Илгээхийн өмнө шалгаарай.'
                : en
                  ? 'Everything you filled in on the worksheet is sent. Check it before you send.'
                  : 'Ажлын хуудсанд бөглөсөн бүх зүйл илгээгдэнэ. Илгээхийн өмнө шалгаарай.'}
            </p>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} disabled={state === 'sending'} className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg disabled:opacity-50">
                {en ? 'Cancel' : 'Болих'}
              </button>
              <button type="submit" disabled={state === 'sending'} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg disabled:opacity-60">
                <Send className="w-4 h-4" />
                <span>{state === 'sending' ? (en ? 'Sending…' : 'Илгээж байна…') : en ? 'Send' : 'Илгээх'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
