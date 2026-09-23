export type JourneyStep = {
  title: string;
  text: string;
  icon: string;
};

export const JOURNEY: JourneyStep[] = [
  {
    title: "Discover",
    text: "Young women identify their potential, interest and opportunity in agribusiness.",
    icon: "lightbulb",
  },
  {
    title: "Learn",
    text: "They gain practical skills in farming, business and leadership.",
    icon: "learn",
  },
  {
    title: "Produce",
    text: "Climate-smart, regenerative production begins on the farm.",
    icon: "sprout",
  },
  {
    title: "Build",
    text: "Enterprises take shape with plans, records and strong foundations.",
    icon: "build",
  },
  {
    title: "Access Markets",
    text: "Products reach reliable local, regional and global markets.",
    icon: "markets",
  },
  {
    title: "Grow",
    text: "Revenue, confidence and impact compound over time.",
    icon: "grow",
  },
  {
    title: "Lead",
    text: "Women become mentors, employers and community leaders.",
    icon: "lead",
  },
];