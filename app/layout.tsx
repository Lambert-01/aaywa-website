import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const display = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "AAYWA | Empowering Young African Women Through Agribusiness",
    template: "%s | AAYWA",
  },
  description: SITE.description,
  applicationName: "AAYWA",
  authors: [{ name: "AAYWA" }],
  keywords: [
    "AAYWA",
    "young women",
    "African women in agriculture",
    "agribusiness",
    "women farmers",
    "sustainable agriculture",
    "women's economic empowerment",
    "Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: "AAYWA",
    title: "AAYWA | Empowering Young African Women Through Agribusiness",
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/og-aaywa.jpg`,
        width: 1200,
        height: 630,
        alt: "AAYWA — empowering young African women through agribusiness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAYWA | Empowering Young African Women Through Agribusiness",
    description: SITE.description,
    images: [`${SITE.url}/og-aaywa.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-gold px-5 py-3 font-bold text-forest focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}