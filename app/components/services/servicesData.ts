export type ServiceSlug = 'automation-audit' | 'rapid-prototyping';

export const servicesData: Record<
  ServiceSlug,
  {
    title: string;
    subtitle: string;
    image: string;
    sectionOneTitle: string;
    sectionOneCards: { icon: string; text: string }[];
    sectionTwoTitle: string;
    sectionTwoCards: { icon: string; text: string }[];
  }
> = {
  'automation-audit': {
    title: 'Automation <span class="text-span-22">Audit</span>',
    subtitle:
      "Cut through the noise. This 2-week engagement uncovers where you're losing time and money — and builds a clear, ROI-focused roadmap for automation wins.",
    image:
      '/images/611452f4cd52a7a4ad53fa27_image-1-features-dark-template-p-500.jpeg',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Leaders unsure where to start'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Teams with budget but no plan'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Execs who need ROI proof before greenlighting automation'
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Discovery call + audit form'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Workflow mapping & inefficiency report'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Estimated ROI & time savings'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: '60-day implementation roadmap'
      }
    ]
  },
  'rapid-prototyping': {
    title: 'Rapid <span class="text-span-23">R&D</span> Prototyping',
    subtitle:
      'Cut through the noise. This 2-week engagement uncovers where you’re losing time and money — and builds a clear, ROI-focused roadmap for automation wins.',
    image:
      '/images/611452f4cd52a7a4ad53fa27_image-1-features-dark-template-p-500.jpeg',
    sectionOneTitle: `Who It's <span class="text-span-23">For</span>`,
    sectionOneCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Post-Audit Clients ready to see results before investing further'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Founders or startup ops teams needing demos for fundraising or investor buy-in'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Innovation departments or RPA leads exploring use cases'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'IT managers seeking a secure, hands-on prototype to test stack compatibility'
      }
    ],
    sectionTwoTitle: `What <span class="text-span-24">You</span> Get`,
    sectionTwoCards: [
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: '1:1 Discovery & Scoping Call'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Rapid technical prototype (automation or agent)'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Live walkthrough & stakeholder-ready demo'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Deployment checklist & documentation'
      },
      {
        icon: '/images/linkedin-brands-solid2.svg',
        text: 'Rollout guidance + next-step roadmap'
      }
    ]
  }
};
