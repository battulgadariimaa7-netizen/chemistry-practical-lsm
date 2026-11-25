import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { getSession, isStaff, onSessionChange } from '../data/reportServer';

/**
 * The teacher or lab staff account signed in to the school's Supabase project, and whether it is on the staff list.
 * The sign-in is shared by every part of the Staff Portal that uses it.
 */
export const useStaffAccount = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [staff, setStaff] = useState<boolean | null>(null);
  const [unreachable, setUnreachable] = useState(false);
  const userId = session?.user.id ?? null;

  useEffect(() => {
    let live = true;
    let stop: (() => void) | undefined;
    getSession()
      .then((s) => live && setSession(s))
      .catch(() => undefined)
      .finally(() => live && setReady(true));
    onSessionChange((s) => live && setSession(s))
      .then((unsubscribe) => (live ? (stop = unsubscribe) : unsubscribe()))
      .catch(() => undefined);
    return () => {
      live = false;
      stop?.();
    };
  }, []);

  useEffect(() => {
    setStaff(null);
    setUnreachable(false);
    if (!userId) return;
    let live = true;
    isStaff()
      .then((ok) => live && setStaff(ok))
      .catch(() => live && setUnreachable(true));
    return () => {
      live = false;
    };
  }, [userId]);

  return { session, ready, staff, unreachable };
};
