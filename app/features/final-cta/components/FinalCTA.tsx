import { PiRocketLaunchDuotone, PiCalendarCheckDuotone } from 'react-icons/pi';
import finalCtaStyles from './final-cta.css?url';

export const links = () => [{ rel: 'stylesheet', href: finalCtaStyles }];

export default function FinalCTA() {
  return (
    <section className="final-cta-section glass-section">
      <div className="final-cta-container glass-card">
        <div className="final-cta-content">
          <h2 className="final-cta-title">
            Ready to <span className="text-highlight">Ship Faster</span>?
          </h2>

          <p className="final-cta-description">
            Stop wasting time on lengthy hiring processes. Get production-ready
            senior engineers on your team in days, not months.
          </p>

          <div className="final-cta-buttons">
            <a
              href="https://cal.com/regainflow/30min"
              className="neon-button-glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiCalendarCheckDuotone size={24} />
              Schedule Consultation
            </a>

            <a
              href="/engineers"
              className="neon-button-glass neon-button-secondary"
            >
              <PiRocketLaunchDuotone size={24} />
              View Engineer Profiles
            </a>
          </div>

          <p className="final-cta-note">
            Free consultation · No commitment · Flexible engagement terms
          </p>
        </div>
      </div>
    </section>
  );
}
