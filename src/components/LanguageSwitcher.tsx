'use client';

import { useLanguage, SUPPORTED_LOCALES } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaChevronDown, FaSpinner } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const { locale, setLocale, isTranslating } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = SUPPORTED_LOCALES.find((l) => l.code === locale);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800/50"
        aria-label="Change language"
      >
        {isTranslating ? (
          <FaSpinner className="animate-spin text-base text-purple-400" />
        ) : (
          <FaGlobe className="text-base" />
        )}
        <span className="hidden sm:inline">
          {current?.flag} {current?.label}
        </span>
        <span className="sm:hidden">{current?.flag}</span>
        <FaChevronDown
          className={`text-xs transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden z-50">
          {SUPPORTED_LOCALES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                locale === lang.code
                  ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {locale === lang.code && (
                <span className="ml-auto w-2 h-2 rounded-full bg-purple-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}