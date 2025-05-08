export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  href: string;
  icon?: string;
}

export interface TechSkill {
  name: string;
  level: number; // percentage
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  stats: Stat[];
  techStack: TechSkill[];
  certifications: string[];
  socials: SocialLink[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Leonardo J. Ramirez',
    role: 'Fullstack Engineer Sr.',
    bio: `A seasoned engineer who loves building robust RAG systems and automations for real‑world ROI.`,
    profilePic: '/images/leonardo_j_ramirez_headshot.jpg',
    stats: [
      { label: 'Years Experience', value: '10+' },
      { label: 'Patents Filed', value: '2' },
      { label: 'Projects Completed', value: '25+' }
    ],
    techStack: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 }
    ],
    certifications: [
      '/images/blu_prism_cert.svg',
      '/images/comptia-security-ce-certification.png'
    ],
    socials: [
      { href: 'https://linkedin.com/in/leonardo', icon: '/icons/linkedin.svg' },
      { href: 'https://github.com/leonardo', icon: '/icons/github.svg' }
    ]
  },
  {
    name: 'William J. Baltus',
    role: 'AI/ML Engineer Sr.',
    bio: `An AI/ML specialist with deep experience in RPA and production‑grade LLM integrations.`,
    profilePic: '/images/william_j_baltus_headshot.png',
    stats: [
      { label: 'AI Projects', value: '15+' },
      { label: 'Certifications', value: '4' },
      { label: 'Clients', value: '10+' }
    ],
    techStack: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Docker', level: 75 }
    ],
    certifications: [
      '/images/blu_prism_cert.svg',
      '/images/comptia-security-ce-certification.png'
    ],
    socials: [
      { href: 'https://twitter.com/wbaltus', icon: '/icons/twitter.svg' },
      { href: 'https://github.com/wbaltus', icon: '/icons/github.svg' }
    ]
  }
  // Add more team members as needed
];
