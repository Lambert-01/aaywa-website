import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-forest py-32 text-cream sm:py-40">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 20% 25%, rgba(215,169,75,0.18), transparent 36%)",
        }}
      />
      <div className="grain-layer" aria-hidden />
      <div className="container-aaywa relative text-center">
        <p className="font-serif text-[6rem] leading-none text-gold/40 sm:text-[9rem]">404</p>
        <h1 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
          This page is still in the field.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-cream/70">
          The page you requested could not be found. Let&apos;s take you back to
          the home field.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <CTAButton href="/" variant="primary" size="lg">
            Back to home
          </CTAButton>
          <CTAButton href="/get-involved" variant="outline-light" size="lg">
            Get involved
          </CTAButton>
        </div>
        <p className="mt-12 text-sm text-cream/50">
          Looking for something specific? Reach out via the{" "}
          <Link href="/contact" className="font-semibold text-gold underline underline-offset-4">
            contact page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}