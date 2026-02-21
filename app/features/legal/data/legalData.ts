import type { Section, ContactInfo } from '../types/legal.types';

export const legalEffectiveDate = 'Dec 29, 2025';

export const contactInfo: ContactInfo = {
  company: 'REGAINFLOW LLC',
  address: ['6057 Apollos Corner Way'],
  city: 'Orlando',
  state: 'Florida',
  zip: '32829',
  country: 'United States',
  website: 'regainflow.com',
  email: 'privacy@regainflow.com'
};

export const termsIntro =
  'Welcome to regainflow.com (the "Site"). These Terms and Conditions ("Terms") govern your access to and use of the Site operated by REGAINFLOW LLC ("we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, you must not use the Site.';

export const privacyIntro =
  'REGAINFLOW LLC ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website at regainflow.com (the "Site") or engage with our services.';

export const termsSections: Section[] = [
  {
    id: 'acceptance',
    title: '1. ACCEPTANCE',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'By accessing or using the Site, you confirm that:'
          },
          {
            type: 'list',
            content: [
              'you are at least thirteen (13) years of age;',
              'you have the legal capacity to enter into these Terms; and',
              'you agree to comply with all applicable laws and regulations.'
            ]
          },
          {
            type: 'paragraph',
            content:
              'We reserve the right to modify these Terms at any time. Material changes will be posted on the Site with an updated "Last Updated" date. Your continued use of the Site after changes are posted constitutes your acceptance of the modified Terms. We encourage you to review these Terms periodically.'
          }
        ]
      }
    ]
  },
  {
    id: 'description-of-services',
    title: '2. DESCRIPTION OF SERVICES',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'REGAINFLOW LLC provides professional consulting services in the following areas:'
          },
          {
            type: 'list',
            content: [
              'Digital Transformation: Custom web platforms, workflow automation, marketing systems, e-commerce solutions',
              'AI Transformation: AI workflow automation, intelligent document processing, chatbots, data-driven insights'
            ]
          },
          {
            type: 'paragraph',
            content:
              'The Site provides information about our services. Formal consulting engagements are governed by separate written agreements (Master Services Agreement, Statement of Work, or Services Agreement).'
          }
        ]
      }
    ]
  },
  {
    id: 'use-restrictions',
    title: '3. USE RESTRICTIONS',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content: 'You agree NOT to:'
          },
          {
            type: 'list',
            content: [
              'Violate any applicable local, state, national, or international law or regulation',
              'Infringe upon or violate our intellectual property rights or the intellectual property rights of others',
              'Transmit any viruses, malware, or other malicious code',
              'Attempt to gain unauthorized access to any portion of the Site, other accounts, computer systems, or networks',
              'Interfere with or disrupt the Site or servers or networks connected to the Site',
              'Collect or harvest any personally identifiable information from the Site without consent',
              'Use any automated means (bots, scrapers, crawlers) to access the Site without our prior written permission',
              'Engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the Site'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'intellectual-property',
    title: '4. INTELLECTUAL PROPERTY',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'All content on the Site, including but not limited to text, graphics, logos, images, code, software, and design elements (collectively, "Content"), is the property of REGAINFLOW LLC or its licensors and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.'
          },
          {
            type: 'paragraph',
            content:
              'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any Content on the Site without our prior written consent, except that you may:'
          },
          {
            type: 'list',
            content: [
              'View and print pages from the Site for your personal, non-commercial use',
              'Download and use materials specifically designated as available for download'
            ]
          },
          {
            type: 'paragraph',
            content:
              'Any unauthorized use of the Content may violate copyright, trademark, and other laws and may result in civil and criminal penalties.'
          }
        ]
      }
    ]
  },
  {
    id: 'user-submissions',
    title: '5. USER SUBMISSIONS',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'If you submit feedback, inquiries, comments, suggestions, or other communications to us through the Site ("Submissions"), you grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Submissions for the purpose of responding to your inquiry and improving our services.'
          },
          {
            type: 'paragraph',
            content:
              'You represent and warrant that you own or have the necessary rights to make such Submissions and that your Submissions do not violate any third-party rights or applicable laws.'
          },
          {
            type: 'paragraph',
            content:
              'Do not submit any confidential, proprietary, or trade secret information through the Site without first entering into a separate Non-Disclosure Agreement with us.'
          }
        ]
      }
    ]
  },
  {
    id: 'privacy',
    title: '6. PRIVACY',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'Your use of the Site is subject to our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.'
          },
          {
            type: 'paragraph',
            content:
              'We use Microsoft Clarity to analyze user behavior and improve the user experience. Clarity records interactions such as clicks, scrolls, and mouse movements. This data is anonymized and aggregated.'
          }
        ]
      }
    ]
  },
  {
    id: 'disclaimers',
    title: '7. DISCLAIMERS',
    isHighlight: true,
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.'
          },
          {
            type: 'paragraph',
            content:
              'Any information or advice provided on the Site is for general informational purposes only and should not be relied upon as professional advice. For formal consulting engagements, a separate written agreement is required.'
          }
        ]
      }
    ]
  },
  {
    id: 'limitation-of-liability',
    title: '8. LIMITATION OF LIABILITY',
    isHighlight: true,
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, REGAINFLOW LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.'
          },
          {
            type: 'paragraph',
            content:
              'IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE EXCEED ONE HUNDRED DOLLARS ($100 USD).'
          },
          {
            type: 'paragraph',
            content:
              'Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.'
          }
        ]
      }
    ]
  },
  {
    id: 'indemnification',
    title: '9. INDEMNIFICATION',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'You agree to defend, indemnify, and hold harmless REGAINFLOW LLC and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys\' fees) arising out of or in connection with:'
          },
          {
            type: 'list',
            content: [
              'Your use of the Site or violation of these Terms',
              'Your violation of any third-party rights, including intellectual property, privacy, or other proprietary rights',
              'Your violation of any applicable laws or regulations',
              'Any Submissions you provide'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'third-party-links',
    title: '10. THIRD-PARTY LINKS',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'The Site may contain links to third-party websites, services, or resources that are not owned or controlled by REGAINFLOW LLC. We are not responsible for and do not endorse the content, privacy policies, or practices of any third-party sites or services.'
          },
          {
            type: 'paragraph',
            content:
              'You acknowledge and agree that we shall not be liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any third-party content, goods, or services available through such sites.'
          },
          {
            type: 'paragraph',
            content:
              'We encourage you to review the terms and privacy policies of any third-party sites you visit.'
          }
        ]
      }
    ]
  },
  {
    id: 'termination',
    title: '11. TERMINATION',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'We reserve the right, in our sole discretion, to terminate or suspend your access to the Site at any time, with or without notice, for any reason, including but not limited to:'
          },
          {
            type: 'list',
            content: [
              'Violation of these Terms',
              'Conduct that we believe is harmful to other users, us, or third parties',
              'Requests by law enforcement or other government agencies',
              'Discontinuance or material modification of the Site'
            ]
          },
          {
            type: 'paragraph',
            content:
              'Upon termination, your right to use the Site will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to intellectual property provisions, disclaimers, indemnification, and limitations of liability.'
          }
        ]
      }
    ]
  },
  {
    id: 'governing-law',
    title: '12. GOVERNING LAW',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of laws principles.'
          },
          {
            type: 'paragraph',
            content:
              'Any dispute, controversy, or claim arising out of or relating to these Terms or your use of the Site shall be resolved through binding arbitration administered by JAMS (Judicial Arbitration and Mediation Services) under its Streamlined Arbitration Rules and Procedures in Orlando, Florida. The arbitration shall be conducted by a single arbitrator, and the arbitrator\'s decision shall be final and binding.'
          },
          {
            type: 'paragraph',
            content:
              'You and REGAINFLOW LLC each waive the right to a trial by jury and to participate in a class action. Each party shall bear its own costs and expenses, and the parties shall share equally the fees of the arbitrator, unless the arbitrator determines otherwise.'
          },
          {
            type: 'paragraph',
            content:
              'Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights.'
          }
        ]
      }
    ]
  },
  {
    id: 'miscellaneous',
    title: '13. MISCELLANEOUS',
    subsections: [
      {
        title: 'Entire Agreement',
        content: [
          {
            type: 'paragraph',
            content:
              'These Terms, together with our Privacy Policy, constitute the entire agreement between you and REGAINFLOW LLC regarding your use of the Site and supersede all prior or contemporaneous understandings and agreements.'
          }
        ]
      },
      {
        title: 'Severability',
        content: [
          {
            type: 'paragraph',
            content:
              'If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.'
          }
        ]
      },
      {
        title: 'Waiver',
        content: [
          {
            type: 'paragraph',
            content:
              'No waiver of any provision of these Terms shall be effective unless in writing. No failure or delay in exercising any right shall constitute a waiver of that right.'
          }
        ]
      },
      {
        title: 'Assignment',
        content: [
          {
            type: 'paragraph',
            content:
              'You may not assign or transfer these Terms or any rights hereunder without our prior written consent. We may assign these Terms without restriction.'
          }
        ]
      },
      {
        title: 'Headings',
        content: [
          {
            type: 'paragraph',
            content:
              'Section headings are for convenience only and shall not affect the interpretation of these Terms.'
          }
        ]
      },
      {
        title: 'Electronic Communications',
        content: [
          {
            type: 'paragraph',
            content:
              'You consent to receive electronic communications from us, and you agree that all agreements, notices, disclosures, and other communications provided electronically satisfy any legal requirement that such communications be in writing.'
          }
        ]
      }
    ]
  },
  {
    id: 'contact-information',
    title: '14. CONTACT INFORMATION',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'If you have questions or concerns about these Terms or the Site, please contact us:'
          }
        ]
      }
    ]
  }
];

export const privacySections: Section[] = [
  {
    id: 'information-we-collect',
    title: '1. INFORMATION WE COLLECT',
    subsections: [
      {
        title: 'Information You Provide',
        content: [
          {
            type: 'paragraph',
            content: 'When you contact us or engage our services, we may collect:'
          },
          {
            type: 'list',
            content: [
              'Contact information (name, email address, phone number, company name)',
              'Communications you send us (inquiries, feedback, support requests)',
              'Business information relevant to consulting engagements',
              'Payment information (processed by third-party payment processors)'
            ]
          }
        ]
      },
      {
        title: 'Information Collected Automatically',
        content: [
          {
            type: 'paragraph',
            content: 'When you visit our Site, we automatically collect:'
          },
          {
            type: 'list',
            content: [
              'IP address, browser type, operating system, and device identifiers',
              'Pages visited, time spent on pages, and referring URLs',
              'Cookies and similar tracking technologies'
            ]
          }
        ]
      },
      {
        title: 'Analytics',
        content: [
          {
            type: 'paragraph',
            content:
              'We use Microsoft Clarity to analyze user behavior and improve the user experience. Clarity records interactions such as clicks, scrolls, and mouse movements. This data is anonymized and aggregated to protect your privacy.'
          }
        ]
      }
    ]
  },
  {
    id: 'how-we-use-information',
    title: '2. HOW WE USE INFORMATION',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content: 'We use the information we collect to:'
          },
          {
            type: 'list',
            content: [
              'Provide, maintain, and improve our services',
              'Respond to your inquiries and provide customer support',
              'Process transactions and send related communications',
              'Send marketing communications (with your consent, where required)',
              'Analyze Site usage and optimize user experience',
              'Detect, prevent, and address technical issues or security threats',
              'Comply with legal obligations and enforce our terms'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'legal-basis-processing',
    title: '3. LEGAL BASIS FOR PROCESSING (GDPR)',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'For users in the European Economic Area (EEA), we process your personal data based on:'
          },
          {
            type: 'list',
            content: [
              'Consent: You have given clear consent for us to process your personal data for a specific purpose.',
              'Contract Performance: Processing is necessary to fulfill a contract with you or to take steps at your request before entering into a contract.',
              'Legitimate Interests: Processing is necessary for our legitimate interests (e.g., improving our services, preventing fraud) and does not override your fundamental rights.',
              'Legal Obligations: Processing is necessary to comply with legal or regulatory requirements.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'information-sharing',
    title: '4. INFORMATION SHARING AND DISCLOSURE',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'We do not sell, rent, or trade your personal data. We may share your information with:'
          },
          {
            type: 'list',
            content: [
              'Service Providers: Third-party vendors who perform services on our behalf (e.g., hosting, analytics, payment processing) under data processing agreements.',
              'Professional Advisors: Lawyers, accountants, auditors, and other professional advisors as needed.',
              'Law Enforcement and Regulators: When required by law or to protect our rights, property, or safety.',
              'Business Transfers: In connection with a merger, acquisition, reorganization, or sale of assets, subject to confidentiality obligations.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'data-retention',
    title: '5. DATA RETENTION',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law:'
          },
          {
            type: 'list',
            content: [
              'Contact Information: Retained for the duration of our business relationship plus three (3) years.',
              'Financial Records: Retained for seven (7) years to comply with tax and accounting regulations.',
              'Analytics Data: Retained for up to twenty-six (26) months.',
              'Marketing Data: Retained until you withdraw consent or unsubscribe.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'your-rights',
    title: '6. YOUR RIGHTS',
    subsections: [
      {
        title: 'GDPR Rights (EEA Users)',
        content: [
          {
            type: 'paragraph',
            content: 'If you are located in the EEA, you have the following rights:'
          },
          {
            type: 'list',
            content: [
              'Access: Request a copy of the personal data we hold about you.',
              'Rectification: Request correction of inaccurate or incomplete data.',
              'Erasure: Request deletion of your personal data ("right to be forgotten").',
              'Restriction: Request restriction of processing in certain circumstances.',
              'Data Portability: Request a copy of your data in a structured, commonly used format.',
              'Object: Object to processing based on legitimate interests or for direct marketing.',
              'Withdraw Consent: Withdraw consent at any time where processing is based on consent.'
            ]
          }
        ]
      },
      {
        title: 'CCPA Rights (California Residents)',
        content: [
          {
            type: 'paragraph',
            content:
              'If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):'
          },
          {
            type: 'list',
            content: [
              'Right to Know: Request disclosure of the categories and specific pieces of personal data we have collected.',
              'Right to Delete: Request deletion of your personal data, subject to certain exceptions.',
              'Right to Opt-Out of Sale: We do not sell personal data. If our practices change, we will provide an opt-out mechanism.',
              'Right to Non-Discrimination: You will not be discriminated against for exercising your CCPA rights.'
            ]
          },
          {
            type: 'paragraph',
            content:
              'To exercise your rights, please contact us using the information in Section 12.'
          }
        ]
      }
    ]
  },
  {
    id: 'cookies-tracking',
    title: '7. COOKIES AND TRACKING TECHNOLOGIES',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'We use cookies and similar tracking technologies to enhance your experience on our Site. Types of cookies we use:'
          },
          {
            type: 'list',
            content: [
              'Essential Cookies: Necessary for the Site to function properly.',
              'Analytics Cookies: Help us understand how visitors interact with our Site (e.g., Microsoft Clarity).',
              'Preference Cookies: Remember your settings and preferences.'
            ]
          },
          {
            type: 'paragraph',
            content:
              'You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect Site functionality.'
          }
        ]
      }
    ]
  },
  {
    id: 'data-security',
    title: '8. DATA SECURITY',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. These measures include:'
          },
          {
            type: 'list',
            content: [
              'Encryption of data in transit and at rest',
              'Access controls and authentication mechanisms',
              'Regular security assessments and audits',
              'Employee training on data protection'
            ]
          },
          {
            type: 'paragraph',
            content:
              'However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.'
          }
        ]
      }
    ]
  },
  {
    id: 'international-transfers',
    title: '9. INTERNATIONAL DATA TRANSFERS',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'Your information may be transferred to and processed in the United States or other countries where we or our service providers operate. If you are located in the EEA, we ensure that such transfers comply with applicable data protection laws through:'
          },
          {
            type: 'list',
            content: [
              'Standard Contractual Clauses approved by the European Commission',
              'Adequacy decisions recognizing equivalent protection',
              'Other lawful transfer mechanisms as appropriate'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'childrens-privacy',
    title: '10. CHILDREN\'S PRIVACY',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'Our Site and services are not directed to individuals under the age of thirteen (13). We do not knowingly collect personal data from children under 13. If we become aware that we have inadvertently collected such data, we will take steps to delete it promptly. If you believe we have collected information from a child under 13, please contact us immediately.'
          }
        ]
      }
    ]
  },
  {
    id: 'policy-changes',
    title: '11. CHANGES TO THIS PRIVACY POLICY',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. Material changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically. Your continued use of the Site after changes are posted constitutes your acceptance of the updated Privacy Policy.'
          }
        ]
      }
    ]
  },
  {
    id: 'contact-us',
    title: '12. CONTACT US',
    subsections: [
      {
        content: [
          {
            type: 'paragraph',
            content:
              'If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:'
          }
        ]
      }
    ]
  }
];
