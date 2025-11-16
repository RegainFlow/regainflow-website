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

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  stats: Stat[];
  techStack: TechSkill[];
  socials: SocialLink[];
}
