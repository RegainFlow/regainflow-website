import { useActiveSection } from '~/hooks/useActiveSection';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionTrackerProps {
  sections: Section[];
}

export default function SectionTracker({ sections }: SectionTrackerProps) {
  const activeSection = useActiveSection(sections.map((s) => s.id));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show tracker after initial load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`section-tracker ${isVisible ? 'visible' : ''}`}
      aria-label="Page sections navigation"
    >
      <div className="section-tracker-inner">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`tracker-dot ${
              activeSection === section.id ? 'active' : ''
            }`}
            aria-label={`Navigate to ${section.label}`}
            title={section.label}
          >
            <span className="dot-inner" />
            <span className="dot-label">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
