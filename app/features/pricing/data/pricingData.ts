import type { IconType } from 'react-icons';
import {
  PiStrategyDuotone,
  PiRobotDuotone,
  PiDatabaseDuotone,
  PiCodeDuotone,
  PiGitBranchDuotone,
  PiLightbulbDuotone,
  PiRocketLaunchDuotone,
  PiTargetDuotone,
  PiCurrencyDollarDuotone
} from 'react-icons/pi';

export interface PricingHero {
  title: string;
  subtitle: string;
  philosophy: string;
}

export interface PricingRange {
  icon: IconType;
  name: string;
  priceRange: string;
  description: string;
  includes: string[];
  ideal: string;
  note?: string;
  ctaText: string;
  ctaHref: string;
}

export interface ProductizedPackage {
  icon: IconType;
  name: string;
  price: string;
  duration: string;
  description: string;
  deliverables: string[];
  ideal: string;
  ctaText: string;
  ctaHref: string;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

// Hero Section Data
export const pricingHero: PricingHero = {
  title: 'Transparent, Value-Aligned Pricing',
  subtitle:
    'No hidden fees. No sales games. Honest pricing for strategic technology leadership and senior engineering execution.',
  philosophy:
    'We believe in transparent pricing that reflects the value we deliver. Ranges anchor expectations, but every engagement is custom-priced based on scope, timeline, and complexity. No surprises, no bait-and-switch—just honest partnerships.'
};

// 5 Pricing Ranges
export const pricingRanges: PricingRange[] = [
  {
    icon: PiStrategyDuotone,
    name: 'Fractional CTO',
    priceRange: '$8,000 - $14,000/month',
    description:
      'Strategic technology leadership for startups and growth companies. CTO-level guidance without the $300k+ full-time executive cost.',
    includes: [
      '10-20 hours/month strategic advisory',
      'Technology roadmap & architecture decisions',
      'Team leadership & engineering mentorship',
      'Weekly technical check-ins',
      'Sprint planning & execution oversight',
      'Unlimited async communication (Slack/Email)'
    ],
    ideal:
      'Series A/B startups, mid-market companies with 3-25 person engineering teams',
    note: 'Hands-on engineering work billed separately (see hourly or project pricing below).',
    ctaText: 'Book CTO Strategy Session',
    ctaHref: 'https://cal.com/regainflow/cto-strategy'
  },
  {
    icon: PiRobotDuotone,
    name: 'AI Engineering Retainers',
    priceRange: '$6,000 - $18,000/month',
    description:
      'Production AI systems from POC to scale. RAG pipelines, multi-agent automation, and LLM integrations built by senior AI engineers.',
    includes: [
      '20-40 hours/month hands-on AI engineering',
      'RAG pipeline development & optimization',
      'Multi-agent system orchestration',
      'LLM integration & prompt engineering',
      'Production deployment & monitoring',
      'Iterative refinement & feature development'
    ],
    ideal:
      'AI-first products, companies building internal AI automation, SaaS platforms adding AI features',
    ctaText: 'Schedule AI Consultation',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  },
  {
    icon: PiDatabaseDuotone,
    name: 'Data Engineering Retainers',
    priceRange: '$5,000 - $20,000/month',
    description:
      'End-to-end data pipelines, validation frameworks, and system integrations. From ETL chaos to data reliability.',
    includes: [
      '20-40 hours/month hands-on data engineering',
      'ETL pipeline design & implementation',
      'Data validation & quality frameworks',
      'Multi-system integrations (APIs, databases, SaaS)',
      'Schema normalization & data modeling',
      'Production monitoring & optimization'
    ],
    ideal:
      'Companies with complex data infrastructure, legacy migrations, multi-system integrations',
    ctaText: 'Schedule Data Consultation',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  },
  {
    icon: PiCodeDuotone,
    name: 'Platform Builds (Fixed-Price)',
    priceRange: '$45,000 - $180,000+',
    description:
      'Full-stack MVPs, internal tools, and SaaS platforms. Fixed-price projects with clear scope and timelines.',
    includes: [
      'Complete product specification & wireframes',
      'Full-stack development (React, Node.js, TypeScript)',
      'Production deployment & infrastructure',
      'Testing, QA, and documentation',
      'Post-launch support & bug fixes (30 days)'
    ],
    ideal:
      'Startups building MVPs, SMBs needing internal tools, companies replacing legacy systems',
    note: 'Typical projects: $80,000 - $120,000. Pricing depends on scope and timeline.',
    ctaText: 'Request Project Quote',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  },
  {
    icon: PiCurrencyDollarDuotone,
    name: 'Hourly Consulting',
    priceRange: '$115 - $155/hour',
    description:
      'Ad-hoc senior engineering support. Code reviews, technical audits, architecture consulting, and troubleshooting.',
    includes: [
      '4-hour minimum increments',
      'Senior engineer expertise (P4/P5 equivalent)',
      'Code reviews & technical audits',
      'Architecture consulting & design',
      'Emergency bug fixes & production support',
      'Technology evaluation & vendor selection'
    ],
    ideal:
      'One-off consulting needs, technical due diligence, trial engagements before retainer commitment',
    ctaText: 'Book Consultation',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  }
];

// 5 Productized Packages
export const productizedPackages: ProductizedPackage[] = [
  {
    icon: PiStrategyDuotone,
    name: 'Fractional CTO Starter',
    price: '$8,000/month',
    duration: '3-month minimum',
    description:
      'Strategic technology leadership for early-stage startups. Get CTO-level guidance without the executive salary.',
    deliverables: [
      '10 hours/month strategic advisory',
      'Bi-weekly technical check-ins (30 min)',
      'Technology roadmap & architecture guidance',
      'Code reviews & engineering best practices',
      'Quarterly strategic planning sessions'
    ],
    ideal: 'Early-stage startups (pre-Series A) with 3-10 person teams',
    ctaText: 'Start Your CTO Engagement',
    ctaHref: 'https://cal.com/regainflow/cto-strategy'
  },
  {
    icon: PiLightbulbDuotone,
    name: 'AI Discovery Sprint',
    price: '$18,000 fixed',
    duration: '2-week sprint',
    description:
      'Rapid RAG/multi-agent POC with architecture recommendations. Validate AI feasibility before committing to full builds.',
    deliverables: [
      'AI feasibility assessment & use case validation',
      'Functional RAG or multi-agent prototype',
      'Architecture recommendations & tech stack evaluation',
      'Production roadmap & cost estimates',
      'Documentation & handoff'
    ],
    ideal:
      'Companies exploring AI but unsure where to start, validating AI use cases before investment',
    ctaText: 'Book Discovery Sprint',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  },
  {
    icon: PiRocketLaunchDuotone,
    name: 'MVP Accelerator',
    price: '$65,000 fixed',
    duration: '8-week build',
    description:
      'Full-stack MVP from wireframes to deployed application. Ship your product in 2 months, not 6.',
    deliverables: [
      'Product specification & wireframe refinement',
      'Full-stack development (React + Node.js + TypeScript)',
      'Database design & API development',
      'Production deployment & CI/CD setup',
      'User authentication & core features',
      '30 days post-launch support'
    ],
    ideal:
      'Startups validating product-market fit, founders needing rapid MVP delivery',
    ctaText: 'Request MVP Quote',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  },
  {
    icon: PiDatabaseDuotone,
    name: 'Data Pipeline Build',
    price: '$35,000 - $80,000',
    duration: '4-8 weeks',
    description:
      'Production ETL pipeline with data validation and API layer. From data chaos to reliable automation.',
    deliverables: [
      'ETL pipeline design & implementation',
      'Schema normalization & data modeling',
      'Data validation & quality checks',
      'API layer for data access',
      'Production deployment & monitoring',
      'Documentation & handoff'
    ],
    ideal:
      'Companies with data infrastructure needs, legacy migrations, multi-system integrations',
    ctaText: 'Request Data Pipeline Quote',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  },
  {
    icon: PiGitBranchDuotone,
    name: 'DevOps Modernization',
    price: '$25,000 - $60,000',
    duration: '3-6 weeks',
    description:
      'CI/CD automation with infrastructure as code. From manual deployments to self-service engineering.',
    deliverables: [
      'CI/CD pipeline setup (GitHub Actions / GitLab CI)',
      'Infrastructure as code (Terraform / CloudFormation)',
      'Containerization & orchestration (Docker / Kubernetes)',
      'Environment provisioning automation',
      'Monitoring & alerting setup',
      'Documentation & team training'
    ],
    ideal:
      'Teams struggling with manual deployments, companies scaling infrastructure, DevOps bottlenecks',
    ctaText: 'Request DevOps Quote',
    ctaHref: 'https://cal.com/regainflow/pricing-consultation'
  }
];

// Pricing FAQ (6 questions)
export const pricingFaq: PricingFaqItem[] = [
  {
    question: 'Why are the pricing ranges so wide?',
    answer:
      'Pricing depends on scope, team size, complexity, and timeline. A $6k/month AI retainer might be 20 hours of prompt engineering for a simple chatbot. An $18k/month retainer could be 40 hours building a multi-agent system with complex orchestration. We provide custom quotes within 24 hours based on your specific needs—no surprises, no bait-and-switch.'
  },
  {
    question: 'Do you offer equity or deferred payment options?',
    answer:
      'No. We focus on cash engagements to ensure alignment and avoid conflicts of interest. We provide strategic guidance without equity ties because we want to give honest technical advice, not advice optimized for our equity position. Our business model is simple: you pay for expertise, we deliver results.'
  },
  {
    question:
      "What's the difference between retainers and fixed-price projects?",
    answer:
      'Retainers are ongoing monthly commitments (Fractional CTO, AI Engineering, Data Engineering) for continuous work and advisory. Fixed-price projects (MVP Accelerator, Data Pipeline Build, DevOps Modernization) have a defined scope, timeline, and deliverables. Retainers offer flexibility and ongoing support; fixed-price projects deliver a specific outcome.'
  },
  {
    question: 'Can I start with a small project to test your capabilities?',
    answer:
      'Absolutely. We recommend starting with: (1) Hourly consulting (4-hour minimum, $115-$155/hr) for quick technical audits or code reviews, or (2) AI Discovery Sprint ($18k, 2 weeks) to validate AI feasibility with a working prototype. Many clients start small and scale to retainers after seeing our work quality.'
  },
  {
    question: 'Do you work with companies outside the U.S.?',
    answer:
      "Yes, but we're U.S.-based and work in U.S. time zones (ET/CT). We've successfully worked with international clients, but communication and time zone alignment are critical. Most of our non-U.S. clients are in similar time zones (Canada, Latin America, Western Europe). We're not the right fit if you need 24/7 global coverage or prefer offshore pricing."
  },
  {
    question: 'What happens if a project goes over budget or timeline?',
    answer:
      "For fixed-price projects, we define clear scope upfront. If scope creeps (client requests new features), we provide a change order with updated pricing before proceeding. For retainers, we track hours monthly and communicate if we're approaching limits. We never bill surprise overages—you'll always know where you stand before costs increase."
  }
];

// CTA Section
export const pricingCta = {
  title: 'Ready to Get a Custom Quote?',
  description:
    "Book a free 30-minute pricing consultation. We'll discuss your project, provide transparent pricing, and create a custom proposal—with no obligation and no sales pressure.",
  benefits: [
    'Free 30-minute pricing consultation',
    'Custom quote within 24 hours',
    'Transparent breakdown of costs & timeline',
    "Honest assessment of fit (we'll tell you if we're not the right partner)"
  ],
  primaryCta: {
    text: 'Book Pricing Consultation',
    href: 'https://cal.com/regainflow/pricing-consultation'
  },
  secondaryCta: {
    text: 'Book CTO Strategy Session',
    href: 'https://cal.com/regainflow/cto-strategy'
  }
};

// Helper function to get all pricing data
export const getAllPricingData = () => ({
  hero: pricingHero,
  pricingRanges,
  productizedPackages,
  faq: pricingFaq,
  cta: pricingCta
});
