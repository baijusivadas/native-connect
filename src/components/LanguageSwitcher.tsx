'use client';

import {
  useLanguage,
  useTranslationStatus,
  SUPPORTED_LOCALES,
} from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaChevronDown, FaSpinner } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const isTranslating = useTranslationStatus();
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
        className="flex items-center gap-2 text-[#0b192c] hover:text-[#0b192c] transition-colors text-sm font-medium px-3 py-2 rounded-lg bg-[#f7f4ef] border border-[#0b192c]/10 shadow-sm hover:bg-white"
        aria-label="Change language"
      >
        {isTranslating ? (
          <FaSpinner className="animate-spin text-base text-[#9b1c31]" />
        ) : (
          <FaGlobe className="text-base text-[#9b1c31]" />
        )}
        <span className="hidden sm:inline">
          {current?.flag} {current?.label}
        </span>
        <span className="sm:hidden">{current?.flag}</span>
        <FaChevronDown
          className={`text-xs transition-transform text-[#0b192c] ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-[#f7f4ef] border border-[#0b192c]/10 rounded-xl shadow-2xl overflow-hidden z-50">
          {SUPPORTED_LOCALES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                locale === lang.code
                  ? 'bg-gradient-to-r from-[#9b1c31]/10 to-[#c19a68]/15 text-[#0b192c]'
                  : 'text-[#0b192c]/75 hover:text-[#0b192c] hover:bg-[#0b192c]/5'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {locale === lang.code && (
                <span className="ml-auto w-2 h-2 rounded-full bg-[#9b1c31]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}