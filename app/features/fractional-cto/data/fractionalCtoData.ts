import type { IconType } from 'react-icons';
import {
  PiStrategyDuotone,
  PiChartLineUpDuotone,
  PiUsersThreeDuotone,
  PiCodeDuotone,
  PiShieldCheckDuotone,
  PiGitBranchDuotone,
  PiHandshakeDuotone,
  PiCalendarCheckDuotone,
  PiLightbulbDuotone,
  PiCurrencyDollarDuotone,
  PiRocketLaunchDuotone,
  PiTargetDuotone
} from 'react-icons/pi';
import { bookingUrl } from '~/config/site.config';

export interface FractionalCtoHero {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

export interface ValuePillar {
  icon: IconType;
  title: string;
  description: string;
  details: string[];
}

export interface EngagementPhase {
  phase: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface TargetCustomer {
  icon: IconType;
  type: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Outcome {
  icon: IconType;
  title: string;
  description: string;
}

// Hero Section Data
export const fractionalCtoHero: FractionalCtoHero = {
  title: 'Fractional CTO + Hands-On Engineering',
  subtitle: 'Strategy Meets Execution',
  description:
    'Strategic technology leadership combined with senior engineering execution. Get the architecture, roadmap, and team leadership of a CTO - plus the hands-on delivery of battle-tested senior engineers.',
  primaryCta: {
    text: 'Book CTO Strategy Session',
    href: bookingUrl
  },
  secondaryCta: {
    text: 'View Our Engineers',
    href: '/engineers'
  }
};

// 4 Value Pillars
export const valuePillars: ValuePillar[] = [
  {
    icon: PiStrategyDuotone,
    title: 'Technical Strategy & Roadmap',
    description:
      'Multi-year technical roadmap aligned with business goals. Make confident build vs. buy decisions.',
    details: [
      'Technology roadmap creation (3-12 month plans)',
      'Architecture decisions & technical standards',
      'Build vs. buy analysis & vendor evaluation',
      'Team scaling strategy & hiring roadmaps',
      'Technology stack evaluation & modernization planning'
    ]
  },
  {
    icon: PiUsersThreeDuotone,
    title: 'Team Leadership & Mentorship',
    description:
      'Elevate your engineering team through code reviews, standards, and performance frameworks.',
    details: [
      'Engineering team leadership & guidance',
      'Code review & quality assurance',
      'Engineering hiring support & interviewing',
      'Performance frameworks & career development',
      'Engineering best practices & documentation standards'
    ]
  },
  {
    icon: PiCodeDuotone,
    title: 'Hands-On Engineering Execution',
    description:
      "We don't just advise—we roll up our sleeves and ship production code alongside your team.",
    details: [
      'Sprint participation & delivery accountability',
      'POC & prototype development',
      'Infrastructure automation & DevOps',
      'Technical debt reduction & refactoring',
      'Critical bug fixes & production firefighting'
    ]
  },
  {
    icon: PiChartLineUpDuotone,
    title: 'Business-Aligned Technical Decisions',
    description:
      'Technology decisions grounded in ROI, timelines, and business outcomes—not technical vanity.',
    details: [
      'ROI analysis for technical investments',
      'Stakeholder communication & alignment',
      'Risk assessment & mitigation planning',
      'Cost optimization & resource allocation',
      'Executive reporting & technical translation'
    ]
  }
];

// Engagement Model (4 Phases)
export const engagementPhases: EngagementPhase[] = [
  {
    phase: 1,
    title: 'Discovery & Technical Audit',
    duration: 'Week 1-2',
    description:
      'Comprehensive assessment of your current technical landscape, team capabilities, and business goals. Identify gaps, risks, and opportunities.',
    deliverables: [
      'Current state technical assessment',
      'Team capability analysis',
      'Technology stack evaluation',
      'Security & infrastructure audit',
      'Priority recommendations report'
    ]
  },
  {
    phase: 2,
    title: 'Strategic Roadmap & Execution Plan',
    duration: 'Week 3-4',
    description:
      'Develop a clear, actionable technology roadmap aligned with business objectives. Define architecture, team structure, and execution priorities.',
    deliverables: [
      '3-12 month technology roadmap',
      'Architecture design & documentation',
      'Team scaling plan & hiring priorities',
      'Technology investment recommendations',
      'Sprint planning & milestone definition'
    ]
  },
  {
    phase: 3,
    title: 'Ongoing Advisory + Hands-On Execution',
    duration: 'Monthly retainer',
    description:
      'Continuous strategic guidance combined with hands-on engineering support. Weekly check-ins, sprint participation, and execution accountability.',
    deliverables: [
      '10-20 hours/month strategic advisory',
      'Weekly technical check-ins',
      'Architecture reviews & code reviews',
      'Hands-on engineering (billed separately)',
      'Unlimited async communication (Slack/Email)'
    ]
  },
  {
    phase: 4,
    title: 'Quarterly Reviews & Roadmap Updates',
    duration: 'Every 90 days',
    description:
      'Formal quarterly business reviews to assess progress, refine strategy, and adjust priorities based on business evolution and market changes.',
    deliverables: [
      'Quarterly progress review',
      'Roadmap updates & reprioritization',
      'Team performance evaluation',
      'Technology investment review',
      'Strategic planning for next quarter'
    ]
  }
];

// Target Customers (3 Types)
export const targetCustomers: TargetCustomer[] = [
  {
    icon: PiRocketLaunchDuotone,
    type: 'Series A/B Startups',
    description:
      "Scaling teams that need CTO-level leadership but can't afford a $300k+ full-time executive.",
    painPoints: [
      "Can't afford a full-time CTO ($300k+ salary + equity)",
      'Technical decisions slowing down growth',
      'Struggling to scale engineering team effectively',
      'Architecture decisions causing tech debt',
      'Need to build vs. buy guidance for AI/ML systems'
    ],
    outcomes: [
      'Strategic technology roadmap without executive salary',
      'Confident technical decisions aligned with business goals',
      'Team scaling strategy & hiring support',
      'Production-ready AI/ML systems & data pipelines',
      'Reduced technical debt & improved code quality'
    ]
  },
  {
    icon: PiTargetDuotone,
    type: 'SMBs Building Internal Tools',
    description:
      'Small and mid-sized businesses building custom software but lacking in-house technical leadership.',
    painPoints: [
      'Lack of technical leadership for internal projects',
      'Vendor selection paralysis (build vs. buy)',
      'Unclear technology strategy & roadmap',
      'Struggling to modernize legacy systems',
      "Need AI/automation but don't know where to start"
    ],
    outcomes: [
      'Clear technology roadmap for internal tools',
      'Expert guidance on build vs. buy decisions',
      'Legacy system modernization & data migration',
      'AI-powered automation for business processes',
      'Cost-effective technology investments with proven ROI'
    ]
  },
  {
    icon: PiUsersThreeDuotone,
    type: 'Mid-Market Companies',
    description:
      'Established companies with engineering teams that need strategic guidance and architectural oversight.',
    painPoints: [
      'Have developers, but no technical leadership',
      'Engineering team lacks direction & standards',
      'Code quality & technical debt accumulating',
      'Need architectural guidance for complex systems',
      'Struggling to implement AI/ML capabilities'
    ],
    outcomes: [
      'Technical leadership & team mentorship',
      'Engineering standards & best practices',
      'Architecture reviews & technical debt reduction',
      'AI/ML strategy & hands-on implementation',
      'Improved team velocity & code quality'
    ]
  }
];

// Outcomes
export const outcomes: Outcome[] = [
  {
    icon: PiChartLineUpDuotone,
    title: 'Accelerate Time-to-Market',
    description:
      'Ship features 2-3× faster with clear technical direction, reduced decision paralysis, and expert architectural guidance.'
  },
  {
    icon: PiShieldCheckDuotone,
    title: 'De-Risk Technical Decisions',
    description:
      'Avoid costly technical mistakes with battle-tested architecture patterns, vendor evaluation, and strategic build vs. buy analysis.'
  },
  {
    icon: PiUsersThreeDuotone,
    title: 'Scale Engineering Team',
    description:
      'Build a high-performing engineering culture with hiring support, performance frameworks, and technical mentorship.'
  },
  {
    icon: PiCurrencyDollarDuotone,
    title: 'Maximize ROI on Technology',
    description:
      'Optimize technology investments with cost-benefit analysis, vendor negotiation support, and strategic resource allocation.'
  },
  {
    icon: PiCodeDuotone,
    title: 'Reduce Technical Debt',
    description:
      'Proactively manage tech debt with code quality standards, refactoring strategies, and architecture modernization.'
  },
  {
    icon: PiGitBranchDuotone,
    title: 'Deploy AI & Automation',
    description:
      'Implement production AI systems (RAG, multi-agent, LLM integrations) and business process automation with hands-on execution.'
  }
];

// FAQ Data
export const faqData: FaqItem[] = [
  {
    question: 'What exactly is a Fractional CTO?',
    answer:
      'A Fractional CTO provides strategic technology leadership on a part-time, retainer basis—typically 10-20 hours per month. You get the same expertise and accountability as a full-time CTO (technology roadmaps, architecture decisions, team leadership) without the $300k+ salary and equity commitment. We combine strategic advisory with hands-on engineering execution, so you get both guidance and delivery.'
  },
  {
    question: 'How is this different from hiring senior engineers on contract?',
    answer:
      "Senior contractors execute on tasks you define. A Fractional CTO defines the strategy and then executes it. We provide technology roadmaps, make architecture decisions, lead your team, evaluate vendors, and align technology with business goals—then roll up our sleeves and ship code alongside your team. It's strategic leadership + hands-on execution, not just labor."
  },
  {
    question: 'Do you only advise, or do you actually write code?',
    answer:
      "Both. The monthly retainer covers strategic advisory (10-20 hours/month): roadmaps, architecture decisions, code reviews, team mentorship. Hands-on engineering is billed separately as project work. We don't just create PowerPoint decks—we participate in sprints, ship production code, and fix critical bugs. Strategy meets execution."
  },
  {
    question: "What's the typical engagement length?",
    answer:
      'Most Fractional CTO engagements are 6-12 months minimum, with many clients retaining us for years. The first 1-2 months focus on discovery and roadmap creation. Months 3+ are ongoing advisory and hands-on execution. We recommend a minimum 3-month commitment to allow time for meaningful impact (strategy + execution).'
  },
  {
    question: 'How much does this cost?',
    answer:
      'Fractional CTO retainers range from $8,000 to $14,000 per month depending on team size, complexity, and hours required. This covers strategic advisory (10-20 hours/month). Hands-on engineering is billed separately: hourly ($115-$155/hr) or fixed-price projects ($25k-$180k). Most clients invest $12k-$30k/month total (retainer + hands-on work).'
  },
  {
    question: 'Can you work with our existing engineering team?',
    answer:
      "Absolutely. We integrate seamlessly with your existing team—whether you have 2 developers or 25. We lead through collaboration, not command-and-control. Expect regular code reviews, architecture discussions, sprint planning, and mentorship. We elevate your team's capabilities while shipping production code alongside them."
  },
  {
    question:
      'What if we just need a quick AI prototype—do we need a Fractional CTO?',
    answer:
      'Not necessarily. If you have a clear, scoped project (e.g., "Build a RAG chatbot for customer support"), our AI Discovery Sprint ($18k, 2 weeks) or fixed-price project work ($25k-$80k) may be a better fit. Fractional CTO makes sense when you need ongoing strategic guidance, team leadership, and long-term technology roadmap—not just a one-off build.'
  },
  {
    question: 'How quickly can you start?',
    answer:
      'Most engagements start within 2-4 weeks. We begin with a free 45-minute strategy session to understand your needs, followed by a custom proposal. Once signed, we kick off with discovery and technical audit (Week 1-2), then strategic roadmap creation (Week 3-4), followed by ongoing advisory and execution.'
  }
];

// CTA Section
export const ctaSection = {
  title: 'Ready to Lead with Strategic Technology?',
  description:
    "Book a free 45-minute CTO strategy session. We'll discuss your technical challenges, business goals, and create a custom roadmap—with honest guidance on whether Fractional CTO services are the right fit.",
  benefits: [
    'Free 45-minute strategy call with a Fractional CTO',
    'Honest technical assessment of your current state',
    'Custom roadmap recommendation',
    'Transparent pricing in 24 hours',
    'No obligation, no sales pressure'
  ],
  primaryCta: {
    text: 'Book Free CTO Strategy Session',
    href: bookingUrl
  },
  secondaryCta: {
    text: 'View Our Engineers',
    href: '/engineers'
  }
};

// Benefits of working with RegainFlow
export const benefits = {
  title: 'Why Choose RegainFlow for Fractional CTO Services',
  subtitle:
    'U.S.-based senior engineering leadership with a proven track record of architecting production AI systems and leading technical teams.',
  items: [
    {
      icon: PiShieldCheckDuotone,
      title: '7+ Years Enterprise Architecture Experience',
      description:
        'Battle-tested technical leadership across AI/ML systems, data pipelines, full-stack platforms, and DevOps automation.'
    },
    {
      icon: PiRocketLaunchDuotone,
      title: '15+ Production AI Systems Architected',
      description:
        "From multi-agent automation to RAG pipelines serving 6,000+ daily users, we've shipped production AI at scale."
    },
    {
      icon: PiHandshakeDuotone,
      title: 'Hands-On Execution, Not Just Slides',
      description:
        "We don't just create roadmaps and disappear. We participate in sprints, ship code, and deliver production systems."
    },
    {
      icon: PiUsersThreeDuotone,
      title: 'U.S.-Based Senior Engineers',
      description:
        'Premium boutique consultancy with senior-level engineers (P4/P5 equivalent), not offshore junior devs.'
    }
  ]
};

// Helper function to get all data
export const getAllFractionalCtoData = () => ({
  hero: fractionalCtoHero,
  valuePillars,
  engagementPhases,
  targetCustomers,
  outcomes,
  faq: faqData,
  cta: ctaSection,
  benefits
});
