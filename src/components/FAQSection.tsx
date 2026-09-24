'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const questions = [['What is your refund and missed lesson policy?', 'You can reschedule with 24 hours notice. Missed lessons without notice are charged so tutors are fairly compensated. Refunds are reviewed based on the package and lessons already used.'], ['How are tutors vetted and qualified?', 'We review language fluency, teaching experience and references before a tutor joins Native Connects. Every tutor also completes an introduction and goal-matching conversation.'], ['How do scheduling and time zones work?', 'Choose slots in your local time zone. Your calendar confirmation shows the converted tutor time, and you can book around work, study or family commitments.'], ['Can I prepare for a B1 or B2 exam?', 'Yes. Tell us your target exam and date during your consultation, and we will match you with a tutor and curriculum that covers speaking, writing, reading and listening.']];

export default function FAQSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  return <section id="faq" className="bg-[#f7f4ef] py-24"><div className="w-full px-5 sm:px-8 lg:px-12"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">{t('Questions, answered')}</p><h2 className="section-title">{t('Everything you need to feel ready.')}</h2><p className="section-copy">{t('Clear expectations make it easier to choose your next step with confidence.')}</p></div><div className="divide-y divide-[#0b192c]/10 border-y border-[#0b192c]/10">{questions.map(([question, answer], index) => <div key={question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold text-[#0b192c]"><span>{t(question)}</span>{open === index ? <FaMinus className="shrink-0 text-xs text-[#9b1c31]" /> : <FaPlus className="shrink-0 text-xs text-[#9b1c31]" />}</button>{open === index && <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-[#0b192c]/60">{t(answer)}</p>}</div>)}</div></div></div></section>;
}