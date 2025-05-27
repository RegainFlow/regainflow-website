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

export const teamMembers: TeamMember[] = [
  {
    name: 'Leonardo J. Ramirez',
    role: 'CEO | Fullstack Engineer Stf.',
    bio: `Technical leader and RAG system architect with over a decade of experience building secure, high-impact AI solutions for space and defense. Combines enterprise engineering expertise with military-grade cyber capabilities to deliver agentic systems, data pipelines, and scalable LLM integrations for operational excellence.`,
    profilePic: '/images/about-us/leonardo_j_ramirez_headshot.jpg',
    stats: [
      { label: 'Years Experience', value: '10+' },
      { label: 'RAG Systems Built', value: '5+' },
      { label: 'Teams Led', value: '10+' }
    ],
    techStack: [
      // 🚀 AI / LLM Frameworks
      {
        name: 'LangGraph / LangChain',
        level: 95,
        category: 'AI / LLM Frameworks'
      },
      { name: 'LlamaIndex', level: 85, category: 'AI / LLM Frameworks' },
      { name: 'Haystack', level: 80, category: 'AI / LLM Frameworks' },

      // 🧠 Programming Languages
      { name: 'Python', level: 95, category: 'Programming Languages' },
      {
        name: 'JavaScript / TypeScript',
        level: 85,
        category: 'Programming Languages'
      },
      { name: 'C#', level: 80, category: 'Programming Languages' },

      // 🗂️ Search / Vector DBs
      { name: 'Elasticsearch', level: 90, category: 'Search / Vector DBs' },
      { name: 'Redis', level: 75, category: 'Search / Vector DBs' },
      { name: 'MongoDB', level: 70, category: 'Search / Vector DBs' },

      // 🌐 Frontend
      { name: 'React / Remix.js', level: 85, category: 'Frontend' },
      { name: 'Vue / Nuxt', level: 75, category: 'Frontend' },
      { name: 'Blazor', level: 70, category: 'Frontend' },

      // 🧩 Backend / APIs
      { name: 'Node.js / Express.js', level: 80, category: 'Backend / APIs' },
      { name: '.NET Core', level: 75, category: 'Backend / APIs' },
      { name: 'GraphQL', level: 70, category: 'Backend / APIs' },

      // ⚙️ DevOps / Automation
      {
        name: 'Docker / Kubernetes',
        level: 80,
        category: 'DevOps / Automation'
      },
      { name: 'OpenShift', level: 75, category: 'DevOps / Automation' },
      { name: 'GitLab CI/CD', level: 70, category: 'DevOps / Automation' },

      // 🔐 Security / Infra (from military + DoD work)
      { name: 'PenTest+ / CEH', level: 90, category: 'Security / Cyber Ops' },
      {
        name: 'Ansible / Terraform',
        level: 70,
        category: 'Security / Cyber Ops'
      },
      {
        name: 'STIG / DoD Hardening',
        level: 75,
        category: 'Security / Cyber Ops'
      }
    ],
    socials: [
      {
        href: 'https://www.linkedin.com/in/leonardo-j-ramirez',
        icon: '/images/about-us/linkedin.svg'
      },
      {
        href: 'https://github.com/R3d5tatic/',
        icon: '/images/about-us/github.svg'
      },
      {
        href: 'https://www.notion.so/Leonardo-J-Ramirez-abf55c6b109249059f3b3c4fc8cf29e0',
        icon: '/images/about-us/resume.svg'
      }
    ]
  },
  {
    name: 'William J. Baltus',
    role: 'CEO | AI/ML Engineer Sr.',
    bio: `An AI/ML specialist with deep experience in RPA and production‑grade LLM integrations.`,
    profilePic: '/images/about-us/william_j_baltus_headshot.png',
    stats: [
      { label: 'AI Projects', value: '15+' },
      { label: 'Certifications', value: '4' },
      { label: 'Clients', value: '10+' }
    ],
    techStack: [
      { name: 'LangGraph / LangChain', level: 90 },
      { name: 'Python', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Docker', level: 80 },
      { name: 'RPA Tools', level: 75 }
    ],
    socials: [
      {
        href: 'https://www.linkedin.com/in/leonardo-j-ramirez',
        icon: '/images/about-us/linkedin.svg'
      },
      {
        href: 'https://github.com/R3d5tatic/',
        icon: '/images/about-us/github.svg'
      },
      {
        href: 'https://www.notion.so/Leonardo-J-Ramirez-abf55c6b109249059f3b3c4fc8cf29e0',
        icon: '/images/about-us/resume.svg'
      }
    ]
  }
];
