// app/components/Footer.tsx
export default function Footer() {
  return (
    <section className="footer-dark">
      <div className="footer-wrapper">
        <div className="div-block-22">
          <div className="logo-link">
            <a href="#" className="logo-link">
              REGAINFLOW
            </a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-block">
            <div className="title-small">Services</div>
            <a href="/automation-roi-audit-strategy" className="footer-link">
              Automation Audit + Strategy
            </a>
            <a href="/rapid-prototyping" className="footer-link">
              Rapid R&D Prototyping
            </a>
          </div>

          <div className="footer-block">
            <div className="title-small">Company</div>
            <a href="#" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="div-block-34">
          <div className="text-block-13">
            © Copyright 2025, Regain Flow LLC | Site made by Regain Flow Agents
            😎
          </div>
        </div>
      </div>
    </section>
  );
}
