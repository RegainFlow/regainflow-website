import CtoHero from './CtoHero';
import CtoValueProps from './CtoValueProps';
import CtoApproach from './CtoApproach';
import CtoOutcomes from './CtoOutcomes';
import CtoPricing from './CtoPricing';
import CtoFAQ from './CtoFAQ';
import CtoCTA from './CtoCTA';
import { getAllFractionalCtoData } from '../data/fractionalCtoData';

export default function FractionalCtoPage() {
  const data = getAllFractionalCtoData();

  return (
    <div className="fractional-cto-page">
      <CtoHero data={data.hero} />
      <CtoValueProps data={data.valuePillars} />
      <CtoApproach data={data.engagementPhases} benefits={data.benefits} />
      <CtoOutcomes data={data.outcomes} targetCustomers={data.targetCustomers} />
      <CtoPricing data={data.pricingTiers} />
      <CtoFAQ data={data.faq} />
      <CtoCTA data={data.cta} />
    </div>
  );
}
