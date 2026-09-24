import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SceneName =
  | "hills"
  | "sunrise"
  | "terraces"
  | "fields"
  | "soil"
  | "crates"
  | "ledger"
  | "tree"
  | "greenhouse";

type Aspect = "portrait" | "landscape" | "tall" | "square" | "wide";

type SceneProps = {
  variant?: SceneName;
  aspect?: Aspect;
  className?: string;
  rounded?: string;
  label?: string;
  overlay?: ReactNode;
  caption?: string;
};

const aspects: Record<Aspect, string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function Scene({
  variant = "hills",
  aspect = "landscape",
  className,
  rounded = "rounded-[1.6rem]",
  label,
  overlay,
  caption,
}: SceneProps) {
  return (
    <figure
      className={cn(aspects[aspect], "relative overflow-hidden", rounded, className)}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": "true" })}
    >
      <div className="absolute inset-0 h-full w-full">{renderScene(variant)}</div>
      <div className="grain-layer opacity-40" aria-hidden />
      {overlay}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 via-forest/30 to-transparent px-5 pb-4 pt-14 text-sm font-medium text-cream">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function renderScene(variant: SceneName) {
  const sky =
    variant === "ledger"
      ? "linear-gradient(180deg,#FBF8F0 0%,#F4EDDD 100%)"
      : variant === "soil"
        ? "linear-gradient(180deg,#DDE9DF 0%,#EDE2CC 45%,#D9C7A5 100%)"
        : variant === "sunrise"
          ? "linear-gradient(180deg,#F3DDB0 0%,#EBC98F 26%,#B7CFAF 26%,#DCE8DA 100%)"
          : "linear-gradient(180deg,#DDE9DF 0%,#CBDDCB 55%,#BFD3C1 100%)";

  return (
    <>
      <div className="absolute inset-0" style={{ background: sky }} aria-hidden />
      <Sun variant={variant} />
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
       
      >
        {variant === "ledger" ? (
          <LedgerGroup />
        ) : (
          <HillsGroup variant={variant} />
        )}
      </svg>
      {variant === "fields" && <RowsLayer />}
      {variant === "crates" && <CratesLayer />}
      {variant === "greenhouse" && <GreenhouseGrid />}
      <div
        className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-forest/25 to-transparent"
        aria-hidden
      />
    </>
  );
}

function Sun({ variant }: { variant: SceneName }) {
  if (variant !== "hills" && variant !== "sunrise" && variant !== "tree") return null;
  return (
    <div
      className={cn(
        "absolute left-[12%] rounded-full blur-2xl",
        variant === "sunrise" ? "top-[14%] h-36 w-36 bg-gold/50 sm:top-[10%]" : "top-[16%] h-28 w-28 bg-gold/35"
      )}
      aria-hidden
    />
  );
}

function HillsGroup({ variant }: { variant: SceneName }) {
  const onTerraces = variant === "terraces";
  return (
    <>
      <path
        d="M0,330 C120,285 260,300 380,258 C500,218 620,250 800,190 L800,600 L0,600 Z"
        fill="#5D8A5A"
        opacity={0.55}
      />
      <path
        d="M0,430 C150,380 320,398 480,330 C600,285 700,320 800,292 L800,600 L0,600 Z"
        fill="#2F6B49"
        opacity={0.9}
      />
      <path
        d="M0,540 C160,478 340,505 520,448 C640,410 720,452 800,422 L800,600 L0,600 Z"
        fill="#163D2B"
      />
      {onTerraces && (
        <g stroke="#F7F3E8" strokeWidth="2" opacity="0.28" fill="none">
          <path d="M0,470 C160,420 340,445 520,392" />
          <path d="M0,500 C160,452 340,477 520,426" />
          <path d="M0,530 C160,484 340,509 520,460" />
          <path d="M20,560 C180,516 360,541 540,494" />
          <path d="M120,592 C260,552 440,574 620,530" />
        </g>
      )}
      {variant === "tree" && <Tree />}
      {variant === "greenhouse" && <Greenhouse />}
      {variant === "soil" && <Sprout />}
    </>
  );
}

function Tree() {
  return (
    <g aria-hidden>
      <path
        d="M600,470 C600,430 604,400 612,372 M576,338 C608,352 620,372 626,402 M556,368 C584,356 610,342 630,322"
        stroke="#163D2B"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="580" cy="322" r="30" fill="#163D2B" />
      <circle cx="628" cy="306" r="36" fill="#2F6B49" />
      <circle cx="622" cy="352" r="30" fill="#5D8A5A" />
      <circle cx="664" cy="338" r="24" fill="#D7A94B" opacity="0.85" />
      <circle cx="660" cy="392" r="26" fill="#2F6B49" />
      <circle cx="700" cy="362" r="18" fill="#D7A94B" opacity="0.6" />
    </g>
  );
}

function Greenhouse() {
  const ribs = [0, 24, 48, 72, 96, 120].map((x, i) => (
    <path
      key={i}
      d={`M${440 + x},470 L${440 + x + 60},300 A 80,80 0 0 1 ${560 + x},470 Z`}
      fill="none"
      stroke="#F7F3E8"
      strokeWidth="3"
      opacity="0.5"
    />
  ));
  return (
    <g aria-hidden>
      <path
        d="M560,300 A 120,120 0 0 1 800,300 Z"
        fill="rgba(247,243,232,0.18)"
        stroke="#F7F3E8"
        strokeWidth="2"
      />
      {ribs}
      <path d="M440,470 H 812" stroke="#F7F3E8" strokeWidth="3" opacity="0.7" />
      <path d="M500,470 V 430 M620,470 V 430 M740,470 V 430" stroke="#F7F3E8" strokeWidth="2" opacity="0.4" />
    </g>
  );
}

function Sprout() {
  return (
    <g aria-hidden>
      <path d="M300,600 C300,560 302,530 306,508" stroke="#163D2B" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M306,522 C292,516 282,502 280,486 C296,490 306,500 306,522 Z" fill="#2F6B49" />
      <path d="M306,538 C320,532 330,518 332,502 C316,506 306,516 306,538 Z" fill="#5D8A5A" />
      <g stroke="#163D2B" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round">
        <path d="M306,600 V 570 M306,560 V 548" />
      </g>
    </g>
  );
}

function LedgerGroup() {
  return (
    <g aria-hidden>
      <g stroke="#163D2B" strokeOpacity="0.08" strokeWidth="1.5">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1="40" y1={80 + i * 34} x2="760" y2={80 + i * 34} />
        ))}
      </g>
      <path d="M120,200 H 220" stroke="#D7A94B" strokeWidth="4" strokeLinecap="round" />
      <path d="M120,272 H 330" stroke="#D7A94B" strokeWidth="4" strokeLinecap="round" />
      <path d="M120,344 H 270" stroke="#D7A94B" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <path d="M120,416 H 400" stroke="#D7A94B" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <g fill="none" stroke="#2F6B49" strokeWidth="3" strokeLinecap="round" opacity="0.75">
        <path d="M640,280 C660,250 664,220 668,196" />
        <path d="M668,224 C682,218 694,204 696,190 C684,194 672,204 668,224 Z" />
        <path d="M668,240 C682,234 694,220 696,206 C684,210 672,220 668,240 Z" />
      </g>
    </g>
  );
}

function RowsLayer() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-[46%]"
      aria-hidden
      style={{
        background:
          "repeating-linear-gradient(90deg, rgba(22,61,43,0.30) 0 1px, transparent 1px 30px), repeating-linear-gradient(0deg, rgba(22,61,43,0.12) 0 2px, transparent 2px 9px)",
        maskImage: "linear-gradient(180deg, transparent, black 22%)",
        WebkitMaskImage: "linear-gradient(180deg, transparent, black 22%)",
      }}
    />
  );
}

function CratesLayer() {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      <g fill="none" stroke="#163D2B" strokeWidth="3" opacity="0.35">
        <rect x="500" y="380" width="120" height="86" rx="8" />
        <rect x="620" y="380" width="120" height="86" rx="8" />
        <rect x="520" y="302" width="120" height="86" rx="8" />
        <rect x="640" y="296" width="120" height="86" rx="8" />
        <path d="M520,360 H 620 M640,360 H 740 M540,302 V 380 M660,296 V 380" />
      </g>
      <g fill="#163D2B" opacity="0.55">
        <circle cx="560" cy="352" r="17" />
        <circle cx="596" cy="360" r="15" />
        <circle cx="578" cy="332" r="15" />
        <circle cx="700" cy="348" r="17" />
        <circle cx="660" cy="470" r="19" />
        <circle cx="700" cy="470" r="17" />
        <circle cx="740" cy="468" r="18" />
        <circle cx="676" cy="442" r="14" />
      </g>
    </svg>
  );
}

function GreenhouseGrid() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden
      style={{
        background:
          "linear-gradient(rgba(247,243,232,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,232,0.18) 1px, transparent 1px)",
        backgroundSize: "46px 46px",
        maskImage: "radial-gradient(120% 120% at 80% 100%, black 40%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(120% 120% at 80% 100%, black 40%, transparent 78%)",
      }}
    />
  );
}