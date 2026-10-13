'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { WHY_CHOOSE_FEATURES } from '@/constants/pageContent';

export default function WhyChooseSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-10">
          <div>
            <p className="eyebrow">{t('Why Choose Us')}</p>
            <h2 className="section-title">{t('Learning should feel personal, practical and human.')}</h2>
            <p className="section-copy">{t('Native Connects combines the personal attention of tutoring with a clear path toward the language you need in real life.')}</p>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_FEATURES.map(([Icon, title, description]) => (
              <article key={title} className="rounded-2xl border border-[#0b192c]/10 bg-white/55 p-4 sm:p-5 transition hover:border-[#c19a68]/60 hover:bg-white">
                <Icon className="text-xl text-[#9b1c31]" />
                <h3 className="mt-2.5 text-sm sm:text-base font-semibold text-[#0b192c]">{t(title)}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/60">{t(description)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
