'use client';

import { useMemo, useState } from 'react';
import { FaPlus, FaMinus, FaSearch } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { FAQ_GROUPS } from '@/constants/faqs';

export default function FAQSection() {
  const { t } = useLanguage();
  const [activeGroup, setActiveGroup] = useState(0);
  const [openId, setOpenId] = useState<string>('0-0');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);

  const group = FAQ_GROUPS[activeGroup];
  const normalizedSearch = search.trim().toLowerCase();

  const filteredQuestions = useMemo(
    () =>
      group.questions.filter(([question, answer]) =>
        `${t(question)} ${t(answer)}`.toLowerCase().includes(normalizedSearch)
      ),
    [group, normalizedSearch, t]
  );

  const visibleQuestions = useMemo(
    () =>
      showAll || normalizedSearch
        ? filteredQuestions
        : filteredQuestions.slice(0, 4),
    [filteredQuestions, normalizedSearch, showAll]
  );

  return (
    <section id="faq" className="scroll-mt-24 bg-[#f7f4ef] py-12 sm:py-16">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Left Column: Heading Info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#9b1c31]">
              {t('European Language Coaching')}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0b192c] sm:text-4xl lg:text-5xl">
              {t('Frequently Asked Questions')}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#0b192c]/70 sm:text-base">
              {t('Find clear answers about our language programs, exam preparation and European career support.')}
            </p>
          </div>

          {/* Right Column: Search, Tabs & Accordion */}
          <div>
            {/* Search Input */}
            <label className="relative block">
              <span className="sr-only">{t('Search questions')}</span>
              <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#0b192c]/40" aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t('Search question here')}
                className="w-full rounded-full border border-[#0b192c]/10 bg-white px-10 py-3 text-xs sm:text-sm text-[#0b192c] outline-none transition-all duration-200 placeholder:text-[#0b192c]/40 focus:border-[#c19a68] focus:ring-2 focus:ring-[#c19a68]/20 shadow-xs"
              />
            </label>

            {/* Group Navigation Tabs */}
            <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {FAQ_GROUPS.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setActiveGroup(index);
                    setOpenId(`${index}-0`);
                    setSearch('');
                    setShowAll(false);
                  }}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${activeGroup === index
                      ? 'bg-[#0b192c] text-white shadow-sm'
                      : 'border border-[#0b192c]/10 bg-white/50 text-[#0b192c]/70 hover:border-[#9b1c31] hover:text-[#9b1c31]'
                    }`}
                >
                  {t(item.title.replace(' FAQs', ''))}
                </button>
              ))}
            </div>

            {/* Accordion Items List */}
            <div className="mt-4 divide-y divide-[#0b192c]/10 border-y border-[#0b192c]/10">
              {visibleQuestions.map(([question, answer], qIndex) => {
                const uniqueId = `faq-${activeGroup}-${qIndex}`;
                const isOpen = openId === uniqueId;

                return (
                  <div key={question} className="py-2">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? '' : uniqueId)}
                      aria-expanded={isOpen}
                      aria-controls={uniqueId}
                      className="flex w-full items-center justify-between gap-4 py-3 text-left text-xs sm:text-sm font-semibold text-[#0b192c] transition-colors hover:text-[#9b1c31]"
                    >
                      <span>{t(question)}</span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9b1c31]/10 text-[#9b1c31]">
                        {isOpen ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div id={uniqueId} role="region" className="pb-4 pr-6">
                        <p className="text-xs sm:text-sm leading-relaxed text-[#0b192c]/70">
                          {t(answer)}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {visibleQuestions.length === 0 && (
                <p className="py-6 text-center text-xs sm:text-sm text-[#0b192c]/60">
                  {t('No questions found.')}
                </p>
              )}
            </div>

            {/* Toggle Show All / Show Fewer Button */}
            {!search && filteredQuestions.length > 4 && (
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="mt-4 text-xs sm:text-sm font-bold text-[#9b1c31] transition-colors hover:text-[#7d1727]"
              >
                {showAll ? t('Show fewer answers') : t('Show all answers')} ({filteredQuestions.length})
              </button>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}