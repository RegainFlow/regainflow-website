import type { ServicesOverview } from '../types/service.types';
import { bookingUrl } from '~/config/site.config';

/* ==========================================================================
   Services Overview Page Data
   ========================================================================== */

export const servicesOverviewData: ServicesOverview = {
  // Hero Section
  heroTitle: 'Digital & AI Transformation for Growing Businesses',
  heroSubtitle:
    'We help growing businesses win more leads, respond faster, and cut busywork with better websites, smart automation, and practical AI.',
  heroCtaText: 'Book Your Free Assessment',
  heroCtaLink: bookingUrl,

  // Process Steps - How It Works
  processSteps: [
    {
      step: 1,
      icon: 'PiMagnifyingGlassDuotone',
      title: 'Find the slowdown',
      description:
        'We review how work, leads, and customer communication move through your business so we can spot the biggest friction first.'
    },
    {
      step: 2,
      icon: 'PiMapPinDuotone',
      title: 'Map the fastest win',
      description:
        'You get a focused plan built around the highest-return changes, with clear scope, priorities, and expected outcomes.'
    },
    {
      step: 3,
      icon: 'PiRocketLaunchDuotone',
      title: 'Build and launch',
      description:
        'We build the right system, show progress early, and launch in stages so you can start seeing value sooner.'
    },
    {
      step: 4,
      icon: 'PiHandshakeDuotone',
      title: 'Improve as you grow',
      description:
        'After launch, we refine what is working, expand what helps, and keep your systems aligned with the next stage of growth.'
    }
  ],

  // Service Metrics - Key Stats
  metrics: [
    {
      category: 'Years',
      value: '15+',
      label: 'Combined experience',
      detail: 'Senior product, automation, and AI delivery'
    },
    {
      category: 'Projects',
      value: '50+',
      label: 'Projects shipped',
      detail: 'Builds, automations, and launches across industries'
    },
    {
      category: 'Speed',
      value: 'Weeks',
      label: 'to first win',
      detail: 'Fast momentum without dragging projects out for months'
    },
    {
      category: 'Outcomes',
      value: 'ROI',
      label: 'built in from day one',
      detail: 'Every project tied to business results, not busywork'
    }
  ],

  // Capability Cards - Core Services
  capabilityCards: [
    {
      slug: 'digital-transformation',
      icon: 'PiGlobeDuotone',
      title: 'Digital Transformation',
      description:
        'Turn your website, follow-up, and internal systems into a smoother engine for sales and operations.'
    },
    {
      slug: 'ai-transformation',
      icon: 'PiRobotDuotone',
      title: 'AI Transformation',
      description:
        'Use AI assistants and smart automation to answer faster, save time, and handle work that slows your team down.'
    }
  ]
};
