'use client';

import { useMemo, useState } from 'react';
import { FaPlus, FaMinus, FaSearch } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { FAQ_GROUPS } from '@/constants/faqs';

export default function FAQSection() {
  const { t } = useLanguage();
  const [activeGroup, setActiveGroup] = useState(0);
  const [open, setOpen] = useState('0-0');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const group = FAQ_GROUPS[activeGroup];
  const normalizedSearch = search.trim().toLowerCase();
  const filteredQuestions = useMemo(
    () =>
      group.questions.filter(([question, answer]) =>
        `${question} ${answer}`.toLowerCase().includes(normalizedSearch),
      ),
    [group, normalizedSearch],
  );
  const visibleQuestions = useMemo(
    () =>
      showAll || normalizedSearch
        ? filteredQuestions
        : filteredQuestions.slice(0, 4),
    [filteredQuestions, normalizedSearch, showAll],
  );

  return (
    <section id="faq" className="bg-[#f7f4ef] py-20 sm:py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">{t('European Language Coaching')}</p>
            <h2 className="section-title max-w-lg">{t('Frequently Asked Questions')}</h2>
            <p className="section-copy max-w-md">{t('Find clear answers about our language programs, exam preparation and European career support.')}</p>
          </div>

          <div>
            <label className="relative block">
              <span className="sr-only">{t('Search questions')}</span>
              <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#0b192c]/35" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t('Search question here')}
                className="w-full rounded-full border border-[#0b192c]/8 bg-white px-11 py-3 text-sm text-[#0b192c] outline-none transition placeholder:text-[#0b192c]/35 focus:border-[#c19a68]"
              />
            </label>

            <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
              {FAQ_GROUPS.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setActiveGroup(index);
                    setOpen(`${index}-0`);
                    setSearch('');
                    setShowAll(false);
                  }}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-bold transition ${activeGroup === index ? 'bg-[#0b192c] text-white' : 'border border-[#0b192c]/10 text-[#0b192c]/60 hover:border-[#9b1c31] hover:text-[#9b1c31]'}`}
                >
                  {t(item.title.replace(' FAQs', ''))}
                </button>
              ))}
            </div>

            <div className="mt-3 divide-y divide-[#0b192c]/10 border-y border-[#0b192c]/10">
              {visibleQuestions.map(([question, answer]) => {
                const questionIndex = group.questions.findIndex(([item]) => item === question);
                const questionId = `${activeGroup}-${questionIndex}`;
                return (
                  <div key={question}>
                    <button type="button" onClick={() => setOpen(open === questionId ? '' : questionId)} aria-expanded={open === questionId} className="flex w-full items-center justify-between gap-5 py-4 text-left text-sm font-semibold text-[#0b192c]">
                      <span>{t(question)}</span>
                      {open === questionId ? <FaMinus className="shrink-0 text-xs text-[#9b1c31]" /> : <FaPlus className="shrink-0 text-xs text-[#9b1c31]" />}
                    </button>
                    {open === questionId && <p className="max-w-2xl pb-4 pr-8 text-sm leading-6 text-[#0b192c]/60">{t(answer)}</p>}
                  </div>
                );
              })}
              {visibleQuestions.length === 0 && <p className="py-5 text-sm text-[#0b192c]/60">{t('No questions found.')}</p>}
            </div>

            {!search && filteredQuestions.length > 4 && <button type="button" onClick={() => setShowAll(!showAll)} className="mt-4 text-sm font-bold text-[#9b1c31] transition hover:text-[#85172a]">{showAll ? t('Show fewer answers') : t('Show all answers')}</button>}
          </div>
        </div>
      </div>
    </section>
  );
}