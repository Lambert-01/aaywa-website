import {
  HeartHandshake,
  Leaf,
  Lightbulb,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Value = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const VALUES: Value[] = [
  {
    title: "Sisterhood",
    text: "We rise through shared growth, solidarity and collective success.",
    icon: HeartHandshake,
  },
  {
    title: "Leadership",
    text: "We equip women to lead boldly and influence change.",
    icon: Users,
  },
  {
    title: "Indigenous Innovation",
    text: "We honour African knowledge and combine it with modern solutions.",
    icon: Lightbulb,
  },
  {
    title: "Sustainability",
    text: "We protect natural resources while building resilient livelihoods.",
    icon: Leaf,
  },
  {
    title: "Empowerment",
    text: "We build confidence, ownership and economic independence.",
    icon: Sparkles,
  },
  {
    title: "Advocacy",
    text: "We amplify young women's voices and champion equitable opportunity.",
    icon: Megaphone,
  },
  {
    title: "Partnerships",
    text: "We believe lasting impact grows through strong ecosystems.",
    icon: ShieldCheck,
  },
  {
    title: "Well-being",
    text: "We connect agriculture with nutrition, wellness and thriving communities.",
    icon: Sprout,
  },
];