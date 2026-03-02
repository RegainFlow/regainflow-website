import { Link } from 'react-router';
import { PiCalendarCheckDuotone, PiArrowRightBold } from 'react-icons/pi';
import servicesCtaStyles from './services-cta.css?url';
import { bookingUrl } from '~/config/site.config';

export const links = () => [{ rel: 'stylesheet', href: servicesCtaStyles }];

export default function ServicesCTA() {
  return (
    <section className="services-cta-section glass-section">
      <div className="container">
        <div className="services-cta-container glass-card">
          <div className="services-cta-content">
            <h2 className="services-cta-title">
              Ready to <span className="text-highlight">Speed Up</span> the Way
              Your Business Runs?
            </h2>

            <p className="services-cta-description">
              Book a free assessment and we will show you where better systems,
              automation, or AI can create the fastest payoff for your team.
            </p>

            <div className="services-cta-buttons">
              <a
                href={bookingUrl}
                className="neon-button-glass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiCalendarCheckDuotone size={24} />
                Book Your Free Assessment
              </a>

              <Link
                to="/client-results"
                className="neon-button-glass neon-button-secondary"
              >
                <PiArrowRightBold size={20} />
                See Client Results
              </Link>
            </div>

            <p className="services-cta-note">
              Free assessment | No commitment | Clear next steps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
