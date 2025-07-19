export type ServiceSlug = 'automation-audit' | 'automation-solutions';

interface Card {
  icon: string;
  image?: string;
  text: string;
  description: string;
}

export interface ServiceInfo {
  title: string;
  subtitle: string;
  image: string;
  heroTagline?: string;
  ctaText?: string;
  ctaLink?: string;
  sectionOneTitle: string;
  sectionOneCards: Card[];
  sectionTwoTitle: string;
  sectionTwoCards: Card[];
  videoUrl?: string;
}

export const servicesData: Record<ServiceSlug, ServiceInfo> = {
  'automation-audit': {
    title: 'Automation <span class="text-span-22">Audit</span>',
    subtitle:
      'Cut through the noise. This strategic engagement reveals automation-ready workflows, audits your real, and delivers a high-impact roadmap that eliminates guesswork and unlocks measurable ROI.',
    heroTagline: 'Free 60-min call · Spot inefficiencies · Unlock hidden ROI',
    ctaText: 'Unlock <span style="color: #00ff08">Free</span> Audit Now',
    ctaLink: 'https://cal.com/regainflow/60min',
    image: '/images/services/automation-audit/audit_landing_page.png',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: 'PiNumberSquareOneFill',
        image: '/images/services/automation-audit/leaders_unsure.png',
        text: "Leaders who know something's broken but don't know where to start",
        description:
          "You feel the friction — delays, double work, misalignment — but you're not sure where the cracks are or how to fix them. We map your workflows, surface the blockers, and give you a clear plan to take action without overwhelm."
      },
      {
        icon: 'PiNumberSquareTwoFill',
        image: '/images/services/automation-audit/teams.png',
        text: 'Teams with budget but no execution roadmap',
        description:
          "You've secured funding, tools, or a mandate to “automate more” — but lack clarity on what to do first or how to structure the rollout. We bridge strategy and implementation with a 60-day plan that gets results without drowning your team in complexity."
      },
      {
        icon: 'PiNumberSquareThreeFill',
        image: '/images/services/automation-audit/metrics.png',
        text: 'Execs or stakeholders who need ROI proof before approving automation',
        description:
          "You're sold on automation — but your leadership team wants proof it will work and numbers to justify it. Our audit delivers real metrics, not guesswork — including estimated cost savings, effort reduction, and impact forecasts to help greenlight your initiative."
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/services/automation-audit/call_audit.png',
        text: '<span style="color: #00ff08">Free</span> Audit Call',
        description:
          "Clarify your systems and spot blockers. A deep-dive session to unpack your current workflows, bottlenecks, and goals so we can analyze your org's readiness and opportunities for automation."
      },
      {
        icon: '/images/services/automation-audit/workflow_mapping.png',
        text: 'Workflow Mapping',
        description:
          'Make the invisible visible. Annotated workflow diagrams with key inefficiencies, manual steps, and delay points highlighted. So your team knows exactly where to focus next.'
      },
      {
        icon: '/images/services/automation-audit/roi_value_op_icon.png',
        text: 'ROI & Value Opportunity',
        description:
          "Find what's worth automating - and what isn't. Ranked breakdown of your workflows based on effort vs ROI potential. We show where value is hiding and will create the most leverage."
      },
      {
        icon: '/images/services/automation-audit/launch_roadmap_icon.png',
        text: 'Launch Roadmap',
        description:
          'From strategy to execution - fast. A step-by-step plan outlining what to automate first, tools to use, how to roll it out. This sets the stage for quick wins and long-term gains.'
      }
    ],
    videoUrl:
      'https://www.loom.com/embed/6f5585b8d5904426b5fe09cf95d99367?sid=3f8a1dda-7308-4401-99a6-39552c172368'
  },
  'automation-solutions': {
    title: 'Rapid <span class="text-span-23">Automation</span> Solutions',
    subtitle:
      'Go from audit to action. We build, demo, and deliver the automation systems that drive ROI.',
    heroTagline:
      'Disocvery call · Rapid Prototyping · Real automation, no fluff',
    ctaText: 'Book Now',
    ctaLink: 'https://cal.com/regainflow/30min',
    image:
      '/images/services/automation-solutions/rapid_solution_landing_page.png',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: 'PiNumberSquareOneFill',
        image: '/images/services/automation-solutions/post_audit.png',
        text: 'Post-Audit Clients ready to see results before investing further',
        description:
          "You've identified what's broken — now you need to prove impact fast. We turn audit insights into working systems and measurable results that de-risk your next investment or initiative."
      },
      {
        icon: 'PiNumberSquareTwoFill',
        image: '/images/services/automation-solutions/founder_start_ups.png',
        text: 'Founders or startup ops teams needing demos for fundraising or investor buy-in',
        description:
          'You need to show traction, not slides. We build functional, clean solutions that make investors and partners say “You actually built this?” — because you did, with us.'
      },
      {
        icon: 'PiNumberSquareThreeFill',
        image: '/images/services/automation-solutions/innovation_depts.png',
        text: 'Innovation departments or RPA leads exploring use cases',
        description:
          "You've seen the hype. Now you need to test what's possible in your environment — fast. We build validated use cases on your stack, so your team isn't stuck in theory."
      },
      {
        icon: 'PiNumberSquareFourFill',
        image: '/images/services/automation-solutions/growth_margins.png',
        text: 'Teams/Business drivers under pressure to grow efficiently and increase margin.',
        description:
          "You've got traction — customers, users, revenue — but you're hitting operational drag. We help you cut time, cost, and manual overhead with automation that scales cleanly and boosts margins."
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/services/automation-solutions/1_on_1_icon.png',
        text: '1:1',
        description:
          'One-on-one session to lock in goals, technical requirements, and measurable outcomes.'
      },
      {
        icon: '/images/services/automation-solutions/rapid_proto_icon.png',
        text: 'Rapid technical prototype (automation or agent)',
        description:
          'A build of your core automation tailored to your needs and ready to operate on day 1.'
      },
      {
        icon: '/images/services/automation-solutions/demo_icon.png',
        text: 'Executive Walkthrough & Stakeholder Buy-In',
        description:
          'Interactive demo session for stakeholders, complete with Q&A and feedback loops.'
      },
      {
        icon: '/images/services/automation-solutions/deployment_blueprint.png',
        text: 'Deployment Blueprint',
        description:
          'Your delivery guide to install, configure, troubleshoot, and run your solution.'
      },
      {
        icon: '/images/services/automation-solutions/rollout_guidance.png',
        text: 'Rollout Guidance',
        description:
          'Clear guidance on scaling your solution and how to extend your new system into other business areas.'
      }
    ],
    videoUrl:
      'https://www.loom.com/embed/6f5585b8d5904426b5fe09cf95d99367?sid=3f8a1dda-7308-4401-99a6-39552c172368'
  }
};
