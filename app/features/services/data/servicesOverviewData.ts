import type { ServicesOverview } from '../types/service.types';

/* ==========================================================================
   Services Overview Page Data
   ========================================================================== */

export const servicesOverviewData: ServicesOverview = {
  // Hero Section
  heroTitle: 'Enterprise Engineering & AI Solutions',
  heroSubtitle:
    'We build production-grade automation, search systems, and full-stack applications that scale. From multi-agent AI workflows to DevOps transformation, we deliver engineering solutions that eliminate bottlenecks and drive measurable ROI.',
  heroCtaText: 'Schedule Free Consultation',
  heroCtaLink: 'https://form.typeform.com/to/SOXnbS4E',

  // Process Steps - How It Works
  processSteps: [
    {
      step: 1,
      icon: 'PiMagnifyingGlassDuotone',
      title: 'Discovery & Requirements',
      description:
        'Deep dive into your workflows, pain points, and technical constraints. We map current processes, identify automation opportunities, and define success criteria with measurable KPIs.'
    },
    {
      step: 2,
      icon: 'PiFileTextDuotone',
      title: 'Proposal & Architecture Design',
      description:
        'Detailed technical proposal with architecture diagrams, technology stack recommendations, timeline estimates, and ROI projections. We align on scope, deliverables, and engagement terms.'
    },
    {
      step: 3,
      icon: 'PiRocketLaunchDuotone',
      title: 'Agile Development & Deployment',
      description:
        'Incremental delivery with frequent demos and staging deployments. We build with CI/CD, automated testing, and production-grade observability from day one, ensuring smooth launches.'
    },
    {
      step: 4,
      icon: 'PiChartLineUpDuotone',
      title: 'Support & Continuous Optimization',
      description:
        'Post-launch monitoring, performance optimization, and feature enhancements. We provide documentation, knowledge transfer, and ongoing support to ensure long-term success.'
    }
  ],

  // Service Metrics - Key Stats
  metrics: [
    {
      value: '15+',
      label: 'Years Combined Experience'
    },
    {
      value: '$8M+',
      label: 'Value Generated for Clients'
    },
    {
      value: '50+',
      label: 'Projects Delivered'
    },
    {
      value: '100%',
      label: 'Client Satisfaction Rate'
    }
  ],

  // Capability Cards - Core Services
  capabilityCards: [
    {
      slug: 'ai-automation',
      icon: 'PiRobotDuotone',
      title: 'AI Automation',
      description:
        'Multi-agent systems eliminating manual processes. Autonomous workflows handling validation, data processing, and decision-making at scale.'
    },
    {
      slug: 'rag-search',
      icon: 'PiMagnifyingGlassDuotone',
      title: 'RAG & Semantic Search',
      description:
        'Production-grade retrieval systems with hybrid vector search. Instant, accurate answers from millions of documents with LLM-powered Q&A.'
    },
    {
      slug: 'data-validation',
      icon: 'PiShieldCheckDuotone',
      title: 'Data Validation',
      description:
        'Autonomous validation engines ensuring 99.9%+ accuracy. Cross-system reconciliation processing 300+ tables with deterministic rules.'
    },
    {
      slug: 'system-integration',
      icon: 'PiPlugsConnectedDuotone',
      title: 'System Integration',
      description:
        'Seamless connectivity between legacy and modern systems. Real-time sync, ETL pipelines, and custom APIs eliminating data silos.'
    },
    {
      slug: 'full-stack-engineering',
      icon: 'PiCodeDuotone',
      title: 'Full-Stack Engineering',
      description:
        'Modern web applications with React, Next.js, and TypeScript. Complete solutions from database design to responsive frontends.'
    },
    {
      slug: 'devops',
      icon: 'PiGitBranchDuotone',
      title: 'DevOps & Infrastructure',
      description:
        'CI/CD automation, infrastructure as code, and container orchestration. Accelerate releases while improving reliability and reducing costs.'
    }
  ]
};
