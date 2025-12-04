import { useState } from 'react';
import type { FaqItem } from '../types/fractional-cto.types';
import { PiCaretDownDuotone } from 'react-icons/pi';

interface CtoFAQProps {
  data: FaqItem[];
}

export default function CtoFAQ({ data }: CtoFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="cto-faq">
      <div className="container">
        <div className="cto-faq__header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="subheading">
            Common questions about Fractional CTO services, engagement models, and pricing.
          </p>
        </div>

        <div className="cto-faq__list">
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
