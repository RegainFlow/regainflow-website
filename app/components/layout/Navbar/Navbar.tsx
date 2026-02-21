import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import {
  PiCaretDownBold,
  PiRobotDuotone,
  PiGlobeDuotone
} from 'react-icons/pi';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  return (
    <div className="navbar-logo-left" role="banner">
      <div className="container">
        <div className="navbar-wrapper">
          <Link to="/" className="logo-link">
            REGAINFLOW
          </Link>

          <nav
            role="navigation"
            className={`nav-menu-wrapper ${isMenuOpen ? 'open' : ''}`}
            ref={menuRef}
          >
            <ul className="nav-menu-two">
              <li>
                <Link to="/" className="button-link">HOME</Link>
              </li>
              <li>
                <Link to="/engineers" className="button-link">OUR TEAM</Link>
              </li>
              <li className="dropdown" ref={dropdownRef}>
                <button
                  className="button-drop-down-wrapper"
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  aria-label="Toggle services menu"
                >
                  <span className="button-drop-down-link">SERVICES</span>
                  <PiCaretDownBold
                    className={`dropdown-icon ${isServicesDropdownOpen ? 'rotate' : ''}`}
                    size={16}
                  />
                </button>
                <div className={`nav-dropdown-list ${isServicesDropdownOpen ? 'open' : ''}`}>
                  <Link to="/services/digital-transformation" className="nav-dropdown-item">
                    <PiGlobeDuotone size={24} className="nav-dropdown-icon" />
                    <span>Digital Transformation</span>
                  </Link>

                  <Link to="/services/ai-transformation" className="nav-dropdown-item">
                    <PiRobotDuotone size={24} className="nav-dropdown-icon" />
                    <span>AI Transformation</span>
                  </Link>

                  <div className="dropdown-divider" />
                  <Link to="/services" className="dropdown-view-all">
                    View All Services →
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/client-results" className="button-link">CLIENT RESULTS</Link>
              </li>
            </ul>
            <div className="mobile-menu-cta">
              <a
                href="https://form.typeform.com/to/SOXnbS4E"
                className="btn btn-neon"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACT US
              </a>
            </div>
          </nav>

          <div className="call-to-action desktop-only">
            <a
              href="https://form.typeform.com/to/SOXnbS4E"
              className="btn btn-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT US
            </a>
          </div>

          <div
            className={`menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
