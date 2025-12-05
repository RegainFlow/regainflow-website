import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  PiCaretDownBold,
  PiStrategyDuotone,
  PiRobotDuotone,
  PiDatabaseDuotone,
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
  const [isElectricClick, setIsElectricClick] = useState(false);
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

  return (
    <div className="navbar-logo-left" role="banner">
      <div className="container">
        <div className="navbar-wrapper">
          <Link to="/" className="logo-link">
            REGAINFLOW
          </Link>

          <nav
            role="navigation"
            className={`nav-menu-wrapper w-nav-menu ${isMenuOpen ? 'open' : ''
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
                    className={`dropdown-icon ${isServicesDropdownOpen ? 'rotate' : ''
                      }`}
                    size={16}
                  />
                </button>
                <div
                  className={`nav-dropdown-list ${isServicesDropdownOpen ? 'w--open' : ''
                    }`}
                >
                  {/* Special Fractional CTO button - spans row 1-2, col 1 */}
                  <Link
                    to="/fractional-cto"
                    className={`nav-dropdown-item nav-dropdown-item-featured ${isElectricClick ? 'electric-click' : ''
                      }`}
                    style={{ gridRow: '1 / 3', gridColumn: '1 / 2' }}
                    onClick={(e) => {
                      setIsElectricClick(true);
                      // Let animation play briefly
                      setTimeout(() => {
                        setIsElectricClick(false);
                        setIsMenuOpen(false);
                      }, 600);
                    }}
                  >
                    <PiStrategyDuotone
                      size={32}
                      className="nav-dropdown-icon"
                    />
                    <span>Fractional CTO</span>
                  </Link>

                  {/* Row 1, Column 2 */}
                  <Link
                    to="/services/ai-engineering"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiRobotDuotone size={24} className="nav-dropdown-icon" />
                    <span>AI Engineering</span>
                  </Link>

                  {/* Row 1, Column 3 */}
                  <Link
                    to="/services/data-engineering"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiDatabaseDuotone
                      size={24}
                      className="nav-dropdown-icon"
                    />
                    <span>Data Engineering</span>
                  </Link>

                  {/* Row 2, Column 2 */}
                  <Link
                    to="/services/full-stack-engineering"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiCodeDuotone size={24} className="nav-dropdown-icon" />
                    <span>Full-Stack Engineering</span>
                  </Link>

                  {/* Row 2, Column 3 */}
                  <Link
                    to="/services/devops-engineering"
                    className="nav-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PiGitBranchDuotone
                      size={24}
                      className="nav-dropdown-icon"
                    />
                    <span>DevOps Engineering</span>
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
                className="neon-button-glass"
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
              className="neon-button-glass"
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
