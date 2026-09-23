"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, X } from "lucide-react";
import { NAV, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import CTAButton from "@/components/ui/CTAButton";
import Logo from "@/components/ui/Logo";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open, onClose]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  function closeMenu() {
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="sticky top-0 z-10 border-b border-forest/10 bg-paper/90 backdrop-blur">
            <div className="container-aaywa flex h-20 items-center justify-between">
              <Logo />
              <button
                ref={closeRef}
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                <X size={20} aria-hidden />
              </button>
            </div>
          </div>

          <nav className="container-aaywa flex-1 py-6" aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV.map((item: NavItem) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onNavigate={closeMenu}
                />
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-forest/10 pt-8">
              <CTAButton href="/get-involved" variant="primary" size="lg" className="w-full">
                Join AAYWA
              </CTAButton>
              <CTAButton href="/get-involved#partner" variant="outline-dark" size="lg" className="w-full">
                Partner With Us
              </CTAButton>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const hasChildren = !!item.children?.length;
  const active = pathname === item.href;

  if (!hasChildren) {
    return (
      <li className="border-b border-forest/10">
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={cn(
            "flex items-center justify-between py-4 font-serif text-2xl tracking-tight transition-colors",
            active ? "text-leaf" : "text-forest hover:text-leaf"
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-forest/10">
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className="flex items-center justify-between py-4 font-serif text-2xl tracking-tight text-forest transition-colors hover:text-leaf"
      >
        {item.label}
        <ChevronDown size={18} className="text-leaf" aria-hidden />
      </Link>
      <ul className="pb-4" aria-label={`${item.label} submenu`}>
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={onNavigate}
              className="group flex items-center gap-2.5 py-2.5 pl-5 text-[0.95rem] font-medium text-forest/70 transition-colors hover:text-leaf"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              {child.label}
              <ExternalLink size={12} className="opacity-0 transition-opacity group-hover:opacity-60" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}