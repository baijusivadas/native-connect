"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LEARNING_PATHWAYS } from "@/constants/pageContent";

export default function AudienceSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">{t("Tailored Learning Pathways")}</p>
          <h2 className="section-title">
            {t("Your Goals, Your Language Learning Journey.")}
          </h2>
          <p className="section-copy">
            {t(
              "Choose the personalized program built for your specific ambitions and schedule. We fit your life, not the other way around."
            )}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {LEARNING_PATHWAYS.map(
            ({ icon: Icon, eyebrow, title, description, tags }) => (
              <article
                key={title}
                className="group flex flex-col justify-between rounded-[1.5rem] border border-[#0b192c]/10 bg-white/60 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c19a68]/60 hover:shadow-xl hover:shadow-[#0b192c]/8"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b192c] text-[#c19a68] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[.18em] text-[#9b1c31] sm:mt-5">
                    {t(eyebrow)}
                  </p>

                  <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-[#0b192c] sm:text-2xl">
                    {t(title)}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#0b192c]/65 sm:text-sm">
                    {t(description)}
                  </p>
                </div>

                {tags && (
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {tags.map(({ label, icon: SectorIcon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#0b192c]/10 bg-[#f7f4ef] px-3 py-1 text-xs font-medium text-[#0b192c]/75 transition-colors duration-200 hover:bg-[#0b192c] hover:text-white"
                      >
                        <SectorIcon
                          className="text-[#9b1c31] transition-colors duration-200 group-hover:text-inherit"
                          aria-hidden="true"
                        />
                        {t(label)}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}