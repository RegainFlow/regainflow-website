import { PiWrenchDuotone } from 'react-icons/pi';
import { siteConfig } from '~/config/site.config';

/**
 * Full-screen "We'll be right back" placeholder shown while the site is in
 * under-construction lockdown. Renders no internal navigation — the only link
 * is an external contact CTA so visitors can still reach the team.
 */
export default function MaintenancePage() {
  return (
    <main className="maintenance" role="main">
      <div className="maintenance-card">
        <div className="maintenance-icon" aria-hidden="true">
          <PiWrenchDuotone size={56} />
        </div>

        <span className="maintenance-wordmark">REGAINFLOW</span>

        <h1 className="maintenance-title">We&rsquo;ll be right back</h1>

        <p className="maintenance-subtitle">
          Our site is getting an upgrade and will be back online shortly. Thanks
          for your patience — need to reach us in the meantime?
        </p>

        <a
          href={siteConfig.links.typeform}
          className="neon-button-glass maintenance-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
      </div>
    </main>
  );
}
