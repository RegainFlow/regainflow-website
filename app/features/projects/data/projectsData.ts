export const projectsItems = [
  {
    title: 'Multi-Agent Payroll Validation System',
    description:
      'Multi-agent validation engine automating enterprise payroll quality checks across Workday and Oracle HCM systems. Agents execute SQL validation, cross-system reconciliation, and AI-generated audit rules to detect discrepancies across distributed payroll platforms.',
    image: '/images/projects/multi-agent-payroll-validation.png',
    tags: [
      '10× Cycle Time Reduction',
      'Multi-Agent Architecture',
      'Enterprise-Scale Automation'
    ],
    industry: 'AI ENGINEERING',
    category: 'ai',
    primaryMetric: '12 FTEs Saved',
    actionType: 'none',
    capabilities: ['ai-engineering']
  },
  {
    title: 'HCM Interoperability Platform',
    description:
      'Cross-functional data validation pipeline integrating payroll, finance, timekeeping, and benefits systems. Automated schema mapping, deterministic reconciliation logic, and enterprise-scale validation across legacy HRIS platforms migrating to modern ERP infrastructure.',
    image: '/images/projects/hcm-interop-platform.png',
    tags: [
      'Multi-System Integration',
      'Data Quality & Reconciliation',
      'Enterprise ERP Migration'
    ],
    industry: 'DATA ENGINEERING',
    category: 'data',
    primaryMetric: 'Significant Cost Reduction Through Automation',
    link: 'https://hcm-interoperability-platform.vercel.app/',
    actionType: 'demo',
    capabilities: ['data-engineering']
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
    actionType: 'demo',
    link: 'https://enterprise-engineering-rag.vercel.app/',
    capabilities: ['ai-engineering']
  },
  {
    title: 'Corporate HR RAG',
    description:
      'Rebuilt legacy search platform with modern BM25, hybrid vector retrieval, and RRF ranking. Improved query relevance, reduced ingestion time, and decreased operational overhead for HR teams and employees.',
    tags: [
      'Hybrid Vector + Keyword',
      'Improved Query Relevance',
      'Reduced Ops Overhead'
    ],
    image: '/images/projects/corporate-hr-rag.png',
    industry: 'AI ENGINEERING',
    category: 'ai',
    primaryMetric: '3× Faster Insights',
    actionType: 'none',
    capabilities: ['ai-engineering']
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
    link: 'https://real-time-satellite-telemetry-anoma.vercel.app/',
    actionType: 'demo',
    capabilities: ['ai-engineering']
  },
  {
    title: 'Multi-Format Engineering ETL Pipeline',
    description:
      'We created a C# backend that loads many file types, converts them to PDFs, sends them to a Python parser that extracts text, chunks content, summarizes tables, and then indexes the processed data into Elasticsearch so engineering teams can search it quickly.',
    image: '/images/projects/multi-format-etl-pipeline.png',
    tags: [
      'Reusable + Scalable ETL Pipeline',
      'VLM + OCR Enabled',
      'Modernized Data Access'
    ],
    industry: 'DATA ENGINEERING',
    category: 'data',
    primaryMetric: '5× Indexing Throughput',
    actionType: 'demo',
    link: 'https://multi-format-engineering-etl-pipeli.vercel.app/',
    capabilities: ['data-engineering']
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
    industry: 'DATA ENGINEERING',
    category: 'data',
    primaryMetric: 'Zero Vendor Lock-In',
    actionType: 'none',
    capabilities: ['data-engineering']
  },
  {
    title: 'UI Modernization Overhaul',
    description:
      'Modernized a large Angular application by migrating to a faster, modern framework, improving performance by 35%, reducing build times, and upgrading the delivery pipeline to a scalable GitLab + Kubernetes workflow.',
      image: '/images/projects/ui-overhaul.png',
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
    image: '/images/projects/paas-env-builder.png',
    tags: [
      'Reduced DevOps Overhead',
      'Environment-as-a-Service',
      'Reduced Analyst Overhead'
    ],
    industry: 'DEVOPS ENGINEERING',
    category: 'devops',
    primaryMetric: '10× Faster Environment Setup',
    link: 'https://self-service-paa-s-environment-buil.vercel.app/',
    actionType: 'demo',
    capabilities: ['devops-engineering']
  },
  {
    title: 'Security Testing Automation Platform',
    description:
      'Automated penetration testing and vulnerability assessment platform for enterprise security teams. Streamlined security testing workflows, threat simulation, and compliance reporting scripts supporting SOC 2 and ISO 27001 certification.',
    image: '/images/projects/cyber-operations-automation.png',
    tags: [
      'Automated Security Testing',
      'Environment-as-a-Service',
      'Lower Testing Costs'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '3× Faster Security Assessments',
    actionType: 'none',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'AI-Powered Document Retrieval Platform',
    description:
      'Built a full-stack platform using Java, SpringBoot, and IBM Watson for AI-assisted document retrieval, automated data synchronization, and scheduled task execution. Delivered a modern UI that improved accessibility while ensuring compatibility with legacy systems.',
    image: '/images/projects/ai-document-retrieval.png',
    tags: [
      'Improved Insight Delivery',
      'AI-Enhanced Processing',
      'Legacy System Modernization'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '2× Faster Information Access',
    actionType: 'none',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Digital Program Hardware/Software Upload System',
    description:
      'Developed an Angular + .NET platform for teams to upload non-standard Excel sheets, automatically normalize the data, and populate a centralized SQL Server repository. Enabled consistent formatting and reliable ingestion to support downstream systems.',
    image: '/images/projects/dphsl.png',
    tags: [
      'Automated Data Normalization',
      'Angular + .NET Pipeline',
      'Consistent Program Data'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '90% Manual Cleanup Reduced',
    actionType: 'demo',
    link: 'https://digital-program-hardware-software-u.vercel.app/',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Acquisition Insights & Cost Analysis Platform',
    description:
      'Built a Blazor + .NET system providing acquisition insights, vendor intelligence, and proposal support. Integrated with upstream data sources such as DPHSL to generate detailed, itemized cost breakdowns and streamline proposal workflows.',
    image: '/images/projects/acqu-insight.png',
    tags: [
      'Accelerated Proposal Creation',
      'Blazor + .NET',
      'Data-Driven Decision Support'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '4× Faster Cost Analysis',
    actionType: 'demo',
    link: 'https://acquisition-insights-cost-analysis.vercel.app/',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Subcontractor Risk & Opportunity Scorecard',
    description:
      'Delivered an Angular + .NET scorecard platform that evaluates subcontractor risk, opportunities, and performance factors. Provided a centralized QA system to support vendor approval, quality assurance, and acquisition readiness.',
    image: '/images/projects/sub_risk_oppor_scorecard.png',
    tags: [
      'Improved Vendor Evaluation',
      'Angular + .NET',
      'Quality Assurance Platform'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '70% Faster Vendor Assessment',
    actionType: 'demo',
    link: 'https://subcontractor-risk-opportunity-scor.vercel.app/',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Marketing Automation for Distribution Network',
    description:
      'End-to-end workflow automation eliminating 25 hours of weekly manual tasks. Integrated CRM, inventory, and marketing platforms enabling 4x sales growth through improved response time and data accuracy.',
    image: '/images/projects/marketing_auto_net.png',
    tags: ['25 Hours/Week Saved', '90% Workflow Automation', '4x Sales Growth'],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '4x Growth',
    actionType: 'demo',
    link: 'https://marketing-automation-for-distributi.vercel.app/',
    capabilities: ['full-stack-engineering']
  },
  {
  title: 'TherapeuTech: Real-Time Health Robotics Command',
  description:
    'Ultra-low latency control system for autonomous spherical robotics utilizing WebRTC for synchronized video, audio, and telemetry streams. Engineered a Flask-powered backend on GCP to enable real-time remote interaction, allowing hospitalized patients and remote pet owners to engage with physical environments through a self-contained, sensor-rich robotic orb.',
  image: '/images/projects/therapeutech-demo.png',
  tags: [
    'WebRTC Low-Latency Control',
    'Autonomous Spherical Drive',
    'GCP & Flask Integration'
  ],
  industry: 'ROBOTICS/FULL STACK ENGINEERING',
  category: 'fullstack',
  primaryMetric: '< 50ms Latency',
  actionType: 'none',
  capabilities: ['full-stack-engineering']
}
];

export const categories = [
  { id: 'all', label: 'ALL PROJECTS', count: 15 },
  { id: 'ai', label: 'AI ENGINEERING', count: 4 },
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
