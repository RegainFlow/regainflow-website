import type { FeaturedCaseStudy } from '../types/case-studies-preview.types';

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    title: 'Multi-Agent Payroll Validation System',
    description:
      'Autonomous validation engine replacing months of manual payroll quality checks across enterprise ERP systems. Multi-agent architecture orchestrating SQL validation, cross-system reconciliation, and AI-generated audit logic across distributed payroll platforms.',
    image: '/images/projects/multi-agent-payroll-validation.png',
    tags: [
      'Enterprise-Scale Automation',
      '10× Cycle Time Reduction',
      'Production-Grade LangGraph'
    ],
    industry: 'AI Transformation',
    primaryMetric: '12 FTEs Saved'
  },
  {
    title: 'Marketing Automation for Distribution Network',
    description:
      'End-to-end workflow automation eliminating 25 hours of weekly manual tasks. Integrated CRM, inventory, and marketing platforms enabling 4x sales growth through improved response time and data accuracy.',
    image: '/images/projects/marketing_auto_net.png',
    tags: [
      '25 Hours/Week Saved',
      '90% Workflow Automation',
      '4x Sales Growth'
    ],
    industry: 'Digital Transformation',
    primaryMetric: '4x Growth'
  },
  {
    title: 'Legacy RPA Modernization with Python & LangGraph',
    description:
      'Converted Blue Prism legacy automations into modern Python workflows with multi-agent AI orchestration. Eliminated licensing costs, improved reliability, and reduced multi-hour processes to minutes.',
    image: '/images/projects/legacy-rpa-modernization.png',
    tags: [
      'Eliminated RPA Licensing',
      'Multi-Agent AI Logic',
      'Hours to Minutes'
    ],
    industry: 'AI Transformation',
    primaryMetric: 'Hours to Minutes'
  }
];
