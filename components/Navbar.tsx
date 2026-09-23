"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Our Work", "#work"],
  ["Impact", "#impact"],
  ["Values", "#values"],
  ["Get Involved", "#join"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-[#fffdf8]/95 backdrop-blur">
      <div className="container-aaywa flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-forest text-lg font-black text-white">
            A
          </div>
          <div>
            <div className="text-xl font-black tracking-[0.18em] text-forest">AAYWA</div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-leaf">
              Women • Agriculture • Leadership
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-forest/80 hover:text-leaf">
              {label}
            </a>
          ))}
          <a href="#join" className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-forest">
            Join AAYWA
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-forest/15 p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-[#fffdf8] md:hidden">
          <div className="container-aaywa flex flex-col py-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-forest/10 py-4 font-semibold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
