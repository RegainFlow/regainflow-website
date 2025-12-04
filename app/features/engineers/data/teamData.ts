import type { TeamMember } from '../types/engineer.types';

export const teamMembers: TeamMember[] = [
  {
    name: 'Leonardo J. Ramirez',
    role: 'Fractional CTO & Co-Founder',
    bio: 'Fractional CTO and technical leader specializing in AI/ML strategy, secure RAG architectures, and engineering team leadership. \
Advises Series A/B startups and mid-market companies on technology roadmaps, build vs. buy decisions, and team scaling. Combines \
strategic technology planning with hands-on execution across AI systems, DevOps automation, and enterprise integrations. Proven \
track record architecting mission-critical systems for space, defense, and large-scale operations. Delivers CTO-level guidance \
without the $300k+ executive cost—strategic roadmaps, architecture decisions, and team mentorship plus production code delivery.',
    profilePic: '/images/about-us/leonardo_j_ramirez_headshot.jpg',

    stats: [
      { label: 'Years CTO/Architect Experience', value: '7+' },
      { label: 'Companies Advised', value: '15+' }
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
      '7+ Years Strategic Technology Leadership',
      'Fractional CTO for Series A/B Startups',
      '10+ Production AI/RAG Systems Architected'
    ]
  },

  {
    name: 'William J. Baltus',
    role: 'Fractional CTO & Co-Founder',
    bio: 'Fractional CTO and AI/ML engineering leader with deep expertise in LLM integrations, multi-agent systems, and operational AI. \
Guides companies through AI transformation, from feasibility assessments to production deployment. Specializes in RPA modernization, \
enterprise automation, and ML system design. Combines strategic AI roadmapping with hands-on engineering across LangChain/LangGraph, \
TensorFlow, and production ML pipelines. Proven ability to architect scalable AI solutions for Fortune 500 enterprises. Delivers \
CTO-level AI strategy plus hands-on execution—from POCs to production systems serving thousands of daily users.',
    profilePic: '/images/about-us/william_j_baltus_headshot.png',

    stats: [
      { label: 'AI Systems Architected', value: '15+' },
      { label: 'Companies Advised', value: '12+' }
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
      'Fractional CTO for AI-First Companies',
      '15+ AI/ML Systems Architected',
      '40+ Enterprise Automation Builds'
    ]
  }
];
