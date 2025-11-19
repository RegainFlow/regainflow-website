import type { Capability } from '../types/service.types';

/* ==========================================================================
   Capabilities Data - 6 Core Service Offerings
   ========================================================================== */

export const capabilitiesData: Capability[] = [
  // ========================================
  // 1. AI Automation
  // ========================================
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'Intelligent workflows that eliminate manual processes and scale operations',
    heroImage: '/images/services/ai-automation/hero.png',
    description:
      'Transform repetitive, time-consuming workflows into intelligent, autonomous systems. Our AI automation solutions combine LLM-powered decision making, multi-agent architectures, and production-grade orchestration to eliminate manual bottlenecks while maintaining accuracy and reliability.',
    problems: [
      {
        icon: 'PiClockCountdownDuotone',
        problem: 'Teams spending hours on repetitive manual tasks',
        solution:
          'Multi-agent AI systems that autonomously handle validation, data processing, and decision workflows'
      },
      {
        icon: 'PiWarningDiamondDuotone',
        problem: 'High error rates and inconsistency in manual processes',
        solution:
          'Deterministic validation engines combined with AI-augmented logic ensuring 99.9%+ accuracy'
      },
      {
        icon: 'PiChartLineDuotone',
        problem: 'Inability to scale operations without proportional hiring',
        solution:
          'Production-grade automation handling 10x-100x workload increases with zero additional headcount'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Process Analysis & Opportunity Mapping',
        description:
          'Deep dive into your current workflows to identify automation opportunities with highest ROI. We map manual touchpoints, decision trees, and exception handling patterns.'
      },
      {
        step: 2,
        title: 'Hybrid Architecture Design',
        description:
          'Design multi-agent systems combining deterministic rules with LLM intelligence. We ensure fail-safes, human-in-the-loop checkpoints, and graceful degradation for mission-critical workflows.'
      },
      {
        step: 3,
        title: 'Incremental Deployment & Validation',
        description:
          'Deploy automations incrementally with parallel validation against existing processes. We prove accuracy before full cutover, eliminating risk of business disruption.'
      },
      {
        step: 4,
        title: 'Monitoring, Optimization & Scaling',
        description:
          'Implement observability dashboards, error tracking, and continuous improvement loops. We optimize agent performance and scale to additional workflows.'
      }
    ],
    techStack: [
      { name: 'LangChain', category: 'AI / LLM Frameworks' },
      { name: 'LangGraph', category: 'AI / LLM Frameworks' },
      { name: 'OpenAI GPT-4', category: 'AI / LLM Frameworks' },
      { name: 'Python', category: 'Programming Languages' },
      { name: 'FastAPI', category: 'Backend / APIs' },
      { name: 'PostgreSQL', category: 'Databases' },
      { name: 'Redis', category: 'Databases' },
      { name: 'Docker', category: 'DevOps / Automation' }
    ],
    ctaTitle: 'Ready to Eliminate Manual Bottlenecks?',
    ctaDescription:
      'Schedule a free consultation to discuss your automation opportunities. We\'ll map your workflows, identify high-ROI automation targets, and show you exactly how AI can transform your operations.',
    ctaButtonText: 'Schedule Free Consultation',
    ctaButtonLink: 'https://form.typeform.com/to/SOXnbS4E'
  },

  // ========================================
  // 2. RAG/Search
  // ========================================
  {
    slug: 'rag-search',
    title: 'RAG & Semantic Search',
    subtitle:
      'Production-grade retrieval systems delivering instant, accurate answers from massive document repositories',
    heroImage: '/images/services/rag-search/hero.png',
    description:
      'Build intelligent search and retrieval systems that understand context, semantics, and domain-specific nuances. Our RAG implementations combine hybrid vector search, reranking algorithms, and LLM-powered summarization to deliver Google-quality search over your private data.',
    problems: [
      {
        icon: 'PiMagnifyingGlassDuotone',
        problem: 'Legacy keyword search missing 40-60% of relevant documents',
        solution:
          'Hybrid semantic + keyword retrieval with ELSER V2 or dense embeddings achieving 90%+ recall'
      },
      {
        icon: 'PiDatabaseDuotone',
        problem: 'Millions of documents across silos making knowledge inaccessible',
        solution:
          'Unified search ingestion pipelines processing millions of records with domain-specific chunking and metadata extraction'
      },
      {
        icon: 'PiLightbulbDuotone',
        problem: 'Users can\'t get direct answers, only document lists',
        solution:
          'RAG-powered Q&A systems providing cited, summarized answers with source traceability'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Data Assessment & Architecture Design',
        description:
          'Audit your document repositories, data sources, and access patterns. We design ingestion pipelines, chunking strategies, and vector database architectures optimized for your scale and query patterns.'
      },
      {
        step: 2,
        title: 'Indexing Pipeline & Embedding Generation',
        description:
          'Build robust ETL pipelines converting raw documents into indexed, searchable formats. We implement semantic embeddings, metadata extraction, and incremental update strategies.'
      },
      {
        step: 3,
        title: 'Hybrid Retrieval & Reranking',
        description:
          'Implement BM25 keyword search combined with vector similarity for best-of-both-worlds retrieval. Add reranking layers (RRF, LLM-based) to optimize result relevance.'
      },
      {
        step: 4,
        title: 'RAG Integration & User Experience',
        description:
          'Connect retrieval to LLMs for conversational Q&A, summarization, and multi-turn dialogues. Build intuitive UIs with faceted filters, relevance feedback, and answer citations.'
      }
    ],
    techStack: [
      { name: 'Elasticsearch', category: 'Search / Vector DBs' },
      { name: 'ELSER V2', category: 'AI / LLM Frameworks' },
      { name: 'Pinecone', category: 'Search / Vector DBs' },
      { name: 'Chroma', category: 'Search / Vector DBs' },
      { name: 'LangChain', category: 'AI / LLM Frameworks' },
      { name: 'OpenAI Embeddings', category: 'AI / LLM Frameworks' },
      { name: 'Python', category: 'Programming Languages' },
      { name: 'TypeScript', category: 'Programming Languages' }
    ],
    ctaTitle: 'Transform Your Enterprise Search',
    ctaDescription:
      'Let\'s discuss your search challenges and document repositories. We\'ll design a retrieval architecture that delivers accurate, fast answers while scaling to millions of documents.',
    ctaButtonText: 'Get Search Architecture Consultation',
    ctaButtonLink: 'https://form.typeform.com/to/SOXnbS4E'
  },

  // ========================================
  // 3. Data Validation
  // ========================================
  {
    slug: 'data-validation',
    title: 'Data Validation & Quality Engineering',
    subtitle:
      'Autonomous validation engines ensuring data integrity across complex enterprise systems',
    heroImage: '/images/services/data-validation/hero.png',
    description:
      'Eliminate manual data quality checks with intelligent validation systems. Our solutions combine deterministic rule engines, schema normalization, cross-system reconciliation, and AI-augmented anomaly detection to ensure 99.9%+ data accuracy at scale.',
    problems: [
      {
        icon: 'PiFileXDuotone',
        problem: 'Manual validation taking weeks while blocking critical processes',
        solution:
          'Autonomous multi-agent validation reducing 90-day cycles to 3 days with full audit trails'
      },
      {
        icon: 'PiWarningCircleDuotone',
        problem: 'Data quality issues discovered only after costly downstream failures',
        solution:
          'Real-time validation at ingestion points catching errors before they propagate across systems'
      },
      {
        icon: 'PiShuffleDuotone',
        problem: 'Inconsistent data across TE, GL, Payroll, HRIS creating reconciliation nightmares',
        solution:
          'Cross-system validation engines processing 300+ tables with deterministic business rules and exception handling'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Validation Requirements & Rule Discovery',
        description:
          'Work with domain experts to document business rules, validation logic, and exception scenarios. We map data lineage across systems to identify critical validation checkpoints.'
      },
      {
        step: 2,
        title: 'Schema Normalization & Rule Engine Design',
        description:
          'Build deterministic validation engines with configurable rules, threshold management, and audit logging. We handle schema differences, data type conversions, and temporal logic.'
      },
      {
        step: 3,
        title: 'Multi-Agent Orchestration & Automation',
        description:
          'Deploy multi-agent architectures coordinating SQL validation, flat-file comparisons, and cross-system reconciliation. Agents autonomously handle retries, error categorization, and escalation workflows.'
      },
      {
        step: 4,
        title: 'Monitoring, Dashboards & Continuous Improvement',
        description:
          'Implement real-time validation dashboards showing pass/fail rates, error distributions, and SLA compliance. We continuously refine rules based on false positive analysis.'
      }
    ],
    techStack: [
      { name: 'Python', category: 'Programming Languages' },
      { name: 'SQL Server', category: 'Databases' },
      { name: 'PostgreSQL', category: 'Databases' },
      { name: 'LangGraph', category: 'AI / LLM Frameworks' },
      { name: 'Pandas', category: 'ML / DL Frameworks' },
      { name: 'Apache Airflow', category: 'DevOps / Automation' },
      { name: 'Great Expectations', category: 'Data Validation' },
      { name: 'Elasticsearch', category: 'Search / Vector DBs' }
    ],
    ctaTitle: 'Ensure Data Integrity at Scale',
    ctaDescription:
      'Schedule a free consultation to discuss your data validation challenges. We\'ll map your data flows, identify validation bottlenecks, and design automated quality assurance systems.',
    ctaButtonText: 'Schedule Data Quality Assessment',
    ctaButtonLink: 'https://form.typeform.com/to/SOXnbS4E'
  },

  // ========================================
  // 4. System Integration
  // ========================================
  {
    slug: 'system-integration',
    title: 'System Integration & API Development',
    subtitle:
      'Seamless connectivity between disparate systems enabling real-time data flow and process automation',
    heroImage: '/images/services/system-integration/hero.png',
    description:
      'Connect legacy systems, modern SaaS platforms, and custom applications into cohesive, automated workflows. Our integration solutions handle complex data transformations, real-time synchronization, error handling, and API development to eliminate data silos and manual data entry.',
    problems: [
      {
        icon: 'PiPlugsConnectedDuotone',
        problem: 'Data trapped in silos across CRM, ERP, HRIS, and legacy systems',
        solution:
          'Real-time bidirectional sync with conflict resolution, deduplication, and data lineage tracking'
      },
      {
        icon: 'PiArrowsClockwiseDuotone',
        problem: 'Manual data export/import between systems creating lag and errors',
        solution:
          'Automated ETL pipelines processing millions of records with retry logic, idempotency, and monitoring'
      },
      {
        icon: 'PiLinkBreakDuotone',
        problem: 'No APIs available for legacy systems blocking automation initiatives',
        solution:
          'Custom API layers wrapping legacy databases, file systems, and mainframes with modern REST/GraphQL interfaces'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'System Landscape Mapping & Integration Design',
        description:
          'Document your technology stack, data flows, and integration requirements. We design integration architectures balancing real-time sync, batch processing, and event-driven patterns.'
      },
      {
        step: 2,
        title: 'API Development & Data Pipeline Construction',
        description:
          'Build robust APIs, webhooks, and ETL pipelines with authentication, rate limiting, and error handling. We implement data validation, transformation logic, and schema mapping between systems.'
      },
      {
        step: 3,
        title: 'Testing, Monitoring & Error Handling',
        description:
          'Comprehensive integration testing including edge cases, failure scenarios, and data consistency validation. We deploy monitoring, alerting, and dead letter queues for production reliability.'
      },
      {
        step: 4,
        title: 'Optimization & Scaling',
        description:
          'Performance tuning for throughput, latency, and resource utilization. We implement caching strategies, batch optimization, and horizontal scaling as data volumes grow.'
      }
    ],
    techStack: [
      { name: 'Python', category: 'Programming Languages' },
      { name: 'Node.js', category: 'Programming Languages' },
      { name: 'FastAPI', category: 'Backend / APIs' },
      { name: 'Express.js', category: 'Backend / APIs' },
      { name: 'GraphQL', category: 'Backend / APIs' },
      { name: 'Apache Kafka', category: 'System Integration' },
      { name: 'RabbitMQ', category: 'System Integration' },
      { name: 'Redis', category: 'Databases' }
    ],
    ctaTitle: 'Connect Your Systems Seamlessly',
    ctaDescription:
      'Let\'s map your integration challenges and design a scalable architecture. We\'ll show you how to eliminate data silos, automate workflows, and achieve real-time visibility across your tech stack.',
    ctaButtonText: 'Get Integration Consultation',
    ctaButtonLink: 'https://form.typeform.com/to/SOXnbS4E'
  },

  // ========================================
  // 5. Full-Stack Engineering
  // ========================================
  {
    slug: 'full-stack-engineering',
    title: 'Full-Stack Engineering',
    subtitle:
      'End-to-end application development from database to frontend with modern frameworks and best practices',
    heroImage: '/images/services/full-stack-engineering/hero.png',
    description:
      'Build production-ready web applications, SaaS platforms, and internal tools with modern tech stacks. Our full-stack engineers deliver complete solutions including database design, API development, frontend interfaces, authentication, and deployment infrastructure.',
    problems: [
      {
        icon: 'PiDevicesDuotone',
        problem: 'Legacy applications with poor UX hampering productivity',
        solution:
          'Modern React/Next.js frontends with responsive design achieving 35%+ performance improvements'
      },
      {
        icon: 'PiCodeDuotone',
        problem: 'Technical debt and fragmented codebase slowing feature delivery',
        solution:
          'Clean architecture refactoring with TypeScript, automated testing, and CI/CD reducing release cycles by 40%'
      },
      {
        icon: 'PiRocketLaunchDuotone',
        problem: 'Need to ship MVP quickly to validate market hypotheses',
        solution:
          'Rapid prototyping with proven tech stacks delivering production-ready MVPs in 4-8 weeks'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Requirements Gathering & Architecture Planning',
        description:
          'Define feature requirements, user workflows, and technical constraints. We design database schemas, API contracts, and component architectures optimized for maintainability and scale.'
      },
      {
        step: 2,
        title: 'Incremental Development & Continuous Integration',
        description:
          'Build features iteratively with frequent deploys to staging environments. We implement automated testing, code reviews, and CI/CD pipelines from day one.'
      },
      {
        step: 3,
        title: 'Frontend, Backend & Database Integration',
        description:
          'Develop responsive, accessible frontends connected to robust backend APIs. We handle authentication, authorization, data validation, and error handling across the full stack.'
      },
      {
        step: 4,
        title: 'Performance Optimization & Production Deployment',
        description:
          'Optimize bundle sizes, query performance, and load times. We deploy to scalable infrastructure with monitoring, logging, and automated backups.'
      }
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Programming Languages' },
      { name: 'Node.js', category: 'Programming Languages' },
      { name: 'Python', category: 'Programming Languages' },
      { name: 'PostgreSQL', category: 'Databases' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      { name: 'Remix', category: 'Frontend' }
    ],
    ctaTitle: 'Build Your Next Application',
    ctaDescription:
      'Schedule a consultation to discuss your application requirements. We\'ll design a tech stack, estimate timelines, and show you how we deliver production-ready applications fast.',
    ctaButtonText: 'Get Development Estimate',
    ctaButtonLink: 'https://form.typeform.com/to/SOXnbS4E'
  },

  // ========================================
  // 6. DevOps & Infrastructure
  // ========================================
  {
    slug: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    subtitle:
      'Scalable, secure infrastructure with automated deployments and comprehensive monitoring',
    heroImage: '/images/services/devops/hero.png',
    description:
      'Modernize your deployment pipelines, cloud infrastructure, and operational practices. Our DevOps services deliver CI/CD automation, infrastructure as code, container orchestration, and production monitoring to accelerate releases while improving reliability.',
    problems: [
      {
        icon: 'PiGitBranchDuotone',
        problem: 'Manual deployments taking hours and causing frequent downtime',
        solution:
          'Automated CI/CD pipelines reducing release cycles by 40% with zero-downtime blue/green deployments'
      },
      {
        icon: 'PiCloudDuotone',
        problem: 'Infrastructure drift and configuration inconsistencies across environments',
        solution:
          'Infrastructure as Code with Terraform/Pulumi ensuring reproducible, versioned infrastructure across dev, staging, prod'
      },
      {
        icon: 'PiChartLineUpDuotone',
        problem: 'No visibility into production performance or errors',
        solution:
          'Comprehensive observability with Datadog, Grafana, or CloudWatch providing real-time metrics, logs, and traces'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Infrastructure Audit & Modernization Planning',
        description:
          'Assess current deployment processes, infrastructure, and pain points. We design modernization roadmaps balancing quick wins with strategic improvements.'
      },
      {
        step: 2,
        title: 'CI/CD Pipeline Implementation',
        description:
          'Build automated build, test, and deployment pipelines with GitHub Actions, GitLab CI, or Jenkins. We implement quality gates, security scanning, and rollback mechanisms.'
      },
      {
        step: 3,
        title: 'Infrastructure as Code & Container Orchestration',
        description:
          'Migrate to IaC patterns with Terraform or Pulumi. Deploy containerized applications with Docker, Kubernetes, or ECS with auto-scaling and load balancing.'
      },
      {
        step: 4,
        title: 'Monitoring, Logging & Continuous Optimization',
        description:
          'Implement centralized logging, distributed tracing, and alerting. We establish SLOs, create runbooks, and optimize costs through right-sizing and reserved capacity.'
      }
    ],
    techStack: [
      { name: 'Docker', category: 'DevOps / Automation' },
      { name: 'Kubernetes', category: 'DevOps / Automation' },
      { name: 'Terraform', category: 'DevOps / Automation' },
      { name: 'GitHub Actions', category: 'DevOps / Automation' },
      { name: 'AWS', category: 'Cloud / AI Services' },
      { name: 'Azure', category: 'Cloud / AI Services' },
      { name: 'Datadog', category: 'DevOps / Automation' },
      { name: 'Grafana', category: 'DevOps / Automation' }
    ],
    ctaTitle: 'Modernize Your Infrastructure',
    ctaDescription:
      'Let\'s discuss your deployment challenges and infrastructure goals. We\'ll design a DevOps transformation plan that accelerates releases while improving reliability and reducing costs.',
    ctaButtonText: 'Get DevOps Assessment',
    ctaButtonLink: 'https://form.typeform.com/to/SOXnbS4E'
  }
];

// Helper function to get capability by slug
export const getCapabilityBySlug = (slug: string): Capability | undefined => {
  return capabilitiesData.find((cap) => cap.slug === slug);
};

// Export individual capabilities for convenience
export const aiAutomationCapability = capabilitiesData[0];
export const ragSearchCapability = capabilitiesData[1];
export const dataValidationCapability = capabilitiesData[2];
export const systemIntegrationCapability = capabilitiesData[3];
export const fullStackCapability = capabilitiesData[4];
export const devOpsCapability = capabilitiesData[5];
