import footerStyles from './footer.css?url';
import { Link } from 'react-router';
import { bookingUrl } from '~/config/site.config';

export const links = () => [{ rel: 'stylesheet', href: footerStyles }];

export default function Footer() {
  return (
    <footer className="footer-dark">
      {/* Top row - Split Layout */}
      <div className="footer-top">
        {/* Left Side: Branding & Identity */}
        <div className="footer-logo-wrap">
          <Link to="/" className="logo-link">
            REGAINFLOW
          </Link>
          <p className="footer-logo-blurb">
            Websites, automation, and practical AI for growing businesses that
            want more leads, faster response, and less manual work.
          </p>
          <img
            src="/images/regain_flow_logo.png"
            alt="RegainFlow Logo"
            className="footer-logo"
          />
        </div>

        {/* Right Side: 3-Column Link Grid */}
        <div className="footer-link-blocks">
          {/* Column 1: Services */}
          <div className="footer-block">
            <div className="title-small">Services</div>
            <Link to="/services" className="footer-link">
              All Services
            </Link>
            <Link to="/services/digital-transformation" className="footer-link">
              Digital Transformation
            </Link>
            <Link to="/services/ai-transformation" className="footer-link">
              AI Transformation
            </Link>
          </div>

          {/* Column 2: Company */}
          <div className="footer-block">
            <div className="title-small">Company</div>
            <Link to="/engineers" className="footer-link">
              Our Team
            </Link>
            <Link to="/client-results" className="footer-link">
              Client Results
            </Link>
            <a
              href="https://form.typeform.com/to/SOXnbS4E"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-block">
            <div className="title-small">Resources</div>
            <a
              href={bookingUrl}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Assessment
            </a>
            <Link to="/terms" className="footer-link">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <div className="footer-copy">© Copyright 2025, REGAINFLOW LLC</div>
      </div>
    </footer>
  );
}
