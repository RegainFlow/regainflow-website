import { MetaFunction, LinksFunction } from '@remix-run/node';
import LegalPage from '~/components/legal/LegalPage';
import {
  legalEffectiveDate,
  termsSections
} from '~/components/legal/legalData';

import legalStyles from '~/components/legal/legal-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: legalStyles }
];

export const meta: MetaFunction = () => [
  { title: 'Terms & Conditions | Regain Flow' },
  {
    name: 'description',
    content:
      'Review the legal terms and acceptable use policies for Regain Flow’s AI automation services.'
  }
];

export default function TermsPage() {
  return (
    <LegalPage
      pageTitle="Terms & Conditions"
      effectiveDate={legalEffectiveDate}
      sections={termsSections}
    />
  );
}
