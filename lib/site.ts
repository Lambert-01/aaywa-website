export const SITE = {
  name: "AAYWA",
  description:
    "AAYWA empowers young African women to build sustainable and profitable agribusinesses through training, innovation, leadership, finance and market access.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aaywa.org",
  locale: "en",
  logo: "/logo.png",
};

export const CONTACT = {
  email: "",
  phone: "",
  address: "",
  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "X", href: "#", icon: "x" },
  ] as const,
};

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Agribusiness Development", href: "/our-work#agribusiness" },
      { label: "Sustainable Agriculture", href: "/our-work#sustainable-agriculture" },
      { label: "Market Access", href: "/our-work#market-access" },
      { label: "Finance & Investment Readiness", href: "/our-work#finance-readiness" },
      { label: "Leadership & Mentorship", href: "/our-work#leadership-mentorship" },
      { label: "Innovation & Digital Agriculture", href: "/our-work#innovation" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Resources", href: "/resources" },
  { label: "Get Involved", href: "/get-involved" },
];

export const FOOTER_NAV = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Impact", href: "/impact" },
    { label: "Stories", href: "/stories" },
  ],
  programs: [
    { label: "Agribusiness Development", href: "/our-work#agribusiness" },
    { label: "Sustainable Agriculture", href: "/our-work#sustainable-agriculture" },
    { label: "Market Access", href: "/our-work#market-access" },
    { label: "Finance & Investment Readiness", href: "/our-work#finance-readiness" },
    { label: "Leadership & Mentorship", href: "/our-work#leadership-mentorship" },
    { label: "Innovation & Digital Agriculture", href: "/our-work#innovation" },
  ],
  resources: [
    { label: "News", href: "/resources#news" },
    { label: "Opportunities", href: "/resources#opportunities" },
    { label: "Reports", href: "/resources#reports" },
    { label: "Publications", href: "/resources#publications" },
    { label: "Training Resources", href: "/resources#training" },
    { label: "Market Insights", href: "/resources#insights" },
  ],
  getInvolved: [
    { label: "Join as a Young Woman Farmer", href: "/get-involved#join" },
    { label: "Become a Mentor", href: "/get-involved#mentor" },
    { label: "Partner With AAYWA", href: "/get-involved#partner" },
    { label: "Support Our Programmes", href: "/get-involved#support" },
    { label: "Contact", href: "/contact" },
  ],
};