'use client';

import Link from 'next/link';
import { FaLanguage } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 py-12">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-linear-to-r from-purple-600 to-blue-600 p-1.5 rounded-lg">
              <FaLanguage className="text-white text-xl" />
            </div>
            <span className="text-lg font-bold text-white">
              Native <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Connects</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">{t('Home')}</Link>
            <Link href="#languages" className="hover:text-white transition-colors">{t('Languages')}</Link>
            <Link href="#about" className="hover:text-white transition-colors">{t('About')}</Link>
            <Link href="#offer" className="hover:text-white transition-colors">{t('What We Offer')}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t('Contact')}</Link>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Native Connects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;