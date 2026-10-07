"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import {
  FaCommentDots,
  FaPaperPlane,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

type Message = { role: "user" | "assistant"; content: string };

const initialGreetings: Record<string, string> = {
  en: "Hi! I'm the Native Connects assistant. Ask me about languages, lessons, pricing, or how our learning experience works.",
  fr: "Bonjour ! Je suis l'assistant Native Connects. Posez-moi vos questions sur les langues, les cours, les tarifs ou notre méthode d'apprentissage.",
  de: "Hallo! Ich bin der Native Connects Assistent. Fragen Sie mich nach Sprachen, Unterricht, Preisen oder wie unser Lernkonzept funktioniert.",
  it: "Ciao! Sono l'assistente di Native Connects. Chiedimi informazioni su lingue, lezioni, prezzi o sul nostro metodo di apprendimento.",
  ro: "Bună! Sunt asistentul Native Connects. Întreabă-mă despre limbi străine, lecții, prețuri sau cum funcționează experiența noastră de învățare.",
};

const initialMessage: Message = {
  role: "assistant",
  content: initialGreetings.en,
};

/** Minimum user messages before we ask for contact info */
const CAPTURE_AFTER = 3;

/**
 * Lightweight markdown renderer for chat messages.
 * Handles: **bold**, *italic*, bullet lists (* / -), numbered lists, paragraphs.
 */
function ChatMarkdown({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);

  return (
    <div className="flex flex-col gap-2">
      {blocks.map((block, bi) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        const isBullet = lines.every((l) => /^[*\-]\s/.test(l));
        const isNumbered = lines.every((l) => /^\d+\.\s/.test(l));

        if ((isBullet || isNumbered) && lines.length > 1) {
          const Tag = isNumbered ? "ol" : "ul";
          return (
            <Tag
              key={bi}
              className={`ml-4 flex flex-col gap-1 text-[13px] leading-6 ${
                isNumbered ? "list-decimal" : "list-disc"
              }`}
            >
              {lines.map((line, li) => {
                const txt = isNumbered
                  ? line.replace(/^\d+\.\s/, "")
                  : line.replace(/^[*\-]\s/, "");
                return <li key={li}>{renderInline(txt)}</li>;
              })}
            </Tag>
          );
        }

        return (
          <p key={bi} className="text-[13px] leading-6">
            {renderInline(lines.join(" "))}
          </p>
        );
      })}
    </div>
  );
}

/** Renders inline markdown: **bold** and *italic* */
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let last = 0;
  let match;
  let idx = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[2]) {
      parts.push(<strong key={idx++} className="font-semibold">{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={idx++}>{match[3]}</em>);
    }
    last = regex.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}


export default function ChatWidget() {
  const { locale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: initialGreetings[locale] || initialGreetings.en,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userMsgCount, setUserMsgCount] = useState(0);

  // Update greeting when locale changes if no user messages sent yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [
          {
            role: "assistant",
            content: initialGreetings[locale] || initialGreetings.en,
          },
        ];
      }
      return prev;
    });
  }, [locale]);

  // Lead capture state
  const [showCapture, setShowCapture] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [captureName, setCaptureName] = useState("");
  const [captureEmail, setCaptureEmail] = useState("");
  const [captureLoading, setCaptureLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const launcherButtonRef = useRef<HTMLButtonElement>(null);

  // Close chatbox when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        chatBoxRef.current &&
        !chatBoxRef.current.contains(target) &&
        launcherButtonRef.current &&
        !launcherButtonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    const nextCount = userMsgCount + 1;
    setUserMsgCount(nextCount);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, locale }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.message },
      ]);

      // Show lead capture after CAPTURE_AFTER user messages (only once)
      if (nextCount >= CAPTURE_AFTER && !captured && !showCapture) {
        setTimeout(() => {
          setShowCapture(true);
          scrollToBottom();
        }, 600);
      }
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
      setTimeout(scrollToBottom, 100);
    }
  }

  async function saveLeadCapture(event: FormEvent) {
    event.preventDefault();
    if (!captureName.trim() || !captureEmail.trim()) return;
    setCaptureLoading(true);

    // Build a summary of the conversation
    const conversationSummary = messages
      .filter((m) => m.role !== "assistant" || messages.indexOf(m) > 0) // skip greeting
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n")
      .slice(0, 2000);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: captureName.trim(),
          email: captureEmail.trim(),
          source: "ai-chat",
          type: "chat",
          conversationSummary,
          message: messages.find((m) => m.role === "user")?.content ?? "",
        }),
      });
    } catch {
      // Non-blocking — silently ignore
    }

    setCaptureLoading(false);
    setCaptured(true);
    setShowCapture(false);
  }

  return (
    <>
      {open && (
        <div
          ref={chatBoxRef}
          className="fixed bottom-24 right-4 z-[70] flex w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-[#0b192c]/10 bg-[#f7f4ef] shadow-2xl sm:right-6"
          role="dialog"
          aria-label={t("Native Connects Assistant")}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#0b192c] px-5 py-4 text-white">
            <div>
              <p className="text-sm font-bold">{t("Native Connects Assistant")}</p>
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

          {/* Messages */}
          <div className="flex h-[360px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user"
                    ? "ml-auto rounded-br-md bg-[#9b1c31] text-white"
                    : "rounded-bl-md bg-[#0b192c]/6 text-[#0b192c]"
                  }`}
              >
                {message.role === "assistant" ? (
                  <ChatMarkdown text={message.content} />
                ) : (
                  message.content
                )}
              </div>
            ))}

            {loading && (
              <div className="flex w-fit items-center gap-2 rounded-2xl rounded-bl-md bg-[#0b192c]/6 px-4 py-3 text-sm text-[#0b192c]/60">
                <FaSpinner className="animate-spin" /> {t("Thinking…")}
              </div>
            )}

            {/* Lead capture card */}
            {showCapture && !captured && (
              <div className="rounded-2xl border border-[#9b1c31]/20 bg-white p-4 text-sm shadow-sm">
                <p className="mb-3 font-semibold text-[#0b192c]">
                  {t("Want us to follow up with you?")}
                </p>
                <form onSubmit={saveLeadCapture} className="flex flex-col gap-2">
                  <input
                    required
                    type="text"
                    placeholder={t("Your name")}
                    value={captureName}
                    onChange={(e) => setCaptureName(e.target.value)}
                    className="rounded-xl border border-[#0b192c]/15 px-3 py-2 text-sm outline-none focus:border-[#9b1c31]/50"
                  />
                  <input
                    required
                    type="email"
                    placeholder={t("Your email")}
                    value={captureEmail}
                    onChange={(e) => setCaptureEmail(e.target.value)}
                    className="rounded-xl border border-[#0b192c]/15 px-3 py-2 text-sm outline-none focus:border-[#9b1c31]/50"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={captureLoading}
                      className="flex-1 rounded-xl bg-[#9b1c31] py-2 text-sm font-semibold text-white transition hover:bg-[#85172a] disabled:opacity-60"
                    >
                      {captureLoading ? t("Saving…") : t("Yes, follow up")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCapture(false)}
                      className="rounded-xl border border-[#0b192c]/15 px-3 py-2 text-sm text-[#0b192c]/60 transition hover:bg-[#0b192c]/5"
                    >
                      {t("Skip")}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {captured && (
              <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
                ✓ {t("Got it! We'll be in touch soon.")}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
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
        ref={launcherButtonRef}
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
