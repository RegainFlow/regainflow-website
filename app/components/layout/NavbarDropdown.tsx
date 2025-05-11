import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from '@remix-run/react';
import { PiCaretDownBold } from 'react-icons/pi';

interface NavDropdownProps {
  onSelect?: () => void;
}

export default function NavDropdown({ onSelect }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleLinkClick() {
    setIsOpen(false);
    onSelect?.();
  }

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        className="button-drop-down"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>SERVICES</span>
        <PiCaretDownBold
          size={16}
          className={`${isOpen ? 'rotate' : ''} dropdown-icon`}
        />
      </button>

      <div className={`nav-dropdown-list ${isOpen ? 'w--open' : ''}`}>
        <Link
          to="/services/automation-audit"
          className="button-link"
          onClick={handleLinkClick}
        >
          Automation Audit + Strategy
        </Link>
        <Link
          to="/services/rapid-solutions"
          className="button-link"
          onClick={handleLinkClick}
        >
          Rapid R&D and Solutions
        </Link>
      </div>
    </div>
  );
}
