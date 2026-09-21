'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  { number: '4', label: 'Languages' },
  { number: '500+', label: 'Native Speakers' },
  { number: '100%', label: 'Satisfaction' },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full py-24 bg-gray-950 border-t border-gray-800/60">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-purple-400 font-semibold uppercase tracking-widest text-sm">
              {t('About Us')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t('More Than a Language –')}{' '}
              <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t('A Global Community')}
              </span>
            </h2>
            <p className="text-gray-400 mb-10">
              {t('Native Connects is a language tutoring platform that offers personalized lessons with native speakers. We believe language is a bridge that connects cultures.')}
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{t(stat.label)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Global community"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 to-transparent" />
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
              <span className="font-semibold text-white text-sm">
                {t('Learn. Connect. Grow.')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;