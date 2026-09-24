export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const EXECUTIVE: TeamMember[] = [
  { name: "Ishimwe Bonnete", role: "President", image: "/images/teams/ishimwe-bonnete.jpg" },
  { name: "Kalisa Nicole Umutoni", role: "Vice President", image: "/images/teams/kalisa-nicole-umutoni.jpg" },
  { name: "Rosa Muhumuza", role: "General Secretary", image: "/images/teams/rose-muhumuza.jpg" },
  { name: "Shilla Ndegeya", role: "Executive Secretary", image: "/images/teams/shilla-ndegeya.jpg" },
  { name: "Solange Umutoni", role: "Treasurer", image: "/images/teams/solange-umutoni.jpg" },
];

export const MEMBERS: TeamMember[] = [
  { name: "Benie Iradukunda", role: "Member", image: "/images/teams/benie-iradukunda.jpg" },
  { name: "Muhoza Faith", role: "Member", image: "/images/teams/muhoza-faith.jpg" },
  { name: "Uwodukunda Concilie", role: "Member", image: "/images/teams/uwodukunda-concilie.jpg" },
  { name: "Colombe Rukwaya", role: "Member", image: "/images/teams/colombe-rukwaya.jpg" },
];

export const TEAM: TeamMember[] = [...EXECUTIVE, ...MEMBERS];