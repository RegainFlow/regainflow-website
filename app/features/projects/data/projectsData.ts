export const projectsItems = [
  {
    title: 'Multi-Agent Payroll Validation System',
    description:
      'A multi-agent validation engine that automates SAP payroll quality checks. Agents run SQL validation, flat-file comparisons, and AI-generated rules to detect issues across legacy systems.',
    image: '/images/projects/payroll_validation_mvp.png',
    tags: [
      '90→3 Day Cycle Time',
      'Multi-Agent Architecture',
      'Enterprise-Scale Automation'
    ],
    industry: 'AI ENGINEERING',
    category: 'ai',
    primaryMetric: '12 FTEs Saved',
    actionType: 'none',
    capabilities: ['data-validation', 'ai-automation']
  },
  {
    title: 'HCM Interoperability Platform',
    description:
      'End-to-end validation pipeline across TE, GL, Payroll, and HRIS systems. Schema normalization, deterministic rule engines, and reconciliation logic spanning 300+ tables and over 100 legacy interfaces mapped and validated against the modernized SAP integration layer.',
    image: '/images/projects/payroll_validation_mvp.png',
    tags: [
      'Legacy → SAP Migration',
      'Multi-System Reconciliation',
      'Operational Continuity'
    ],
    industry: 'DATA ENGINEERING',
    category: 'data',
    primaryMetric: '$8M+ SAVED',
    actionType: 'none',
    capabilities: ['data-validation', 'system-integration']
  },
  {
    title: 'Enterprise Engineering RAG',
    description:
      'Production search engine using ELSER V2 and Elasticsearch serving 6,000+ daily users. Hybrid semantic + keyword retrieval over millions of engineering documents with domain-specific accuracy.',
    image: '/images/projects/rag_search_engine.png',
    tags: [
      '6K+ Daily Active Users',
      'Millions of Records',
      'ELSER V2 Semantic Search'
    ],
    industry: 'AI ENGINEERING',
    category: 'ai',
    primaryMetric: '6K+ Users',
    actionType: 'none',
    capabilities: ['rag-search', 'ai-automation']
  },
  {
    title: 'Corporate HR RAG',
    description:
      'Rebuilt legacy search platform with modern BM25, hybrid vector retrieval, and RRF ranking. Improved query relevance, reduced ingestion time, and decreased operational overhead for engineering teams.',
    image: '/images/projects/rag_search_engine.png',
    tags: [
      'Hybrid Vector + Keyword',
      'Improved Query Relevance',
      'Reduced Ops Overhead'
    ],
    industry: 'AI ENGINEERING',
    category: 'ai',
    primaryMetric: '3× Faster Insights',
    actionType: 'none',
    capabilities: ['rag-search', 'system-integration']
  },
  {
    title: 'Real-Time Satellite Telemetry Anomaly Detection',
    description:
      'We built an automated system that detects anomalies in satellite sensor data. By cleaning historical telemetry and training a custom model, then deploying it into a live dashboard, the solution cut manual operator review by 80% and enabled much faster incident response.',
    image: '/images/projects/sat_anomaly_dashboard.png',
    tags: [
      '5K+ Sensor Streams',
      '80% Manual Review Reduction',
      'Real-Time Dashboards'
    ],
    industry: 'AI ENGINEERING',
    category: 'ai',
    primaryMetric: '3× Faster Insights',
    actionType: 'none',
    capabilities: ['data-validation', 'system-integration']
  },
  {
    title: 'Multi-Format Engineering ETL Pipeline',
    description:
      'We created a C# backend that loads many file types, converts them to PDFs, sends them to a Python parser that extracts text, chunks content, summarizes tables, and then indexes the processed data into Elasticsearch so engineering teams can search it quickly.',
    image: '/images/projects/rag_search_engine.png',
    tags: [
      'Reusable + Scalable ETL Pipeline',
      'VLM + OCR Enabled',
      'Modernized Data Access'
    ],
    industry: 'DATA ENGINEERING',
    category: 'data',
    primaryMetric: '5× Indexing Throughput',
    actionType: 'none',
    capabilities: ['system-integration', 'devops']
  },
  {
    title: 'Legacy RPA Modernization with Python & LangGraph',
    description:
      'Converted Blue Prism legacy automations into modern Python workflows with multi-agent AI orchestration. Eliminated licensing costs, improved reliability, and reduced multi-hour processes to minutes.',
    image: '/images/projects/automation_demo.png',
    tags: [
      'Eliminated RPA Licensing',
      'Multi-Agent AI Logic',
      'Hours to Minutes'
    ],
    industry: 'DATA ENGINEERING',
    category: 'data',
    primaryMetric: 'Zero Vendor Lock-In',
    actionType: 'none',
    capabilities: ['ai-automation', 'system-integration']
  },
  {
    title: 'UI Modernization Overhaul',
    description:
      'Modernized a large Angular application by migrating to a faster, modern framework, improving performance by 35%, reducing build times, and upgrading the delivery pipeline to a scalable GitLab + Kubernetes workflow.',
    image: '/images/projects/rag_search_engine.png',
    tags: [
      'Legacy → Modern Migration',
      '35% Performance Gain',
      'Multi-Team Scalability'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '35% Faster',
    actionType: 'none',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Self-Service PaaS Environment Builder',
    description:
      'Developed a PaaS-style automation platform that uses Terraform, Ansible, and Kubernetes to generate complete engineering environments from a simple UI request. Automated provisioning, configuration, and HighSide PXE-based bootstraps dramatically reduced deployment overhead and DevOps involvement.',
    image: '/images/projects/rag_search_engine.png',
    tags: [
      'Reduced DevOps Overhead',
      'Environment-as-a-Service',
      'Reduced Analyst Overhead'
    ],
    industry: 'DEVOPS ENGINEERING',
    category: 'devops',
    primaryMetric: '10× Faster Environment Setup',
    actionType: 'none',
    capabilities: ['devops']
  },
  {
    title: 'Cyber Operations Automation Tools',
    description:
      'Secure automation tools and threat-emulation utilities for Red/Blue Team exercises. Rapid data processing, adversarial simulation, and analysis scripts supporting operational readiness and training.',
    image: '/images/projects/sat_anomaly_dashboard.png',
    tags: [
      'Automated Ops Readiness',
      'Environment-as-a-Service',
      'Lower Operational Cost'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: 'Accelerated Ops Readiness',
    actionType: 'none',
    capabilities: ['ai-automation', 'devops']
  },
  {
    title: 'AI-Powered Document Retrieval Platform',
    description:
      'Built a full-stack platform using .NET, C3, and IBM Watson for AI-assisted document retrieval, automated data synchronization, and scheduled task execution. Delivered a modern UI that improved accessibility while ensuring compatibility with legacy systems.',
    image: '/images/projects/automation_demo.png',
    tags: [
      'Improved Insight Delivery',
      'AI-Enhanced Processing',
      'Legacy System Modernization'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '2× Faster Information Access',
    actionType: 'none',
    capabilities: ['full-stack-engineering', 'ai-automation']
  },
  {
    title: 'Digital Program Hardware/Software Upload System',
    description:
      'Developed an Angular + .NET platform for teams to upload non-standard Excel sheets, automatically normalize the data, and populate a centralized SQL Server repository. Enabled consistent formatting and reliable ingestion to support downstream systems.',
    image: '/images/projects/automation_demo.png',
    tags: [
      'Automated Data Normalization',
      'Angular + .NET Pipeline',
      'Consistent Program Data'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '90% Manual Cleanup Reduced',
    actionType: 'none',
    capabilities: ['full-stack-engineering', 'system-integration']
  },
  {
    title: 'Acquisition Insights & Cost Analysis Platform',
    description:
      'Built a Blazor + .NET system providing acquisition insights, vendor intelligence, and proposal support. Integrated with upstream data sources such as DPHSL to generate detailed, itemized cost breakdowns and streamline proposal workflows.',
    image: '/images/projects/automation_demo.png',
    tags: [
      'Accelerated Proposal Creation',
      'Blazor + .NET',
      'Data-Driven Decision Support'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '4× Faster Cost Analysis',
    actionType: 'none',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Subcontractor Risk & Opportunity Scorecard',
    description:
      'Delivered an Angular + .NET scorecard platform that evaluates subcontractor risk, opportunities, and performance factors. Provided a centralized QA system to support vendor approval, quality assurance, and acquisition readiness.',
    image: '/images/projects/automation_demo.png',
    tags: [
      'Improved Vendor Evaluation',
      'Angular + .NET',
      'Quality Assurance Platform'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '70% Faster Vendor Assessment',
    actionType: 'none',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Marketing Automation for Distribution Network',
    description:
      'End-to-end workflow automation eliminating 25 hours of weekly manual tasks. Integrated CRM, inventory, and marketing platforms enabling 4x sales growth through improved response time and data accuracy.',
    image: '/images/projects/automation_demo.png',
    link: 'https://advocare-dashboard.regainflow.com',
    tags: ['25 Hours/Week Saved', '90% Workflow Automation', '4x Sales Growth'],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '4x Growth',
    actionType: 'demo',
    capabilities: ['ai-automation', 'system-integration']
  }
];

export const categories = [
  { id: 'all', label: 'ALL PROJECTS', count: 15 },
  { id: 'ai', label: 'AI ENGINEERING', count: 5 },
  { id: 'devops', label: 'DEVOPS ENGINEERING', count: 1 },
  { id: 'data', label: 'DATA ENGINEERING', count: 3 },
  { id: 'fullstack', label: 'FULLSTACK ENGINEERING', count: 7 }
];

export const metrics = [
  { label: 'Estimated Value Created', value: '$8M+' },
  { label: 'Engineering Hours Saved', value: '5,000+' },
  { label: 'Enterprise Automations Delivered', value: '15+' },
  { label: 'Business Users Impacted', value: '6,000+' }
];
