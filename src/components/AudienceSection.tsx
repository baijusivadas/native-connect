'use client';

import { FaChild, FaBriefcaseMedical, FaPlaneDeparture } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const audiences = [
  { icon: FaChild, eyebrow: 'For parents', title: 'Give your child a head start', description: 'Engaging, age-appropriate lessons that make another language feel natural rather than like another school subject.' },
  { icon: FaBriefcaseMedical, eyebrow: 'For professionals', title: 'Build your future in Germany', description: 'Practical German for doctors, engineers and professionals preparing for work, relocation and everyday life.' },
  { icon: FaPlaneDeparture, eyebrow: 'For movers & learners', title: 'Prepare for life in Europe', description: 'Learn to communicate beyond textbooks — from introductions and appointments to confident real-world conversations.' },
];

export default function AudienceSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#f7f4ef] py-20 sm:py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('Built around your goal')}</p>
          <h2 className="section-title">{t('Not everyone learns a language for the same reason.')}</h2>
          <p className="section-copy">{t('Choose the path that sounds most like you. Your learning experience should fit your life, not the other way around.')}</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, eyebrow, title, description }) => (
            <article key={title} className="group rounded-[1.75rem] border border-[#0b192c]/10 bg-white/60 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c19a68]/60 hover:shadow-xl hover:shadow-[#0b192c]/8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b192c] text-[#c19a68]"><Icon /></div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-[#9b1c31]">{t(eyebrow)}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0b192c]">{t(title)}</h3>
              <p className="mt-3 text-sm leading-7 text-[#0b192c]/65">{t(description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
