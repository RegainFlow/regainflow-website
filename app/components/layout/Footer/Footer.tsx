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
            alt="Regain Flow Logo"
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
            <Link to="/services/ai-automation" className="footer-link">
              AI Automation
            </Link>
            <Link to="/services/rag-search" className="footer-link">
              RAG & Search
            </Link>
            <Link to="/services/data-validation" className="footer-link">
              Data Validation
            </Link>
            <Link to="/services/system-integration" className="footer-link">
              System Integration
            </Link>
            <Link to="/services/full-stack-engineering" className="footer-link">
              Full-Stack Engineering
            </Link>
            <Link to="/services/devops" className="footer-link">
              DevOps
            </Link>
          </div>

          {/* Column 2: Company */}
          <div className="footer-block">
            <div className="title-small">Company</div>
            <Link to="/engineers" className="footer-link">
              Our Engineers
            </Link>
            <Link to="/projects" className="footer-link">
              Projects
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
            <Link to="/roi-calculator" className="footer-link">
              ROI Calculator
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
        <div className="footer-copy">© Copyright 2025, Regain Flow LLC</div>
      </div>
    </footer>
  );
}
