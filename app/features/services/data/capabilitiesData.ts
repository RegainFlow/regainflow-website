import type { Capability } from '../types/service.types';
import { bookingUrl } from '~/config/site.config';

/* ==========================================================================
   Capabilities Data - 4 Core Service Offerings
   ========================================================================== */

export const capabilitiesData: Capability[] = [
  // ========================================
  // 1. AI Engineering
  // ========================================
  {
    slug: 'ai-engineering',
    title: 'AI Engineering',
    subtitle:
      'Production AI systems from multi-agent automation to semantic search over millions of documents',
    heroImage: '/images/services/ai-engineering/hero.png',
    description:
      'Build intelligent systems that autonomously handle complex workflows, deliver instant answers from massive document repositories, and scale operations without proportional hiring. Our AI solutions combine multi-agent architectures, production RAG pipelines, and LLM-powered decision making proven across 6,000+ daily users and enterprise-scale deployments.',
    problems: [
      {
        icon: 'PiClockCountdownDuotone',
        problem:
          'Manual validation processes taking 90 days blocking critical operations',
        solution:
          'Multi-agent validation systems reducing 90-day cycles to 3 days with autonomous SQL checks, flat-file comparisons, and AI-generated rules'
      },
      {
        icon: 'PiMagnifyingGlassDuotone',
        problem: 'Legacy keyword search missing 40-60% of relevant documents',
        solution:
          'Hybrid semantic + keyword retrieval with ELSER V2 achieving 90%+ recall across millions of engineering documents'
      },
      {
        icon: 'PiLightbulbDuotone',
        problem: "Users can't get direct answers, only document lists",
        solution:
          'Production RAG systems serving 6K+ daily users with cited, summarized answers and source traceability'
      },
      {
        icon: 'PiChartLineDuotone',
        problem:
          'Manual operator review bottlenecks in satellite telemetry analysis',
        solution:
          'Real-time anomaly detection reducing manual review by 80% across 5K+ sensor streams'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Use Case Assessment & Architecture Design',
        description:
          'Deep dive into your workflows and document repositories. We map automation opportunities, data sources, and access patterns to design multi-agent systems or RAG architectures optimized for your scale.'
      },
      {
        step: 2,
        title: 'Pipeline Development & Validation',
        description:
          'Build robust ingestion pipelines, embeddings generation, and multi-agent orchestration. We implement hybrid retrieval (BM25 + vector search), deterministic validation rules, and LLM integration with full audit trails.'
      },
      {
        step: 3,
        title: 'Incremental Deployment & Accuracy Validation',
        description:
          'Deploy with parallel validation against existing processes. We prove accuracy before full cutover, implement human-in-the-loop checkpoints, and ensure graceful degradation for mission-critical workflows.'
      },
      {
        step: 4,
        title: 'Monitoring, Optimization & Scaling',
        description:
          'Implement observability dashboards tracking agent performance, search recall, and SLA compliance. We continuously optimize retrieval relevance, agent decision logic, and scale to additional workflows or document sources.'
      }
    ],
    techStack: [
      { name: 'LangChain', category: 'AI / LLM Frameworks' },
      { name: 'LangGraph', category: 'AI / LLM Frameworks' },
      { name: 'OpenAI GPT-4', category: 'AI / LLM Frameworks' },
      { name: 'Elasticsearch', category: 'Search / Vector DBs' },
      { name: 'ELSER V2', category: 'AI / LLM Frameworks' },
      { name: 'Pinecone', category: 'Search / Vector DBs' },
      { name: 'Chroma', category: 'Search / Vector DBs' },
      { name: 'OpenAI Embeddings', category: 'AI / LLM Frameworks' },
      { name: 'Python', category: 'Programming Languages' },
      { name: 'FastAPI', category: 'Backend / APIs' },
      { name: 'PostgreSQL', category: 'Databases' },
      { name: 'Redis', category: 'Databases' }
    ],
    ctaTitle: 'Ready to Build Production AI Systems?',
    ctaDescription:
      "Schedule a free consultation to discuss your AI engineering needs. Whether you need multi-agent automation, enterprise RAG, or intelligent search, we'll design a solution proven at scale.",
    ctaButtonText: 'Schedule AI Engineering Consultation',
    ctaButtonLink: bookingUrl
  },

  // ========================================
  // 2. Data Engineering
  // ========================================
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    subtitle:
      'End-to-end data pipelines from schema normalization to multi-system integration at enterprise scale',
    heroImage: '/images/services/data-engineering/hero.png',
    description:
      'Eliminate manual data quality checks and integration bottlenecks with intelligent data systems. Our solutions combine schema normalization across 300+ tables, cross-system validation engines, ETL pipelines processing millions of records, and API layers connecting legacy systems to modern platforms—delivering $8M+ in saved costs and 5× throughput improvements.',
    problems: [
      {
        icon: 'PiShuffleDuotone',
        problem:
          'Inconsistent data across TE, GL, Payroll, HRIS creating reconciliation nightmares',
        solution:
          'Cross-system validation engines processing 300+ tables with schema normalization and exception handling saving $8M+'
      },
      {
        icon: 'PiPlugsConnectedDuotone',
        problem:
          'Data trapped in silos across CRM, ERP, legacy systems blocking automation',
        solution:
          'Real-time bidirectional sync with custom API layers, conflict resolution, and data lineage tracking'
      },
      {
        icon: 'PiArrowsClockwiseDuotone',
        problem:
          'Multi-format data ingestion (PDFs, Excel, legacy files) creating throughput bottlenecks',
        solution:
          'Scalable ETL pipelines with VLM + OCR processing achieving 5× indexing throughput improvements'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Data Landscape Mapping & Requirements Discovery',
        description:
          'Document your data flows, systems, validation rules, and integration requirements. We map data lineage across TE, GL, Payroll, HRIS, and legacy systems to identify critical validation checkpoints and API needs.'
      },
      {
        step: 2,
        title: 'Schema Design & Validation Engine Construction',
        description:
          'Build deterministic validation engines with configurable rules, schema normalization, and data type conversions. We develop robust ETL pipelines, API layers for legacy systems, and automated reconciliation logic.'
      },
      {
        step: 3,
        title: 'Pipeline Deployment & Integration Testing',
        description:
          'Deploy multi-agent orchestration coordinating SQL validation, flat-file processing, and cross-system sync. Comprehensive testing including edge cases, failure scenarios, and data consistency validation.'
      },
      {
        step: 4,
        title: 'Monitoring, Optimization & Continuous Improvement',
        description:
          'Implement real-time dashboards showing pass/fail rates, error distributions, throughput metrics, and SLA compliance. We optimize pipeline performance, refine validation rules, and scale to additional data sources.'
      }
    ],
    techStack: [
      { name: 'Python', category: 'Programming Languages' },
      { name: 'SQL Server', category: 'Databases' },
      { name: 'PostgreSQL', category: 'Databases' },
      { name: 'Pandas', category: 'ML / DL Frameworks' },
      { name: 'Apache Airflow', category: 'DevOps / Automation' },
      { name: 'Great Expectations', category: 'Data Validation' },
      { name: 'FastAPI', category: 'Backend / APIs' },
      { name: 'GraphQL', category: 'Backend / APIs' },
      { name: 'Apache Kafka', category: 'System Integration' },
      { name: 'RabbitMQ', category: 'System Integration' },
      { name: 'LangGraph', category: 'AI / LLM Frameworks' },
      { name: 'C#', category: 'Programming Languages' }
    ],
    ctaTitle: 'Transform Your Data Infrastructure',
    ctaDescription:
      "Schedule a free consultation to discuss your data challenges. We'll map your validation needs, integration requirements, and design scalable data systems proven to save millions.",
    ctaButtonText: 'Schedule Data Engineering Consultation',
    ctaButtonLink: bookingUrl
  },

  // ========================================
  // 3. Full-Stack Engineering
  // ========================================
  {
    slug: 'full-stack-engineering',
    title: 'Full-Stack Engineering',
    subtitle:
      'Production web applications from legacy modernization to greenfield SaaS platforms',
    heroImage: '/images/services/full-stack-engineering/hero.png',
    description:
      'Build production-ready web applications, internal tools, and SaaS platforms with modern frameworks. Our full-stack engineers have delivered 35% performance improvements through UI modernization, 4× faster cost analysis platforms, 90% workflow automation, and systems serving thousands of daily users—all with clean architecture, automated testing, and scalable deployment infrastructure.',
    problems: [
      {
        icon: 'PiDevicesDuotone',
        problem:
          'Legacy Angular applications with poor UX hampering productivity',
        solution:
          'Modern framework migration achieving 35% performance gains with improved build times and scalable GitLab + Kubernetes workflows'
      },
      {
        icon: 'PiTableDuotone',
        problem:
          'Manual data normalization from non-standard Excel sheets blocking downstream systems',
        solution:
          'Angular + .NET platforms with automated normalization reducing 90% of manual cleanup work'
      },
      {
        icon: 'PiChartLineUpDuotone',
        problem:
          'No vendor evaluation or cost analysis tools slowing acquisition workflows',
        solution:
          'Blazor + .NET systems with DPHSL integration delivering 4× faster cost analysis and 70% faster vendor assessment'
      },
      {
        icon: 'PiArrowsClockwiseDuotone',
        problem: 'Marketing and CRM workflow bottlenecks wasting 25 hours/week',
        solution:
          '90% workflow automation integrating CRM + inventory systems enabling 4× sales growth'
      },
      {
        icon: 'PiFilePdfDuotone',
        problem:
          'No document retrieval or classification systems for operational efficiency',
        solution:
          'AI-powered platform with vector search + GPT classification reducing document search time by 85%'
      },
      {
        icon: 'PiShieldCheckDuotone',
        problem:
          'Manual cyber operations workflows causing delays and inconsistencies',
        solution:
          'Full-stack automation tools streamlining 90% of operational tasks with RBAC security'
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
      { name: 'Angular', category: 'Frontend' },
      { name: 'Blazor', category: 'Frontend' },
      { name: 'TypeScript', category: 'Programming Languages' },
      { name: 'Node.js', category: 'Programming Languages' },
      { name: '.NET', category: 'Programming Languages' },
      { name: 'C#', category: 'Programming Languages' },
      { name: 'PostgreSQL', category: 'Databases' },
      { name: 'SQL Server', category: 'Databases' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      { name: 'Remix', category: 'Frontend' }
    ],
    ctaTitle: 'Build Your Next Application',
    ctaDescription:
      "Schedule a consultation to discuss your application requirements. We'll design a tech stack, estimate timelines, and show you how we deliver production-ready applications with proven results.",
    ctaButtonText: 'Get Development Estimate',
    ctaButtonLink: bookingUrl
  },

  // ========================================
  // 4. DevOps Engineering
  // ========================================
  {
    slug: 'devops-engineering',
    title: 'DevOps Engineering',
    subtitle:
      'Infrastructure automation from manual provisioning to self-service PaaS platforms',
    heroImage: '/images/services/devops-engineering/hero.png',
    description:
      'Modernize your deployment pipelines, cloud infrastructure, and operational practices. Our DevOps solutions have delivered 10× faster environment setup through self-service PaaS platforms, automated provisioning with Terraform + Kubernetes, and reduced DevOps overhead by enabling engineering teams to manage their own infrastructure—all with zero-downtime deployments and comprehensive monitoring.',
    problems: [
      {
        icon: 'PiClockDuotone',
        problem:
          'Manual environment provisioning taking hours/days blocking engineering teams',
        solution:
          'Self-service PaaS platforms using Terraform + Kubernetes + Ansible enabling 10× faster environment setup'
      },
      {
        icon: 'PiGitBranchDuotone',
        problem:
          'DevOps team bottlenecks preventing engineering teams from self-service',
        solution:
          'Automated PXE-based bootstraps and UI-driven environment generation dramatically reducing DevOps involvement'
      },
      {
        icon: 'PiCloudDuotone',
        problem:
          'Infrastructure drift and configuration inconsistencies across environments',
        solution:
          'Infrastructure as Code with Terraform ensuring reproducible, versioned infrastructure across dev, staging, prod'
      },
      {
        icon: 'PiChartLineUpDuotone',
        problem:
          'No visibility into production performance or deployment health',
        solution:
          'Comprehensive observability with Datadog, Grafana, or CloudWatch providing real-time metrics, logs, and traces'
      }
    ],
    approach: [
      {
        step: 1,
        title: 'Infrastructure Audit & Modernization Planning',
        description:
          'Assess current deployment processes, infrastructure, and pain points. We design modernization roadmaps balancing quick wins with strategic improvements like self-service platforms.'
      },
      {
        step: 2,
        title: 'CI/CD Pipeline & IaC Implementation',
        description:
          'Build automated build, test, and deployment pipelines with GitHub Actions, GitLab CI. Implement Infrastructure as Code with Terraform or Pulumi with quality gates and security scanning.'
      },
      {
        step: 3,
        title: 'Container Orchestration & Self-Service Platforms',
        description:
          'Deploy containerized applications with Docker, Kubernetes with auto-scaling. Build PaaS-style platforms enabling engineering teams to provision complete environments from simple UI requests.'
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
      { name: 'Ansible', category: 'DevOps / Automation' },
      { name: 'Pulumi', category: 'DevOps / Automation' },
      { name: 'GitHub Actions', category: 'DevOps / Automation' },
      { name: 'GitLab CI', category: 'DevOps / Automation' },
      { name: 'AWS', category: 'Cloud / AI Services' },
      { name: 'Azure', category: 'Cloud / AI Services' },
      { name: 'Datadog', category: 'DevOps / Automation' },
      { name: 'Grafana', category: 'DevOps / Automation' },
      { name: 'Elasticsearch', category: 'DevOps / Automation' }
    ],
    ctaTitle: 'Modernize Your Infrastructure',
    ctaDescription:
      "Let's discuss your deployment challenges and infrastructure goals. We'll design a DevOps transformation plan that accelerates releases, enables self-service, and reduces operational overhead.",
    ctaButtonText: 'Get DevOps Assessment',
    ctaButtonLink: bookingUrl
  }
];

// Helper function to get capability by slug
export const getCapabilityBySlug = (slug: string): Capability | undefined => {
  return capabilitiesData.find((cap) => cap.slug === slug);
};

// Export individual capabilities for convenience
export const aiEngineeringCapability = capabilitiesData[0];
export const dataEngineeringCapability = capabilitiesData[1];
export const fullStackCapability = capabilitiesData[2];
export const devOpsEngineeringCapability = capabilitiesData[3];
