type Section = {
  title: string;
  body: string;
};

export type Props = {
  pageTitle: string;
  effectiveDate: string;
  sections: Section[];
};

export const legalEffectiveDate = 'June 27, 2025';

export const termsSections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using Regain Flow's website and services, you agree to be bound by these Terms and Conditions. If you do not agree, you may not access or use our services.`
  },
  {
    title: '2. Services Provided',
    body: `Regain Flow offers AI-powered automation consulting and software tools. The services are provided as-is and may evolve over time based on internal improvements or third-party tool integrations.`
  },
  {
    title: '3. User Responsibilities',
    body: `You are responsible for ensuring that any data or business process shared with us is lawful, does not infringe on third-party rights, and complies with your organization's internal policies.`
  },
  {
    title: '4. Intellectual Property',
    body: `All content, tools, and models provided by Regain Flow are protected by applicable intellectual property laws. Unauthorized use, distribution, or modification is prohibited.`
  },
  {
    title: '5. Limitation of Liability',
    body: `Regain Flow shall not be liable for indirect or consequential damages arising from use of our services, including business disruption or loss of revenue.`
  },
  {
    title: '6. Changes to These Terms',
    body: `We may update these Terms from time to time. Continued use of our services indicates acceptance of the modified terms.`
  }
];

export const privacySections = [
  {
    title: '1. Information We Collect',
    body: `We collect basic information such as names, emails, company details, and usage metrics when you interact with our website or engage in automation services.`
  },
  {
    title: '2. How We Use Your Data',
    body: `Your data is used to personalize service recommendations, estimate ROI, generate automation strategies, and improve the effectiveness of our AI tools.`
  },
  {
    title: '3. Data Security',
    body: `We implement safeguards to protect your data. However, no method of storage or transmission is 100% secure. We encourage clients to avoid sharing sensitive personal data unless necessary.`
  },
  {
    title: '4. Third-Party Tools',
    body: `Our services may interact with third-party platforms (e.g., analytics tools, AI APIs). These integrations follow their own data policies, which we recommend you review.`
  },
  {
    title: '5. Your Rights',
    body: `You may request to access, correct, or delete your personal data. Contact us via our support form or email if you need assistance.`
  },
  {
    title: '6. Policy Updates',
    body: `We reserve the right to modify this Privacy Policy at any time. Changes will be posted to this page with an updated revision date.`
  }
];
