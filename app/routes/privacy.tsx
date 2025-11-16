import { MetaFunction, LinksFunction } from '@react-router/node';
import { LegalPage, legalEffectiveDate, privacySections } from '~/features/legal';

import legalStyles from '~/features/legal/components/legal-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: legalStyles }
];

export const meta: MetaFunction = () => [
  { title: 'Privacy Policy | Regain Flow' },
  {
    name: 'description',
    content:
      'Understand how Regain Flow collects, uses, and protects your data when using our AI automation services.'
  }
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      pageTitle="Privacy Policy"
      effectiveDate={legalEffectiveDate}
      sections={privacySections}
    />
  );
}
