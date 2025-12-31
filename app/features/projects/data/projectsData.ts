export const projectsItems = [
  {
    title: 'Multi-Agent Payroll Validation System',
    description:
      'A multi-agent validation engine that automates enterprise payroll quality checks across Oracle HCM and Workday systems. Agents run SQL validation, cross-system reconciliation, and AI-generated rules to detect discrepancies in distributed payroll platforms for healthcare organizations.',
    image: '/images/projects/multi-agent-payroll-validation.png',
    tags: [
      'Weeks to Days Cycle Time',
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
      'End-to-end validation pipeline across HRIS, Payroll, Finance, and Benefits systems for a multi-facility healthcare network. Schema normalization, deterministic rule engines, and reconciliation logic ensuring data consistency across enterprise-scale HR platforms during cloud migration.',
    image: '/images/projects/hcm-interop-platform.png',
    tags: [
      'Multi-System Integration',
      'Multi-System Reconciliation',
      'Operational Continuity'
    ],
    industry: 'DATA ENGINEERING',
    category: 'data',
    primaryMetric: 'Operational Efficiency Gains',
    link: 'https://hcm-interoperability-platform.vercel.app/',
    actionType: 'demo',
    capabilities: ['data-engineering']
  },
  {
    title: 'Technical Documentation Search Engine',
    description:
      'Production search engine using hybrid semantic search and Elasticsearch serving enterprise-scale SaaS platforms. Hybrid vector + keyword retrieval over millions of API documentation pages, technical guides, and knowledge base articles with context-aware accuracy.',
    image: '/images/projects/rag_search_engine.png',
    tags: [
      'Enterprise-Scale Deployment',
      'Millions of Records',
      'Hybrid Semantic Search'
    ],
    industry: 'AI ENGINEERING',
    category: 'ai',
    primaryMetric: '5K+ Daily Users',
    actionType: 'demo',
    link: 'https://enterprise-engineering-rag.vercel.app/',
    capabilities: ['ai-engineering']
  },
  {
    title: 'Corporate HR RAG',
    description:
      'Rebuilt legacy search platform for a multi-state healthcare network with modern BM25, hybrid vector retrieval, and RRF ranking. Improved query relevance for HR policy lookups, reduced ingestion time, and decreased operational overhead for HR teams managing employee documentation.',
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
    title: 'Real-Time IoT Sensor Anomaly Detection',
    description:
      'Built an automated system that detects anomalies in factory floor IoT sensor data for smart manufacturing. By cleaning historical sensor readings and training a custom time-series model, then deploying it into a live Grafana dashboard, the solution reduced manual quality review by 80% and enabled faster production issue response.',
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
    title: 'Multi-Format Document ETL Pipeline',
    description:
      'Created a C# backend that loads multiple file formats, converts them to PDFs, sends them to a Python parser that extracts text, chunks content, summarizes tables, and then indexes the processed data into Elasticsearch for fast enterprise knowledge base search across technical documentation.',
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
      'Converted legacy RPA platform automations into modern Python workflows with multi-agent AI orchestration for a financial services back-office. Eliminated vendor licensing costs, improved reliability, and reduced multi-hour invoice processing to minutes with LangGraph-based decision logic.',

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
      'Developed a PaaS-style automation platform that uses Terraform, Ansible, and Kubernetes to generate complete development environments from a simple UI request. Automated AWS EC2 provisioning, configuration management, and container orchestration dramatically reduced deployment overhead and enabled developer self-service for staging and production environments.',
    image: '/images/projects/paas-env-builder.png',
    tags: [
      'Reduced DevOps Overhead',
      'Environment-as-a-Service',
      'Developer Self-Service'
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
    title: 'Security Testing Automation Platform',
    description:
      'Automated security testing platform for enterprise vulnerability assessment and penetration testing. Rapid scanning, customizable test suites, and detailed reporting scripts supporting SOC 2 compliance and security audits for SaaS companies.',
    image: '/images/projects/cyber-operations-automation.png',
    tags: [
      'Automated Security Testing',
      'SOC 2 Compliance',
      'Lower Testing Cost'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '5× Faster Security Assessments',
    actionType: 'none',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'AI-Powered Document Retrieval Platform',
    description:
      'Built a full-stack platform using Java, SpringBoot, and Claude AI for intelligent document retrieval, automated data synchronization, and scheduled task execution in legal case management. Delivered a modern UI that improved accessibility while ensuring compatibility with legacy document management systems.',
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
    title: 'Vendor Catalog Data Normalization Platform',
    description:
      'Developed an Angular + .NET platform for suppliers to upload non-standard product catalog Excel files, automatically normalize SKU data, pricing, and specifications, then populate a centralized SQL Server repository for e-commerce integration. Enabled consistent product data formatting and reliable ingestion across 200+ vendors.',
    image: '/images/projects/dphsl.png',
    tags: [
      'Automated Data Normalization',
      'Angular + .NET Pipeline',
      'Consistent Catalog Data'
    ],
    industry: 'FULLSTACK ENGINEERING',
    category: 'fullstack',
    primaryMetric: '90% Manual Cleanup Reduced',
    actionType: 'demo',
    link: 'https://digital-program-hardware-software-u.vercel.app/',
    capabilities: ['full-stack-engineering']
  },
  {
    title: 'Procurement Analytics & Vendor Intelligence Platform',
    description:
      'Built a Blazor + .NET system providing procurement cost analytics, vendor performance intelligence, and budget forecasting for manufacturing supply chains. Integrated with ERP systems and vendor pricing databases to generate detailed, itemized cost breakdowns and streamline procurement decision-making.',
    image: '/images/projects/acqu-insight.png',
    tags: [
      'Accelerated Budget Planning',
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
    title: 'Supplier Risk Assessment & Performance Dashboard',
    description:
      'Delivered an Angular + .NET scorecard platform that evaluates supplier risk, quality metrics, and performance factors for manufacturing supply chains. Provided a centralized quality management system to support supplier onboarding, ISO 9001 compliance tracking, and performance monitoring across 300+ suppliers.',
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
  { label: 'Estimated Value Created', value: '$5M+' },
  { label: 'Engineering Hours Saved', value: '5,000+' },
  { label: 'Enterprise Automations Delivered', value: '15+' },
  { label: 'Business Users Impacted', value: '5,000+' }
];
