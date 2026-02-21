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
    industry: 'AI TRANSFORMATION',
    category: 'ai',
    primaryMetric: '12 FTEs Saved',
    actionType: 'none',
    capabilities: ['ai-transformation']
  },
  {
    title: '3D Printing Insight Engine',
    description:
      'AI-powered knowledge base for additive manufacturing patterns, material properties, and slice profiles. Helps makers and manufacturing engineers debug print failures and optimize settings.',
    image: '/images/projects/insight-search-engine.png',
    tags: [
      'Additive Manufacturing',
      'Millions of Records',
      'Hybrid Semantic Search'
    ],
    industry: 'AI TRANSFORMATION',
    category: 'ai',
    primaryMetric: '5K+ Daily Users',
    actionType: 'demo',
    link: 'https://insight-search-engine.vercel.app/',
    capabilities: ['ai-transformation']
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
    industry: 'AI TRANSFORMATION',
    category: 'ai',
    primaryMetric: '3× Faster Insights',
    actionType: 'none',
    capabilities: ['ai-transformation']
  },
  {
    title: 'Grid Infrastructure Analytics Platform',
    description:
      'Automated system that detects anomalies in utility and industrial grid infrastructure. Monitors thousands of sensor nodes to identify irregularities and potential failures. By cleaning historical telemetry and training a custom model, deployed into a live dashboard, it cut manual operator review by 80% and enabled faster incident response.',
    image: '/images/projects/grid-network.png',
    tags: [
      '5K+ Sensor Streams',
      '80% Manual Review Reduction',
      'Real-Time Dashboards'
    ],
    industry: 'AI TRANSFORMATION',
    category: 'ai',
    primaryMetric: '3× Faster Insights',
    link: 'https://grid-network.vercel.app/',
    actionType: 'demo',
    capabilities: ['ai-transformation']
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
    industry: 'AI TRANSFORMATION',
    category: 'ai',
    primaryMetric: '5× Indexing Throughput',
    actionType: 'demo',
    link: 'https://multi-format-etl-pipeline.vercel.app/',
    capabilities: ['ai-transformation']
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
    industry: 'AI TRANSFORMATION',
    category: 'ai',
    primaryMetric: 'Zero Vendor Lock-In',
    actionType: 'none',
    capabilities: ['ai-transformation']
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
    industry: 'AI TRANSFORMATION',
    category: 'ai',
    primaryMetric: '2× Faster Information Access',
    actionType: 'none',
    capabilities: ['ai-transformation']
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
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: 'Operational Efficiency Gains',
    link: 'https://hcm-interoperability-platform.vercel.app/',
    actionType: 'demo',
    capabilities: ['digital-transformation']
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
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '35% Faster',
    actionType: 'none',
    capabilities: ['digital-transformation']
  },
  {
    title: 'Self-Service PaaS Environment Builder',
    description:
      'Automated environment provisioning system designed to accelerate developer velocity. Using a GitOps approach with Terraform and Ansible, developers can spin up ephemeral or persistent cloud environments in minutes rather than days. This solution standardizes cloud resource delivery across AWS, Azure, and GCP, featuring automated drift detection, cost controls, and seamless CI/CD integration for rapid iteration cycles.',
    image: '/images/projects/paas-builder.png',
    tags: [
      'Developer Productivity',
      'Infrastructure as Code (IaC)',
      'CI/CD Automation'
    ],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '10× Faster Environment Setup',
    link: 'https://paas-builder.vercel.app/',
    actionType: 'demo',
    capabilities: ['digital-transformation']
  },
  {
    title: 'Security Testing Automation Platform',
    description:
      'Automated security testing platform for enterprise vulnerability assessment and penetration testing. Rapid scanning, customizable test suites, and detailed reporting scripts supporting SOC 2 compliance and security audits for SaaS companies.',
    image: '/images/projects/cyber-operations-automation.png',
    tags: [
      'Automated Security Testing',
      'SOC 2 Compliance',
      'Lower Testing Cost'
    ],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '5× Faster Security Assessments',
    actionType: 'none',
    capabilities: ['digital-transformation']
  },
  {
    title: 'Vendor Catalog Data Normalization Platform',
    description:
      'Enterprise-grade platform designed for retail and supply chain teams to ingest, normalize, and centralize non-standard vendor product catalogs. By automating the transformation of disparate Excel and CSV files into a unified SQL repository, the system ensures consistent product data for downstream procurement and e-commerce systems.',
    image: '/images/projects/vendor-catalog.png',
    tags: [
      'Supply Chain Automation',
      'Angular + .NET Pipeline',
      'Catalog Normalization'
    ],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '90% Manual Cleanup Reduced',
    actionType: 'demo',
    link: 'https://vendor-catalog.vercel.app/',
    capabilities: ['digital-transformation']
  },
  {
    title: 'Procurement Analytics & Vendor Intelligence Platform',
    description:
      ' An enterprise-grade Blazor + .NET system designed to streamline procurement operations, vendor management, and cost forecasting. Integrates seamlessly with major ERP systems and external pricing APIs to generate detailed, itemized cost breakdowns and actionable financial insights.',
    image: '/images/projects/procurement-analytics.png',
    tags: [
      'Strategic Sourcing',
      'Blazor + .NET',
      'Enterprise Cost Intelligence'
    ],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '4× Faster Cost Analysis',
    actionType: 'demo',
    link: 'https://procurement-analytics.vercel.app/',
    capabilities: ['digital-transformation']
  },
  {
    title: 'Vending Analytics Platform',
    description:
      'Automated system that optimizes vending machine fleets and supplier performance. Monitors stock levels, machine health, and sales velocity across distributed locations. By analyzing real-time telemetry and historical sales data, it reduced stockouts by 40% and improved route planning efficiency.',
    image: '/images/projects/vending-machine-analytics.png',
    tags: ['Real-Time Inventory', 'Angular + .NET', 'Predictive Maintenance'],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '70% Faster Vendor Assessment',
    actionType: 'demo',
    link: 'https://vending-machine-analytics.vercel.app/',
    capabilities: ['digital-transformation']
  },
  {
    title: 'Marketing Automation for Distribution Network',
    description:
      'End-to-end workflow automation eliminating 25 hours of weekly manual tasks. Integrated CRM, inventory, and marketing platforms enabling 4x sales growth through improved response time and data accuracy.',
    image: '/images/projects/marketing_auto_net.png',
    tags: ['25 Hours/Week Saved', '90% Workflow Automation', '4x Sales Growth'],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '4x Growth',
    actionType: 'demo',
    link: 'https://marketing-automation-net.vercel.app/',
    capabilities: ['digital-transformation']
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
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '< 50ms Latency',
    actionType: 'none',
    capabilities: ['digital-transformation']
  },
  {
    title: 'Wedding Registry & Event Management Platform',
    description:
      'Full-stack event management platform built with Vue.js and Firebase serverless architecture. Integrated CRM workflows for guest tracking and Stripe payment processing for gift contributions. Real-time registry updates, automated guest notifications, and comprehensive event analytics dashboard enabling seamless coordination for couples and wedding planners.',
    image: '/images/projects/wedding-registry.png',
    tags: [
      '100+ Events Managed',
      'Seamless CRM Integration',
      '90% Booking Conversion'
    ],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '100% User Satisfaction',
    actionType: 'none',
    capabilities: ['digital-transformation']
  },
  {
    title: 'MODA: E-Commerce Fashion Platform',
    description:
      'Enterprise-grade e-commerce platform for fashion merchandise built with React and .NET. Leveraged AWS infrastructure including S3 for media storage, PostgreSQL RDS for transactional data, and CloudFront CDN for global content delivery. Integrated Stripe payment gateway with PCI-compliant checkout flow, inventory management system, and real-time order tracking delivering a seamless shopping experience.',
    image: '/images/projects/moda-ecom.png',
    tags: [
      'AWS Cloud Architecture',
      'Secure Payment Processing',
      '2K+ Products Catalog'
    ],
    industry: 'DIGITAL TRANSFORMATION',
    category: 'digital',
    primaryMetric: '99.9% Uptime',
    actionType: 'demo',
    link: 'https://moda-ecom.vercel.app/',
    capabilities: ['digital-transformation']
  }
];

export const categories = [
  { id: 'all', label: 'ALL PROJECTS', count: 18 },
  { id: 'ai', label: 'AI TRANSFORMATION', count: 7 },
  { id: 'digital', label: 'DIGITAL TRANSFORMATION', count: 11 }
];

export const metrics = [
  { label: 'Estimated Value Created', value: '$5M+' },
  { label: 'Engineering Hours Saved', value: '5,000+' },
  { label: 'Business Transformations Delivered', value: '18+' },
  { label: 'Business Users Impacted', value: '5,000+' }
];
