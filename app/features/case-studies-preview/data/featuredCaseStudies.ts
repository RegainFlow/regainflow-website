import type { FeaturedCaseStudy } from "../types/case-studies-preview.types";

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    title: "Multi-Agent Payroll Validation System",
    description:
      "Cut payroll review time from months of manual checking to a faster automated workflow for a large operations team. We built an AI-assisted validation system that handled cross-system checks and flagged issues before they became expensive mistakes.",
    image: "/images/projects/multi-agent-payroll-validation.png",
    tags: ["Faster payroll QA", "12 FTEs saved", "AI-assisted validation"],
    industry: "AI Transformation",
    primaryMetric: "12 FTEs Saved",
    technicalContext:
      "AI-assisted validation across multiple payroll platforms",
  },
  {
    title: "Marketing Automation for Distribution Network",
    description:
      "Removed hours of weekly admin work and helped a distribution business respond to opportunities faster. We connected CRM, inventory, and marketing workflows so follow-up happened automatically and the sales process stopped stalling.",
    image: "/images/projects/marketing_auto_net.png",
    tags: ["25 hours saved weekly", "4x sales growth", "Automated follow-up"],
    industry: "Digital Transformation",
    primaryMetric: "4x Growth",
    technicalContext: "Integrated CRM, inventory, and marketing automation",
  },
  {
    title: "MODA: E-Commerce Fashion Platform",
    description:
      "Delivered a stronger online shopping experience with reliable checkout, product management, and order visibility. We built the storefront and supporting commerce systems to handle growth with less friction.",
    technicalContext:
      "React and .NET commerce stack with AWS infrastructure and Stripe.",
    image: "/images/projects/moda-ecom.png",
    tags: ["99.9% uptime", "Smoother checkout", "Scalable online store"],
    industry: "Digital Transformation",
    primaryMetric: "99.9% Uptime"
  },
];
