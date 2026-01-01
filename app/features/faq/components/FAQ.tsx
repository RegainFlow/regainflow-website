import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
import { faqData } from '../data/faqData';
import faqStyles from './faq.css?url';

export const links = () => [{ rel: 'stylesheet', href: faqStyles }];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section glass-section">
      <div className="faq-container">
        <h2 className="section-title">
          Frequently Asked <span className="text-highlight">Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about working with RegainFlow
        </p>

        <div className="faq-accordion">
          {faqData.map((faq, idx) => (
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
                <h3 className="faq-accordion-question">{faq.question}</h3>
                <PiCaretDownBold className="faq-accordion-icon" />
              </button>

              <div className="faq-accordion-content">
                <div className="faq-accordion-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
