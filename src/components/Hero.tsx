'use client';

import Link from 'next/link';
import Image from 'next/image';
import VideoBackground from './VideoBackground';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const languageTags = [
    { flag: '🇫🇷', text: 'Bonjour' },
    { flag: '🇩🇪', text: 'Hallo' },
    { flag: '🇮🇹', text: 'Ciao' },
    { flag: '🇪🇸', text: 'Hola' },
    { flag: '🇷🇴', text: 'Salut' },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-gray-950">
      <VideoBackground
        videoSrc="/videos/hero-background.mp4"
        posterSrc="/images/hero-poster.jpg"
        overlayOpacity={0.7}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="text-purple-400 font-semibold uppercase tracking-widest text-sm">
              {t('Language Learning Reimagined')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mt-4">
              {t('Learn New Languages,')}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t('Make Real Connections.')}
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
              {t(
                'Get personalized language tutoring in French, German, Italian, and Romanian. Learn with native speakers and build a brighter future.'
              )}
            </p>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                {t('Start Learning Now')}
              </Link>
              <Link
                href="#"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors text-sm"
              >
                {t('Explore Languages')}
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Language learner"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {languageTags.map((tag) => (
                  <div
                    key={tag.text}
                    className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white border border-white/20 shadow-lg"
                  >
                    {tag.flag} {tag.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;