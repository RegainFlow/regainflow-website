import type { TeamMember } from '../types/engineer.types';

export const teamMembers: TeamMember[] = [
  {
    name: 'Leonardo J. Ramirez',
    role: 'Senior Solutions Architect & Founder',
    bio: 'Senior Solutions Architect and AI/ML Engineer specializing in secure RAG pipelines, agentic automation, \
data-quality validation, and enterprise integrations. Delivers high-impact engineering for mission-critical systems \
across space, defense, and large-scale operations. Proven ability to architect, build, and deploy production-grade \
LLM systems, DevOps pipelines, and complex backend platforms.',
    profilePic: '/images/about-us/leonardo_j_ramirez_headshot.jpg',

    stats: [
      { label: 'Years Experience', value: '7+' },
      { label: 'Enterprise Systems Delivered', value: '10+' }
    ],

    socials: [
      {
        href: 'https://www.linkedin.com/in/leonardo-j-ramirez',
        icon: '/images/about-us/linkedin.svg'
      },
      {
        href: 'https://github.com/R3d5tatic',
        icon: '/images/about-us/github.svg'
      },
      {
        href: 'https://evergreen-clarinet-413.notion.site/Leonardo-J-Ramirez-abf55c6b109249059f3b3c4fc8cf29e0',
        icon: '/images/about-us/resume.svg'
      }
    ],

    // New fields
    primaryExpertise: ['AI/ML', 'Full-Stack', 'DevOps'],
    topSkills: [
      {
        name: 'LangGraph / LangChain',
        level: 95,
        category: 'AI / LLM Frameworks'
      },
      { name: 'Python', level: 95, category: 'Programming Languages' },
      { name: 'Elasticsearch', level: 90, category: 'Search / Vector DBs' },
      { name: 'PenTest+ / CEH', level: 90, category: 'Security / Cyber Ops' },
      { name: 'React / Remix.js', level: 85, category: 'Frontend' },
      {
        name: 'JavaScript / TypeScript',
        level: 85,
        category: 'Programming Languages'
      },
      { name: 'LlamaIndex', level: 85, category: 'AI / LLM Frameworks' },
      { name: 'C#', level: 80, category: 'Programming Languages' },
      { name: 'Node.js / Express', level: 80, category: 'Backend / APIs' },
      {
        name: 'Docker / Kubernetes',
        level: 80,
        category: 'DevOps / Automation'
      }
    ],
    highlights: [
      '7+ Years Enterprise Engineering',
      '10+ Production AI/RAG Systems',
      'Security Certified (PenTest+, CEH)'
    ]
  },

  {
    name: 'William J. Baltus',
    role: 'Senior AI/ML Engineer & Founder',
    bio: 'Senior Fullstack Engineer and AI/ML engineer experienced in production LLM integrations, RPA development, \
agentic workflows, and enterprise data pipelines. Delivers scalable automation, ML solutions, and full-stack \
builds for enterprise environments. Strong background in operational AI, MLOps, and enterprise automation.',
    profilePic: '/images/about-us/william_j_baltus_headshot.png',

    stats: [
      { label: 'AI/ML Projects Delivered', value: '10+' },
      { label: 'RPA Builds', value: '40+' }
    ],

    socials: [
      {
        href: 'https://www.linkedin.com/in/william-baltus',
        icon: '/images/about-us/linkedin.svg'
      },
      {
        href: 'https://github.com/WilliamBaltus',
        icon: '/images/about-us/github.svg'
      },
      {
        href: 'https://grey-cloth-861.notion.site/William-Jaunius-Baltus-e4729f9c870f4ab4a0421ca461e07b57',
        icon: '/images/about-us/resume.svg'
      }
    ],

    // New fields
    primaryExpertise: ['AI/ML', 'Automation'],
    topSkills: [
      {
        name: 'LangGraph / LangChain',
        level: 90,
        category: 'AI / LLM Frameworks'
      },
      { name: 'Python', level: 90, category: 'Programming Languages' },
      { name: 'TensorFlow', level: 85, category: 'AI / LLM Frameworks' },
      { name: 'UiPath', level: 85, category: 'RPA / Automation' },
      { name: 'PyTorch', level: 80, category: 'AI / LLM Frameworks' },
      { name: 'C#', level: 80, category: 'Programming Languages' },
      {
        name: 'Docker / Kubernetes',
        level: 80,
        category: 'DevOps / Automation'
      },
      { name: 'Streamlit', level: 80, category: 'Frontend / Apps' },
      { name: 'Blue Prism', level: 75, category: 'RPA / Automation' },
      { name: 'Elasticsearch', level: 75, category: 'Search / Vector DBs' }
    ],
    highlights: [
      '10+ AI/ML Projects Delivered',
      '40+ RPA Automation Builds',
      'Fortune 500 Enterprise Experience'
    ]
  }
];
