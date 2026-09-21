'use client';

import { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { FaPlay, FaUserTie, FaLightbulb, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  {
    icon: FaUserTie,
    title: 'Native Tutors',
    description: 'Learn from expert native speakers.',
  },
  {
    icon: FaLightbulb,
    title: 'Personalized Learning',
    description: 'Courses tailored to your goals.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Flexible Schedule',
    description: 'Learn anytime, anywhere.',
  },
  {
    icon: FaChartLine,
    title: 'Progress Tracking',
    description: 'See your improvements.',
  },
];

const WhyChooseSection = () => {
  const [playing, setPlaying] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-gray-900 border-t border-gray-800/60">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold uppercase tracking-widest text-sm">
            {t('Why Choose Us')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {t('Why Choose Native Connects?')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black border border-gray-800">
            <ReactPlayer
              src="https://www.youtube.com/watch?v=z_5qDslUVoE&list=PL_bt5rj27IIUGgY2ZIe199_APdgOU6I7f"
              width="100%"
              height="100%"
              playing={playing}
              controls
              light={
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80"
                    alt="Video thumbnail"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 to-transparent flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      className="bg-white/10 backdrop-blur-md rounded-full p-5 shadow-lg hover:scale-110 transition-transform border border-white/20"
                    >
                      <FaPlay className="text-white text-3xl ml-1" />
                    </button>
                  </div>
                </div>
              }
            />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-950/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <feature.icon className="text-3xl text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(feature.title)}
                </h3>
                <p className="text-gray-400 text-sm">{t(feature.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;