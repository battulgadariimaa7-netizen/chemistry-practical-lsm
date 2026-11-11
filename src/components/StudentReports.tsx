import React, { useRef, useState } from 'react';
import { Language, LabNotebookEntry } from '../types/chemistry';
import { MAX_SKILL_SCORE, ao3Skills, downloadReport, readReportFile, statusLabel } from '../data/reportFiles';
import { useStoredState } from '../hooks/useStoredState';
import { CheckCircle2, Download, Trash2, Upload } from 'lucide-react';

interface StudentReportsProps {
  language: Language;
}

export const StudentReports: React.FC<StudentReportsProps> = ({ language }) => {
  const [reports, setReports] = useStoredState<LabNotebookEntry[]>('chem_lab_teacher_reports', []);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const selected = reports.find((r) => r.id === selectedId) ?? null;
  const skillScores = selected?.skillScores ?? {};
  const total = ao3Skills.reduce((sum, skill) => sum + (skillScores[skill.id] ?? 0), 0);
  const maxTotal = ao3Skills.length * MAX_SKILL_SCORE;

  const handleImport = async (files: FileList | null) => {
    if (!files) return;
    let added = 0;
    let failed = 0;
    const incoming: LabNotebookEntry[] = [];
    for (const file of Array.from(files)) {
      try {
        incoming.push(await readReportFile(file));
        added += 1;
      } catch {
        failed += 1;
      }
    }
    setReports((prev) => {
      const ids = new Set(incoming.map((r) => r.id));
      return [...incoming, ...prev.filter((r) => !ids.has(r.id))];
    });
    setMessage(
      failed > 0
        ? {
            ok: false,
            text:
              language === 'en'
                ? `${added} report(s) added. ${failed} file(s) could not be read: use the file downloaded from the Lab Notebook.`
                : `${added} тайлан нэмэгдлээ. ${failed} файлыг уншиж чадсангүй: Цахим дэвтрээс татсан файлыг ашиглана уу.`,
          }
        : { ok: true, text: language === 'en' ? `${added} report(s) added.` : `${added} тайлан нэмэгдлээ.` }
    );
    if (fileInput.current) fileInput.current.value = '';
  };

  const updateSelected = (changes: Partial<LabNotebookEntry>) => {
    if (!selected) return;
    setReports((prev) => prev.map((r) => (r.id === selected.id ? { ...r, ...changes } : r)));
  };

  const handleSetScore = (skillId: string, value: number) => {
    const next = { ...skillScores, [skillId]: Math.max(0, Math.min(MAX_SKILL_SCORE, value)) };
    updateSelected({ skillScores: next });
  };

  const handleSaveGrade = () => {
    if (!selected) return;
    const graded: LabNotebookEntry = { ...selected, status: 'graded', gradeScore: `${total}/${maxTotal}` };
    updateSelected(graded);
    downloadReport(graded);
    setMessage({
      ok: true,
      text:
        language === 'en'
          ? 'Grade saved. The downloaded file can now be returned to the student.'
          : 'Дүн хадгалагдлаа. Татагдсан файлыг сурагчид буцааж өгнө үү.',
    });
  };

  const handleRemove = (id: string) => {
    setReports((prev) => prev.filter((r) => r.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const section = (title: string, text: string) => (
    <div>
      <h5 className="text-xs font-bold uppercase text-slate-500 mb-1">{title}</h5>
      <p className="text-xs text-slate-800 whitespace-pre-wrap leading-relaxed">{text || '—'}</p>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {language === 'en' ? 'Student Lab Reports' : 'Сурагчдын лабораторийн тайлан'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'en'
                ? 'Students download their report from the Lab Notebook and send you the file. Open it here, grade it, and return the graded file.'
                : 'Сурагч тайлангаа Цахим дэвтрээс татаж файлаар илгээнэ. Та энд нээж дүгнээд, дүгнэсэн файлыг буцаана.'}
            </p>
          </div>
          <button
            onClick={() => fileInput.current?.click()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Open report files' : 'Тайлангийн файл нээх'}</span>
          </button>
          <input
            ref={fileInput}
            type="file"
            accept=".json,application/json"
            multiple
            className="hidden"
            aria-label={language === 'en' ? 'Open report files' : 'Тайлангийн файл нээх'}
            onChange={(e) => handleImport(e.target.files)}
          />
        </div>
        <p className="text-[11px] text-slate-500">
          {language === 'en'
            ? 'Reports stay only in this browser. Nothing is uploaded to a server.'
            : 'Тайлангууд зөвхөн энэ хөтөчид хадгалагдана. Сервер рүү юу ч илгээгдэхгүй.'}
        </p>
        {message && (
          <div className={`p-2.5 rounded-lg border text-xs ${message.ok ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-amber-50 border-amber-300 text-amber-900'}`}>
            {message.text}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
          {reports.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              {language === 'en' ? 'No reports opened yet.' : 'Одоогоор нээсэн тайлан алга.'}
            </div>
          ) : (
            reports.map((report) => (
              <div
                key={report.id}
                className={`rounded-lg border text-xs transition-colors ${
                  report.id === selectedId ? 'border-cyan-600 bg-cyan-50/40' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button onClick={() => setSelectedId(report.id)} className="w-full text-left p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>{report.date}</span>
                    <span className="text-cyan-700 font-semibold uppercase">
                      {statusLabel(report.status, language)}
                      {report.gradeScore ? ` · ${report.gradeScore}` : ''}
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 truncate">{report.studentName}</div>
                  <div className="text-slate-500 truncate mt-0.5">{report.experimentTitle}</div>
                </button>
                <div className="px-3 pb-2 text-right">
                  <button onClick={() => handleRemove(report.id)} className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-600">
                    <Trash2 className="w-3 h-3" />
                    <span>{language === 'en' ? 'Remove' : 'Устгах'}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
          {!selected ? (
            <div className="p-10 text-center text-xs text-slate-400">
              {language === 'en' ? 'Select a report to read and grade it.' : 'Унших, дүгнэх тайлангаа сонгоно уу.'}
            </div>
          ) : (
            <>
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs text-slate-500">
                  {selected.date}
                  {selected.chapterCode && <> · {language === 'en' ? 'Chapter' : 'Бүлэг'} {selected.chapterCode}</>}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{selected.experimentTitle}</h4>
                <div className="text-sm text-slate-600">{selected.studentName}</div>
                {selected.examScore && (
                  <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs text-cyan-900">
                    <span>{language === 'en' ? 'Exam Practice marks' : 'Шалгалтын дадлагын оноо'}:</span>
                    <strong className="tabular-nums">{selected.examScore}</strong>
                  </div>
                )}
              </div>

              {section(language === 'en' ? 'Aim' : 'Зорилго', selected.aim)}
              {section(language === 'en' ? 'Apparatus' : 'Багаж', selected.equipmentUsed)}

              {selected.measurements.length > 0 && (
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-700 text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="p-2">{language === 'en' ? 'Quantity' : 'Хэмжигдэхүүн'}</th>
                      <th className="p-2">1</th>
                      <th className="p-2">2</th>
                      <th className="p-2">3</th>
                      <th className="p-2">{language === 'en' ? 'Mean' : 'Дундаж'}</th>
                      <th className="p-2">{language === 'en' ? 'Unit' : 'Нэгж'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selected.measurements.map((row, i) => (
                      <tr key={i}>
                        <td className="p-2 font-sans">{row.parameter}</td>
                        <td className="p-2">{row.trial1}</td>
                        <td className="p-2">{row.trial2}</td>
                        <td className="p-2">{row.trial3}</td>
                        <td className="p-2 font-bold">{row.mean}</td>
                        <td className="p-2">{row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              )}

              {section(selected.examPaperId ? (language === 'en' ? 'Answers' : 'Хариултууд') : (language === 'en' ? 'Observations' : 'Ажиглалт'), selected.observations)}
              {section(language === 'en' ? 'Calculations' : 'Тооцоолол', selected.calculations)}
              {section(selected.examPaperId ? (language === 'en' ? 'Marks' : 'Оноо') : (language === 'en' ? 'Conclusion' : 'Дүгнэлт'), selected.conclusion)}
              {section(language === 'en' ? 'Evaluation' : 'Үнэлгээ', selected.evaluations)}

              {!!selected.whiteboardImages?.length && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase text-slate-500">{language === 'en' ? 'Whiteboard' : 'Самбар'}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selected.whiteboardImages.map((wb, i) => (
                      <figure key={`${wb.page}-${i}`} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                        <img src={wb.image} alt={`${language === 'en' ? 'Whiteboard' : 'Самбар'}: ${wb.page}`} className="w-full h-auto" />
                        <figcaption className="px-2.5 py-1.5 text-[11px] text-slate-600 border-t border-slate-100">{wb.page}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-slate-900">
                    {language === 'en' ? 'Grade with the AO3 skills' : 'AO3 чадвараар дүгнэх'}
                  </h5>
                  <span className="text-sm font-bold text-cyan-800">{total} / {maxTotal}</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {language === 'en'
                    ? 'This 0–5 scale is a simple classroom guide, not the official Cambridge mark scheme.'
                    : 'Энэ 0–5 оноо нь ангид хэрэглэх энгийн чиглүүлэг бөгөөд Cambridge-ийн албан ёсны үнэлгээ биш.'}
                </p>
                {ao3Skills.map((skill) => (
                  <label key={skill.id} className="flex items-center justify-between gap-3 text-xs text-slate-700">
                    <span>{language === 'en' ? skill.labelEn : skill.labelMn}</span>
                    <input
                      type="number"
                      min={0}
                      max={MAX_SKILL_SCORE}
                      step={1}
                      value={skillScores[skill.id] ?? 0}
                      onChange={(e) => handleSetScore(skill.id, parseInt(e.target.value, 10) || 0)}
                      className="w-16 px-2 py-1 bg-white border border-slate-300 rounded tabular-nums"
                    />
                  </label>
                ))}
                <label className="block text-xs text-slate-700">
                  <span className="block font-medium mb-1">{language === 'en' ? 'Teacher remarks' : 'Багшийн тэмдэглэл'}</span>
                  <textarea
                    rows={3}
                    value={selected.teacherRemarks ?? ''}
                    onChange={(e) => updateSelected({ teacherRemarks: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                  />
                </label>
                <button
                  onClick={handleSaveGrade}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Save grade and download file' : 'Дүн хадгалж файл татах'}</span>
                </button>
                {selected.status === 'graded' && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'en' ? `Graded: ${selected.gradeScore}` : `Дүгнэсэн: ${selected.gradeScore}`}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
