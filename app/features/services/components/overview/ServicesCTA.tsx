import { Link } from 'react-router';
import { PiCalendarCheckDuotone, PiArrowRightBold } from 'react-icons/pi';
import servicesCtaStyles from './services-cta.css?url';

export const links = () => [{ rel: 'stylesheet', href: servicesCtaStyles }];

export default function ServicesCTA() {
  return (
    <section className="services-cta-section glass-section">
      <div className="services-cta-container glass-card">
        <div className="services-cta-content">
          <h2 className="services-cta-title">
            Ready to <span className="text-highlight">Transform</span> Your
            Operations?
          </h2>

          <p className="services-cta-description">
            Schedule a free consultation to discuss your automation, search, or
            engineering challenges. We'll map your requirements, identify
            opportunities, and show you exactly how we can deliver measurable
            ROI.
          </p>

          <div className="services-cta-buttons">
            <a
              href="https://form.typeform.com/to/SOXnbS4E"
              className="neon-button-glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiCalendarCheckDuotone size={24} />
              Schedule Free Consultation
            </a>

            <Link
              to="/client-results"
              className="neon-button-glass neon-button-secondary"
            >
              <PiArrowRightBold size={20} />
              View Case Studies
            </Link>
          </div>

          <p className="services-cta-note">
            Free consultation · No commitment · Flexible C2C engagement terms
          </p>
        </div>
      </div>
    </section>
  );
}
