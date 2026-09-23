import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#163D2B",
        leaf: "#2F6B49",
        moss: "#5D8A5A",
        sage: "#DDE9DF",
        cream: "#F7F3E8",
        paper: "#FAF8F2",
        earth: "#8A5E3B",
        gold: "#D7A94B",
        ink: "#17241C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "Cambria", "serif"],
      },
      fontSize: {
        "display-sm": ["clamp(2.4rem, 4.5vw, 3.4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        display: ["clamp(2.9rem, 6vw, 4.9rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(3.3rem, 7.5vw, 6.4rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        container: "1200px",
        readable: "66ch",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(23, 61, 43, 0.10)",
        lifted: "0 32px 70px rgba(23, 61, 43, 0.16)",
        glow: "0 10px 40px rgba(215, 169, 75, 0.28)",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "drift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 26s linear infinite",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;