'use client';

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  ReactNode,
} from 'react';
import { LOCAL_TRANSLATIONS } from '@/constants/translations';

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
] as const;

type LanguageContextValue = {
  locale: string;
  setLocale: (l: string) => void;
  t: (text: string) => string;
};

let currentLocale = 'en';
const localeSubscribers = new Set<() => void>();

function subscribeToLocale(onStoreChange: () => void) {
  localeSubscribers.add(onStoreChange);
  return () => localeSubscribers.delete(onStoreChange);
}

function getLocaleSnapshot() {
  return currentLocale;
}

function getServerLocaleSnapshot() {
  return 'en';
}

function publishLocale(locale: string) {
  currentLocale = locale;
  localeSubscribers.forEach((subscriber) => subscriber());
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useEffect(() => {
    const saved = window.localStorage.getItem('locale');
    if (!saved || !SUPPORTED_LOCALES.some((language) => language.code === saved)) return;
    document.documentElement.lang = saved;
    publishLocale(saved);
  }, []);

  const t = useCallback(
    (text: string) => LOCAL_TRANSLATIONS[locale]?.[text] ?? text,
    [locale],
  );

  const setLocale = useCallback((nextLocale: string) => {
    if (!SUPPORTED_LOCALES.some((language) => language.code === nextLocale)) return;
    try {
      window.localStorage.setItem('locale', nextLocale);
    } catch {
      // The in-memory locale still works when browser storage is unavailable.
    }
    document.documentElement.lang = nextLocale;
    publishLocale(nextLocale);
  }, []);

  const languageValue = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LanguageContext.Provider value={languageValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}

