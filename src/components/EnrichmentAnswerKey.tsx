import React, { useEffect, useState } from 'react';
import { BookOpenCheck, CheckCircle2, Lock, LogIn, LogOut, Printer } from 'lucide-react';
import { Language, UserRole } from '../types/chemistry';
import { enrichmentLessons } from '../lessons/lessons';
import { LessonKey, loadAnswerKey } from '../data/answerKey';
import { signIn, signOut } from '../data/reportServer';
import { useStaffAccount } from '../hooks/useStaffAccount';
import { useStoredState } from '../hooks/useStoredState';
import { StaffCard } from './StaffCard';

// The answer key to the check questions of the Enrichment worksheets, for marking students' reports.
// The answers are not in the site's code: they are read from the school's Supabase project, and only a signed-in
// teacher or lab staff account can read them. It is the same sign-in as the report inbox in Student Reports.

interface EnrichmentAnswerKeyProps {
  language: Language;
  role: UserRole;
}

export const EnrichmentAnswerKey: React.FC<EnrichmentAnswerKeyProps> = ({ language, role }) => {
  const en = language === 'en';
  const { session, ready, staff, unreachable } = useStaffAccount();
  const [keys, setKeys] = useState<LessonKey[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [lessonId, setLessonId] = useStoredState<string>('chem_lab_answer_key_lesson', '');
  const [showModel, setShowModel] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const noConnection = en
    ? 'The answer key could not be reached. Check the internet and try again.'
    : 'Хариултын түлхүүртэй холбогдож чадсангүй. Интернэтээ шалгаад дахин оролдоно уу.';

  // The answers are fetched only once the account is known to be on the staff list, and dropped on sign-out.
  useEffect(() => {
    setKeys(null);
    setLoadFailed(false);
    if (!staff || role === 'student') return;
    let live = true;
    loadAnswerKey()
      .then((list) => live && setKeys(list))
      .catch(() => live && setLoadFailed(true));
    return () => {
      live = false;
    };
  }, [staff, role]);

  if (role === 'student') {
    return (
      <StaffCard icon={Lock} tone="amber" title={en ? 'For Staff Only' : 'Зөвхөн ажилтанд'}>
        <p className="text-sm text-slate-700">
          {en
            ? 'The answer key holds the answers to the Enrichment worksheets, so it opens only with a teacher or lab staff account.'
            : 'Энэ хэсэгт хөгжүүлэх хичээлийн ажлын хуудасны хариулт байгаа тул зөвхөн багш, лаборантын бүртгэлээр нээгдэнэ.'}
        </p>
      </StaffCard>
    );
  }

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim() || !password) return;
    setSigningIn(true);
    try {
      await signIn(email, password);
      setPassword('');
      setMessage(null);
    } catch (error) {
      const wrong = error instanceof Error && /invalid/i.test(error.message);
      setMessage(wrong ? (en ? 'The email or password is not right.' : 'И-мэйл эсвэл нууц үг буруу байна.') : noConnection);
    } finally {
      setSigningIn(false);
    }
  };

  const signOutButton = (
    <button
      onClick={() => signOut().catch(() => undefined)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors print:hidden"
    >
      <LogOut className="w-3.5 h-3.5" />
      <span>{en ? 'Sign out' : 'Гарах'}</span>
    </button>
  );

  if (!ready || (session && staff === null && !unreachable)) {
    return <p className="text-sm text-slate-500">{en ? 'Connecting…' : 'Холбогдож байна…'}</p>;
  }

  if (!session) {
    return (
      <StaffCard
        icon={Lock}
        tone="amber"
        title={en ? 'Enrichment Answer Key: sign in' : 'Хөгжүүлэх хичээлийн хариу: нэвтрэх'}
        subtitle={
          en
            ? 'The answers are kept in the school’s Supabase database, not in the site, so students cannot see them. Sign in with the teacher or lab staff account you use for Student Reports.'
            : 'Хариултууд сайтын кодонд биш, сургуулийн Supabase өгөгдлийн санд хадгалагдана. Тиймээс сурагчид харж чадахгүй. «Сурагчдын тайлан»-д нэвтэрдэг багш, лаборантын бүртгэлээрээ нэвтэрнэ үү.'
        }
        onSubmit={handleSignIn}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          <label className="md:col-span-5 block text-xs text-slate-700">
            <span className="block font-medium mb-1">{en ? 'Email' : 'И-мэйл'}</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
            />
          </label>
          <label className="md:col-span-4 block text-xs text-slate-700">
            <span className="block font-medium mb-1">{en ? 'Password' : 'Нууц үг'}</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
            />
          </label>
          <button
            type="submit"
            disabled={signingIn}
            className="md:col-span-3 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-60"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>{signingIn ? (en ? 'Signing in…' : 'Нэвтэрч байна…') : en ? 'Sign in' : 'Нэвтрэх'}</span>
          </button>
        </div>
        {message && <p className="text-xs text-rose-700">{message}</p>}
      </StaffCard>
    );
  }

  if (unreachable || staff === false || loadFailed) {
    return (
      <StaffCard icon={Lock} tone="amber" title={en ? 'Enrichment Answer Key' : 'Хөгжүүлэх хичээлийн хариу'} actions={signOutButton}>
        <p className="text-sm text-slate-700">
          {staff === false
            ? en
              ? 'This account is not on the staff list, so it cannot open the answer key. Add it as shown in Student Reports.'
              : 'Энэ бүртгэл ажилтны жагсаалтад ороогүй тул хариултын түлхүүрийг нээж чадахгүй. «Сурагчдын тайлан» хэсэгт заасны дагуу нэмнэ үү.'
            : noConnection}
        </p>
      </StaffCard>
    );
  }

  if (!keys) return <p className="text-sm text-slate-500">{en ? 'Opening the answer key…' : 'Хариултын түлхүүрийг нээж байна…'}</p>;

  const keyedLessons = keys
    .map((key) => ({ key, lesson: enrichmentLessons.find((l) => l.id === key.lessonId) }))
    .filter((item): item is { key: LessonKey; lesson: (typeof enrichmentLessons)[number] } => !!item.lesson);
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
            {signOutButton}
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
        <p className="text-[11px] text-slate-500 print:hidden">
          {en ? 'Signed in as ' : 'Нэвтэрсэн: '}
          <strong className="text-slate-700">{session.user.email}</strong>
          {theoryCount > 0 &&
            (en ? ' · The theory lesson has no check questions, so it is not listed here.' : ' · Онолын хичээлд шалгах асуулт байхгүй тул энд ороогүй.')}
        </p>
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
