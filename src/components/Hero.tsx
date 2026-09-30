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

      <div className="relative z-10 flex min-h-[calc(100vh-80px)] w-full items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-.04em] text-[#f7f4ef] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
              {t('Learn the language.')}{' '}
              <span className="text-[#c19a68]">{t('Live the life.')}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#f7f4ef]/78 sm:text-lg">
              {t('Personalized language learning with native speakers — built for real conversations, real goals, and the life you want in Europe.')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#9b1c31] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#85172a]">
                {t('Book a Free Demo')}
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#languages" className="inline-flex items-center justify-center rounded-xl border border-[#f7f4ef]/30 bg-[#f7f4ef]/8 px-7 py-4 text-sm font-bold text-[#f7f4ef] backdrop-blur-md transition hover:bg-[#f7f4ef]/15">
                {t('Explore Languages')}
              </Link>
            </div>

            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {['Native-speaking tutors', 'Goal-based learning', 'Flexible online lessons'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#f7f4ef]/82">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c19a68]/18 text-[#c19a68]"><FaCheck className="text-[10px]" /></span>
                  {t(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-[#f7f4ef]/18 bg-[#f7f4ef]/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-[#c19a68]/25 bg-[#0b192c]/80 p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[.18em] text-[#c19a68]">{t('Choose your goal')}</span>
                  <span className="rounded-full bg-[#9b1c31] px-3 py-1 text-[10px] font-bold text-white">Native Connects</span>
                </div>
                <div className="mt-7 space-y-3">
                  {[
                    ['🇩🇪', 'I want to work in Germany'],
                    ['👩‍👦', 'I want my child to learn'],
                    ['✈️', 'I am moving to Europe'],
                    ['💬', 'I want to speak confidently'],
                  ].map(([icon, label]) => (
                    <div key={label} className="flex items-center gap-4 rounded-2xl border border-[#f7f4ef]/10 bg-[#f7f4ef]/6 p-4 text-sm font-medium text-[#f7f4ef]">
                      <span className="text-xl">{icon}</span>
                      <span>{t(label)}</span>
                      <FaArrowRight className="ml-auto text-xs text-[#c19a68]" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-[#f7f4ef] p-4 text-[#0b192c]">
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-[#9b1c31]">{t('A better way to learn')}</div>
                  <p className="mt-1 text-sm leading-6">{t('Learn the language you need for the life you are building.')}</p>
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
