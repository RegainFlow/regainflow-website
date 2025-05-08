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
      "Cut through the noise. This 2-week engagement uncovers where you're losing time and money — and builds a clear, ROI-focused roadmap for automation wins.",
    image: '/images/service_image_placeholder.jpeg',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Leaders unsure where to start',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Teams with budget but no plan',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Execs who need ROI proof before greenlighting automation',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Discovery call + audit form',
        description:
          'A deep-dive call and audit form to capture your current workflows and pain points.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Workflow mapping & inefficiency report',
        description:
          'Detailed workflow maps highlighting inefficiencies and quick-win opportunities.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Estimated ROI & time savings',
        description:
          'A clear, data-driven estimate of ROI and hours reclaimed through automation.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: '60-day implementation roadmap',
        description:
          'Step-by-step 60-day plan to roll out your first automations and track impact.'
      }
    ],
    videoUrl:
      'https://www.loom.com/embed/6f5585b8d5904426b5fe09cf95d99367?sid=3f8a1dda-7308-4401-99a6-39552c172368'
  },

  'rapid-solutions': {
    title: 'Rapid <span class="text-span-23">R&D</span> Solutions',
    subtitle:
      'Cut through the noise. This 2-week engagement uncovers where you’re losing time and money — and builds a clear, ROI-focused roadmap for automation wins.',
    image: '/images/service_image_placeholder.jpeg',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Post-Audit Clients ready to see results before investing further',
        description:
          'Detailed workflow maps highlighting inefficiencies and quick-win opportunities.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Founders or startup ops teams needing demos for fundraising or investor buy-in',
        description:
          'Detailed workflow maps highlighting inefficiencies and quick-win opportunities.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Innovation departments or RPA leads exploring use cases',
        description:
          'Detailed workflow maps highlighting inefficiencies and quick-win opportunities.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'IT managers seeking a secure, hands-on prototype to test stack compatibility',
        description:
          'Detailed workflow maps highlighting inefficiencies and quick-win opportunities.'
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: '1:1 Discovery & Scoping Call',
        description:
          'One-on-one session to define project scope, technical requirements, and success metrics.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Rapid technical prototype (automation or agent)',
        description:
          'A hands-on prototype demonstrating core automation capabilities in your environment.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Live walkthrough & stakeholder-ready demo',
        description:
          'Interactive demo session for stakeholders, complete with Q&A and feedback loops.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Deployment checklist & documentation',
        description:
          'Comprehensive deployment guide, code samples, and runbooks for your team.'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Rollout guidance + next-step roadmap',
        description:
          'Strategic recommendations and roadmap for scaling your prototype into production.'
      }
    ],
    videoUrl:
      'https://www.loom.com/embed/6f5585b8d5904426b5fe09cf95d99367?sid=3f8a1dda-7308-4401-99a6-39552c172368'
  }
};
