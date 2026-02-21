import type { ValueProp } from '../types/value-proposition.types';

export const valuePropData: ValueProp[] = [
  {
    title: 'Digital Transformation',
    subtitle: 'Custom web platforms, workflow automation, and marketing systems that modernize your operations and drive growth.',
    bullets: [
      {
        icon: 'Globe',
        text: 'Custom websites and web apps that convert visitors into customers'
      },
      {
        icon: 'ArrowsClockwise',
        text: 'Workflow automation that eliminates hours of manual tasks'
      },
      {
        icon: 'CloudArrowUp',
        text: 'Marketing automation, e-commerce, and CRM integration'
      }
    ],
    ctaLink: '/services/digital-transformation'
  },
  {
    title: 'AI Transformation',
    subtitle:
      'AI-powered workflows, intelligent chatbots, and data insights that give your business a competitive edge.',
    bullets: [
      {
        icon: 'Robot',
        text: 'AI automation that handles repetitive tasks for you'
      },
      {
        icon: 'FlowArrow',
        text: 'Intelligent document processing and data extraction'
      },
      {
        icon: 'ChartLine',
        text: 'Data-driven insights and predictive analytics'
      }
    ],
    ctaLink: '/services/ai-transformation'
  }
];
