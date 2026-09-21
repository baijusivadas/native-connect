'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-gray-950 relative overflow-hidden border-t border-gray-800/60">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t('Ready to Start Your')}{' '}
          <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {t('Language Journey?')}
          </span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          {t('Join Native Connects today and take the first step toward a brighter future.')}
        </p>
        <Link
          href="#"
          className="inline-block bg-linear-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          {t('Start Learning Today')}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;