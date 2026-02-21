export interface Stat {
  label: string;
  value: string;
  color?: string;
}

export interface SocialLink {
  href: string;
  icon?: string;
}

export interface TechSkill {
  name: string;
  level: number;
  category: string;
}

export interface AvailabilityStatus {
  status: 'available' | 'limited' | 'booked';
  date?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  stats: Stat[];
  techStack?: TechSkill[];
  socials: SocialLink[];
  // New fields for modernized design
  primaryExpertise?: string[];
  topSkills?: TechSkill[];
  highlights?: string[];
  availability?: AvailabilityStatus;
}
