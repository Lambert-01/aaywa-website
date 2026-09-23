"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

type NewsletterFormProps = {
  tone?: "dark" | "light";
};

export default function NewsletterForm({ tone = "dark" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const light = tone === "light";

  function submit(event: FormEvent) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p
        className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
          light ? "bg-white/10 text-cream" : "bg-sage text-forest"
        }`}
        role="status"
      >
        <CheckCircle2 size={18} className="text-leaf" aria-hidden />
        Thank you — you&apos;re on the list. AAYWA news will arrive in your inbox soon.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="w-full">
      <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
          className={`h-12 min-w-0 flex-1 rounded-full border px-5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold ${
            light
              ? "border-white/20 bg-white/10 text-cream placeholder:text-white/50 focus:border-gold/60"
              : "border-forest/15 bg-white text-ink placeholder:text-forest/40 focus:border-leaf"
          }`}
        />
        <button
          type="submit"
          className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-forest transition-all hover:bg-[#e2bc66] active:scale-95"
        >
          Subscribe
          <Send size={14} aria-hidden />
        </button>
      </div>
      {status === "error" && (
        <p id="newsletter-error" className="mt-2 text-sm font-medium text-red-700" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}