"use client";

import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#9b1c31] py-20 text-white">
      <div className="flex w-full flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c19a68]">
            {t("Your next chapter starts here")}
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("Ready to start your language journey?")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
            {t(
              "Choose your language, find the right learning format, and take the first step toward the life you want.",
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
            window.setTimeout(
              () =>
                window.dispatchEvent(
                  new CustomEvent("native-connects:open-demo"),
                ),
              350,
            );
          }}
          className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#f7f4ef] px-7 py-4 text-sm font-bold text-[#0b192c] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Book a Demo Session{" "}
          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
