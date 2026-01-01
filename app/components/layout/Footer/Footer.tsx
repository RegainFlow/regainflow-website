import footerStyles from './footer.css?url';
import { Link } from 'react-router';

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
            Senior engineers available for C2C contracts and project-based
            consulting. Production-ready expertise in AI/ML, automation, and
            full-stack development.
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
            <Link to="/fractional-cto" className="footer-link">
              Fractional CTO
            </Link>
            <Link to="/services/ai-engineering" className="footer-link">
              AI Engineering
            </Link>
            <Link to="/services/data-engineering" className="footer-link">
              Data Engineering
            </Link>
            <Link to="/services/full-stack-engineering" className="footer-link">
              Full-Stack Engineering
            </Link>
            <Link to="/services/devops-engineering" className="footer-link">
              DevOps Engineering
            </Link>
          </div>

          {/* Column 2: Company */}
          <div className="footer-block">
            <div className="title-small">Company</div>
            <Link to="/engineers" className="footer-link">
              Our Engineers
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
            <Link to="/w2-vs-c2c" className="footer-link">
              W2 vs C2C Calculator
            </Link>
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
