"use client";

import { FormEvent, useState } from "react";
import {
  FaCommentDots,
  FaPaperPlane,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

type Message = { role: "user" | "assistant"; content: string };

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi! I’m the Native Connects assistant. Ask me about languages, lessons, pricing, or how our learning experience works.",
};

export default function ChatWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [
      ...messages,
      { role: "user" as const, content: text },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "I could not connect right now. Please use the contact form instead.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div
          className="fixed bottom-24 right-4 z-[70] flex w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-[#0b192c]/10 bg-[#f7f4ef] shadow-2xl sm:right-6"
          role="dialog"
          aria-label={t("Native Connects Assistant")}
        >
          <div className="flex items-center justify-between bg-[#0b192c] px-5 py-4 text-white">
            <div>
              <p className="text-sm font-bold">
                {t("Native Connects Assistant")}
              </p>
              <p className="mt-0.5 text-[11px] text-white/55">
                {t("Ask about learning with us")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex h-[390px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto rounded-br-md bg-[#9b1c31] text-white"
                    : "rounded-bl-md bg-[#0b192c]/6 text-[#0b192c]"
                }`}
              >
                {t(message.content)}
              </div>
            ))}
            {loading && (
              <div className="flex w-fit items-center gap-2 rounded-2xl rounded-bl-md bg-[#0b192c]/6 px-4 py-3 text-sm text-[#0b192c]/60">
                <FaSpinner className="animate-spin" /> {t("Thinking…")}
              </div>
            )}
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-[#0b192c]/10 bg-white/60 p-3"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-[#0b192c]/10 bg-white px-3 py-2 focus-within:border-[#9b1c31]/50">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={t("Ask a question…")}
                className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-[#0b192c] outline-none placeholder:text-[#0b192c]/35"
                maxLength={1000}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#9b1c31] text-white transition hover:bg-[#85172a] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={t("Send message")}
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-5 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#9b1c31] text-white shadow-xl shadow-[#0b192c]/20 transition hover:-translate-y-0.5 hover:bg-[#85172a] sm:right-6"
        aria-label={open ? t("Close AI chat") : t("Open AI chat")}
      >
        {open ? <FaTimes /> : <FaCommentDots />}
      </button>
    </>
  );
}
