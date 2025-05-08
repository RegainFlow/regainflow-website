// app/components/layout/Footer.tsx
import footerStyles from '~/components/layout/footer-custom.css?url';
import { Link } from '@remix-run/react';

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
            <Link to="/automation-roi-audit-strategy" className="footer-link">
              Automation Audit + Strategy
            </Link>
            <Link to="/rapid-prototyping" className="footer-link">
              Rapid R&D Prototyping
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
            <Link to="/about-us" className="footer-link">
              About Us
            </Link>
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
