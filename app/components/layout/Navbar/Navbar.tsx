import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  PiCaretDownBold,
  PiRobotDuotone,
  PiMagnifyingGlassDuotone,
  PiShieldCheckDuotone,
  PiPlugsConnectedDuotone,
  PiCodeDuotone,
  PiGitBranchDuotone
} from 'react-icons/pi';

export default function Navbar() {
  // whenever the route changes, make sure the menu is closed
  const { pathname } = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLLIElement>(null);

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

  const handleScrollToROI = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // first thing: always close the menu
    setIsMenuOpen(false);

    // if we're on homepage, smooth-scroll
    if (pathname === '/') {
      e.preventDefault();
      const target = document.getElementById('ROI-Section');
      if (target) {
        const yOffset = -80; // adjust if you have a sticky header
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // otherwise go to /roi-calulator
      e.preventDefault();
      navigate('/roi-calulator');
      // optional: close the mobile menu if open
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="navbar-logo-left" role="banner">
      <div className="container">
        <div className="navbar-wrapper">
          <Link to="/" className="logo-link">
            REGAINFLOW
          </Link>

          <nav
            role="navigation"
            className={`nav-menu-wrapper w-nav-menu ${
              isMenuOpen ? 'open' : ''
            }`}
          >
            <ul className="nav-menu-two">
              <li>
                <Link
                  to="/"
                  className="button-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/engineers"
                  className="button-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ENGINEERS
                </Link>
              </li>
              <li className="dropdown" ref={dropdownRef}>
                <button
                  className="button-drop-down-wrapper"
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  aria-label="Toggle services menu"
                >
                  <span className="button-drop-down-link">SERVICES</span>
                  <PiCaretDownBold
                    className={`dropdown-icon ${
                      isServicesDropdownOpen ? 'rotate' : ''
                    }`}
                    size={16}
                  />
                </button>
                <div
                  className={`nav-dropdown-list ${
                    isServicesDropdownOpen ? 'w--open' : ''
                  }`}
                >
                  <Link
                    to="/services/ai-automation"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiRobotDuotone size={24} className="nav-dropdown-icon" />
                    <span>AI Automation</span>
                  </Link>
                  <Link
                    to="/services/rag-search"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiMagnifyingGlassDuotone
                      size={24}
                      className="nav-dropdown-icon"
                    />
                    <span>RAG & Search</span>
                  </Link>
                  <Link
                    to="/services/data-validation"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiShieldCheckDuotone
                      size={24}
                      className="nav-dropdown-icon"
                    />
                    <span>Data Validation</span>
                  </Link>
                  <Link
                    to="/services/system-integration"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiPlugsConnectedDuotone
                      size={24}
                      className="nav-dropdown-icon"
                    />
                    <span>System Integration</span>
                  </Link>
                  <Link
                    to="/services/full-stack-engineering"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiCodeDuotone size={24} className="nav-dropdown-icon" />
                    <span>Full-Stack</span>
                  </Link>
                  <Link
                    to="/services/devops"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiGitBranchDuotone
                      size={24}
                      className="nav-dropdown-icon"
                    />
                    <span>DevOps</span>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link
                    to="/services"
                    className="dropdown-view-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  to="/client-results"
                  className="button-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CLIENT RESULTS
                </Link>
              </li>
            </ul>
            <div className="mobile-menu-cta">
              <a
                href="https://form.typeform.com/to/SOXnbS4E"
                className="button w-button"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </a>
            </div>
          </nav>

          <div className="call-to-action desktop-only">
            <a
              href="https://form.typeform.com/to/SOXnbS4E"
              className="button w-button"
              target="_blank"
              rel="noopener"
            >
              CONTACT US
            </a>
          </div>

          <div
            className={`menu-button w-nav-button ${isMenuOpen ? 'open' : ''}`}
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
