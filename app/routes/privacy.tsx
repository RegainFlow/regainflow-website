import type { Route } from './+types/privacy';
import { PiShieldCheckDuotone } from 'react-icons/pi';

import {
  LegalPage,
  legalEffectiveDate,
  privacySections,
  privacyIntro
} from '~/features/legal';

import legalStyles from '~/features/legal/components/legal-custom.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: legalStyles }
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Privacy Policy | Regain Flow' },
    {
      name: 'description',
      content:
        'Learn how Regain Flow collects, uses, and protects your data when using our AI automation services.'
    }
  ];
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      pageTitle="Privacy Policy"
      effectiveDate={legalEffectiveDate}
      sections={privacySections}
      introText={privacyIntro}
      icon={<PiShieldCheckDuotone size={64} />}
    />
  );
}
