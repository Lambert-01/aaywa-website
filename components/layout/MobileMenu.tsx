"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { NAV, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Sprig } from "@/components/ui/Botanical";
import CTAButton from "@/components/ui/CTAButton";
import Logo from "@/components/ui/Logo";

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.06 + index * 0.05, duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);

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
          transition={{ duration: 0.28 }}
        >
          <div className="pointer-events-none fixed inset-0" style={{ background: "radial-gradient(circle at 85% 6%, rgba(215,169,75,0.18), transparent 42%), radial-gradient(circle at 6% 62%, rgba(30,82,56,0.07), transparent 40%)" }} aria-hidden />
          <Sprig className="pointer-events-none fixed -bottom-24 -left-20 h-96 w-96 -rotate-12 text-leaf/10" />
          <div className="grain-layer pointer-events-none fixed inset-0" aria-hidden />

          <div className="sticky top-0 z-10 border-b border-forest/10 bg-paper/90 backdrop-blur">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-gold/60 to-transparent" aria-hidden />
            <div className="container-aaywa flex h-20 items-center justify-between">
              <Logo />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 bg-white/60 text-forest shadow-sm transition-colors hover:bg-forest hover:text-cream"
              >
                <X size={20} aria-hidden />
              </button>
            </div>
          </div>

          <nav className="container-aaywa relative flex-1 pt-8" aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV.map((item, index) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  index={index}
                  pathname={pathname}
                  openSub={openSub}
                  setOpenSub={setOpenSub}
                  onNavigate={onClose}
                />
              ))}
            </ul>

            <div className="relative mt-10 rounded-[1.6rem] border border-forest/10 bg-white p-6 shadow-soft">
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-forest shadow-sm">
                Join the movement
              </span>
              <div className="mt-3 flex flex-col gap-3">
                <CTAButton href="/get-involved" variant="primary" size="lg" className="w-full" withArrow>
                  Take the next step
                </CTAButton>
                <CTAButton href="/get-involved#partner" variant="outline-dark" size="lg" className="w-full">
                  Partner With Us
                </CTAButton>
              </div>
            </div>

            <div className="flex items-center gap-3 py-10">
              <span className="font-serif text-lg italic text-forest/50">Women grow where they are supported.</span>
              <span className="h-px flex-1 bg-forest/10" aria-hidden />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileNavItem({
  item,
  index,
  pathname,
  openSub,
  setOpenSub,
  onNavigate,
}: {
  item: NavItem;
  index: number;
  pathname: string;
  openSub: string | null;
  setOpenSub: (href: string | null) => void;
  onNavigate: () => void;
}) {
  const hasChildren = !!item.children?.length;
  const active = pathname === item.href;
  const isOpen = openSub === item.href;

  const label = (
    <span className="flex items-center gap-4">
      <span className="font-mono text-xs text-gold/70">{String(index + 1).padStart(2, "0")}</span>
      <span className="font-serif text-[1.65rem] leading-none tracking-tight">
        {item.label}
      </span>
    </span>
  );

  return (
    <motion.li
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="border-b border-forest/10"
    >
      {hasChildren ? (
        <>
          <button
            type="button"
            onClick={() => setOpenSub(isOpen ? null : item.href)}
            aria-expanded={isOpen}
            className={cn(
              "flex w-full items-center justify-between py-4 text-left transition-colors",
              active ? "text-leaf" : "text-forest hover:text-leaf"
            )}
          >
            {label}
            <ChevronDown
              size={20}
              className={cn("text-leaf transition-transform duration-300", isOpen && "rotate-180")}
              aria-hidden
            />
          </button>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="space-y-1 pb-5 pl-10" aria-label={`${item.label} submenu`}>
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onNavigate}
                        className="group flex items-center gap-3 rounded-xl py-2.5 text-[0.95rem] font-medium text-forest/70 transition-colors hover:text-leaf"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-transform duration-200 group-hover:scale-150" aria-hidden />
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={cn(
            "group flex items-center justify-between py-4 transition-colors",
            active ? "text-leaf" : "text-forest hover:text-leaf"
          )}
        >
          {label}
          {active && (
            <span className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                You are here
              </span>
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />
            </span>
          )}
        </Link>
      )}
    </motion.li>
  );
}