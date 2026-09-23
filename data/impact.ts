export type ImpactCategory = {
  id: string;
  title: string;
  text: string;
};

export const IMPACT_CATEGORIES: ImpactCategory[] = [
  {
    id: "social",
    title: "Social Impact",
    text: "Skills, confidence, mentorship, leadership and stronger livelihoods.",
  },
  {
    id: "economic",
    title: "Economic Impact",
    text: "Greater productivity, stronger enterprises, employment and access to markets.",
  },
  {
    id: "environmental",
    title: "Environmental Impact",
    text: "Regenerative agriculture, soil health, resource efficiency and climate resilience.",
  },
];

export type Stat = {
  id: string;
  label: string;
  value: number | null;
  suffix?: string;
  note: string;
};

export const STATS: Stat[] = [
  {
    id: "women-reached",
    label: "Women Reached",
    value: null,
    note: "Awaiting verified data",
  },
  {
    id: "women-trained",
    label: "Women Trained",
    value: null,
    note: "Awaiting verified data",
  },
  {
    id: "agribusinesses",
    label: "Agribusinesses Supported",
    value: null,
    note: "Awaiting verified data",
  },
  {
    id: "jobs-created",
    label: "Jobs Created",
    value: null,
    note: "Awaiting verified data",
  },
  {
    id: "communities",
    label: "Communities Reached",
    value: null,
    note: "Awaiting verified data",
  },
  {
    id: "partners",
    label: "Partner Organizations",
    value: null,
    note: "Awaiting verified data",
  },
];