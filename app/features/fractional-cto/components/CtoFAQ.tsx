import { useState } from 'react';
import type { FaqItem } from '../types/fractional-cto.types';
import { PiCaretDownBold } from 'react-icons/pi';

interface CtoFAQProps {
  data: FaqItem[];
}

export default function CtoFAQ({ data }: CtoFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="cto-faq glass-section">
      <div className="cto-faq__container">
        <h2 className="section-title">
          Frequently Asked <span className="text-highlight">Questions</span>
        </h2>
        <p className="section-subtitle">
          Common questions about Fractional CTO services, engagement models, and pricing
        </p>

        <div className="faq-accordion">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`faq-accordion-item ${
                activeIndex === idx ? 'active' : ''
              }`}
            >
              <button
                className="faq-accordion-header"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={activeIndex === idx}
              >
                <h3 className="faq-accordion-question">{item.question}</h3>
                <PiCaretDownBold className="faq-accordion-icon" />
              </button>

              <div className="faq-accordion-content">
                <div className="faq-accordion-answer">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
