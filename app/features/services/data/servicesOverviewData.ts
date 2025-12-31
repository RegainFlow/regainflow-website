import type { ServicesOverview } from '../types/service.types';
import { bookingUrl } from '~/config/site.config';

/* ==========================================================================
   Services Overview Page Data
   ========================================================================== */

export const servicesOverviewData: ServicesOverview = {
  // Hero Section
  heroTitle: 'Enterprise Engineering & AI Solutions',
  heroSubtitle:
    'We build production-grade automation, search systems, and full-stack applications that scale. From multi-agent AI workflows to DevOps transformation, we deliver engineering solutions that eliminate bottlenecks and drive measurable ROI.',
  heroCtaText: 'Schedule Free Consultation',
  heroCtaLink: bookingUrl,

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
      slug: 'ai-engineering',
      icon: 'PiRobotDuotone',
      title: 'AI Engineering',
      description:
        'Production AI systems from multi-agent automation to semantic search. Proven across 6K+ daily users with 90-day to 3-day cycle reductions and 90%+ recall.'
    },
    {
      slug: 'data-engineering',
      icon: 'PiDatabaseDuotone',
      title: 'Data Engineering',
      description:
        'End-to-end data pipelines from schema normalization to multi-system integration. Enterprise-scale validation delivering significant cost savings and 5× throughput gains.'
    },
    {
      slug: 'full-stack-engineering',
      icon: 'PiCodeDuotone',
      title: 'Full-Stack Engineering',
      description:
        'Modern web applications with React, Angular, Blazor. Delivered 35% performance improvements, 4× faster workflows, and 90% automation.'
    },
    {
      slug: 'devops-engineering',
      icon: 'PiGitBranchDuotone',
      title: 'DevOps Engineering',
      description:
        'Infrastructure automation and self-service PaaS platforms. 10× faster environment setup with Terraform + Kubernetes reducing DevOps overhead.'
    }
  ]
};
