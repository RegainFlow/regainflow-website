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
      "Improve how your business shows up, follows up, and gets work done with better websites, connected systems, and smart automation.",
    heroImage: "/images/services/digital-transformation/hero.png",
    problems: [
      {
        icon: "PiDevicesDuotone",
        problem:
          "Your website looks dated, confuses visitors, or fails to turn interest into real inquiries",
        solution:
          "We build a clearer, faster website experience that makes your business feel credible and guides visitors toward booking, buying, or reaching out",
      },
      {
        icon: "PiClockCountdownDuotone",
        problem:
          "Your team loses hours every week to repetitive admin, handoffs, and status chasing",
        solution:
          "We automate the busywork so routine tasks, updates, and follow-up happen without someone manually pushing every step",
      },
      {
        icon: "PiPlugsConnectedDuotone",
        problem:
          "Your CRM, inbox, calendar, and internal tools do not talk to each other, so things slip through the cracks",
        solution:
          "We connect the tools you already use so information flows cleanly and your team has fewer manual handoffs",
      },
      {
        icon: "PiShoppingCartDuotone",
        problem:
          "Your online store or checkout flow is leaving money on the table",
        solution:
          "We improve the buying experience with cleaner storefronts, easier checkout, and systems that support repeat sales",
      },
      {
        icon: "PiEnvelopeDuotone",
        problem:
          "Leads come in, but follow-up is inconsistent, slow, or entirely manual",
        solution:
          "We build automated follow-up across email, SMS, and your CRM so opportunities keep moving even when your team is busy",
      },
    ],
    approach: [
      {
        step: 1,
        title: "Find what is slowing you down",
        description:
          "We look at where leads stall, tasks pile up, or systems create friction so we can focus on the highest-value fixes first.",
      },
      {
        step: 2,
        title: "Plan the right system",
        description:
          "You get a practical roadmap that matches your business, your team, and the level of change that makes sense right now.",
      },
      {
        step: 3,
        title: "Build & Launch",
        description:
          "We build, test, and launch in stages so you can see progress clearly and start using what matters without waiting for a massive rollout.",
      },
      {
        step: 4,
        title: "Keep improving",
        description:
          "After launch, we refine what is working, tighten what is not, and expand the system as your business grows.",
      },
    ],
    useCases: [
      {
        title: "Website refresh that converts better",
        description:
          "Clarify your offer, strengthen trust, and make it easier for visitors to take the next step."
      },
      {
        title: "Automated lead follow-up",
        description:
          "Trigger emails, texts, reminders, and pipeline updates so new inquiries do not go cold."
      },
      {
        title: "CRM, inbox, and calendar handoff",
        description:
          "Connect the tools your team already uses so appointments, notes, and status updates stay in sync."
      },
      {
        title: "E-commerce cleanup",
        description:
          "Improve product flow, checkout clarity, and the systems behind ordering and fulfillment."
      },
      {
        title: "Owner reporting dashboards",
        description:
          "Bring key numbers into one place so you can see performance without stitching together spreadsheets."
      }
    ],
    ctaTitle: "Ready to Make Your Business Easier to Run?",
    ctaDescription:
      "Book a free assessment and we will show you where better systems, follow-up, and automation can create the biggest lift first.",
    ctaButtonText: "Book Your Free Assessment",
    ctaButtonLink: bookingUrl,
  },

  // ========================================
  // 2. AI Transformation
  // ========================================
  {
    slug: "ai-transformation",
    title: "AI Transformation",
    subtitle:
      "Put practical AI to work across support, operations, and decision-making so your business responds faster and gets more done.",
    heroImage: "/images/services/ai-transformation/hero.png",
    problems: [
      {
        icon: "PiClockCountdownDuotone",
        problem:
          "Your team spends too much time on repetitive work like updates, summaries, document handling, and routine requests",
        solution:
          "We build AI-powered workflows that take care of repeatable tasks so your team can focus on customers, sales, and execution",
      },
      {
        icon: "PiChartLineDuotone",
        problem:
          "Important information is buried in systems and documents, which slows decisions and creates uncertainty",
        solution:
          "We create AI-assisted reporting and insight tools that surface what matters faster and make it easier to act with confidence",
      },
      {
        icon: "PiChatDuotone",
        problem:
          "Customers wait too long for answers, and slow response times cost trust and sales",
        solution:
          "We build AI assistants that can answer common questions instantly and help your team keep communication moving",
      },
      {
        icon: "PiFilesDuotone",
        problem:
          "Documents, forms, and internal knowledge are hard to process quickly or search when someone needs an answer",
        solution:
          "We use AI to classify, summarize, extract, and search information so the right details are easier to find and use",
      },
      {
        icon: "PiTrendUpDuotone",
        problem:
          "You want to use AI, but most options sound overhyped, risky, or disconnected from real business needs",
        solution:
          "We focus on practical AI wins first, using modern tools only where they create real speed, savings, or better customer experiences",
      },
    ],
    approach: [
      {
        step: 1,
        title: "Find the best AI fit",
        description:
          "We identify where AI can save time, improve response speed, or reduce manual effort without making your business more complicated.",
      },
      {
        step: 2,
        title: "Design around the workflow",
        description:
          "We map the workflow, choose the right level of automation, and design the solution around how your team actually works.",
      },
      {
        step: 3,
        title: "Launch with guardrails",
        description:
          "We launch with testing, oversight, and training so your team stays in control and the AI supports the business instead of creating new risks.",
      },
      {
        step: 4,
        title: "Refine what works",
        description:
          "We monitor usage, tune performance, and expand to the next use case once the first win is producing value.",
      },
    ],
    useCases: [
      {
        title: "AI lead-response assistant",
        description:
          "Respond to new inquiries faster with AI that can qualify, route, and support early follow-up."
      },
      {
        title: "AI customer support assistant",
        description:
          "Answer common questions instantly and keep customers moving without waiting on your team."
      },
      {
        title: "AI document processing",
        description:
          "Extract, summarize, and route information from contracts, forms, invoices, and internal documents."
      },
      {
        title: "AI knowledge and search assistant",
        description:
          "Help staff find answers faster across policies, documentation, or internal resources."
      },
      {
        title: "AI reporting and summaries",
        description:
          "Turn scattered updates and data into clear summaries that make owner decisions easier."
      }
    ],
    ctaTitle: "Ready to Put AI to Work Without the Hype?",
    ctaDescription:
      "Book a free assessment and we will show you where AI can create faster response times, less manual work, and better customer experiences.",
    ctaButtonText: "Book Your Free Assessment",
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
