"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavigationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Intercept hash clicks across the page
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isHome = pathname === "/";
      const isHashOnCurrentPage =
        href.startsWith("#") || (isHome && href.startsWith("/#"));

      if (isHashOnCurrentPage) {
        const hashPart = href.includes("#") ? href.split("#")[1] : "";
        const targetId = hashPart.split("?")[0];
        if (!targetId) return;

        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();

          const text = anchor.textContent?.toLowerCase() || "";
          const isDemoClick =
            text.includes("demo") ||
            anchor.dataset.openDemo === "true" ||
            href.includes("demo=true");

          if (targetId === "contact" && isDemoClick) {
            window.dispatchEvent(new CustomEvent("native-connects:open-demo"));
          }

          const navbarHeight = 80;
          const targetTop = target.getBoundingClientRect().top + window.scrollY;
          window.history.pushState(null, "", `#${targetId}`);
          window.scrollTo({
            top: Math.max(0, targetTop - navbarHeight),
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, true);

    // 2. Handle direct URL with hash on mount or route transition
    const handleInitialHash = () => {
      if (typeof window === "undefined" || !window.location.hash) return;
      const targetId = window.location.hash.replace("#", "").split("?")[0];
      const target = document.getElementById(targetId);
      if (target) {
        const navbarHeight = 80;
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, targetTop - navbarHeight),
          behavior: "smooth",
        });

        if (
          targetId === "contact" &&
          (window.location.search.includes("demo=true") ||
            window.location.hash.includes("demo"))
        ) {
          window.dispatchEvent(new CustomEvent("native-connects:open-demo"));
        }
      }
    };

    const timer = setTimeout(handleInitialHash, 150);
    const secondaryTimer = setTimeout(handleInitialHash, 450);

    const handleHashChange = () => {
      handleInitialHash();
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      window.removeEventListener("hashchange", handleHashChange);
      clearTimeout(timer);
      clearTimeout(secondaryTimer);
    };
  }, [pathname]);

  return null;
}
