"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2.5 group">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b192c] shadow-md transition-transform group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="h-7 w-7" aria-hidden="true">
        <path
          d="M50 12C28 12 10 27 10 47c0 11 6 21 15 28l-4 16 18-10c4 1 7 2 11 2 22 0 40-15 40-36S72 12 50 12Z"
          fill="#9b1c31"
        />
        <path
          d="M34 37v25M34 37l32 25M66 37v25"
          stroke="#f7f4ef"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-lg font-bold tracking-tight text-[#0b192c]">
      Native <span className="text-[#9b1c31]">Connects</span>
    </span>
  </Link>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const navLinks = [
    { href: "#nurses", label: t("German for nurses") },
    { href: "#languages", label: t("Languages") },
    { href: "#testimonials", label: t("Students") },
    { href: "#pricing", label: t("Pricing") },
    { href: "#about", label: t("About") },
    { href: "#contact", label: t("Contact") },
  ];

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const navbarHeight = 80;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.history.pushState(null, "", href);
    window.scrollTo({ top: targetTop - navbarHeight, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#0b192c]/10 bg-[#f7f4ef]/90 backdrop-blur-xl transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className="group relative py-2 text-sm font-medium text-[#0b192c]/65 transition hover:text-[#0b192c]"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#9b1c31] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            {/* <Link href="#contact" onClick={(event) => handleNavigation(event, '#contact')} className="hidden px-2 py-2 text-sm font-semibold text-[#0b192c]/65 transition hover:text-[#9b1c31] lg:inline-flex">Log in</Link> */}
            {/* <Link href="#contact" onClick={(event) => handleNavigation(event, '#contact')} className="hidden rounded-xl border border-[#0b192c]/15 px-4 py-2.5 text-sm font-bold text-[#0b192c] transition hover:border-[#9b1c31] hover:text-[#9b1c31] sm:inline-flex">Sign up</Link> */}
            <Link
              href="#contact"
              onClick={(event) => {
                handleNavigation(event, "#contact");
                window.dispatchEvent(
                  new CustomEvent("native-connects:open-demo"),
                );
              }}
              className="hidden rounded-xl bg-[#9b1c31] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#85172a] sm:inline-flex"
            >
              {t("Book a Demo")}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-[#0b192c] md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden border-t border-[#0b192c]/10 bg-[#f7f4ef] transition-all duration-300 ${mobileOpen ? "max-h-112 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="space-y-1 px-5 py-5 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className="block border-b border-[#0b192c]/8 py-3 text-sm font-medium text-[#0b192c]/70"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={(event) => {
                  handleNavigation(event, "#contact");
                  window.dispatchEvent(new CustomEvent("native-connects:open-demo"));
                }}
                className="block rounded-xl bg-[#9b1c31] px-5 py-3 text-center text-sm font-bold text-white"
              >
                {t("Book a Demo")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
