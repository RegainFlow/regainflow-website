import CtoHero from './CtoHero';
import CtoValueProps from './CtoValueProps';
import CtoApproach from './CtoApproach';
import CtoOutcomes from './CtoOutcomes';
import CtoFAQ from './CtoFAQ';
import CtoCTA from './CtoCTA';
import { getAllFractionalCtoData } from '../data/fractionalCtoData';
import ElectricBackground from './ElectricBackground';

import ScrollAnimation from '~/components/layout/ScrollAnimation';

export default function FractionalCtoPage() {
  const data = getAllFractionalCtoData();

  return (
    <div className="fractional-cto-page">
      <ElectricBackground />
      <CtoHero data={data.hero} />

      <ScrollAnimation animation="slide-up">
        <CtoValueProps data={data.valuePillars} />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <CtoApproach data={data.engagementPhases} benefits={data.benefits} />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <CtoOutcomes data={data.outcomes} targetCustomers={data.targetCustomers} />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <CtoFAQ data={data.faq} />
      </ScrollAnimation>

      <ScrollAnimation animation="scale-up">
        <CtoCTA data={data.cta} />
      </ScrollAnimation>
    </div>
  );
}
