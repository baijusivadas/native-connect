"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down more than 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b192c]/90 text-[#f7f4ef] backdrop-blur-md border border-[#c19a68]/40 shadow-xl transition-all duration-300 hover:bg-[#9b1c31] hover:text-white hover:border-[#9b1c31] hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#c19a68] ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}
