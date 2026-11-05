import { useEffect, useState } from 'react';

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
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage can be full or blocked; the value then lasts only until reload.
    }
  }, [key, value]);

  return [value, setValue] as const;
};
