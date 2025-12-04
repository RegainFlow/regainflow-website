import { useState } from 'react';
import type { PricingFaqItem } from '../types/pricing.types';
import { PiCaretDownDuotone } from 'react-icons/pi';

interface PricingFAQProps {
  data: PricingFaqItem[];
}

export default function PricingFAQ({ data }: PricingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pricing-faq">
      <div className="container">
        <div className="pricing-faq__header">
          <h2 className="section-title">Pricing FAQs</h2>
          <p className="subheading">
            Common questions about pricing, payment terms, and engagement models.
          </p>
        </div>

        <div className="pricing-faq__list">
          {data.map((item, index) => (
            <div key={index} className={`faq-accordion-item ${openIndex === index ? 'active' : ''}`}>
              <button
                className="faq-accordion-header"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="faq-accordion-question">{item.question}</h3>
                <PiCaretDownDuotone
                  size={24}
                  className="faq-accordion-icon"
                />
              </button>
              <div className="faq-accordion-content">
                <div className="faq-accordion-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
