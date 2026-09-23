"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

type NewsletterFormProps = {
  tone?: "dark" | "light";
};

export default function NewsletterForm({ tone = "dark" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "success">("idle");
  const [error, setError] = useState("");
  const light = tone === "light";

  async function submit(event: FormEvent) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        configured?: boolean;
        error?: string;
      };
      if (res.ok && body.ok) {
        setStatus("success");
      } else if (res.status === 501) {
        setStatus("idle");
        setError(
          body.error ?? "Mailing list subscription is not enabled yet. Please try again later."
        );
      } else {
        setStatus("error");
        setError(body.error ?? "We could not subscribe you right now.");
      }
    } catch {
      setStatus("error");
      setError("There was a network problem subscribing you.");
    }
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
        Thank you — you&apos;re subscribed. AAYWA news will arrive in your inbox soon.
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
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
          className={`h-12 min-w-0 flex-1 rounded-full border px-5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold ${
            light
              ? "border-white/20 bg-white/10 text-cream placeholder:text-white/50 focus:border-gold/60"
              : "border-forest/15 bg-white text-ink placeholder:text-forest/40 focus:border-leaf"
          }`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-forest transition-all hover:bg-[#e2bc66] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Subscribing…" : "Subscribe"}
          <Send size={14} aria-hidden />
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}