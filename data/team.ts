export type TeamMember = {
  name: string;
  role: string;
};

export const EXECUTIVE: TeamMember[] = [
  { name: "Ishimwe Bonnete", role: "President" },
  { name: "Kalisa Nicole Umutoni", role: "Vice President" },
  { name: "Rosa Muhumuza", role: "General Secretary" },
  { name: "Shilla Ndegeya", role: "Executive Secretary" },
  { name: "Solange Umutoni", role: "Treasurer" },
];

export const MEMBERS: TeamMember[] = [
  { name: "Benie Iradukunda", role: "Member" },
  { name: "Muhoza Faith", role: "Member" },
  { name: "Uwodukunda Concilie", role: "Member" },
  { name: "Colombe Rukwaya", role: "Member" },
];

export const TEAM: TeamMember[] = [...EXECUTIVE, ...MEMBERS];