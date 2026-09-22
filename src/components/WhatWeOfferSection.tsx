'use client';

import { FaUser, FaUsers, FaComments, FaGlobe, FaCalendarAlt, FaChartBar } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const offers = [
  [FaUser, 'One-on-One Tutoring', 'Personalized sessions with native speakers.'],
  [FaUsers, 'Small Group Classes', 'Learn with peers while still getting meaningful attention.'],
  [FaComments, 'Conversation Practice', 'Use the language in realistic conversations, not just exercises.'],
  [FaGlobe, 'Cultural Insights', 'Understand the context behind the words and expressions.'],
  [FaCalendarAlt, 'Flexible Scheduling', 'Book lessons around your real schedule.'],
  [FaChartBar, 'Progress Reports', 'Track your growth and know where to focus next.'],
] as const;

export default function WhatWeOfferSection() {
  const { t } = useLanguage();
  return (
    <section id="offer" className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] bg-[#0b192c] p-7 text-[#f7f4ef] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t('Our Services')}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{t('Everything you need to move from learning to living.')}</h2>
            <p className="mt-5 text-sm leading-7 text-[#f7f4ef]/60">{t('A complete learning experience designed around practical progress, personal attention and confidence.')}</p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {offers.map(([Icon, title, description]) => (
              <article key={title} className="rounded-2xl border border-[#f7f4ef]/10 bg-[#f7f4ef]/5 p-6 transition hover:border-[#c19a68]/45 hover:bg-[#f7f4ef]/8">
                <Icon className="text-xl text-[#c19a68]" />
                <h3 className="mt-5 font-semibold">{t(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-[#f7f4ef]/55">{t(description)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
