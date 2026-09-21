'use client';

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  ReactNode,
} from 'react';
import { LOCAL_TRANSLATIONS } from '@/constants/translations';

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
] as const;

type LanguageContextValue = {
  locale: string;
  setLocale: (l: string) => void;
  t: (text: string) => string;
  isTranslating: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

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
    if (!saved || !SUPPORTED_LOCALES.some((language) => language.code === saved)) {
      return;
    }

    const timer = setTimeout(() => setLocaleState(saved), 0);
    return () => clearTimeout(timer);
  }, []);

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

  const setLocale = (l: string) => {
    if (!SUPPORTED_LOCALES.some((language) => language.code === l)) return;

    registeredRef.current.clear();
    pendingRef.current.clear();
    requestVersionRef.current += 1;
    if (timerRef.current) clearTimeout(timerRef.current);
    setTranslations({});
    setIsTranslating(false);
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', l);
      document.documentElement.lang = l;
    }
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t, isTranslating }}
    >
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
