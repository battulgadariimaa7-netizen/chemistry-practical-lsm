import React, { useState, useEffect, useRef } from 'react';
import { Language, LabNotebookEntry, PracticalExperiment } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { chaptersData } from '../data/chapters';
import { getEquipmentName } from '../data/labLabels';
import { newMeasurementRow, notebookSamples } from '../data/notebookSamples';
import { downloadReport, readReportFile, statusLabel } from '../data/reportFiles';
import { sendReport } from '../data/reportServer';
import { pagePhotos } from '../data/pagePhotos';
import { PhotoCredit } from './PhotoCredit';
import {
  FileEdit,
  Save,
  Plus,
  Trash2,
  Printer,
  CheckCircle2,
  Clock,
  BookOpen,
  RotateCcw,
  Send,
  Upload
} from 'lucide-react';

interface DigitalLabNotebookProps {
  language: Language;
  preloadedExperiment?: PracticalExperiment | null;
  onPreloadUsed?: () => void;
}

type ExamExtras = Pick<LabNotebookEntry, 'examPaperId' | 'examScore' | 'whiteboardImages'>;
const ENTRIES_KEY = 'chem_lab_notebook_entries';

const DRAFT_KEY = 'chem_lab_notebook_draft';
const CUSTOM_TOPIC = 'custom';
const SAMPLE_PRACTICAL_ID = 'p1_1';

const allPracticals = chaptersData.flatMap((chapter) => chapter.practicals);

// Older notebooks stored only the title, sometimes in the form "Practical 1.1: ...".
const topicFromTitle = (title: string) => {
  if (!title.trim()) return '';
  const number = /^(?:Practical )?(\d+\.\d+)(?:-р туршилт)?:/.exec(title)?.[1];
  const match = allPracticals.find(
    (practical) => practical.titleEn === title || practical.titleMn === title || (number && practical.titleEn.startsWith(`${number} `))
  );
  return match?.id ?? CUSTOM_TOPIC;
};

const resolveTopic = (practicalId: string | undefined, title: string) =>
  practicalId === CUSTOM_TOPIC || allPracticals.some((practical) => practical.id === practicalId)
    ? (practicalId as string)
    : topicFromTitle(title);

const lessonTitle = (practical: PracticalExperiment, language: Language) => (language === 'en' ? practical.titleEn : practical.titleMn);
const lessonAim = (practical: PracticalExperiment, language: Language) => (language === 'en' ? practical.aimEn : practical.aimMn);
const lessonEquipment = (practical: PracticalExperiment, language: Language) =>
  practical.equipmentIds.map((id) => getEquipmentName(id, language)).join(', ');

const loadDraft = () => {
  try {
    const stored = localStorage.getItem(DRAFT_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const DigitalLabNotebook: React.FC<DigitalLabNotebookProps> = ({
  language,
  preloadedExperiment,
  onPreloadUsed,
}) => {
  const t = getTranslation(language);

  const sample = notebookSamples[language];
  const [initial] = useState(() => ({ ...sample, chapterCode: '01', date: new Date().toISOString().split('T')[0], ...loadDraft() }));
  const [studentName, setStudentName] = useState<string>(initial.studentName);
  const [date, setDate] = useState<string>(initial.date);
  const [experimentTitle, setExperimentTitle] = useState<string>(initial.experimentTitle);
  const [topicId, setTopicId] = useState<string>(() => resolveTopic(initial.practicalId, initial.experimentTitle));
  const [chapterCode, setChapterCode] = useState<string>(initial.chapterCode);
  const [aim, setAim] = useState<string>(initial.aim);
  const [equipmentUsed, setEquipmentUsed] = useState<string>(initial.equipmentUsed);
  const [measurements, setMeasurements] = useState<LabNotebookEntry['measurements']>(initial.measurements);
  const [observations, setObservations] = useState<string>(initial.observations);
  const [calculations, setCalculations] = useState<string>(initial.calculations);
  const [conclusion, setConclusion] = useState<string>(initial.conclusion);
  const [evaluations, setEvaluations] = useState<string>(initial.evaluations);
  const [savedEntries, setSavedEntries] = useState<LabNotebookEntry[]>([]);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [activeEntry, setActiveEntry] = useState<LabNotebookEntry | null>(null);
  // The marks and whiteboard pictures of a report copied from an exam paper.
  const [examExtras, setExamExtras] = useState<ExamExtras>(() => ({
    examPaperId: initial.examPaperId,
    examScore: initial.examScore,
    whiteboardImages: initial.whiteboardImages,
  }));
  const gradedFileInput = useRef<HTMLInputElement>(null);

  // Keep what the student has written when they visit another page or reload.
  useEffect(() => {
    try {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({ studentName, date, experimentTitle, practicalId: topicId, chapterCode, aim, equipmentUsed, measurements, observations, calculations, conclusion, evaluations, ...examExtras })
      );
    } catch {
      // Storage can be full or blocked; the draft then lasts only while this page is open.
    }
  }, [studentName, date, experimentTitle, topicId, chapterCode, aim, equipmentUsed, measurements, observations, calculations, conclusion, evaluations, examExtras]);

  // While the worked example is untouched, follow the language switch.
  useEffect(() => {
    const other = notebookSamples[language === 'en' ? 'mn' : 'en'];
    if (preloadedExperiment || experimentTitle !== other.experimentTitle) return;
    setStudentName((name) => (name === other.studentName ? sample.studentName : name));
    setExperimentTitle(sample.experimentTitle);
    setAim(sample.aim);
    setEquipmentUsed(sample.equipmentUsed);
    setMeasurements(sample.measurements);
    setObservations(sample.observations);
    setCalculations(sample.calculations);
    setConclusion(sample.conclusion);
    setEvaluations(sample.evaluations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // A chosen lesson's title and its unedited aim and apparatus follow the language switch.
  useEffect(() => {
    const practical = allPracticals.find((item) => item.id === topicId);
    if (!practical) return;
    const otherLanguage: Language = language === 'en' ? 'mn' : 'en';
    setExperimentTitle(lessonTitle(practical, language));
    setAim((text) => (text === lessonAim(practical, otherLanguage) ? lessonAim(practical, language) : text));
    setEquipmentUsed((text) => (text === lessonEquipment(practical, otherLanguage) ? lessonEquipment(practical, language) : text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // Sync when preloaded from PracticalLessons
  useEffect(() => {
    if (preloadedExperiment) {
      setTopicId(preloadedExperiment.id);
      setExperimentTitle(lessonTitle(preloadedExperiment, language));
      setChapterCode(preloadedExperiment.chapterCode);
      setAim(lessonAim(preloadedExperiment, language));
      setEquipmentUsed(lessonEquipment(preloadedExperiment, language));
      setObservations(
        language === 'en'
          ? preloadedExperiment.observationsEn.join('; ')
          : preloadedExperiment.observationsMn.join('; ')
      );
      setCalculations(
        language === 'en'
          ? preloadedExperiment.calculationsTemplate.formulaEn + '\n' + preloadedExperiment.calculationsTemplate.steps.map(s => s.en).join('\n')
          : preloadedExperiment.calculationsTemplate.formulaMn + '\n' + preloadedExperiment.calculationsTemplate.steps.map(s => s.mn).join('\n')
      );
      setConclusion(language === 'en' ? preloadedExperiment.conclusionEn : preloadedExperiment.conclusionMn);
      setEvaluations(
        language === 'en'
          ? preloadedExperiment.evaluationEn.join('\n')
          : preloadedExperiment.evaluationMn.join('\n')
      );
      // Apply once, so coming back to this page later does not overwrite the student's work.
      onPreloadUsed?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preloadedExperiment]);

  // Load from LocalStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(ENTRIES_KEY);
      if (stored) {
        setSavedEntries(JSON.parse(stored));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleAddMeasurementRow = () => {
    setMeasurements((prev) => [...prev, newMeasurementRow(language)]);
  };

  const handleUpdateMeasurement = (
    index: number,
    field: 'parameter' | 'trial1' | 'trial2' | 'trial3' | 'unit',
    value: string
  ) => {
    setMeasurements((prev) => {
      const copy = [...prev];
      const row = { ...copy[index], [field]: value };
      const n1 = parseFloat(row.trial1) || 0;
      const n2 = parseFloat(row.trial2) || 0;
      const n3 = parseFloat(row.trial3) || 0;
      row.mean = ((n1 + n2 + n3) / 3).toFixed(2);
      copy[index] = row;
      return copy;
    });
  };

  const handleRemoveMeasurement = (index: number) => {
    setMeasurements((prev) => prev.filter((_, i) => i !== index));
  };

  const showStatus = (text: string) => {
    setSaveStatus(text);
    setTimeout(() => setSaveStatus(null), 4000);
  };

  const storeEntries = (updated: LabNotebookEntry[]) => {
    setSavedEntries(updated);
    try {
      localStorage.setItem(ENTRIES_KEY, JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const buildEntry = (status: LabNotebookEntry['status']): LabNotebookEntry => ({
    id: String(Date.now()),
    studentName,
    date,
    experimentTitle,
    practicalId: topicId,
    chapterCode,
    aim,
    equipmentUsed,
    measurements,
    observations,
    calculations,
    conclusion,
    evaluations,
    status,
    ...(examExtras.examPaperId ? examExtras : {}),
  });

  // The worked example belongs to practical 1.1, so it goes when another lesson is chosen. The student's own notes stay.
  const clearUntouchedSample = () => {
    const samples = [notebookSamples.en, notebookSamples.mn];
    setMeasurements((rows) =>
      samples.some((item) => JSON.stringify(item.measurements) === JSON.stringify(rows))
        ? [{ ...newMeasurementRow(language), parameter: '' }]
        : rows
    );
    setObservations((text) => (samples.some((item) => item.observations === text) ? '' : text));
    setCalculations((text) => (samples.some((item) => item.calculations === text) ? '' : text));
    setConclusion((text) => (samples.some((item) => item.conclusion === text) ? '' : text));
    setEvaluations((text) => (samples.some((item) => item.evaluations === text) ? '' : text));
  };

  const applyLesson = (practical: PracticalExperiment) => {
    setExamExtras({});
    setTopicId(practical.id);
    setChapterCode(practical.chapterCode);
    setExperimentTitle(lessonTitle(practical, language));
    setAim(lessonAim(practical, language));
    setEquipmentUsed(lessonEquipment(practical, language));
    if (practical.id !== SAMPLE_PRACTICAL_ID) clearUntouchedSample();
  };

  const handleChooseTopic = (value: string) => {
    const practical = allPracticals.find((item) => item.id === value);
    if (practical) {
      applyLesson(practical);
      return;
    }
    if (topicId !== CUSTOM_TOPIC) setExperimentTitle('');
    setTopicId(value);
  };

  const handleChooseChapter = (code: string) => {
    setChapterCode(code);
    if (topicId === CUSTOM_TOPIC) return;
    const practicals = chaptersData.find((chapter) => chapter.code === code)?.practicals ?? [];
    if (practicals.length === 1) {
      applyLesson(practicals[0]);
    } else {
      setTopicId('');
      setExperimentTitle('');
    }
  };

  const handleSaveToLocalStorage = () => {
    storeEntries([buildEntry('draft'), ...savedEntries]);
    showStatus(language === 'en' ? 'Report saved successfully!' : 'Тайлан амжилттай хадгалагдлаа!');
  };

  // The report goes straight to the teacher's report inbox. If it cannot be reached (no internet, for example),
  // the report is downloaded as a file for the student to pass on.
  const [sending, setSending] = useState(false);
  const handleSendToTeacher = async () => {
    const name = studentName.trim();
    if (!name || [notebookSamples.en.studentName, notebookSamples.mn.studentName].includes(name)) {
      showStatus(language === 'en' ? 'Write your own name first, so your teacher knows whose report it is.' : 'Эхлээд өөрийн нэрээ бичнэ үү, тэгвэл багш хэний тайлан болохыг мэднэ.');
      return;
    }
    const entry = buildEntry('submitted');
    setSending(true);
    try {
      await sendReport(entry);
      storeEntries([entry, ...savedEntries]);
      showStatus(language === 'en' ? 'Sent. Your teacher can now see this report.' : 'Илгээгдлээ. Багш таны тайланг одоо харах боломжтой.');
      return;
    } catch {
      // Offline, or the inbox is not reachable: fall back to the file below.
    } finally {
      setSending(false);
    }
    storeEntries([entry, ...savedEntries]);
    downloadReport(entry);
    showStatus(
      language === 'en'
        ? 'Your teacher’s inbox could not be reached, so the report file was downloaded. Send this file to your teacher.'
        : 'Багшийн хайрцагт хүрч чадсангүй тул тайлангийн файл татагдлаа. Энэ файлыг багшдаа илгээнэ үү.'
    );
  };

  const handleOpenGradedFile = async (files: FileList | null) => {
    if (!files || !files[0]) return;
    try {
      const graded = await readReportFile(files[0]);
      storeEntries([graded, ...savedEntries.filter((e) => e.id !== graded.id)]);
      handleLoadEntry(graded);
      showStatus(language === 'en' ? 'Graded report opened.' : 'Дүгнэсэн тайлан нээгдлээ.');
    } catch {
      showStatus(
        language === 'en'
          ? 'This file could not be read. Use the file your teacher returned.'
          : 'Энэ файлыг уншиж чадсангүй. Багшийн буцаасан файлыг ашиглана уу.'
      );
    }
    if (gradedFileInput.current) gradedFileInput.current.value = '';
  };

  const handleClearForm = () => {
    setActiveEntry(null);
    setExamExtras({});
    setExperimentTitle('');
    setTopicId('');
    setChapterCode('');
    setAim('');
    setEquipmentUsed('');
    setMeasurements([{ ...newMeasurementRow(language), parameter: '' }]);
    setObservations('');
    setCalculations('');
    setConclusion('');
    setEvaluations('');
  };

  const handleLoadEntry = (entry: LabNotebookEntry) => {
    setActiveEntry(entry);
    setStudentName(entry.studentName);
    setDate(entry.date);
    setExperimentTitle(entry.experimentTitle);
    setTopicId(resolveTopic(entry.practicalId, entry.experimentTitle));
    setChapterCode(entry.chapterCode);
    setAim(entry.aim);
    setEquipmentUsed(entry.equipmentUsed);
    setMeasurements(entry.measurements);
    setObservations(entry.observations);
    setCalculations(entry.calculations);
    setConclusion(entry.conclusion);
    setEvaluations(entry.evaluations);
    setExamExtras({ examPaperId: entry.examPaperId, examScore: entry.examScore, whiteboardImages: entry.whiteboardImages });
  };

  return (
    <div className="space-y-8">
      {/* Top Banner and Actions */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {language === 'en' ? 'Cambridge Scientific Recording Standards' : 'Шинжлэх ухааны тэмдэглэлийн стандарт'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.notebook.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.notebook.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={handleClearForm}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.notebook.clear}</span>
            </button>

            <button
              onClick={handleSendToTeacher}
              disabled={sending}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors border disabled:opacity-60 text-white bg-emerald-700 hover:bg-emerald-800 border-emerald-700"
            >
              <Send className="w-3.5 h-3.5" />
              <span>
                {sending ? (language === 'en' ? 'Sending…' : 'Илгээж байна…') : (language === 'en' ? 'Send to teacher' : 'Багшид илгээх')}
              </span>
            </button>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.notebook.exportPdf}</span>
            </button>

            <button
              onClick={handleSaveToLocalStorage}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{t.notebook.saveDraft}</span>
            </button>
          </div>
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          {language === 'en'
            ? '«Send to teacher» puts your report, with your whiteboard pages, straight into your teacher’s report inbox. With no internet, it is downloaded as a file instead.'
            : '«Багшид илгээх» нь тайланг тань самбарын зурагтай нь хамт багшийн тайлангийн хайрцаг руу шууд илгээнэ. Интернэтгүй бол оронд нь файл болж татагдана.'}
        </p>

        {saveStatus && (
          <div className="mt-3 p-2 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{saveStatus}</span>
          </div>
        )}
      </div>

      {/* Lab Notebook Workspace Showcase */}
      <div className="bg-slate-900 text-white rounded-xl overflow-hidden border border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 print:hidden">
        <div className="w-full md:w-1/2 space-y-3">
          <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
            {language === 'en' ? 'Cambridge Investigation Standards' : 'Кембрижийн туршилтын тэмдэглэлийн стандарт'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {language === 'en' ? 'Authentic Laboratory Record Keeping' : 'Лабораторийн үр дүн, тооцооллыг үнэн зөв хөтлөх'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === 'en'
              ? 'Every practical session must have date, precise apparatus calibrations, raw measurement tables, significant figures, and evidence-based scientific evaluations.'
              : 'Туршилт бүрт огноо, ашигласан багажийн нарийвчлал, давтан хэмжилтийн хүснэгт, молийн тооцоо болон алдааны дүгнэлтийг бүрэн бичиж хадгална.'}
          </p>
          <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 text-xs text-cyan-200">
            {language === 'en'
              ? 'AO3 Skill: Record raw observations in pen immediately; never overwrite with corrected values.'
              : 'AO3 Чадвар: Хэмжилтийг тухайн агшинд нь шууд хүснэгтэд тэмдэглэнэ; алдааг засварлахдаа дарахгүйгээр дахин хэмжинэ.'}
          </div>
        </div>

        <figure className="w-full md:w-1/2 space-y-1">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-slate-700 shadow-inner">
            <img src={pagePhotos.labNotebook.src} alt={language === 'en' ? pagePhotos.labNotebook.altEn : pagePhotos.labNotebook.altMn} className="w-full h-full object-cover" />
          </div>
          <PhotoCredit photo={pagePhotos.labNotebook} language={language} cropped={pagePhotos.labNotebook.cropped} className="text-slate-400" />
        </figure>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start print:block">

        {/* Main Practical Report Sheet (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6 print:border-0 print:shadow-none print:p-0">
          {/* Graded feedback returned by the teacher */}
          {activeEntry?.status === 'graded' && (
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1">
              <div className="font-bold">
                {language === 'en' ? 'Teacher grade' : 'Багшийн дүн'}: {activeEntry.gradeScore}
              </div>
              {activeEntry.teacherRemarks && <p className="whitespace-pre-wrap">{activeEntry.teacherRemarks}</p>}
            </div>
          )}

          {/* A report copied from an exam paper */}
          {examExtras.examPaperId && (
            <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-xs text-cyan-950 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold">{language === 'en' ? 'Copied from Exam Practice' : 'Шалгалтын дадлагаас хуулсан'}</span>
              {examExtras.examScore && (
                <span className="px-2 py-0.5 rounded-full bg-white border border-cyan-200 font-bold tabular-nums">
                  {language === 'en' ? 'Marks' : 'Оноо'}: {examExtras.examScore}
                </span>
              )}
            </div>
          )}

          {/* Metadata Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-200">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {t.notebook.studentName}
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {t.notebook.date}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="notebook-chapter" className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {language === 'en' ? 'Chapter' : 'Бүлэг'}
              </label>
              <select
                id="notebook-chapter"
                value={chapterCode}
                onChange={(e) => handleChooseChapter(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
              >
                <option value="">{language === 'en' ? 'Select a chapter' : 'Бүлэг сонгоно уу'}</option>
                {chaptersData.map((chapter) => (
                  <option key={chapter.code} value={chapter.code}>
                    {chapter.code} · {language === 'en' ? chapter.titleEn : chapter.titleMn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Title and Aim */}
          <div className="space-y-4">
            <div>
              <label htmlFor="notebook-topic" className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {t.notebook.experimentTitle}
              </label>
              <select
                id="notebook-topic"
                value={topicId}
                onChange={(e) => handleChooseTopic(e.target.value)}
                className={`w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-bold text-slate-900 ${topicId === CUSTOM_TOPIC ? 'print:hidden' : ''}`}
              >
                <option value="">{language === 'en' ? 'Select a topic' : 'Сэдэв сонгоно уу'}</option>
                {(chaptersData.find((chapter) => chapter.code === chapterCode)?.practicals ?? allPracticals).map((practical) => (
                  <option key={practical.id} value={practical.id}>
                    {lessonTitle(practical, language)}
                  </option>
                ))}
                <option value={CUSTOM_TOPIC}>{language === 'en' ? 'Other topic (type it in)' : 'Бусад сэдэв (гараар бичих)'}</option>
              </select>
              {topicId === CUSTOM_TOPIC && (
                <input
                  type="text"
                  value={experimentTitle}
                  onChange={(e) => setExperimentTitle(e.target.value)}
                  aria-label={t.notebook.experimentTitle}
                  placeholder={language === 'en' ? 'Type the experiment title' : 'Туршилтын сэдвээ бичнэ үү'}
                  className="mt-2 w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-bold text-slate-900"
                />
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {t.notebook.aim}
              </label>
              <textarea
                rows={2}
                value={aim}
                onChange={(e) => setAim(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {t.notebook.equipment}
              </label>
              <input
                type="text"
                value={equipmentUsed}
                onChange={(e) => setEquipmentUsed(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-700"
              />
            </div>
          </div>

          {/* Quantitative Measurements Table */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase text-slate-500">
                {t.notebook.measurements}
              </label>
              <button
                onClick={handleAddMeasurementRow}
                className="inline-flex items-center gap-1 text-xs text-cyan-700 font-semibold hover:underline print:hidden"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Add Row' : 'Мөр нэмэх'}</span>
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-xs text-left tabular-nums">
                <thead className="bg-slate-50 text-slate-700 text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">{language === 'en' ? 'Parameter / Quantity' : 'Хэмжигдэхүүн'}</th>
                    <th className="p-2.5">{language === 'en' ? 'Trial 1' : 'Туршилт 1'}</th>
                    <th className="p-2.5">{language === 'en' ? 'Trial 2' : 'Туршилт 2'}</th>
                    <th className="p-2.5">{language === 'en' ? 'Trial 3' : 'Туршилт 3'}</th>
                    <th className="p-2.5 font-bold text-cyan-900">{language === 'en' ? 'Mean' : 'Дундаж'}</th>
                    <th className="p-2.5">{language === 'en' ? 'Unit' : 'Нэгж'}</th>
                    <th className="p-2.5 text-right print:hidden">{language === 'en' ? 'Del' : 'Устгах'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {measurements.map((row, i) => (
                    <tr key={i}>
                      <td className="p-2">
                        <input
                          type="text"
                          value={row.parameter}
                          onChange={(e) => handleUpdateMeasurement(i, 'parameter', e.target.value)}
                          className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-xs print:hidden"
                        />
                        <span className="hidden print:inline font-sans">{row.parameter}</span>
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={row.trial1}
                          onChange={(e) => handleUpdateMeasurement(i, 'trial1', e.target.value)}
                          className="w-16 px-1.5 py-1 bg-white border border-slate-200 rounded text-xs tabular-nums"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={row.trial2}
                          onChange={(e) => handleUpdateMeasurement(i, 'trial2', e.target.value)}
                          className="w-16 px-1.5 py-1 bg-white border border-slate-200 rounded text-xs tabular-nums"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={row.trial3}
                          onChange={(e) => handleUpdateMeasurement(i, 'trial3', e.target.value)}
                          className="w-16 px-1.5 py-1 bg-white border border-slate-200 rounded text-xs tabular-nums"
                        />
                      </td>
                      <td className="p-2 font-bold text-cyan-900 tabular-nums">
                        {row.mean}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={row.unit}
                          onChange={(e) => handleUpdateMeasurement(i, 'unit', e.target.value)}
                          className="w-12 px-1 py-1 bg-white border border-slate-200 rounded text-xs"
                        />
                      </td>
                      <td className="p-2 text-right print:hidden">
                        <button
                          onClick={() => handleRemoveMeasurement(i)}
                          className="text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-3.5 h-3.5 inline" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Qualitative Observations */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              {t.notebook.observations}
            </label>
            <textarea
              rows={3}
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 leading-relaxed font-sans"
            />
          </div>

          {/* Calculations & Formulae */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              {t.notebook.calculations}
            </label>
            <textarea
              rows={4}
              value={calculations}
              onChange={(e) => setCalculations(e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 text-cyan-300 text-xs rounded-lg leading-relaxed"
            />
          </div>

          {/* Conclusion & Evaluation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {t.notebook.conclusion}
              </label>
              <textarea
                rows={3}
                value={conclusion}
                onChange={(e) => setConclusion(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                {t.notebook.evaluations}
              </label>
              <textarea
                rows={3}
                value={evaluations}
                onChange={(e) => setEvaluations(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800"
              />
            </div>
          </div>

          {/* Whiteboard pages copied with an exam paper */}
          {!!examExtras.whiteboardImages?.length && (
            <div className="space-y-2">
              <h4 className="block text-xs font-bold uppercase text-slate-500">{language === 'en' ? 'Whiteboard' : 'Самбар'}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {examExtras.whiteboardImages.map((wb, i) => (
                  <figure key={`${wb.page}-${i}`} className="border border-slate-200 rounded-lg overflow-hidden bg-white break-inside-avoid">
                    <img src={wb.image} alt={`${language === 'en' ? 'Whiteboard' : 'Самбар'}: ${wb.page}`} className="w-full h-auto" />
                    <figcaption className="flex items-center justify-between gap-2 px-2.5 py-1.5 text-[11px] text-slate-600 border-t border-slate-100">
                      <span>{wb.page}</span>
                      <button
                        type="button"
                        onClick={() => setExamExtras((x) => ({ ...x, whiteboardImages: x.whiteboardImages?.filter((_, j) => j !== i) }))}
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-rose-600 print:hidden"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>{language === 'en' ? 'Leave out' : 'Хасах'}</span>
                      </button>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Saved Reports / Previous Submissions (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4 print:hidden">
          <button
            onClick={() => gradedFileInput.current?.click()}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition-colors border border-cyan-200"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Open graded file from teacher' : 'Багшийн дүгнэсэн файлыг нээх'}</span>
          </button>
          <input
            ref={gradedFileInput}
            type="file"
            accept=".json,application/json"
            className="hidden"
            aria-label={language === 'en' ? 'Open graded file from teacher' : 'Багшийн дүгнэсэн файлыг нээх'}
            onChange={(e) => handleOpenGradedFile(e.target.files)}
          />

          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {t.notebook.savedEntries}
            </h3>
            <span className="text-xs text-slate-500">
              {savedEntries.length} {language === 'en' ? 'saved' : 'хадгалсан'}
            </span>
          </div>

          {savedEntries.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              {language === 'en'
                ? 'No saved notebook entries yet. Fill the report and click "Save to Local Notebook".'
                : 'Одоогоор хадгалсан тэмдэглэл байхгүй байна.'}
            </div>
          ) : (
            <div className="space-y-2.5 max-h-[700px] overflow-y-auto">
              {savedEntries.map((ent) => (
                <div
                  key={ent.id}
                  onClick={() => handleLoadEntry(ent)}
                  className="p-3.5 rounded-lg border border-slate-200 hover:border-cyan-600 hover:bg-cyan-50/20 cursor-pointer transition-colors text-xs"
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>{ent.date}</span>
                    <span className="text-cyan-700 font-semibold uppercase">
                      {statusLabel(ent.status, language)}
                      {ent.gradeScore ? ` · ${ent.gradeScore}` : ''}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 truncate">
                    {ent.experimentTitle}
                  </h4>
                  <div className="text-slate-500 mt-1 truncate">
                    {ent.studentName}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
