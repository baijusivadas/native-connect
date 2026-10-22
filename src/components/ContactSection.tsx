"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
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
  const { locale, t } = useLanguage();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [mode, setMode] = useState<"contact" | "demo">("contact");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [website, setWebsite] = useState("");
  const [booking, setBooking] = useState<{
    startTime: string;
    meetingLink: string | null;
  } | null>(null);
  const bookingRequest = useRef<{ key: string; fingerprint: string } | null>(
    null,
  );

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<{ goal?: string; language?: string }>;
      openDemo(customEvent.detail?.goal, customEvent.detail?.language);
    };
    window.addEventListener("native-connects:open-demo", handler as EventListener);
    return () =>
      window.removeEventListener("native-connects:open-demo", handler as EventListener);
  }, []);

  function openDemo(prefilledGoal?: string, prefilledLanguage?: string) {
    setMode("demo");
    setStatus("idle");
    setError("");
    setBooking(null);
    if (prefilledGoal !== undefined || prefilledLanguage !== undefined) {
      setForm((prev) => ({
        ...prev,
        ...(prefilledGoal !== undefined ? { goal: prefilledGoal } : {}),
        ...(prefilledLanguage !== undefined ? { language: prefilledLanguage } : {}),
      }));
    }
    const target = document.getElementById("contact");
    if (target) {
      const navbarHeight = 80;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: Math.max(0, targetTop - navbarHeight), behavior: "smooth" });
    }
    window.setTimeout(
      () => document.getElementById("contact-name")?.focus(),
      450,
    );
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    // Client-side phone validation
    if (mode === "demo" && !form.phone.trim()) {
      setStatus("error");
      setError(t("Please enter a phone number to book a demo."));
      return;
    }

    if (form.phone.trim()) {
      const digits = form.phone.replace(/[\s\-().+]/g, "");
      if (!/^\d+$/.test(digits) || digits.length < 10 || digits.length > 15) {
        setStatus("error");
        setError(t("Please enter a valid phone number (10–15 digits)."));
        return;
      }
    }

    try {
      const bookingFingerprint = JSON.stringify(form);
      if (
        mode === "demo" &&
        bookingRequest.current?.fingerprint !== bookingFingerprint
      ) {
        bookingRequest.current = {
          key: window.crypto.randomUUID(),
          fingerprint: bookingFingerprint,
        };
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: mode === "demo" ? "demo-booking" : "contact-form",
          website,
          ...(mode === "demo"
            ? { idempotencyKey: bookingRequest.current?.key }
            : {}),
        }),
      });
      const data = (await response.json()) as {
        error?: unknown;
        booking?: { startTime?: unknown; meetingLink?: unknown };
      };
      if (!response.ok) {
        throw new Error(
          typeof data.error === "string"
            ? t(data.error)
            : t("Something went wrong."),
        );
      }

      if (mode === "demo") {
        if (
          typeof data.booking?.startTime !== "string" ||
          (data.booking.meetingLink !== null &&
            typeof data.booking.meetingLink !== "string")
        ) {
          throw new Error(t("Could not confirm your demo booking. Please try again."));
        }
        setBooking({
          startTime: data.booking.startTime,
          meetingLink: data.booking.meetingLink,
        });
      }
      bookingRequest.current = null;
      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t("Please try again."));
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:gap-8">
          <div className="rounded-[1.75rem] bg-[#9b1c31] p-5 text-white sm:p-8 lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c19a68]">
              {t("Get in touch")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {mode === "demo"
                ? t("Book a demo session.")
                : t("Let’s find the right learning path.")}
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/70">
              {t(
                "Tell us a little about your goals. We’ll use your details to understand what you need and help you choose the right format.",
              )}
            </p>

            <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-white/70">
              {[
                "Personalized learning goals",
                "Native-speaker support",
                "Flexible online sessions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[#c19a68]">
                    <FaCheck className="text-[9px]" />
                  </span>
                  {t(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#0b192c]/10 bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-wrap gap-2 rounded-xl bg-[#0b192c]/5 p-1">
              <button
                type="button"
                onClick={() => {
                  setMode("contact");
                  setStatus("idle");
                }}
                className={`flex-1 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${mode === "contact" ? "bg-white text-[#0b192c] shadow-sm" : "text-[#0b192c]/50"}`}
              >
                {t("Contact Us")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("demo");
                  setStatus("idle");
                  window.history.pushState(null, "", "#contact");
                }}
                className={`flex-1 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${mode === "demo" ? "bg-white text-[#0b192c] shadow-sm" : "text-[#0b192c]/50"}`}
              >
                {t("Book a Demo")}
              </button>
            </div>

            {status === "success" ? (
              <div className="py-12 text-center" role="region" aria-live="polite">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#9b1c31]/10 text-[#9b1c31]">
                  <FaCheck />
                </div>
                <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[#0b192c]">
                  {t(mode === "demo" ? "Your demo is booked!" : "Thank you! We have received your details.")}
                </h3>
                <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-[#0b192c]/55">
                  {t(mode === "demo" ? "Your Google Meet invitation has been sent to your email." : "We will connect with you shortly")}
                </p>
                {booking && (
                  <p className="mt-3 text-sm font-semibold text-[#0b192c]">
                    {new Intl.DateTimeFormat(locale, {
                      dateStyle: "full",
                      timeStyle: "short",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(booking.startTime))}{" "}
                    (IST)
                  </p>
                )}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-xl bg-[#0b192c] px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-[#142945]"
                  >
                    {t("Send another request")}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                className="mt-5 grid gap-3.5 sm:grid-cols-2"
              >
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                />
                <label className="sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Name *")}
                  </span>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-[#9b1c31]/60"
                    placeholder={t("Your name")}
                  />
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Email *")}
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-[#9b1c31]/60"
                    placeholder={t("you@example.com")}
                  />
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Phone")}
                    {mode === "demo" && <span> *</span>}
                  </span>
                  <input
                    type="tel"
                    required={mode === "demo"}
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-[#9b1c31]/60"
                    placeholder={t("+91...")}
                  />
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Language")}
                  </span>
                  <select
                    value={form.language}
                    onChange={(e) =>
                      setForm({ ...form, language: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-[#9b1c31]/60"
                  >
                    <option value="">{t("Select a language")}</option>
                    <option value="German">{t("German")}</option>
                    <option value="French">{t("French")}</option>
                    <option value="Italian">{t("Italian")}</option>
                    <option value="Spanish">{t("Spanish")}</option>
                    <option value="English">{t("English")}</option>
                    <option value="Other">{t("Other")}</option>
                  </select>
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Your goal")}
                  </span>
                  <input
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-[#9b1c31]/60"
                    placeholder={t(
                      "e.g. move to Germany, work, travel, confidence",
                    )}
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0b192c]/55">
                    {t("Message")}
                  </span>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-y rounded-xl border border-[#0b192c]/12 bg-[#f7f4ef]/45 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-[#9b1c31]/60"
                    placeholder={
                      mode === "demo"
                        ? t("Tell us what you would like to cover in the demo.")
                        : t("How can we help?")
                    }
                  />
                </label>

                {status === "error" && (
                  <p role="alert" className="sm:col-span-2 text-xs sm:text-sm text-[#9b1c31]">
                    {error}
                  </p>
                )}

                <button
                  disabled={status === "loading"}
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0b192c] px-5 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-[#9b1c31] disabled:cursor-wait disabled:opacity-60 cursor-pointer"
                >
                  {status === "loading" ? (
                    <FaSpinner className="animate-spin text-xs" />
                  ) : (
                    <FaArrowRight className="text-xs" />
                  )}
                  {mode === "demo"
                    ? t("Schedule Demo Session")
                    : t("Send Message")}
                </button>
                <p className="sm:col-span-2 text-[11px] leading-relaxed text-[#0b192c]/45">
                  {t("By submitting, you agree Native Connects may contact you. Your data is handled per our")}{" "}
                  <a href="/privacy-policy" className="underline hover:text-[#9b1c31] transition-colors">{t("Privacy Policy")}</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}