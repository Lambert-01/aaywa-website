"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Leaf, Menu } from "lucide-react";
import { NAV, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { Sprig } from "@/components/ui/Botanical";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-paper/95 shadow-[0_10px_40px_rgba(23,61,43,0.10)] backdrop-blur-xl"
            : "bg-paper/70 backdrop-blur-md"
        )}
      >
        <span
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-gold/60 to-transparent"
          aria-hidden
        />
        <div className="container-aaywa flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {NAV.map((item) => (
              <DesktopNavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <Link
              href="/get-involved#partner"
              className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-bold text-forest/75 transition-colors hover:text-forest"
            >
              Partner With Us
              <ArrowRight
                size={14}
                className="text-gold transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-cream shadow-[0_6px_20px_rgba(30,82,56,0.35)] ring-1 ring-white/10 transition-all duration-300 hover:bg-[#245f40] hover:shadow-glow active:scale-95"
            >
              Join AAYWA
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 bg-white/60 text-forest shadow-sm transition-colors hover:bg-forest hover:text-cream xl:hidden"
          >
            <Menu size={20} aria-hidden />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

function DesktopNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const hasChildren = !!item.children?.length;
  const active = pathname === item.href;

  return (
    <div className="group relative">
      <Link
        href={item.href}
        aria-haspopup={hasChildren ? "true" : undefined}
        className={cn(
          "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-all duration-200",
          active
            ? "bg-gold/15 text-forest ring-1 ring-gold/25"
            : "text-forest/75 hover:bg-forest/[0.05] hover:text-forest"
        )}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            size={14}
            className={cn(
              "transition-transform duration-300 group-hover:rotate-180",
              active ? "text-leaf" : "text-forest/40"
            )}
            aria-hidden
          />
        )}
      </Link>

      {hasChildren && (
        <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
          <div className="relative w-[22rem] overflow-hidden rounded-3xl border border-forest/10 bg-paper/95 p-3 shadow-lifted backdrop-blur">
            <Sprig className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rotate-12 text-leaf/20" />
            <div className="relative flex items-center justify-between px-3 pb-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth">
                  Our Work
                </p>
                <p className="mt-0.5 text-xs text-forest/55">
                  Six pillars of the AAYWA journey
                </p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-leaf">
                <Leaf size={16} aria-hidden />
              </span>
            </div>
            <ul aria-label="Our Work submenu" className="relative space-y-0.5">
              {item.children?.map((child, index) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="group/item flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white"
                  >
                    <span className="font-mono text-[10px] font-bold text-gold/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-forest/80 transition-colors group-hover/item:text-forest">
                      {child.label}
                    </span>
                    <ArrowRight
                      size={13}
                      className="text-leaf opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/our-work#journey"
              className="group/journey relative mt-2 flex items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-forest to-leaf px-5 py-4 text-cream transition-shadow hover:shadow-glow"
            >
              <span>
                <span className="block text-sm font-bold">Explore the full journey</span>
                <span className="block text-xs text-cream/70">
                  From first step to leadership
                </span>
              </span>
              <ArrowRight
                size={16}
                className="text-gold transition-transform duration-300 group-hover/journey:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}