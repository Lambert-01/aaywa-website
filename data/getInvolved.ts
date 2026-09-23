import {
  BadgeDollarSign,
  HeartHandshake,
  Microscope,
  Store,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

export type InvolvePath = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
};

export const INVOLVE_PATHS: InvolvePath[] = [
  {
    id: "join",
    title: "Join as a Young Woman Farmer",
    description:
      "Become part of an AAYWA programme and take the first step from farming to enterprise.",
    icon: UserRound,
    cta: "Start your journey",
  },
  {
    id: "mentor",
    title: "Become a Mentor",
    description:
      "Share your experience in agriculture, business or finance with the next generation of women leaders.",
    icon: Users,
    cta: "Offer your expertise",
  },
  {
    id: "partner",
    title: "Partner With AAYWA",
    description:
      "Collaborate with us on programmes, research, ecosystems and lasting-system change.",
    icon: HeartHandshake,
    cta: "Explore partnership",
  },
  {
    id: "support",
    title: "Support Our Programmes",
    description:
      "Fund or enable women-led agribusinesses and the communities they transform.",
    icon: BadgeDollarSign,
    cta: "Make an impact",
  },
  {
    id: "market",
    title: "Become a Market Partner",
    description:
      "Source quality products from women-led agribusinesses and join an ethical value chain.",
    icon: Store,
    cta: "Work with AAYWA farmers",
  },
  {
    id: "research",
    title: "Collaborate on Research",
    description:
      "Partner with AAYWA on evidence, data and insight around women in African agriculture.",
    icon: Microscope,
    cta: "Get in touch",
  },
];

export const PARTNER_TYPES = [
  "Development partners",
  "Financial institutions",
  "Buyers & aggregators",
  "Research & learning institutions",
  "Farmer cooperatives",
  "Government & policy actors",
] as const;