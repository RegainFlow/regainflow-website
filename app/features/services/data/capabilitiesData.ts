import { bookingUrl } from "~/config/site.config";
import type { Capability } from "../types/service.types";

/* ==========================================================================
   Capabilities Data - 2 Core Service Offerings
   ========================================================================== */

export const capabilitiesData: Capability[] = [
  // ========================================
  // 1. Digital Transformation
  // ========================================
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    subtitle:
      "Custom web platforms, workflow automation, and marketing systems that modernize your business operations",
    heroImage: "/images/services/digital-transformation/hero.png",
    problems: [
      {
        icon: "PiDevicesDuotone",
        problem:
          "Outdated website that doesn't convert visitors into customers or reflect your brand",
        solution:
          "Custom web platforms built with modern frameworks that load fast, look professional, and drive conversions",
      },
      {
        icon: "PiClockCountdownDuotone",
        problem:
          "Manual workflows eating up 20+ hours per week on repetitive tasks",
        solution:
          "End-to-end workflow automation connecting your tools and eliminating manual data entry, scheduling, and reporting",
      },
      {
        icon: "PiPlugsConnectedDuotone",
        problem:
          "Disconnected systems — CRM, inventory, accounting all living in silos",
        solution:
          "Seamless integrations connecting your existing tools into a unified system with real-time data sync",
      },
      {
        icon: "PiShoppingCartDuotone",
        problem:
          "No e-commerce presence or an underperforming online store losing sales",
        solution:
          "Custom e-commerce solutions with payment processing, inventory management, and marketing automation built in",
      },
      {
        icon: "PiEnvelopeDuotone",
        problem:
          "Scattered marketing — no automated email, SMS, or newsletter campaigns",
        solution:
          "Integrated marketing automation with newsletters, SMS campaigns, and drip sequences that run on autopilot",
      },
    ],
    approach: [
      {
        step: 1,
        title: "Business Assessment",
        description:
          "We learn your business inside and out — your workflows, pain points, tools, and goals. We identify where you're losing time and money so we can target the highest-impact improvements first.",
      },
      {
        step: 2,
        title: "Digital Strategy",
        description:
          "We design a custom digital roadmap tailored to your business. This includes platform architecture, integration plans, automation workflows, and a clear timeline with milestones.",
      },
      {
        step: 3,
        title: "Build & Launch",
        description:
          "We build your solution iteratively with frequent demos so you see progress every step of the way. We handle development, testing, migration, and deployment — you focus on running your business.",
      },
      {
        step: 4,
        title: "Optimize & Scale",
        description:
          "After launch, we monitor performance, gather user feedback, and continuously optimize. As your business grows, your digital systems scale with you.",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Programming Languages" },
      { name: "Node.js", category: "Backend / APIs" },
      { name: "Next.js", category: "Frontend" },
      { name: "Shopify", category: "E-Commerce" },
      { name: "WooCommerce", category: "E-Commerce" },
      { name: "Stripe", category: "Payments" },
      { name: "Twilio", category: "Communications" },
      { name: "SendGrid", category: "Communications" },
      { name: "PostgreSQL", category: "Databases" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: ".NET", category: "Backend / APIs" },
    ],
    ctaTitle: "Ready to Modernize Your Business?",
    ctaDescription:
      "Schedule a free business assessment. We'll identify your biggest bottlenecks and show you exactly how digital transformation can save you time and increase revenue.",
    ctaButtonText: "Get Your Free Assessment",
    ctaButtonLink: bookingUrl,
  },

  // ========================================
  // 2. AI Transformation
  // ========================================
  {
    slug: "ai-transformation",
    title: "AI Transformation",
    subtitle:
      "AI workflow automation, intelligent document processing, and data-driven insights that give your business a competitive edge",
    heroImage: "/images/services/ai-transformation/hero.png",
    problems: [
      {
        icon: "PiClockCountdownDuotone",
        problem:
          "Repetitive manual tasks like data entry, report generation, and document processing eating up your team's time",
        solution:
          "AI-powered workflow automation that handles repetitive tasks autonomously, freeing your team for higher-value work",
      },
      {
        icon: "PiChartLineDuotone",
        problem:
          "No data insights — you're making business decisions based on gut feelings, not data",
        solution:
          "Custom analytics dashboards and predictive models that surface trends, forecast demand, and identify growth opportunities",
      },
      {
        icon: "PiChatDuotone",
        problem:
          "Unanswered customer inquiries and slow response times hurting your reputation",
        solution:
          "AI chatbots and intelligent assistants that handle customer questions 24/7 with accurate, on-brand responses",
      },
      {
        icon: "PiFilesDuotone",
        problem:
          "Document bottlenecks — contracts, invoices, and forms piling up waiting for manual review",
        solution:
          "Intelligent document processing that extracts, classifies, and routes information automatically with high accuracy",
      },
      {
        icon: "PiTrendUpDuotone",
        problem:
          "Falling behind competitors who are already using AI to move faster",
        solution:
          "Practical AI solutions deployed in weeks, not months — starting with quick wins that deliver immediate ROI",
      },
    ],
    approach: [
      {
        step: 1,
        title: "AI Readiness Assessment",
        description:
          "We evaluate your current processes, data, and team to identify where AI can have the biggest impact. No buzzwords — just honest analysis of what AI can and can't do for your business.",
      },
      {
        step: 2,
        title: "Solution Design",
        description:
          "We design AI solutions tailored to your specific workflows and data. We select the right models, define integration points, and create a phased implementation plan starting with highest-impact use cases.",
      },
      {
        step: 3,
        title: "Implementation & Training",
        description:
          "We build and deploy your AI solutions with hands-on training for your team. Every solution includes human oversight, quality checks, and clear documentation so your team stays in control.",
      },
      {
        step: 4,
        title: "Monitor & Evolve",
        description:
          "We track AI performance with real-world metrics, refine models based on actual usage, and expand to additional use cases as you see results. Your AI gets smarter over time.",
      },
    ],
    techStack: [
      { name: "LangChain", category: "AI / LLM Frameworks" },
      { name: "LangGraph", category: "AI / LLM Frameworks" },
      { name: "OpenAI", category: "AI / LLM Frameworks" },
      { name: "Python", category: "Programming Languages" },
      { name: "FastAPI", category: "Backend / APIs" },
      { name: "Elasticsearch", category: "Search / Vector DBs" },
      { name: "PostgreSQL", category: "Databases" },
      { name: "Redis", category: "Databases" },
      { name: "TensorFlow", category: "ML / DL Frameworks" },
      { name: "Pinecone", category: "Search / Vector DBs" },
      { name: "Anthropic Claude", category: "AI / LLM Frameworks" },
      { name: "Hugging Face", category: "AI / LLM Frameworks" },
    ],
    ctaTitle: "Ready to Put AI to Work for Your Business?",
    ctaDescription:
      "Schedule a free AI readiness assessment. We'll identify your best AI opportunities and show you how to get started with practical solutions that deliver real results.",
    ctaButtonText: "Get Your AI Assessment",
    ctaButtonLink: bookingUrl,
  },
];

// Helper function to get capability by slug
export const getCapabilityBySlug = (slug: string): Capability | undefined => {
  return capabilitiesData.find((cap) => cap.slug === slug);
};

// Export individual capabilities for convenience
export const digitalTransformationCapability = capabilitiesData[0];
export const aiTransformationCapability = capabilitiesData[1];
