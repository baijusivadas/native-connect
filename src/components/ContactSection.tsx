"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

type FormState = {
  name: string;
  email: string;
  phone: string;
  language: string;
  goal: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  language: "",
  goal: "",
  message: "",
  preferredDate: "",
  preferredTime: "",
};

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [mode, setMode] = useState<"contact" | "demo">("contact");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = () => openDemo();
    window.addEventListener("native-connects:open-demo", handler);
    return () =>
      window.removeEventListener("native-connects:open-demo", handler);
  }, []);

  function openDemo() {
    setMode("demo");
    setStatus("idle");
    setError("");
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(
      () => document.getElementById("contact-name")?.focus(),
      450,
    );
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: mode === "demo" ? "demo-booking" : "contact-form",
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#9b1c31] p-7 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c19a68]">
              {t("Get in touch")}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {mode === "demo"
                ? t("Book a demo session.")
                : t("Let’s find the right learning path.")}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              {t(
                "Tell us a little about your goals. We’ll use your details to understand what you need and help you choose the right format.",
              )}
            </p>

            <button
              type="button"
              onClick={openDemo}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#f7f4ef] px-6 py-3.5 text-sm font-bold text-[#0b192c] transition hover:-translate-y-0.5 hover:bg-white"
            >
              <FaCalendarAlt className="text-[#9b1c31]" />
              {t("Book a Demo Session")}
            </button>

            <div className="mt-10 space-y-4 text-sm text-white/70">
              {[
                "Personalized learning goals",
                "Native-speaker support",
                "Flexible online sessions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[#c19a68]">
                    <FaCheck className="text-[10px]" />
                  </span>
                  {t(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#0b192c]/10 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex flex-wrap gap-2 rounded-xl bg-[#0b192c]/5 p-1">
              <button
                type="button"
                onClick={() => {
                  setMode("contact");
                  setStatus("idle");
                }}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-bold transition ${mode === "contact" ? "bg-white text-[#0b192c] shadow-sm" : "text-[#0b192c]/50"}`}
              >
                {t("Contact Us")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("demo");
                  setStatus("idle");
                }}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-bold transition ${mode === "demo" ? "bg-white text-[#0b192c] shadow-sm" : "text-[#0b192c]/50"}`}
              >
                {t("Book a Demo")}
              </button>
            </div>

            {status === "success" ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#9b1c31]/10 text-[#9b1c31]">
                  <FaCheck />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#0b192c]">
                  {t("Thanks — we received your details.")}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#0b192c]/55">
                  {t(
                    "We’ll review your request and get back to you about the next step.",
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl bg-[#0b192c] px-5 py-3 text-sm font-bold text-white"
                >
                  {t("Send another request")}
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="mt-8 grid gap-5 sm:grid-cols-2"
              >
                <label className="sm:col-span-1">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Name *")}
                  </span>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none transition focus:border-[#9b1c31]/60"
                    placeholder={t("Your name")}
                  />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Email *")}
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none transition focus:border-[#9b1c31]/60"
                    placeholder={t("you@example.com")}
                  />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Phone")}
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none transition focus:border-[#9b1c31]/60"
                    placeholder={t("+91...")}
                  />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Language")}
                  </span>
                  <select
                    value={form.language}
                    onChange={(e) =>
                      setForm({ ...form, language: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none focus:border-[#9b1c31]/60"
                  >
                    <option value="">{t("Select a language")}</option>
                    <option>{t("German")}</option>
                    <option>{t("French")}</option>
                    <option>{t("Italian")}</option>
                    <option>{t("Spanish")}</option>
                    <option>{t("English")}</option>
                    <option>{t("Other")}</option>
                  </select>
                </label>
                {mode === "demo" && (
                  <>
                    <label>
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                        {t("Preferred date")}
                      </span>
                      <input
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) =>
                          setForm({ ...form, preferredDate: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none focus:border-[#9b1c31]/60"
                      />
                    </label>
                    <label>
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                        {t("Preferred time")}
                      </span>
                      <input
                        type="time"
                        value={form.preferredTime}
                        onChange={(e) =>
                          setForm({ ...form, preferredTime: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none focus:border-[#9b1c31]/60"
                      />
                    </label>
                  </>
                )}

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Your goal")}
                  </span>
                  <input
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none focus:border-[#9b1c31]/60"
                    placeholder={t(
                      "e.g. move to Germany, work, travel, confidence",
                    )}
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Message")}
                  </span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-y rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-4 py-3 text-sm outline-none focus:border-[#9b1c31]/60"
                    placeholder={
                      mode === "demo"
                        ? t("Tell us what you would like to cover in the demo.")
                        : t("How can we help?")
                    }
                  />
                </label>

                {status === "error" && (
                  <p className="sm:col-span-2 text-sm text-[#9b1c31]">
                    {error}
                  </p>
                )}

                <button
                  disabled={status === "loading"}
                  className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-xl bg-[#0b192c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#9b1c31] disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaArrowRight />
                  )}
                  {mode === "demo"
                    ? t("Request Demo Session")
                    : t("Send Message")}
                </button>
                <p className="sm:col-span-2 text-xs leading-5 text-[#0b192c]/40">
                  {t(
                    "By submitting, you’re asking Native Connects to contact you about your request. Add your privacy notice before launch.",
                  )}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
