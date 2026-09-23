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

export type Measure = {
  id: string;
  title: string;
  text: string;
};

export const MEASURES: Measure[] = [
  {
    id: "reach",
    title: "Young women reached",
    text: "Women from rural and urban communities reached through programmes and networks.",
  },
  {
    id: "skills",
    title: "Trained & skilled",
    text: "Women completing training in agribusiness, leadership and climate-smart practice.",
  },
  {
    id: "enterprises",
    title: "Enterprises growing",
    text: "Women-led agribusinesses strengthened, formalized and expanding.",
  },
  {
    id: "livelihoods",
    title: "Income & jobs",
    text: "Jobs and income opportunities created around women-led enterprises.",
  },
  {
    id: "leadership",
    title: "Women leading",
    text: "Women stepping into decision-making roles in groups, markets and communities.",
  },
  {
    id: "partnerships",
    title: "Partners & networks",
    text: "Organizations, funders and local networks working alongside AAYWA.",
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