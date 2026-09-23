export type ResourceCategory = {
  id: string;
  title: string;
  description: string;
};

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    id: "news",
    title: "News",
    description: "Announcements, programme updates and AAYWA in the media.",
  },
  {
    id: "opportunities",
    title: "Opportunities",
    description: "Calls for young women agripreneurs, mentors, partners and funders.",
  },
  {
    id: "reports",
    title: "Reports",
    description: "Organisational reports and programme learnings.",
  },
  {
    id: "publications",
    title: "Publications",
    description: "Research, articles and thought leadership on women and agribusiness.",
  },
  {
    id: "training",
    title: "Training Resources",
    description: "Tools, curricula and guides for farmers and agripreneurs.",
  },
  {
    id: "guides",
    title: "Agribusiness Guides",
    description: "Practical handbook material for building and running an agribusiness.",
  },
  {
    id: "insights",
    title: "Market Insights",
    description: "Market intelligence and sector updates for women-led enterprises.",
  },
] as const;