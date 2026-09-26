'use client';

import {
  createContext,
  useContext,
  useState,
  useRef,
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
  { code: 'gr', label: 'German', flag: '🇩🇪' },
] as const;

type LanguageContextValue = {
  locale: string;
  setLocale: (l: string) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const TranslationStatusContext = createContext(false);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);

  const registeredRef = useRef<Set<string>>(new Set());
  const pendingRef = useRef<Set<string>>(new Set());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const requestVersionRef = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    const migratedLocale = saved === 'de' ? 'gr' : saved;
    if (
      !migratedLocale ||
      !SUPPORTED_LOCALES.some((language) => language.code === migratedLocale)
    ) {
      return;
    }

    const timer = setTimeout(() => setLocaleState(migratedLocale), 0);
    document.documentElement.lang = migratedLocale === 'gr' ? 'de' : migratedLocale;
    if (migratedLocale !== saved) {
      localStorage.setItem('locale', migratedLocale);
    }
    return () => clearTimeout(timer);
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const flushTranslations = useCallback(async () => {
    if (pendingRef.current.size === 0) return;

    const texts = Array.from(pendingRef.current);
    pendingRef.current.clear();
    const requestVersion = requestVersionRef.current;

    setIsTranslating(true);
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texts, targetLang: locale }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      if (requestVersion !== requestVersionRef.current) return;
      setTranslations((prev) => ({ ...prev, ...data.translations }));
    } catch (err) {
      console.error('Translation failed, using English fallback:', err);
    } finally {
      if (requestVersion === requestVersionRef.current) {
        setIsTranslating(false);
      }
    }
  }, [locale]);

  const registerText = useCallback(
    (text: string) => {
      if (locale === 'en' || !text.trim()) return;

      const key = `${locale}:${text}`;
      if (registeredRef.current.has(key)) return;

      registeredRef.current.add(key);
      pendingRef.current.add(text);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        flushTranslations();
      }, 500);
    },
    [locale, flushTranslations]
  );

  const t = useCallback(
    (text: string) => {
      if (locale === 'en') return text;
      const localTranslation = LOCAL_TRANSLATIONS[locale]?.[text];
      if (localTranslation) return localTranslation;
      if (translations[text]) return translations[text];
      registerText(text);
      return text;
    },
    [locale, translations, registerText]
  );

  const setLocale = useCallback((l: string) => {
    if (!SUPPORTED_LOCALES.some((language) => language.code === l)) return;

    registeredRef.current.clear();
    pendingRef.current.clear();
    requestVersionRef.current += 1;
    if (timerRef.current) clearTimeout(timerRef.current);
    setTranslations({});
    setIsTranslating(false);
    setLocaleState(l);
    localStorage.setItem('locale', l);
    document.documentElement.lang = l === 'gr' ? 'de' : l;
  }, []);

  const languageValue = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LanguageContext.Provider value={languageValue}>
      <TranslationStatusContext.Provider value={isTranslating}>
        {children}
      </TranslationStatusContext.Provider>
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

export function useTranslationStatus() {
  return useContext(TranslationStatusContext);
}
