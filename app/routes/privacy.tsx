import { MetaFunction, LinksFunction } from '@remix-run/node';
import LegalPage from '~/components/legal/LegalPage';
import {
  legalEffectiveDate,
  privacySections
} from '~/components/legal/legalData';

import legalStyles from '~/components/legal/legal-custom.css?url';

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
