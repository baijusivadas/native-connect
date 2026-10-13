'use client';

import Link from 'next/link';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import VideoBackground from './VideoBackground';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#0b192c]">
      <VideoBackground
        posterSrc="/img/italy.jpeg"
        videoSrc="/video/banger.mp4"
        overlayOpacity={0.18}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,25,44,.7)_0%,rgba(11,25,44,.38)_48%,rgba(11,25,44,.12)_100%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-80px)] w-full items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#c19a68] border border-white/15 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#c19a68] animate-pulse" />
              {t('Language Coaching • TELC & Goethe Prep • Direct Germany Placement')}
            </div>

            <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-.04em] text-[#f7f4ef] sm:text-5xl lg:text-6xl xl:text-[4.75rem]">
              {t('Learn the language.')}{' '}
              <span className="text-[#c19a68]">{t('Live the life.')}</span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-2xl text-sm leading-relaxed text-[#f7f4ef]/78 sm:text-base">
              {t('Personalized language training with native speakers and complete career pathways from A1 to TELC/Goethe certification and direct hospital placement in Germany.')}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#9b1c31] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#85172a]">
                {t('Book a Free Demo')}
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/german-for-nurses" className="inline-flex items-center justify-center rounded-xl border border-[#c19a68]/50 bg-[#c19a68]/15 px-6 py-3.5 text-sm font-bold text-[#f7f4ef] backdrop-blur-md transition hover:bg-[#c19a68]/25">
                {t('German Nursing & Placement')}
              </Link>
            </div>

            <div className="mt-6 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-3">
              {['Native-speaking tutors', 'TELC Pflege & Goethe Prep', '0-Fee Placement in Germany'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#f7f4ef]/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c19a68]/20 text-[#c19a68]"><FaCheck className="text-[9px]" /></span>
                  {t(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-[#f7f4ef]/18 bg-[#f7f4ef]/10 p-2.5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-[#c19a68]/25 bg-[#0b192c]/80 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[.18em] text-[#c19a68]">{t('Choose your goal')}</span>
                  <span className="rounded-full bg-[#9b1c31] px-3 py-1 text-[10px] font-bold text-white">Native Connects</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {[
                    {
                      icon: '🇩🇪',
                      label: 'Work as a Nurse in Germany',
                      href: '/german-for-nurses',
                    },
                    {
                      icon: '🎓',
                      label: 'Study or Work in Europe',
                      goal: 'Study or Work in Europe',
                    },
                    {
                      icon: '👩‍👦',
                      label: 'Language for my child',
                      goal: 'Language for my child',
                    },
                    {
                      icon: '💬',
                      label: 'Speak confidently with Natives',
                      goal: 'Speak confidently with Natives',
                    },
                  ].map((item) =>
                    item.href ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-3.5 rounded-2xl border border-[#f7f4ef]/10 bg-[#f7f4ef]/6 p-3 sm:p-3.5 text-xs sm:text-sm font-medium text-[#f7f4ef] transition-all duration-200 hover:border-[#c19a68] hover:bg-[#c19a68]/15 hover:translate-x-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
                      >
                        <span className="text-lg shrink-0">{item.icon}</span>
                        <span>{t(item.label)}</span>
                        <FaArrowRight className="ml-auto text-xs text-[#c19a68] transition-transform group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          window.dispatchEvent(
                            new CustomEvent('native-connects:open-demo', {
                              detail: { goal: item.goal },
                            })
                          );
                        }}
                        className="group flex w-full items-center gap-3.5 rounded-2xl border border-[#f7f4ef]/10 bg-[#f7f4ef]/6 p-3 sm:p-3.5 text-left text-xs sm:text-sm font-medium text-[#f7f4ef] transition-all duration-200 hover:border-[#c19a68] hover:bg-[#c19a68]/15 hover:translate-x-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c19a68] cursor-pointer"
                      >
                        <span className="text-lg shrink-0">{item.icon}</span>
                        <span>{t(item.label)}</span>
                        <FaArrowRight className="ml-auto text-xs text-[#c19a68] transition-transform group-hover:translate-x-1" />
                      </button>
                    )
                  )}
                </div>
                <div className="mt-4 rounded-xl bg-[#f7f4ef] p-3.5 text-[#0b192c]">
                  <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#9b1c31]">{t('Train • Certify • Relocate')}</div>
                  <p className="mt-1 text-xs leading-relaxed text-[#0b192c]/75">{t('End-to-end support with certified exam preparation and direct employer matchmaking.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c19a68]/60 to-transparent" />
    </section>
  );
};

export default Hero;
