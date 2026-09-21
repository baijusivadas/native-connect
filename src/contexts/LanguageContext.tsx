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

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
] as const;

const LOCAL_TRANSLATIONS: Record<string, Record<string, string>> = {
  fr: {
    Home: 'Accueil',
    Languages: 'Langues',
    About: 'À propos',
    'What We Offer': 'Nos services',
    Contact: 'Contact',
    'Start Learning': 'Commencer a apprendre',
    'Language Learning Reimagined': "L'apprentissage des langues réinventé",
    'Learn New Languages,': 'Apprenez de nouvelles langues,',
    'Make Real Connections.': 'Créez de vraies connexions.',
    'Get personalized language tutoring in French, German, Italian, and Romanian. Learn with native speakers and build a brighter future.':
      'Bénéficiez d’un accompagnement personnalisé en français, allemand, italien et roumain. Apprenez avec des locuteurs natifs et construisez un avenir meilleur.',
    'Start Learning Now': 'Commencer maintenant',
    'Explore Languages': 'Découvrir les langues',
    'Our Languages': 'Nos langues',
    'Learn from Native Speakers': 'Apprenez auprès de locuteurs natifs',
    'Choose from four amazing languages and start your journey today.':
      'Choisissez parmi quatre langues passionnantes et commencez votre parcours aujourd’hui.',
    French: 'Français',
    'Speak with confidence in everyday situations.':
      'Parlez avec assurance dans les situations du quotidien.',
    German: 'Allemand',
    'Build your career with German language skills.':
      'Développez votre carrière grâce à l’allemand.',
    Italian: 'Italien',
    'Explore rich culture and communicate naturally.':
      'Découvrez une culture riche et communiquez naturellement.',
    Romanian: 'Roumain',
    'Start learning a unique and rich language.':
      'Commencez à apprendre une langue unique et riche.',
    'Why Choose Us': 'Pourquoi nous choisir',
    'Why Choose Native Connects?': 'Pourquoi choisir Native Connects ?',
    'Native Tutors': 'Tuteurs natifs',
    'Learn from expert native speakers.': 'Apprenez avec des locuteurs natifs experts.',
    'Personalized Learning': 'Apprentissage personnalisé',
    'Courses tailored to your goals.': 'Des cours adaptés à vos objectifs.',
    'Flexible Schedule': 'Emploi du temps flexible',
    'Learn anytime, anywhere.': 'Apprenez quand et où vous voulez.',
    'Progress Tracking': 'Suivi des progrès',
    'See your improvements.': 'Suivez vos progrès.',
    'About Us': 'À propos de nous',
    'More Than a Language –': 'Bien plus qu’une langue -',
    'A Global Community': 'Une communauté mondiale',
    'Native Connects is a language tutoring platform that offers personalized lessons with native speakers. We believe language is a bridge that connects cultures.':
      'Native Connects est une plateforme de tutorat linguistique qui propose des cours personnalisés avec des locuteurs natifs. Nous croyons que la langue est un pont entre les cultures.',
    'Native Speakers': 'Locuteurs natifs',
    Satisfaction: 'Satisfaction',
    'Learn. Connect. Grow.': 'Apprenez. Connectez-vous. Progressez.',
    'Our Services': 'Nos services',
    'We offer comprehensive language tutoring to help you achieve your goals.':
      'Nous proposons un accompagnement linguistique complet pour vous aider à atteindre vos objectifs.',
    'One-on-One Tutoring': 'Cours individuels',
    'Personalized sessions with native speakers.': 'Des sessions personnalisées avec des locuteurs natifs.',
    'Group Classes': 'Cours en groupe',
    'Learn with peers in small groups.': 'Apprenez avec vos pairs en petits groupes.',
    'Conversation Practice': 'Pratique de la conversation',
    'Real-world conversations with native tutors.': 'Des conversations réelles avec des tuteurs natifs.',
    'Cultural Insights': 'Découvertes culturelles',
    'Understand the culture behind the language.': 'Comprenez la culture qui se cache derrière la langue.',
    'Flexible Scheduling': 'Horaires flexibles',
    'Book lessons at your convenience.': 'Réservez vos cours quand cela vous convient.',
    'Progress Reports': 'Rapports de progression',
    'Track your growth with detailed analytics.': 'Suivez vos progres grace a des analyses detaillees.',
    'Ready to Start Your': 'Prêt à commencer votre',
    'Language Journey?': 'parcours linguistique ?',
    'Join Native Connects today and take the first step toward a brighter future.':
      'Rejoignez Native Connects dès aujourd’hui et faites le premier pas vers un avenir meilleur.',
    'Start Learning Today': 'Commencer à apprendre aujourd’hui',
  },
};

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

      // Debounce: collect all strings that mount in the same tick
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