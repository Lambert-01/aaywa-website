import type { Metadata } from "next";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { CONTACT } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AAYWA about programmes, partnerships, mentorship, market access, research or supporting young women in African agribusiness.",
};

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  x: Twitter,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's grow something together."
        text="Whether you are a young woman farmer, a mentor, a buyer, a funder or a researcher — AAYWA would love to hear from you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-aaywa grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <div className="rounded-[1.8rem] border border-forest/10 bg-white p-7 sm:p-10">
              <div className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.22em] text-earth">
                Send a message
              </div>
              <h2 className="mt-4 font-serif text-2xl tracking-tight text-forest sm:text-3xl">
                Start the conversation.
              </h2>
              <p className="mt-3 text-sm leading-6 text-forest/60">
                The form below is a front-end placeholder and will be connected to
                AAYWA&apos;s official communication channel before launch.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-[1.6rem] bg-forest p-7 text-cream sm:p-8">
                <h2 className="font-serif text-2xl tracking-tight">Other ways to connect</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                      <Mail size={18} aria-hidden />
                    </span>
                    <div>
                      <div className="font-bold">Email</div>
                      <div className="text-cream/65">
                        {CONTACT.email || "Official email to be published."}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                      <Phone size={18} aria-hidden />
                    </span>
                    <div>
                      <div className="font-bold">Phone</div>
                      <div className="text-cream/65">
                        {CONTACT.phone || "Official phone to be published."}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                      <MapPin size={18} aria-hidden />
                    </span>
                    <div>
                      <div className="font-bold">Office</div>
                      <div className="text-cream/65">
                        {CONTACT.address || "Office location to be published."}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[1.6rem] border border-forest/10 bg-white p-7 sm:p-8">
                <h2 className="font-serif text-xl tracking-tight text-forest">Follow AAYWA</h2>
                <p className="mt-2 text-sm text-forest/60">
                  Official social channels will be linked here as they go live.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {CONTACT.socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.icon];
                    return (
                      <li key={social.icon}>
                        <a
                          href={social.href}
                          aria-label={`${social.label} (coming soon)`}
                          title={social.label}
                          className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 text-forest/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest"
                        >
                          <Icon size={18} aria-hidden />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Prefer to get involved first?"
        text="Explore the ways to join AAYWA's ecosystem as a farmer, mentor, partner, supporter, buyer or researcher — then come back to us."
        primaryLabel="Get involved"
        primaryHref="/get-involved"
      />
    </>
  );
}