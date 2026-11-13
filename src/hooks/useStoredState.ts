import { useEffect, useState } from 'react';

// Pages that use the same key on screen at once (Exam Practice stays open in the background) hear about
// each other's changes, so one never saves an old copy over the other's.
const changedEvent = 'chem-lab-stored-state';

/** useState that survives reloads through localStorage. Falls back to memory when storage is blocked. */
export const useStoredState = <T,>(key: string, initial: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      const text = JSON.stringify(value);
      if (localStorage.getItem(key) === text) return;
      localStorage.setItem(key, text);
      window.dispatchEvent(new CustomEvent<string>(changedEvent, { detail: key }));
    } catch {
      // Storage can be full or blocked; the value then lasts only until reload.
    }
  }, [key, value]);

  useEffect(() => {
    const onChanged = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== key) return;
      try {
        const stored = localStorage.getItem(key);
        if (stored !== null) setValue((current) => (JSON.stringify(current) === stored ? current : (JSON.parse(stored) as T)));
      } catch {
        // Nothing to take over when storage cannot be read.
      }
    };
    window.addEventListener(changedEvent, onChanged);
    return () => window.removeEventListener(changedEvent, onChanged);
  }, [key]);

  return [value, setValue] as const;
};
