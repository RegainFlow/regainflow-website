import PricingHero from './PricingHero';
import PricingRanges from './PricingRanges';
import ProductizedServices from './ProductizedServices';
import PricingFAQ from './PricingFAQ';
import PricingCTA from './PricingCTA';
import { getAllPricingData } from '../data/pricingData';

export default function PricingPage() {
  const data = getAllPricingData();

  return (
    <div className="pricing-page">
      <PricingHero data={data.hero} />
      <PricingRanges data={data.pricingRanges} />
      <ProductizedServices data={data.productizedPackages} />
      <PricingFAQ data={data.faq} />
      <PricingCTA data={data.cta} />
    </div>
  );
}
