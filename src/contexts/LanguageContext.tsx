'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import { LOCAL_TRANSLATIONS } from '@/constants/translations';

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
] as const;

type LanguageContextValue = {
  locale: string;
  setLocale: (l: string) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<string>('en');

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (!saved || !SUPPORTED_LOCALES.some((language) => language.code === saved)) return;
    setLocaleState(saved);
    document.documentElement.lang = saved;
  }, []);

  const t = useCallback(
    (text: string) => LOCAL_TRANSLATIONS[locale]?.[text] ?? text,
    [locale],
  );

  const setLocale = useCallback((l: string) => {
    if (!SUPPORTED_LOCALES.some((language) => language.code === l)) return;
    setLocaleState(l);
    localStorage.setItem('locale', l);
    document.documentElement.lang = l;
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

