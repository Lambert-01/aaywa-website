"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.08] bg-[rgba(15,49,33,0.92)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-[16px]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-aaywa flex h-20 items-center justify-between gap-6">
          <Logo tone="light" />

          <nav className="hidden items-center gap-9 xl:flex" aria-label="Main">
            {NAV.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} pathname={pathname} />
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-cream/90 transition-colors hover:border-gold hover:text-gold xl:hidden"
          >
            <Menu size={20} aria-hidden />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative py-2 text-[0.92rem] font-semibold tracking-wide transition-colors duration-300",
        active ? "text-cream" : "text-cream/75 hover:text-cream"
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-gold/80 to-gold/0 transition-all duration-300",
          active
            ? "w-full"
            : "w-0 group-hover:w-3/4 group-hover:bg-gold/60"
        )}
      />
    </Link>
  );
}