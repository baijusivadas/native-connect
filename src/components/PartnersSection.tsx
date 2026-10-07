'use client';

import { FaHandshake, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const directors = [
  {
    name: 'Manoj Kumar',
    image: '/img/manojkumar.jpeg',
  },
  {
    name: 'Biju Sakaria',
    image: '/img/bijuSakaria.jpeg',
  },
];

export default function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="partners-heading"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#9b1c31] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#0b192c]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#c19a68]/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c19a68]/35 bg-[#c19a68]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-[#e0bd8d]">
                <FaHandshake aria-hidden="true" />
                {t('Trusted Partners')}
              </div>
              <h2
                id="partners-heading"
                className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              >
                {t('Meet the directors behind Native Connects.')}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {t(
                  'Manoj Kumar and Biju Sakaria lead Native Connects with a shared commitment to helping learners move forward with confidence.',
                )}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {directors.map((director) => (
                <article
                  key={director.name}
                  className="rounded-2xl border border-[#0b192c]/10 bg-[#f7f4ef] p-5 text-[#0b192c] sm:p-6"
                >
                  <Image
                    src={director.image}
                    alt={director.name}
                    width={1024}
                    height={1024}
                    className="h-48 w-full rounded-xl object-cover object-center"
                  />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {director.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 border-t border-[#0b192c]/10 pt-3 text-sm font-medium text-[#0b192c]/65">
                    <FaUserTie className="text-[#9b1c31]" aria-hidden="true" />
                    {t('Director')}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
