import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Language, LabNotebookEntry } from '../types/chemistry';
import { MAX_SKILL_SCORE, ao3Skills, downloadReport, readReportFile, statusLabel } from '../data/reportFiles';
import {
  getReport,
  getServerUrl,
  getTeacherKey,
  isValidServerUrl,
  listReports,
  saveGrade,
  setServerUrl,
  setTeacherKey,
  studentLink,
} from '../data/reportServer';
import appsScriptCode from '../reportServer/Code.gs?raw';
import { useStoredState } from '../hooks/useStoredState';
import { CheckCircle2, Copy, Download, FileSpreadsheet, Link2, RefreshCw, Trash2, Upload } from 'lucide-react';

interface StudentReportsProps {
  language: Language;
}

/** A report kept in this browser. Reports from the Google Sheet keep their pictures there and load them when opened. */
type StoredReport = LabNotebookEntry & { fromSheet?: boolean; pictureCount?: number; received?: string };
type Pictures = NonNullable<LabNotebookEntry['whiteboardImages']>;

/** The report as the notebook file format holds it, without the inbox's own notes. */
const plainEntry = (report: StoredReport, pictures?: Pictures): LabNotebookEntry => {
  const { fromSheet: _fromSheet, pictureCount: _pictureCount, received: _received, ...entry } = report;
  return pictures?.length ? { ...entry, whiteboardImages: pictures } : entry;
};

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers, or the page is not allowed to use the clipboard.
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
};

const setupSteps = {
  en: [
    'Open sheets.new to make a new Google Sheet, for example “Chemistry reports”.',
    'In the Sheet choose Extensions → Apps Script. Delete the sample code, paste the code copied with the button below, and press Save.',
    'Choose setup in the function list at the top and press Run. Allow access with your Google account. If Google says the app is not verified, choose Advanced → Go to … (unsafe): it is your own script. Copy the teacher key that appears (it is also in the Execution log).',
    'Press Deploy → New deployment → Select type: Web app. Set Execute as: Me and Who has access: Anyone, press Deploy, and copy the Web app URL that ends with /exec.',
    'Paste the URL and the key above and press Save. Then copy the student link and send it to your class: each student opens it once on the device they use.',
  ],
  mn: [
    'sheets.new хаягаар шинэ Google Sheets хүснэгт үүсгэнэ (жишээ нь «Химийн тайлан»).',
    'Хүснэгтийн Extensions → Apps Script цэсийг нээнэ. Жишээ кодыг устгаад доорх товчоор хуулсан кодыг буулгаж, Save дарна.',
    'Дээд талын функцийн жагсаалтаас setup-г сонгоод Run дарна. Google бүртгэлээрээ зөвшөөрөл өгнө. Google «апп баталгаажаагүй» гэвэл Advanced → Go to … (unsafe)-г сонгоно: энэ бол таны өөрийн скрипт. Гарч ирсэн багшийн түлхүүрийг хуулж авна (Execution log-д ч бичигдэнэ).',
    'Deploy → New deployment → Select type: Web app-ийг сонгоно. Execute as: Me, Who has access: Anyone гэж тохируулаад Deploy дарж, /exec-ээр төгсөх Web app URL-ийг хуулна.',
    'URL болон түлхүүрийг дээрх талбарт буулгаад «Хадгалах» дарна. Дараа нь сурагчийн холбоосыг хуулж ангидаа илгээнэ: сурагч бүр ашигладаг төхөөрөмж дээрээ нэг удаа нээхэд хангалттай.',
  ],
};

export const StudentReports: React.FC<StudentReportsProps> = ({ language }) => {
  const en = language === 'en';
  const [reports, setReports] = useStoredState<StoredReport[]>('chem_lab_teacher_reports', []);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [hidden, setHidden] = useStoredState<string[]>('chem_lab_teacher_hidden_reports', []);
  const reportsRef = useRef(reports);
  reportsRef.current = reports;
  const hiddenRef = useRef(hidden);
  hiddenRef.current = hidden;

  // The teacher's Google Sheet inbox. Pictures are kept in memory only, so they never fill the browser's storage.
  const [inbox, setInbox] = useState(() => ({ url: getServerUrl(), key: getTeacherKey() }));
  const [urlInput, setUrlInput] = useState(inbox.url);
  const [keyInput, setKeyInput] = useState(inbox.key);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pictures, setPictures] = useState<Record<string, Pictures>>({});
  const [pictureError, setPictureError] = useState<string | null>(null);
  const [keyRejected, setKeyRejected] = useState(false);
  const connected = !!(inbox.url && inbox.key);

  const selected = reports.find((r) => r.id === selectedId) ?? null;
  const skillScores = selected?.skillScores ?? {};
  const total = ao3Skills.reduce((sum, skill) => sum + (skillScores[skill.id] ?? 0), 0);
  const maxTotal = ao3Skills.length * MAX_SKILL_SCORE;
  const boards = selected ? (selected.whiteboardImages ?? pictures[selected.id]) : undefined;
  const waitingForPictures = !!selected?.fromSheet && !!selected.pictureCount && !boards && pictureError !== selected.id;

  const replyError = (error?: string) =>
    error === 'key'
      ? en
        ? 'The teacher key is not right. Copy it again from the Apps Script (run setup) and press Save.'
        : 'Багшийн түлхүүр буруу байна. Apps Script-ээс (setup ажиллуулж) дахин хуулаад «Хадгалах» дарна уу.'
      : en
        ? `The Google Sheet answered with an error${error ? ` (${error})` : ''}.`
        : `Google Sheets алдаа буцаалаа${error ? ` (${error})` : ''}.`;
  const unreachable = en
    ? 'The Google Sheet could not be reached. Check the internet and the Web app address.'
    : 'Google Sheets-тэй холбогдож чадсангүй. Интернэт болон Web app хаягаа шалгана уу.';

  const loadFromSheet = useCallback(async () => {
    if (!inbox.url || !inbox.key) return;
    setLoading(true);
    try {
      const reply = await listReports(inbox.url, inbox.key);
      setKeyRejected(reply.error === 'key');
      if (!reply.ok || !reply.reports) {
        setMessage({ ok: false, text: replyError(reply.error) });
        return;
      }
      const skip = new Set(hiddenRef.current);
      const incoming = reply.reports.filter((r) => !skip.has(r.id));
      const known = new Set(reportsRef.current.map((r) => r.id));
      const added = incoming.filter((r) => !known.has(r.id)).length;
      setReports((prev) => {
        const local = new Map(prev.map((r) => [r.id, r]));
        const fresh = incoming.map((r): StoredReport => {
          const { whiteboardImages: _pictures, ...report } = r;
          const mine = local.get(r.id);
          // A grade saved here but not yet in the Sheet, or marks being entered, are kept.
          if (mine && r.status !== 'graded' && (mine.status === 'graded' || mine.skillScores || mine.teacherRemarks)) {
            return { ...report, fromSheet: true, status: mine.status, gradeScore: mine.gradeScore, teacherRemarks: mine.teacherRemarks, skillScores: mine.skillScores };
          }
          return { ...report, fromSheet: true };
        });
        const ids = new Set(fresh.map((r) => r.id));
        return [...fresh, ...prev.filter((r) => !ids.has(r.id))];
      });
      setMessage({
        ok: true,
        text: en
          ? `${incoming.length} report(s) in your Google Sheet${added ? `, ${added} new` : ''}.`
          : `Google Sheets-д ${incoming.length} тайлан байна${added ? `, үүнээс ${added} нь шинэ` : ''}.`,
      });
    } catch {
      setMessage({ ok: false, text: unreachable });
    } finally {
      setLoading(false);
    }
  }, [inbox, en, setReports]);

  // New reports are fetched each time the teacher opens this tab or changes the connection.
  useEffect(() => {
    loadFromSheet();
  }, [loadFromSheet]);

  // Whiteboard pictures of a Sheet report are fetched when the report is opened.
  useEffect(() => {
    if (!selected?.fromSheet || !selected.pictureCount || pictures[selected.id] || !inbox.url || !inbox.key) return;
    const id = selected.id;
    let stale = false;
    getReport(inbox.url, inbox.key, id)
      .then((reply) => {
        if (stale) return;
        if (reply.ok && reply.report) setPictures((prev) => ({ ...prev, [id]: reply.report?.whiteboardImages ?? [] }));
        else setPictureError(id);
      })
      .catch(() => {
        if (!stale) setPictureError(id);
      });
    return () => {
      stale = true;
    };
  }, [selected?.id, selected?.fromSheet, selected?.pictureCount, pictures, inbox]);

  const handleSaveInbox = () => {
    const url = urlInput.trim();
    const key = keyInput.trim();
    if (url && !isValidServerUrl(url)) {
      setMessage({
        ok: false,
        text: en
          ? 'Paste the Web app URL from Deploy: it starts with https://script.google.com/macros/s/ and ends with /exec.'
          : 'Deploy хийхэд гарсан Web app URL-ийг буулгана уу: https://script.google.com/macros/s/-ээр эхэлж /exec-ээр төгсдөг.',
      });
      return;
    }
    setServerUrl(url);
    setTeacherKey(key);
    setInbox({ url, key });
    setPictureError(null);
    if (url && !key) {
      setMessage({ ok: false, text: en ? 'Saved. Add the teacher key too, to read the reports.' : 'Хадгалагдлаа. Тайланг уншихын тулд багшийн түлхүүрийг бас оруулна уу.' });
    } else if (!url) {
      setMessage({ ok: true, text: en ? 'Disconnected from the Google Sheet.' : 'Google Sheets-ээс салгалаа.' });
    }
  };

  const handleCopy = async (text: string, what: 'link' | 'code') => {
    const ok = await copyText(text);
    setMessage(
      ok
        ? {
            ok: true,
            text:
              what === 'link'
                ? en
                  ? 'Student link copied. Send it to your class, for example in the class group chat.'
                  : 'Сурагчийн холбоос хуулагдлаа. Ангийнхаа группт илгээнэ үү.'
                : en
                  ? 'Apps Script code copied. Paste it in Extensions → Apps Script.'
                  : 'Apps Script код хуулагдлаа. Extensions → Apps Script-д буулгана уу.',
          }
        : { ok: false, text: en ? 'Copying is blocked in this browser. Select the text and copy it by hand.' : 'Энэ хөтөч хуулахыг хориглосон байна. Текстийг сонгоод гараар хуулна уу.' }
    );
  };

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

  const handleSaveGrade = async () => {
    if (!selected) return;
    const graded: StoredReport = { ...selected, status: 'graded', gradeScore: `${total}/${maxTotal}` };
    updateSelected(graded);
    if (!selected.fromSheet) {
      downloadReport(plainEntry(graded));
      setMessage({
        ok: true,
        text: en ? 'Grade saved. The downloaded file can now be returned to the student.' : 'Дүн хадгалагдлаа. Татагдсан файлыг сурагчид буцааж өгнө үү.',
      });
      return;
    }
    if (!connected) {
      setMessage({ ok: false, text: en ? 'Grade saved in this browser. Connect the Google Sheet to save it there too.' : 'Дүн энэ хөтөчид хадгалагдлаа. Google Sheets-д бас хадгалахын тулд холбогдоно уу.' });
      return;
    }
    setSaving(true);
    try {
      const reply = await saveGrade(inbox.url, inbox.key, graded);
      setMessage(
        reply.ok
          ? { ok: true, text: en ? 'Grade saved in this browser and in your Google Sheet.' : 'Дүн энэ хөтөч болон Google Sheets-д хадгалагдлаа.' }
          : { ok: false, text: `${en ? 'Grade saved in this browser only.' : 'Дүн зөвхөн энэ хөтөчид хадгалагдлаа.'} ${replyError(reply.error)}` }
      );
    } catch {
      setMessage({ ok: false, text: `${en ? 'Grade saved in this browser only.' : 'Дүн зөвхөн энэ хөтөчид хадгалагдлаа.'} ${unreachable}` });
    } finally {
      setSaving(false);
    }
  };

  // Removed Sheet reports stay hidden here, so the next load does not bring them back. They stay in the Sheet.
  const handleRemove = (id: string) => {
    if (reports.find((r) => r.id === id)?.fromSheet) setHidden((prev) => [...prev.filter((h) => h !== id), id]);
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
              {connected
                ? en
                  ? 'Students press «Send to teacher» in the Lab Notebook and their report arrives here from your Google Sheet. Report files can still be opened too.'
                  : 'Сурагч Цахим дэвтрийн «Багшид илгээх» товчийг дарахад тайлан нь таны Google Sheets-ээр дамжин энд ирнэ. Тайлангийн файл нээх боломж хэвээр.'
                : en
                  ? 'Students download their report from the Lab Notebook and send you the file. Open it here, grade it, and return the graded file.'
                  : 'Сурагч тайлангаа Цахим дэвтрээс татаж файлаар илгээнэ. Та энд нээж дүгнээд, дүгнэсэн файлыг буцаана.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {connected && (
              <button
                onClick={loadFromSheet}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors disabled:opacity-60"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>{loading ? (en ? 'Loading…' : 'Ачаалж байна…') : en ? 'Load new reports' : 'Шинэ тайлан татах'}</span>
              </button>
            )}
            <button
              onClick={() => fileInput.current?.click()}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                connected ? 'text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200' : 'text-white bg-cyan-700 hover:bg-cyan-800'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{en ? 'Open report files' : 'Тайлангийн файл нээх'}</span>
            </button>
          </div>
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
          {connected
            ? en
              ? 'Reports are kept in your own Google Sheet, and grades are saved back to it. Only someone with the teacher key can read them.'
              : 'Тайлангууд таны өөрийн Google Sheets-д хадгалагдаж, дүн нь мөн тэнд бичигдэнэ. Зөвхөн багшийн түлхүүртэй хүн уншиж чадна.'
            : en
              ? 'Reports opened from files stay only in this browser. Nothing is uploaded to a server.'
              : 'Файлаас нээсэн тайлан зөвхөн энэ хөтөчид хадгалагдана. Сервер рүү юу ч илгээгдэхгүй.'}
        </p>
        {message && (
          <div role="status" className={`p-2.5 rounded-lg border text-xs ${message.ok ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-amber-50 border-amber-300 text-amber-900'}`}>
            {message.text}
          </div>
        )}
      </div>

      <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4" aria-labelledby="sheet-inbox-title">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 id="sheet-inbox-title" className="text-sm font-bold text-slate-900">
                {en ? 'Google Sheets report inbox' : 'Google Sheets тайлангийн хайрцаг'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
                {en
                  ? 'Connect your own Google Sheet once. Then students’ reports, including Exam Practice work and whiteboard pages, arrive automatically when they press «Send to teacher».'
                  : 'Өөрийн Google Sheets-ийг нэг удаа холбоно. Ингэснээр сурагч «Багшид илгээх» дарахад тайлан нь, шалгалтын дадлага болон самбарын зурагтайгаа хамт, автоматаар ирнэ.'}
              </p>
            </div>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
              keyRejected
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : connected
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            {keyRejected
              ? en ? 'Key not accepted' : 'Түлхүүр буруу'
              : connected
                ? en ? 'Connected' : 'Холбогдсон'
                : en ? 'Not connected' : 'Холбогдоогүй'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <label className="md:col-span-8 block text-xs text-slate-700">
            <span className="block font-medium mb-1">{en ? 'Web app URL (ends with /exec)' : 'Web app URL (/exec-ээр төгсдөг)'}</span>
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://script.google.com/macros/s/…/exec"
              autoComplete="off"
              spellCheck={false}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono text-[11px]"
            />
          </label>
          <label className="md:col-span-4 block text-xs text-slate-700">
            <span className="block font-medium mb-1">{en ? 'Teacher key' : 'Багшийн түлхүүр'}</span>
            <input
              type="text"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono text-[11px]"
            />
          </label>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSaveInbox}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{en ? 'Save' : 'Хадгалах'}</span>
          </button>
          {inbox.url && (
            <button
              onClick={() => handleCopy(studentLink(inbox.url), 'link')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors"
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>{en ? 'Copy student link' : 'Сурагчийн холбоос хуулах'}</span>
            </button>
          )}
        </div>
        {inbox.url && (
          <label className="block text-[11px] text-slate-500">
            <span className="block mb-1">
              {en
                ? 'Student link: each student opens it once on the device they use, and their «Send to teacher» button then sends to this Sheet.'
                : 'Сурагчийн холбоос: сурагч бүр ашигладаг төхөөрөмж дээрээ нэг удаа нээхэд «Багшид илгээх» товч нь энэ хүснэгт рүү илгээдэг болно.'}
            </span>
            <input
              readOnly
              value={studentLink(inbox.url)}
              onFocus={(e) => e.target.select()}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[11px] text-slate-700"
            />
          </label>
        )}

        <details className="group rounded-lg border border-slate-200 bg-slate-50/60" open={!inbox.url}>
          <summary className="cursor-pointer select-none px-4 py-2.5 text-xs font-semibold text-slate-800">
            {en ? 'How to set it up (once, about 10 minutes)' : 'Хэрхэн тохируулах вэ (нэг удаа, 10 орчим минут)'}
          </summary>
          <div className="px-4 pb-4 space-y-3">
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
              {setupSteps[language].map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <button
              onClick={() => handleCopy(appsScriptCode, 'code')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{en ? 'Copy Apps Script code' : 'Apps Script код хуулах'}</span>
            </button>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {en
                ? 'Anyone with the address can send a report, but only someone with the teacher key can read reports or save grades. If you change the script later, choose Deploy → Manage deployments → Edit → Version: New version, so the address stays the same.'
                : 'Хаягтай хэн ч тайлан илгээж чадна, харин тайлан унших, дүн хадгалах нь зөвхөн багшийн түлхүүртэй хүнд боломжтой. Скриптийг дараа нь өөрчилбөл Deploy → Manage deployments → Edit → Version: New version-ийг сонгоно, тэгвэл хаяг өөрчлөгдөхгүй.'}
            </p>
          </div>
        </details>
      </section>

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
                <div className="px-3 pb-2 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-400">
                    {report.fromSheet ? (en ? 'From Google Sheets' : 'Google Sheets-ээс') : en ? 'From a file' : 'Файлаас'}
                  </span>
                  <button
                    onClick={() => handleRemove(report.id)}
                    title={report.fromSheet ? (en ? 'Hides it here. It stays in your Google Sheet.' : 'Эндээс нууна. Google Sheets-д хэвээр үлдэнэ.') : undefined}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-600"
                  >
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

              {waitingForPictures && (
                <p className="text-xs text-slate-500">{en ? 'Loading the whiteboard pages from Google Drive…' : 'Самбарын зургийг Google Drive-аас ачаалж байна…'}</p>
              )}
              {pictureError === selected.id && !boards && (
                <p className="text-xs text-amber-800">{en ? 'The whiteboard pages could not be loaded. Press «Load new reports» and open the report again.' : 'Самбарын зургийг ачаалж чадсангүй. «Шинэ тайлан татах» дараад тайлангаа дахин нээнэ үү.'}</p>
              )}
              {!!boards?.length && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase text-slate-500">{language === 'en' ? 'Whiteboard' : 'Самбар'}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {boards.map((wb, i) => (
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
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleSaveGrade}
                    disabled={saving}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-60"
                  >
                    {selected.fromSheet ? <FileSpreadsheet className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                    <span>
                      {selected.fromSheet
                        ? saving
                          ? (en ? 'Saving…' : 'Хадгалж байна…')
                          : (en ? 'Save grade' : 'Дүн хадгалах')
                        : (en ? 'Save grade and download file' : 'Дүн хадгалж файл татах')}
                    </span>
                  </button>
                  {selected.fromSheet && (
                    <button
                      onClick={() => downloadReport(plainEntry(selected, boards))}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{en ? 'Download file for the student' : 'Сурагчид өгөх файл татах'}</span>
                    </button>
                  )}
                </div>
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
