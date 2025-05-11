export type ServiceSlug = 'automation-audit' | 'rapid-solutions';

interface Card {
  icon: string;
  text: string;
  description: string;
}

export interface ServiceInfo {
  title: string;
  subtitle: string;
  image: string;
  sectionOneTitle: string;
  sectionOneCards: Card[];
  sectionTwoTitle: string;
  sectionTwoCards: Card[]; // now with descriptions
  /** Optional use‐case video embed, e.g. Loom or YouTube */
  videoUrl?: string;
}

export const servicesData: Record<ServiceSlug, ServiceInfo> = {
  'automation-audit': {
    title: 'Automation <span class="text-span-22">Audit</span>',
    subtitle:
      'Cut through the noise. This strategic engagement reveals automation-ready workflows, audits your real, and delivers a high-impact roadmap that eliminates guesswork and unlocks measurable ROI.',
    image: '/images/service_image_placeholder.jpeg',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: "Leaders who know something's broken but don't know where to start",
        description:
          "You feel the friction — delays, double work, misalignment — but you're not sure where the cracks are or how to fix them. We map your workflows, surface the blockers, and give you a clear plan to take action without overwhelm."
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Teams with budget but no execution roadmap',
        description:
          "You've secured funding, tools, or a mandate to “automate more” — but lack clarity on what to do first or how to structure the rollout. We bridge strategy and implementation with a 60-day plan that gets results without drowning your team in complexity."
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Execs or stakeholders who need ROI proof before approving automation',
        description:
          "You're sold on automation — but your leadership team wants proof it will work and numbers to justify it. Our audit delivers real metrics, not guesswork — including estimated cost savings, effort reduction, and impact forecasts to help greenlight your initiative."
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Call',
        description:
          "Clarify your systems and spot blockers. A deep-dive session to unpack your current workflows, bottlenecks, and goals so we can analyze your org's readiness and opportunities for automation."
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Workflow Mapping',
        description:
          'Make the invisible visible. Annotated workflow diagrams with key inefficiencies, manual steps, and delay points highlighted. So your team knows exactly where to focus next.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'ROI & Value Opportunity',
        description:
          "Find what's worth automating - and what isn't. Ranked breakdown of your workflows based on effort vs ROI potential. We show where value is hiding and will create the most leverage."
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Launch Roadmap',
        description:
          'From strategy to execution - fast. A step-by-step plan outlining what to automate first, tools to use, how to roll it out. This sets the stage for quick wings and long-term gains.'
      }
    ],
    videoUrl:
      'https://www.loom.com/embed/6f5585b8d5904426b5fe09cf95d99367?sid=3f8a1dda-7308-4401-99a6-39552c172368'
  },

  'rapid-solutions': {
    title: 'Rapid <span class="text-span-23">R&D</span> Solutions',
    subtitle:
      "Move from insight to implementation. You've got the clarity - now you need sharp execution. Our team blends elite engineering with operational business sense to build robust solutions in record time. No fluff, no shortcuts, just results. ",
    image: '/images/service_image_placeholder.jpeg',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Post-Audit Clients ready to see results before investing further',
        description:
          "You've identified what's broken — now you need to prove impact fast. We turn audit insights into working systems and measurable results that de-risk your next investment or initiative."
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Founders or startup ops teams needing demos for fundraising or investor buy-in',
        description:
          'You need to show traction, not slides. We build functional, clean solutions that make investors and partners say “You actually built this?” — because you did, with us.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Innovation departments or RPA leads exploring use cases',
        description:
          "You've seen the hype. Now you need to test what's possible in your environment — fast. We build validated use cases on your stack, so your team isn't stuck in theory."
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Teams/Business drivers under pressure to grow efficiently and increase margin.',
        description:
          "You've got traction — customers, users, revenue — but you're hitting operational drag. We help you cut time, cost, and manual overhead with automation that scales cleanly and boosts margins."
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: '1:1',
        description:
          'One-on-one session to lock in goals, technical requirements, and measurable outcomes. Rapid Technical Build: A build of your core automation tailored to your needs and ready to operate on day 1'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Rapid technical prototype (automation or agent)',
        description:
          'A build of your core automation tailored to your needs and ready to operate on day 1.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Executive Walkthrough & Stakeholder Buy-In',
        description:
          'Interactive demo session for stakeholders, complete with Q&A and feedback loops.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Deployment Blueprint',
        description:
          'Your delivery guide to install, configure, troubleshoot, and run your solution.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Rollout Guidance & Roadmap Session',
        description:
          'Clear guidance on scaling your solution and how to extend your new system into other business areas.'
      }
    ],
    videoUrl:
      'https://www.loom.com/embed/6f5585b8d5904426b5fe09cf95d99367?sid=3f8a1dda-7308-4401-99a6-39552c172368'
  }
};
