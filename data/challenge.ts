import {
  Banknote,
  CloudRain,
  LineChart,
  PackageX,
  School,
  Smartphone,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Challenge = {
  barrier: string;
  pathway: string;
  icon: LucideIcon;
};

export const CHALLENGES: Challenge[] = [
  {
    barrier: "Limited access to capital",
    pathway: "Finance & investment readiness",
    icon: Banknote,
  },
  {
    barrier: "Weak market connections",
    pathway: "Reliable, ethical market access",
    icon: Store,
  },
  {
    barrier: "Inadequate business training",
    pathway: "Practical agribusiness education",
    icon: School,
  },
  {
    barrier: "Lack of technology",
    pathway: "Digital & indigenous innovation",
    icon: Smartphone,
  },
  {
    barrier: "Climate risks",
    pathway: "Climate-smart, regenerative farming",
    icon: CloudRain,
  },
  {
    barrier: "Post-harvest losses",
    pathway: "Processing & value addition",
    icon: PackageX,
  },
  {
    barrier: "Limited representation",
    pathway: "Leadership & mentorship pathways",
    icon: Users,
  },
  {
    barrier: "Limited access to international markets",
    pathway: "Ethical value chains & global buyers",
    icon: LineChart,
  },
];

export const PATHWAY = [
  "Barrier",
  "Knowledge",
  "Production",
  "Enterprise",
  "Markets",
  "Leadership",
] as const;