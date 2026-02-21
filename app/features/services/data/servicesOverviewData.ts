import type { ServicesOverview } from '../types/service.types';
import { bookingUrl } from '~/config/site.config';

/* ==========================================================================
   Services Overview Page Data
   ========================================================================== */

export const servicesOverviewData: ServicesOverview = {
  // Hero Section
  heroTitle: 'Digital & AI Transformation for Growing Businesses',
  heroSubtitle:
    'We learn your business, find the pain points, and build digital and AI solutions that help you operate smarter and earn more.',
  heroCtaText: 'Get Your Free Assessment',
  heroCtaLink: bookingUrl,

  // Process Steps - How It Works
  processSteps: [
    {
      step: 1,
      icon: 'PiMagnifyingGlassDuotone',
      title: 'Business Discovery',
      description:
        'We dig into your workflows, tools, and bottlenecks to understand where you\'re losing time and money. No generic playbooks — we learn your business first.'
    },
    {
      step: 2,
      icon: 'PiMapPinDuotone',
      title: 'Custom Strategy',
      description:
        'We design a tailored transformation roadmap with clear milestones, technology recommendations, and ROI projections — so you know exactly what you\'re getting.'
    },
    {
      step: 3,
      icon: 'PiRocketLaunchDuotone',
      title: 'Build & Deploy',
      description:
        'We build your solution iteratively with frequent demos. You see progress every sprint, provide feedback, and stay in control of the direction.'
    },
    {
      step: 4,
      icon: 'PiHandshakeDuotone',
      title: 'Ongoing Partnership',
      description:
        'After launch, we monitor performance, optimize based on real usage data, and scale your systems as your business grows. We\'re in it for the long haul.'
    }
  ],

  // Service Metrics - Key Stats
  metrics: [
    {
      value: '15+',
      label: 'Years Combined Experience'
    },
    {
      value: '$8M+',
      label: 'Value Generated for Clients'
    },
    {
      value: '50+',
      label: 'Projects Delivered'
    },
    {
      value: '100%',
      label: 'Client Satisfaction Rate'
    }
  ],

  // Capability Cards - Core Services
  capabilityCards: [
    {
      slug: 'digital-transformation',
      icon: 'PiGlobeDuotone',
      title: 'Digital Transformation',
      description:
        'Custom web platforms, workflow automation, marketing systems, and e-commerce solutions that modernize your operations and drive growth.'
    },
    {
      slug: 'ai-transformation',
      icon: 'PiRobotDuotone',
      title: 'AI Transformation',
      description:
        'AI workflow automation, intelligent document processing, chatbots, and data-driven insights that give your business a competitive edge.'
    }
  ]
};
