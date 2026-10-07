'use client';

import { FaUserTie, FaBullseye, FaCalendarAlt, FaChartLine, FaComments, FaGlobeEurope } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  [FaUserTie, 'Native Tutors', 'Learn pronunciation, expressions and culture from people who actually use the language every day.'],
  [FaBullseye, 'Goal-led Learning', 'Lessons are shaped around your reason for learning career, school, relocation or conversation.'],
  [FaCalendarAlt, 'Flexible Schedule', 'Fit lessons around work, school and family without giving up consistency.'],
  [FaChartLine, 'Visible Progress', 'Know what you have learned and what to focus on next.'],
  [FaComments, 'Real Conversation', 'Practice the situations you will actually face outside a classroom.'],
  [FaGlobeEurope, 'Culture Included', 'Language makes more sense when you understand the people and culture behind it.'],
] as const;

export default function WhyChooseSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">{t('Why Choose Us')}</p>
            <h2 className="section-title">{t('Learning should feel personal, practical and human.')}</h2>
            <p className="section-copy">{t('Native Connects combines the personal attention of tutoring with a clear path toward the language you need in real life.')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([Icon, title, description]) => (
              <article key={title} className="rounded-2xl border border-[#0b192c]/10 bg-white/55 p-5 transition hover:border-[#c19a68]/60 hover:bg-white">
                <Icon className="text-2xl text-[#9b1c31]" />
                <h3 className="mt-4 font-semibold text-[#0b192c]">{t(title)}</h3>
                <p className="mt-2 text-xs leading-6 text-[#0b192c]/60">{t(description)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
