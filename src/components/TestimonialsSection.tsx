'use client';

import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

// IMPORTANT: Replace these content slots with verified student testimonials before launch.
// Do not publish invented names, photos, ratings or quotes as social proof.
const testimonials = [
  { quote: 'Verified student story will appear here.', name: 'Student name', language: 'German', detail: 'Career / relocation' },
  { quote: 'Verified student story will appear here.', name: 'Student name', language: 'French', detail: 'Conversation / travel' },
  { quote: 'Verified student story will appear here.', name: 'Student name', language: 'Italian', detail: 'Culture / everyday life' },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{t('Real student stories')}</p>
            <h2 className="section-title">{t('What Our Students Say')}</h2>
            <p className="section-copy">{t('Trust is earned. This section is designed for verified student stories, photos and independent review links.')}</p>
          </div>
          <div className="rounded-2xl border border-[#0b192c]/10 bg-white px-5 py-4 text-sm text-[#0b192c]/65 shadow-sm">
            <div className="flex items-center gap-1 text-[#c19a68]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="mt-2 font-semibold text-[#0b192c]">{t('Add your verified review rating here')}</p>
            <p className="text-xs">{t('Google / Trustpilot')}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article key={index} className="relative rounded-[1.75rem] border border-[#0b192c]/10 bg-white p-7 shadow-sm">
              <FaQuoteLeft className="text-2xl text-[#9b1c31]/35" />
              <p className="mt-6 min-h-24 text-lg leading-8 text-[#0b192c]/75">“{t(item.quote)}”</p>
              <div className="mt-7 flex items-center gap-3 border-t border-[#0b192c]/8 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b192c] text-sm font-bold text-[#c19a68]">{index + 1}</div>
                <div>
                  <p className="font-semibold text-[#0b192c]">{t(item.name)}</p>
                  <p className="text-xs text-[#0b192c]/55">{t(item.language)} · {t(item.detail)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[#0b192c]/45">{t('Launch note: replace the three placeholders above with real, permissioned testimonials and student photos.')}</p>
      </div>
    </section>
  );
}
