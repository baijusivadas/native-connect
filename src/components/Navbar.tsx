"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NAV_LINKS } from "@/constants/pageContent";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useLanguage();

  // Close mobile navigation on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    if (href === "#contact") {
      window.dispatchEvent(new CustomEvent("native-connects:open-demo"));
    }

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
            {NAV_LINKS.map((link) => {
              const isActive = link.isPage ? pathname === link.href : false;
              return (
                <Link
                  key={link.href}
                  href={link.isPage ? link.href : isHome ? link.href : `/${link.href}`}
                  onClick={
                    link.isPage
                      ? () => setMobileOpen(false)
                      : isHome
                        ? (event) => handleNavigation(event, link.href)
                        : () => setMobileOpen(false)
                  }
                  className={`group relative py-2 text-sm font-medium transition-colors ${isActive ? "text-[#9b1c31] font-semibold" : "text-[#0b192c]/65 hover:text-[#0b192c]"
                    }`}
                >
                  <span>{t(link.label)}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#9b1c31] transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-[#0b192c] hover:bg-[#0b192c]/5 transition-colors md:hidden cursor-pointer"
              aria-label={mobileOpen ? t("Close menu") : t("Open menu")}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden border-t border-[#0b192c]/10 bg-[#f7f4ef] transition-all duration-300 ${mobileOpen ? "max-h-112 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="space-y-1 px-5 py-5 sm:px-8">
            {NAV_LINKS.map((link) => {
              const isActive = link.isPage ? pathname === link.href : false;
              return (
                <Link
                  key={link.href}
                  href={link.isPage ? link.href : isHome ? link.href : `/${link.href}`}
                  onClick={
                    link.isPage
                      ? () => setMobileOpen(false)
                      : isHome
                        ? (event) => handleNavigation(event, link.href)
                        : () => setMobileOpen(false)
                  }
                  className={`block border-b border-[#0b192c]/8 py-3 text-sm font-medium transition-colors ${isActive ? "text-[#9b1c31] font-bold" : "text-[#0b192c]/70 hover:text-[#0b192c]"
                    }`}
                >
                  {t(link.label)}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href={isHome ? "#contact" : "/#contact"}
                onClick={(event) => {
                  if (isHome) {
                    handleNavigation(event, "#contact");
                    window.dispatchEvent(new CustomEvent("native-connects:open-demo"));
                  } else {
                    setMobileOpen(false);
                  }
                }}
                className="block rounded-xl bg-[#9b1c31] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#85172a] transition-colors"
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