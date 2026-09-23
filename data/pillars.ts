import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Globe2,
  Leaf,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Pillar = {
  id: string;
  index: string;
  title: string;
  short: string;
  long: string;
  impact: string;
  icon: LucideIcon;
  color: string;
  image: string;
};

export const PILLARS: Pillar[] = [
  {
    id: "agribusiness",
    index: "01",
    title: "Agribusiness & Entrepreneurship",
    short:
      "Turning farming into a viable enterprise with business models, planning, record-keeping, quality and value addition.",
    long: "AAYWA supports young women to move beyond subsistence farming by building strong business foundations: models, planning, financial records, product quality, processing and value addition. The goal is profitable, sustainable enterprises that women own and run.",
    impact: "Profitable enterprises led and owned by young women",
    icon: BriefcaseBusiness,
    color: "gold",
    image: "/images/work-agribusiness.svg",
  },
  {
    id: "sustainable-agriculture",
    index: "02",
    title: "Sustainable Agriculture",
    short:
      "Regenerative, climate-resilient and resource-efficient production that protects land and boosts long-term productivity.",
    long: "Regenerative and climate-smart practices protect soils, water and biodiversity while improving yields over time. AAYWA equips women to farm in ways that are resilient to climate change and restore the land they depend on.",
    impact: "Climate-resilient farms and healthier landscapes",
    icon: Leaf,
    color: "leaf",
    image: "/images/work-sustainable.svg",
  },
  {
    id: "market-access",
    index: "03",
    title: "Market Access",
    short:
      "Connecting women-led agribusinesses to stronger local, regional and international markets.",
    long: "Producing well is only part of the journey. AAYWA builds market connections, product standards, buyer relationships and ethical value chains so women can sell reliably, fairly and at scale.",
    impact: "Reliable, fair and growing market connections",
    icon: Globe2,
    color: "forest",
    image: "/images/work-markets.svg",
  },
  {
    id: "finance-readiness",
    index: "04",
    title: "Finance & Investment Readiness",
    short:
      "Helping women organize their records, businesses and plans to attract finance and investment.",
    long: "Many young women farmers are creditworthy but not yet visible to finance. AAYWA strengthens financial literacy, organization and investor readiness so that women-led enterprises can access the capital they need to grow.",
    impact: "Enterprises ready for finance and investment",
    icon: BadgeDollarSign,
    color: "earth",
    image: "/images/work-finance.svg",
  },
  {
    id: "leadership-mentorship",
    index: "05",
    title: "Leadership & Mentorship",
    short:
      "Growing confident women leaders who influence communities, inspire others and create lasting change.",
    long: "Leadership is embedded across everything AAYWA does. Mentored by accomplished women and peers, young agripreneurs build the confidence, voice and networks to lead their enterprises and their communities.",
    impact: "A new generation of women leaders in agriculture",
    icon: Users,
    color: "gold",
    image: "/images/work-leadership.svg",
  },
  {
    id: "innovation",
    index: "06",
    title: "Innovation & Digital Agriculture",
    short:
      "Combining indigenous knowledge with modern, digital tools for smarter, more efficient farming.",
    long: "AAYWA values indigenous innovation and pairs it with accessible technology: digital records, market information, mobile finance and low-cost farm technologies that make enterprises smarter and more efficient.",
    impact: "Smarter, tech-enabled agribusinesses",
    icon: Sprout,
    color: "leaf",
    image: "/images/work-innovation.svg",
  },
];

export const WORK_PILLARS_EXTRAS = {
  challenge: {
    title: "Why this work matters",
    text: "Across Africa, young women are a vital part of agriculture — yet they face the greatest barriers to turning their labour into sustainable enterprise.",
  },
};