import footerStyles from './footer.css?url';
import { Link } from 'react-router';

export const links = () => [{ rel: 'stylesheet', href: footerStyles }];

export default function Footer() {
  return (
    <footer className="footer-dark">
      {/* Top row */}
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo-wrap">
          <Link to="/" className="logo-link">
            REGAINFLOW
          </Link>
          <p className="footer-logo-blurb">
            Senior engineers available for C2C contracts and project-based consulting.
            Production-ready expertise in AI/ML, automation, and full-stack development.
          </p>
          <img
            src="/images/regain_flow_logo.png"
            alt="Regain Flow Logo"
            className="footer-logo"
          />
        </div>

        {/* Link blocks */}
        <div className="footer-link-blocks">
          <div className="footer-block">
            <div className="title-small">Services</div>
            <Link to="/services/c2c-contracting" className="footer-link">
              C2C Contracting & Consulting
            </Link>
          </div>
          <div className="footer-block">
            <div className="title-small">Company</div>
            <Link to="/terms" className="footer-link">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/engineers" className="footer-link">
              Engineers
            </Link>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <a href="https://form.typeform.com/to/SOXnbS4E" className="footer-link" target="_blank" rel="noopener">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © Copyright 2025, Regain Flow LLC | Site made by Regain Flow Agents 😎
        </div>
      </div>
    </footer>
  );
}
