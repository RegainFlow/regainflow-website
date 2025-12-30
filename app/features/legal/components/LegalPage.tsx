import { useState, useEffect, useCallback } from 'react';
import {
  PiListBulletsDuotone,
  PiArrowUpDuotone,
  PiEnvelopeDuotone,
  PiMapPinDuotone,
  PiGlobeDuotone,
  PiCaretDownDuotone,
  PiCaretUpDuotone,
  PiCopyDuotone,
  PiCheckDuotone
} from 'react-icons/pi';
import type { LegalPageProps, SubsectionContent } from '../types/legal.types';
import { contactInfo } from '../data/legalData';

export default function LegalPage({
  pageTitle,
  effectiveDate,
  sections,
  introText,
  icon
}: LegalPageProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Track scroll position for active section and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Show back-to-top button after scrolling 300px
      setShowBackToTop(window.scrollY > 300);

      // Find active section
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsTocOpen(false); // Close TOC on mobile after navigation
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }, []);

  const renderContent = (content: SubsectionContent) => {
    switch (content.type) {
      case 'paragraph':
        return <p className="legal-paragraph">{content.content as string}</p>;
      case 'list':
        return (
          <ul className="legal-list">
            {(content.content as string[]).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      case 'subheading':
        return <h4 className="legal-subheading">{content.content as string}</h4>;
      default:
        return null;
    }
  };

  return (
    <div className="legal-page">
      {/* Header */}
      <div className="legal-header">
        <div className="legal-header-content">
          {icon && <div className="legal-icon">{icon}</div>}
          <h1 className="legal-title">{pageTitle}</h1>
          <div className="legal-badge">
            <span>Last Updated: {effectiveDate}</span>
          </div>
          {introText && <p className="legal-intro">{introText}</p>}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="legal-layout">
        {/* Table of Contents - Desktop Sidebar */}
        <aside className="legal-toc-sidebar">
          <div className="legal-toc-sticky">
            <div className="legal-toc-header">
              <PiListBulletsDuotone size={24} />
              <h2>Table of Contents</h2>
            </div>
            <nav className="legal-toc-nav">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`legal-toc-item ${
                    activeSection === section.id ? 'active' : ''
                  }`}
                  aria-label={`Navigate to ${section.title}`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Table of Contents - Mobile Accordion */}
        <div className="legal-toc-mobile">
          <button
            className="legal-toc-toggle"
            onClick={() => setIsTocOpen(!isTocOpen)}
            aria-expanded={isTocOpen}
            aria-label="Toggle table of contents"
          >
            <PiListBulletsDuotone size={20} />
            <span>Table of Contents</span>
            {isTocOpen ? <PiCaretUpDuotone size={20} /> : <PiCaretDownDuotone size={20} />}
          </button>
          {isTocOpen && (
            <nav className="legal-toc-nav-mobile">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`legal-toc-item ${
                    activeSection === section.id ? 'active' : ''
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Content */}
        <main className="legal-content">
          {/* Sections */}
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`legal-section ${section.isHighlight ? 'highlight' : ''}`}
            >
              <h2 className="legal-section-title">{section.title}</h2>

              {section.subsections?.map((subsection, idx) => (
                <div key={idx} className="legal-subsection">
                  {subsection.title && (
                    <h3 className="legal-subsection-title">{subsection.title}</h3>
                  )}
                  <div className="legal-subsection-content">
                    {subsection.content.map((content, contentIdx) => (
                      <div key={contentIdx}>{renderContent(content)}</div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}

          {/* Contact Card */}
          <div className="legal-contact-card">
            <h2 className="legal-contact-title">Contact Information</h2>
            <div className="legal-contact-grid">
              <div className="legal-contact-item">
                <div className="legal-contact-icon">
                  <PiMapPinDuotone size={24} />
                </div>
                <div className="legal-contact-details">
                  <div className="legal-contact-label">Address</div>
                  <div className="legal-contact-value">
                    <strong>{contactInfo.company}</strong>
                    <br />
                    {contactInfo.address.join(', ')}
                    <br />
                    {contactInfo.city}, {contactInfo.state} {contactInfo.zip}
                    <br />
                    {contactInfo.country}
                  </div>
                </div>
              </div>

              <div className="legal-contact-item">
                <div className="legal-contact-icon">
                  <PiGlobeDuotone size={24} />
                </div>
                <div className="legal-contact-details">
                  <div className="legal-contact-label">Website</div>
                  <a
                    href={`https://${contactInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="legal-contact-link"
                  >
                    {contactInfo.website}
                  </a>
                </div>
              </div>

              <div className="legal-contact-item">
                <div className="legal-contact-icon">
                  <PiEnvelopeDuotone size={24} />
                </div>
                <div className="legal-contact-details">
                  <div className="legal-contact-label">Email</div>
                  <div className="legal-contact-email">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="legal-contact-link"
                    >
                      {contactInfo.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="legal-copy-button"
                      aria-label="Copy email address"
                      title="Copy to clipboard"
                    >
                      {copiedEmail ? (
                        <PiCheckDuotone size={18} />
                      ) : (
                        <PiCopyDuotone size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="legal-back-to-top"
          aria-label="Back to top"
          title="Back to top"
        >
          <PiArrowUpDuotone size={24} />
        </button>
      )}
    </div>
  );
}
