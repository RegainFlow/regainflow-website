export interface FeaturedCaseStudy {
  title: string;
  description: string;
  image: string;
  tags: string[];
  industry: string;
  primaryMetric: string;
}

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    title: 'Multi-Agent Payroll Validation System',
    description:
      'Autonomous validation engine replacing months of manual SAP payroll quality checks. Multi-agent architecture orchestrating SQL validation, flat-file comparisons, and AI-generated logic across legacy systems.',
    image: '/images/projects/hcm-interop-platform.png',
    tags: [
      '$8M+ Value Generated',
      '90-Day to 3-Day Turnaround',
      'Production-Grade LangGraph'
    ],
    industry: 'HCM Automation',
    primaryMetric: '$8M+ Saved'
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
    image: '/images/projects/marketing_auto_net.png',
    tags: [
      'Eliminated RPA Licensing',
      'Multi-Agent AI Logic',
      'Hours to Minutes'
    ],
    industry: 'Process Automation',
    primaryMetric: 'Hours to Minutes'
  }
];
