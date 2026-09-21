'use client';

import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 group">
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="#0f172a" />
        <path
          d="M 50 16 C 28.5 16 11 31.2 11 50 C 11 68.8 28.5 84 50 84 C 55.1 84 60 83.1 64.5 81.4 L 85 94 L 80.5 75.2 C 88.2 67.6 92 59.2 92 50 C 92 31.2 74.5 16 50 16 Z"
          fill="url(#grad)"
        />
        <path
          d="M 36 38 L 36 62 M 36 38 L 64 62 M 64 38 L 64 62"
          stroke="white"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
    <span className="text-lg sm:text-xl font-bold text-white tracking-tight whitespace-nowrap">
      Native{' '}
      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Connects
      </span>
    </span>
  </Link>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: '#', label: t('Home') },
    { href: '#languages', label: t('Languages') },
    { href: '#about', label: t('About') },
    { href: '#offer', label: t('What We Offer') },
    { href: '#contact', label: t('Contact') },
  ];

  return (
    <nav className="w-full bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/60 sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* CENTER: Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* RIGHT: Language Switcher + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />

            <Link
              href="#"
              className="hidden sm:inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap"
            >
              {t('Start Learning')}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute w-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/60 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-gray-400 hover:text-white text-base font-medium transition-colors py-2 border-b border-gray-800/50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2">
            <LanguageSwitcher />
          </div>

          <Link
            href="#"
            className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center px-6 py-3.5 rounded-lg text-sm font-semibold mt-6 shadow-lg shadow-purple-500/20"
            onClick={() => setMobileOpen(false)}
          >
            {t('Start Learning')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;