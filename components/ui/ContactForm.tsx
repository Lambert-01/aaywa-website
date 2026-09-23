"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-forest/40 focus:border-leaf focus:ring-2 focus:ring-sage";

const LABEL_CLASSES = "text-sm font-bold text-forest";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-[1.6rem] border border-leaf/25 bg-sage/60 p-8" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-leaf text-cream">
          <CheckCircle2 size={22} aria-hidden />
        </span>
        <div>
          <h3 className="font-serif text-2xl tracking-tight text-forest">Message received.</h3>
          <p className="mt-2 text-sm leading-6 text-forest/70">
            Thank you for reaching out. This form is a front-end placeholder —
            it will be connected to AAYWA&apos;s official communication channel
            before launch. Your message is not yet sent to anyone.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASSES}>
            Full name
          </label>
          <input id="contact-name" name="name" type="text" required minLength={2} className={FIELD_CLASSES} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className={LABEL_CLASSES}>
            Email
          </label>
          <input id="contact-email" name="email" type="email" required className={FIELD_CLASSES} placeholder="you@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={LABEL_CLASSES}>
          I&apos;m contacting AAYWA as…
        </label>
        <select id="contact-subject" name="subject" className={FIELD_CLASSES} defaultValue="Young woman farmer">
          {[
            "Young woman farmer",
            "Emerging agripreneur",
            "Mentor",
            "Partner / organization",
            "Buyer / market partner",
            "Researcher",
            "Supporter / donor",
            "Media",
            "Other",
          ].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL_CLASSES}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          minLength={10}
          className={`${FIELD_CLASSES} resize-y`}
          placeholder="Tell us briefly how you'd like to connect with AAYWA."
        />
      </div>

      {error && (
        <p className="text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex h-12 w-fit cursor-pointer items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-forest transition-all duration-300 hover:bg-[#e2bc66] hover:shadow-glow active:scale-95"
      >
        Send message
        <Send size={14} aria-hidden />
      </button>
    </form>
  );
}