import type { Route } from './+types/terms';
import { PiFileTextDuotone } from 'react-icons/pi';

import {
  LegalPage,
  legalEffectiveDate,
  termsSections,
  termsIntro
} from '~/features/legal';

import legalStyles from '~/features/legal/components/legal-custom.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: legalStyles }
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Terms & Conditions | Regain Flow' },
    {
      name: 'description',
      content:
        'Review the legal terms and acceptable use policies for Regain Flow AI automation services.'
    }
  ];
}

export default function TermsPage() {
  return (
    <LegalPage
      pageTitle="Terms & Conditions"
      effectiveDate={legalEffectiveDate}
      sections={termsSections}
      introText={termsIntro}
      icon={<PiFileTextDuotone size={64} />}
    />
  );
}
