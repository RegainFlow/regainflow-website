// Unified booking URL for all consultation CTAs
export const bookingUrl = 'https://cal.com/regainflow/consultation';

export const siteConfig = {
  name: 'RegainFlow',
  title: 'RegainFlow | Senior AI/ML Engineers for C2C Contracts',
  description: 'Senior engineers specializing in AI/ML, RAG, and intelligent automation',
  url: 'https://www.regainflow.com',
  ogImage: 'https://www.regainflow.com/images/og/og-home.png',
  links: {
    cal: bookingUrl, // Updated to use unified consultation URL
    typeform: 'https://form.typeform.com/to/SOXnbS4E',
  },
  clarity: {
    id: 'ttg4gr4m0m',
  },
} as const;
