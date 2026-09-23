import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { CONTACT_METHODS, ACTIVE_SOCIALS, FOOTER_NAV, SITE } from "@/lib/site";
import NewsletterForm from "@/components/ui/NewsletterForm";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  x: Twitter,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div
        className="grain-layer"
        aria-hidden
        style={{ opacity: 0.7 }}
      />

      <div className="container-aaywa relative">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1.1fr] lg:gap-10">
          <div>
            <Link href="/" aria-label="AAYWA home" className="inline-flex items-center gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white">
                <Image
                  src="/logo.png"
                  alt="AAYWA logo"
                  width={1254}
                  height={1254}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-xl font-extrabold tracking-[0.18em]">AAYWA</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/65">
              Transforming the lives of young African women from subsistence farming
              to sustainable agribusiness — through training, innovation, leadership,
              finance and market access.
            </p>

            {ACTIVE_SOCIALS.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="AAYWA social media">
                {ACTIVE_SOCIALS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <li key={social.icon}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                        aria-label={`${social.label}`}
                        title={social.label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest"
                      >
                        <Icon size={17} aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <FooterColumn title="Quick Links" links={FOOTER_NAV.quickLinks} />
          <FooterColumn title="Programs" links={FOOTER_NAV.programs} />
          <FooterColumn title="Resources" links={FOOTER_NAV.resources} />
          <FooterColumn title="Get Involved" links={FOOTER_NAV.getInvolved} />
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl tracking-tight text-cream">
              Stay close to the field.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-cream/65">
              News, opportunities and stories of change from AAYWA programmes,
              delivered occasionally — never crowded.
            </p>
          </div>
          <div className="lg:justify-self-end lg:self-center">
            <NewsletterForm tone="light" />
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 py-8 sm:grid-cols-2">
          <div className="text-sm text-cream/55">
            <div className="font-bold uppercase tracking-[0.14em] text-cream/70">Contact</div>
            <div className="mt-3 flex flex-col gap-1.5">
              {CONTACT_METHODS.length > 0 ? (
                CONTACT_METHODS.map((method) => (
                  <span key={method.kind}>
                    {method.kind === "email" ? (
                      <a href={`mailto:${method.value}`} className="transition-colors hover:text-gold">
                        {method.value}
                      </a>
                    ) : (
                      method.value
                    )}
                  </span>
                ))
              ) : (
                <span>Official contact details will be published here.</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 self-end text-xs">
            {["Privacy Policy", "Safeguarding", "Terms"].map((label) => (
              <span
                key={label}
                title="Policy page to be published"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-3 py-2 text-center text-cream/60"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-aaywa flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/45 sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Empowering young women through sustainable agribusiness in Africa.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={`Footer — ${title}`}>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.label + link.href}>
            <Link
              href={link.href}
              className="text-sm text-cream/65 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}