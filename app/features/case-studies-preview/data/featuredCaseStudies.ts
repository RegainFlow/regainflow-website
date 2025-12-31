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
    industry: 'HCM Automation',
    primaryMetric: '12 FTEs Saved'
  },
  {
    title: 'Hybrid RAG for Aerospace Engineering Search',
    description:
      'Production search engine using ELSER V2 and Elasticsearch serving 6,000+ daily users. Hybrid semantic + keyword retrieval over millions of engineering documents with domain-specific accuracy.',
    image: '/images/projects/rag_search_engine.png',
    tags: [
      '6K+ Daily Active Users',
      'Millions of Records',
      'ELSER V2 Semantic Search'
    ],
    industry: 'Aerospace Engineering',
    primaryMetric: '6K+ Users'
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
    industry: 'Process Automation',
    primaryMetric: 'Hours to Minutes'
  }
];
