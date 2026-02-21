import {
  PiHandshakeDuotone,
  PiCalendarCheckDuotone,
  PiCheckCircleDuotone
} from 'react-icons/pi';
import { bookingUrl } from '~/config/site.config';
import partnershipStyles from './partnership-cta.css?url';

export const links = () => [
  { rel: 'stylesheet', href: partnershipStyles }
];

const partnerBullets = [
  'White-label delivery — your brand, our engineering',
  'Revenue sharing model — grow together',
  'Expand your service catalog with zero hiring'
];

export default function PartnershipCTA() {
  return (
    <section className="partnership-section glass-section">
      <div className="container">
        <div className="partnership-header">
          <PiHandshakeDuotone size={48} className="partnership-icon" />
          <h2 className="section-title">
            <span className="text-highlight">Partner</span> With Us
          </h2>
          <p className="section-subtitle">
            Are you an agency, consultancy, or service provider? Add AI transformation
            and digital modernization to your service offerings.
          </p>
        </div>

        <div className="partnership-card glass-card">
          <p className="partnership-description">
            We work as your back-end engineering team &mdash; you bring the clients,
            we deliver the results.
          </p>
          <ul className="partnership-bullets">
            {partnerBullets.map((bullet, i) => (
              <li key={i} className="partnership-bullet">
                <PiCheckCircleDuotone size={20} className="partnership-check" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <a
            href={bookingUrl}
            className="neon-button-glass partnership-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiCalendarCheckDuotone size={22} />
            Let&apos;s Talk Partnership
          </a>
        </div>
      </div>
    </section>
  );
}
