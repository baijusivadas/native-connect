'use client';

import { FaUser, FaUsers, FaComments, FaGlobe, FaCalendarAlt, FaChartBar } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const offers = [
  { icon: FaUser, title: 'One-on-One Tutoring', description: 'Personalized sessions with native speakers.' },
  { icon: FaUsers, title: 'Group Classes', description: 'Learn with peers in small groups.' },
  { icon: FaComments, title: 'Conversation Practice', description: 'Real-world conversations with native tutors.' },
  { icon: FaGlobe, title: 'Cultural Insights', description: 'Understand the culture behind the language.' },
  { icon: FaCalendarAlt, title: 'Flexible Scheduling', description: 'Book lessons at your convenience.' },
  { icon: FaChartBar, title: 'Progress Reports', description: 'Track your growth with detailed analytics.' },
];

const WhatWeOfferSection = () => {
  const { t } = useLanguage();

  return (
    <section id="offer" className="w-full py-24 bg-gray-900 border-t border-gray-800/60">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
            {t('Our Services')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            {t('What We Offer')}
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            {t('We offer comprehensive language tutoring to help you achieve your goals.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <offer.icon className="text-2xl text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t(offer.title)}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t(offer.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;