"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Sprig } from "@/components/ui/Botanical";
import Logo from "@/components/ui/Logo";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 88% 8%, rgba(215,169,75,0.22), transparent 40%), radial-gradient(circle at 8% 55%, rgba(47,107,73,0.35), transparent 45%), linear-gradient(155deg,#163D2B 0%,#12311f 60%,#0F311F 100%)",
            }}
          />
          <div className="grain-layer pointer-events-none absolute inset-0" aria-hidden />
          <Sprig className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 -rotate-12 text-cream/5" />

          <div className="relative z-10 border-b border-white/10">
            <div className="container-aaywa flex h-20 items-center justify-between">
              <Logo tone="light" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-cream/90 transition-colors hover:border-gold hover:text-gold"
              >
                <X size={20} aria-hidden />
              </button>
            </div>
          </div>

          <nav className="container-aaywa relative z-10 flex flex-1 flex-col justify-between py-10" aria-label="Mobile">
            <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {NAV.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group flex items-center gap-5 py-5 transition-colors",
                        active ? "text-gold" : "text-cream/85 hover:text-cream"
                      )}
                    >
                      <span className="font-mono text-xs text-gold/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-serif text-[1.5rem] leading-none tracking-tight">
                        {item.label}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "h-1.5 w-1.5 rounded-full bg-gold transition-opacity duration-300",
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                        )}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              custom={NAV.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 pt-8"
            >
              <span className="font-serif text-sm italic text-cream/50">
                Women grow where they are supported.
              </span>
              <span className="h-px flex-1 bg-white/10" aria-hidden />
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}