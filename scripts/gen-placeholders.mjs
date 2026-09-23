import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const IMAGES = [
  ["hero-primary.svg", 900, 1100, "Portrait — young African woman farmer leading in the field", "#163D2B", "#2F6B49"],
  ["hero-secondary.svg", 1100, 720, "Landscape — AAYWA agribusiness training session", "#8A5E3B", "#2F6B49"],
  ["about-main.svg", 900, 1100, "Portrait — woman agripreneur with produce", "#F7F3E8", "#D7A94B"],
  ["about-accent.svg", 800, 640, "Landscape — greenhouse farming", "#2F6B49", "#163D2B"],
  ["work-agribusiness.svg", 1000, 700, "Agribusiness development — women running an enterprise", "#F7F3E8", "#2F6B49"],
  ["work-sustainable.svg", 1000, 700, "Sustainable agriculture — regenerative farm field", "#DDE9DF", "#163D2B"],
  ["work-markets.svg", 1000, 700, "Market access — produce reaching buyers", "#FAF8F2", "#8A5E3B"],
  ["work-finance.svg", 1000, 700, "Finance readiness — records and planning session", "#DDE9DF", "#2F6B49"],
  ["work-leadership.svg", 1000, 700, "Leadership & mentorship — women in dialogue", "#F7F3E8", "#163D2B"],
  ["work-innovation.svg", 1000, 700, "Innovation — woman using a smartphone on the farm", "#FAF8F2", "#5D8A5A"],
  ["stories-1.svg", 800, 1000, "Beneficiary story photograph — portrait", "#163D2B", "#5D8A5A"],
  ["stories-2.svg", 800, 1000, "Beneficiary story photograph — portrait", "#8A5E3B", "#D7A94B"],
  ["stories-3.svg", 800, 1000, "Beneficiary story photograph — portrait", "#2F6B49", "#163D2B"],
  ["who-we-serve.svg", 900, 1180, "Who we serve — young women farmers in community", "#163D2B", "#2F6B49"],
  ["impact-field.svg", 1400, 800, "Impact — thriving farmland under management", "#2F6B49", "#163D2B"],
  ["get-involved.svg", 1100, 760, "Get involved — hands joined in partnership", "#163D2B", "#D7A94B"],
  ["resources-feature.svg", 1400, 640, "Resources — learning and documentation", "#DDE9DF", "#163D2B"],
  ["journey-woman.svg", 900, 1100, "Journey — woman farmer in her enterprise", "#F7F3E8", "#2F6B49"],
];

const leafMark = (cx, cy, color, scale = 1) => `
  <g transform="translate(${cx} ${cy}) scale(${scale})">
    <path d="M0 0 C -14 -10 -14 -26 0 -38 C 14 -26 14 -10 0 0 Z" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M0 -4 L0 -30" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
  </g>`;

function svg(image, [w, h, caption, a, b]) {
  const accent = a === "#DDE9DF" || a === "#F7F3E8" || a === "#FAF8F2";
  const fg = accent ? "#163D2B" : "#FAF8F2";
  const dim = Math.round(Math.min(w, h) * (caption.length > 40 ? 0.62 : 0.52));
  const cx = w / 2;
  const cy = h / 2;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="r" cx="0.5" cy="0.5" r="0.75">
      <stop offset="0" stop-color="${fg}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${fg}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  ${Array.from({ length: 3 }).map((_, i) => leafMark(cx + (i - 1) * (w / 4.6), cy + (i - 1) * (h / 7), fg, 0.9 + i * 0.35)).join("\n  ")}
  <rect width="${w}" height="${h}" fill="url(#r)"/>
  <circle cx="${cx}" cy="${cy}" r="${dim / 2}" stroke="${fg}" stroke-opacity="0.16" stroke-width="1.5" fill="none" stroke-dasharray="3 10" stroke-linecap="round"/>
  <text x="50%" y="${cy + dim / 2 + 26}" dominant-baseline="middle" text-anchor="middle" fill="${fg}" fill-opacity="0.72" font-family="Inter, system-ui, sans-serif" font-size="${Math.round(dim / 17)}" font-weight="600" letter-spacing="0.04em">PHOTO PLACEHOLDER</text>
  <text x="50%" y="${cy + dim / 2 + 52 + dim / 17}" dominant-baseline="middle" text-anchor="middle" fill="${fg}" fill-opacity="0.62" font-family="Inter, system-ui, sans-serif" font-size="${Math.round(dim / 20)}">${caption}</text>
  <text x="50%" y="${h - 22}" dominant-baseline="middle" text-anchor="middle" fill="${fg}" fill-opacity="0.4" font-family="monospace" font-size="${Math.max(11, Math.round(w / 90))}" letter-spacing="0.1em">public/images/${image}</text>
</svg>`;
}

mkdirSync(root, { recursive: true });
for (const [name, ...rest] of IMAGES) {
  writeFileSync(join(root, name), svg(name, rest));
  console.log("wrote", name);
}
console.log("done —", IMAGES.length, "placeholders");