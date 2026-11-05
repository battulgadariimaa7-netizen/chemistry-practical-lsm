import React, { useState } from 'react';
import { BreakageReport, LabJournalEntry, Language, PrepJob } from '../types/chemistry';
import { todayText } from '../data/solutionRecipes';
import { useStoredState } from '../hooks/useStoredState';
import { StaffCard } from './StaffCard';
import { BookOpen, PenLine, Pencil, Printer, Trash2 } from 'lucide-react';

interface LabJournalProps {
  language: Language;
  jobs: PrepJob[];
  breakages: BreakageReport[];
}

export const LabJournal: React.FC<LabJournalProps> = ({ language, jobs, breakages }) => {
  const en = language === 'en';
  const [entries, setEntries] = useStoredState<LabJournalEntry[]>('chem_lab_staff_journal', []);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [date, setDate] = useState(todayText);
  const [author, setAuthor] = useState(() => entries[0]?.author ?? '');
  const [work, setWork] = useState('');
  const [notes, setNotes] = useState('');
  const [month, setMonth] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const dayRecords = (day: string) => ({
    solutions: jobs.flatMap((job) => job.lines.filter((line) => line.readyOn === day).map((line) => (en ? line.nameEn : line.nameMn))),
    breakages: breakages.filter((report) => report.date === day).map((report) => (en ? report.apparatus : report.apparatusMn)),
  });

  const renderDayRecords = (day: string) => {
    const records = dayRecords(day);
    if (records.solutions.length === 0 && records.breakages.length === 0) return null;
    return (
      <div className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 text-[11px] text-cyan-950 space-y-0.5">
        {records.solutions.length > 0 && (
          <div><span className="font-semibold">{en ? 'Solutions ready' : 'Бэлэн болсон уусмал'}:</span> {records.solutions.join(', ')}</div>
        )}
        {records.breakages.length > 0 && (
          <div><span className="font-semibold">{en ? 'Breakages logged' : 'Бүртгэсэн эвдрэл'}:</span> {records.breakages.join(', ')}</div>
        )}
      </div>
    );
  };

  const resetForm = () => {
    setEditingId(null);
    setDate(todayText());
    setWork('');
    setNotes('');
  };

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    if (!work.trim()) return;
    const entry: LabJournalEntry = { id: editingId ?? `log-${Date.now()}`, date: date || todayText(), author: author.trim(), work: work.trim(), notes: notes.trim() };
    setEntries((current) => (editingId ? current.map((item) => (item.id === editingId ? entry : item)) : [entry, ...current]));
    resetForm();
  };

  const handleEdit = (entry: LabJournalEntry) => {
    setEditingId(entry.id);
    setDate(entry.date);
    setAuthor(entry.author);
    setWork(entry.work);
    setNotes(entry.notes);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shown = entries
    .filter((entry) => !month || entry.date.startsWith(month))
    .sort((a, b) => b.date.localeCompare(a.date));

  const inputClass = 'w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <StaffCard
        className="lg:col-span-5 print:hidden"
        bodyClassName="space-y-3 text-xs"
        icon={PenLine}
        title={editingId ? (en ? 'Edit the Entry' : 'Тэмдэглэл засах') : (en ? 'New Daily Entry' : 'Өдрийн шинэ тэмдэглэл')}
        subtitle={en ? 'Solutions and breakages recorded for the day are added to it automatically.' : 'Тухайн өдөр бүртгэсэн уусмал, эвдрэл автоматаар хавсарна.'}
        onSubmit={handleSave}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="journal-date" className="block text-slate-700 font-medium mb-1">{en ? 'Date' : 'Огноо'}</label>
            <input id="journal-date" type="date" required value={date} onChange={(event) => setDate(event.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="journal-author" className="block text-slate-700 font-medium mb-1">{en ? 'Lab technician' : 'Лаборант'}</label>
            <input id="journal-author" type="text" value={author} onChange={(event) => setAuthor(event.target.value)} className={inputClass} />
          </div>
        </div>
        {renderDayRecords(date)}
        <div>
          <label htmlFor="journal-work" className="block text-slate-700 font-medium mb-1">{en ? 'Work done today' : 'Өнөөдөр хийсэн ажил'}</label>
          <textarea id="journal-work" rows={5} required value={work} onChange={(event) => setWork(event.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="journal-notes" className="block text-slate-700 font-medium mb-1">{en ? 'Notes and next steps' : 'Нэмэлт тэмдэглэл, дараагийн ажил'}</label>
          <textarea id="journal-notes" rows={3} value={notes} onChange={(event) => setNotes(event.target.value)} className={inputClass} />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="flex-1 py-2.5 px-4 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-lg transition-colors">
            {editingId ? (en ? 'Save changes' : 'Өөрчлөлт хадгалах') : (en ? 'Save entry' : 'Тэмдэглэл хадгалах')}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="py-2.5 px-4 border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold rounded-lg transition-colors">
              {en ? 'Cancel' : 'Болих'}
            </button>
          )}
        </div>
      </StaffCard>

      <StaffCard
        className="lg:col-span-7 print:col-span-12"
        icon={BookOpen}
        tone="amber"
        title={en ? 'Lab Technician’s Daily Journal' : 'Лаборантын өдөр тутмын дэвтэр'}
        actions={
          <div className="flex flex-wrap items-end gap-2 text-xs print:hidden">
            <div>
              <label htmlFor="journal-month" className="block text-slate-700 font-medium mb-1">{en ? 'Show month' : 'Сараар харах'}</label>
              <input id="journal-month" type="month" value={month} onChange={(event) => setMonth(event.target.value)} className={inputClass} />
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{en ? 'Print / PDF' : 'Хэвлэх / PDF'}</span>
            </button>
          </div>
        }
      >
        {shown.length === 0 && (
          <p className="p-6 rounded-xl border border-dashed border-slate-300 text-center text-xs text-slate-600">
            {month
              ? (en ? 'No entries in this month.' : 'Энэ сард тэмдэглэл алга.')
              : (en ? 'No entries yet. Write the first one with the form.' : 'Тэмдэглэл одоогоор алга. Маягтаар эхний тэмдэглэлээ бичнэ үү.')}
          </p>
        )}

        <div className="space-y-3">
          {shown.map((entry) => (
            <article key={entry.id} className="p-4 rounded-xl bg-white border border-slate-200 border-l-4 border-l-amber-400 shadow-xs space-y-2 text-xs break-inside-avoid print:shadow-none">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-slate-900 tabular-nums">
                  {entry.date}
                  {entry.author && <span className="font-medium text-slate-600"> · {entry.author}</span>}
                </div>
                <div className="flex items-center gap-3 print:hidden">
                  <button type="button" onClick={() => handleEdit(entry)} className="inline-flex items-center gap-1 font-semibold text-cyan-700 hover:text-cyan-800">
                    <Pencil className="w-3.5 h-3.5" />
                    <span>{en ? 'Edit' : 'Засах'}</span>
                  </button>
                  {confirmDeleteId === entry.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setEntries((current) => current.filter((item) => item.id !== entry.id));
                          setConfirmDeleteId(null);
                        }}
                        className="px-2 py-0.5 rounded bg-rose-700 hover:bg-rose-800 text-white font-semibold"
                      >
                        {en ? 'Delete' : 'Устгах'}
                      </button>
                      <button type="button" onClick={() => setConfirmDeleteId(null)} className="text-slate-600 hover:underline">
                        {en ? 'Keep' : 'Болих'}
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmDeleteId(entry.id)}
                      aria-label={en ? 'Delete this entry' : 'Энэ тэмдэглэлийг устгах'}
                      className="text-slate-400 hover:text-rose-700"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-slate-800 leading-relaxed whitespace-pre-wrap break-words">{entry.work}</p>
              {entry.notes && (
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap break-words">
                  <span className="font-semibold">{en ? 'Notes' : 'Тэмдэглэл'}:</span> {entry.notes}
                </p>
              )}
              {renderDayRecords(entry.date)}
            </article>
          ))}
        </div>
      </StaffCard>
    </div>
  );
};
