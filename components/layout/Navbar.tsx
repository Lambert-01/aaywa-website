"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, Menu } from "lucide-react";
import { NAV, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";

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
            ? "border-b border-forest/10 bg-paper/90 shadow-[0_4px_30px_rgba(23,61,43,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-paper/45 backdrop-blur-md"
        )}
      >
        <div className="container-aaywa flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {NAV.map((item) => (
              <DesktopNavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/get-involved#partner"
              className="inline-flex items-center px-3 py-2.5 text-sm font-bold text-forest/80 transition-colors hover:text-leaf"
            >
              Partner With Us
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-forest transition-all duration-300 hover:bg-[#e2bc66] hover:shadow-glow active:scale-95"
            >
              Join AAYWA
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-cream xl:hidden"
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
        aria-expanded={hasChildren ? undefined : undefined}
        className={cn(
          "relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors duration-200",
          active ? "text-leaf" : "text-forest/80 hover:text-forest"
        )}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-300 group-hover:rotate-180", active ? "text-leaf" : "text-forest/40")}
            aria-hidden
          />
        )}
        {active && (
          <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold" aria-hidden />
        )}
      </Link>

      {hasChildren && (
        <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
          <div className="w-[20rem] overflow-hidden rounded-2xl border border-forest/10 bg-paper p-2 shadow-lifted">
            <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-earth">
              Our Work
            </p>
            <ul aria-label="Our Work submenu" className="space-y-0.5">
              {item.children?.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-transform group-hover/item:scale-150" aria-hidden />
                    <span className="flex-1 text-sm font-semibold text-forest/80 transition-colors group-hover/item:text-forest">
                      {child.label}
                    </span>
                    <ExternalLink size={12} className="text-forest/30 opacity-0 transition-opacity group-hover/item:opacity-100" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}