export const portfolioItems = [
  {
    title: 'Automated Payroll Data Validation System',
    description:
      'Built a multi-agent validation system to replace a 3-month manual payroll data quality process. Validates SAP payroll data using SQL queries and flat file comparisons with a deterministic checklist and AI-generated validation rules. Reduced manual effort and increased accuracy across multiple pay groups. Includes a Streamlit MVP, LangGraph agents, FastAPI backend, and SQLite-based schema storage.',
    image: '/images/portfolio/payroll_validation_mvp.png',
    metrics: [
      '3-month process reduced to days',
      '$8M+ in savings',
      'Multi-agent validation with AI rule generation'
    ],
    industry: 'Enterprise HR/Payroll Automation',
    actionType: 'nda'
  },
  {
    title: 'Distributor Marketing & Metrics Automation',
    description:
      'Automated marketing and reporting workflows, saving 25 hours per week. Solution and marketing tasks reached 90% completion automatically, allowing humans to verify and approve with minimal effort. Led to a 4x increase in sales.',
    image: '/images/portfolio/automation_demo.png',
    link: 'https://advocare-dashboard.regainflow.com',
    metrics: [
      '25 hours/week saved',
      '90% process automation',
      '4x sales increase'
    ],
    industry: 'Distribution/Marketing',
    actionType: 'link'
  },
  {
    title: 'Report Generation & Automation (AI Augmentation)',
    description:
      'Automated report generation with AI, saving 4 hours per report. Enabled more time for lead capture and client work, resulting in a 32% increase in yearly profits.',
    image: '/images/portfolio/report_demo.png',
    metrics: ['4 hours/report saved', '32% increase in yearly profits'],
    industry: 'Professional Services/AI',
    actionType: 'nda'
  },
  {
    title: 'Anomaly Detection for Satellite Sensor Streams',
    description:
      'Deployed an Elasticsearch-based cluster to index and search telemetry from over 5,000+ space system sensors. Built anomaly detection models and dashboards to surface critical issues automatically, replacing hours of manual spreadsheet review by operators. Enabled rapid triage and insight across terabytes of structured data.',
    image: '/images/portfolio/sat_anomaly_dashboard.png',
    metrics: [
      '5000+ sensors monitored',
      'Hours of operator time saved daily',
      'Real-time anomaly surfacing via dashboard'
    ],
    industry: 'Aerospace/Defense Automation',
    actionType: 'nda'
  }
];

export const metrics = [
  { label: 'Hours Saved', value: '5000+' },
  { label: 'Business Users Impacted', value: '50+' },
  { label: 'Enterprise Automations Delivered', value: '20+' },
  { label: 'Estimated Value Created', value: '$8M+' }
];
