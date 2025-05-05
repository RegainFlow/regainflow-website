import { useState } from 'react';
import { Link } from '@remix-run/react';
import { PiListBold } from 'react-icons/pi';
import NavDropdown from '~/components/layout/NavbarDropdown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToROI = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // close mobile nav
    setIsMenuOpen(false);
    // scroll
    const section = document.getElementById('ROI-Section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-logo-left">
      <div className="navbar-logo-left-container w-nav" role="banner">
        <div className="container">
          <div className="navbar-wrapper">
            <div className="logo-link">
              <Link to="/">REGAINFLOW</Link>
            </div>

            <nav
              role="navigation"
              className={`nav-menu-wrapper w-nav-menu ${
                isMenuOpen ? 'open' : ''
              }`}
            >
              <ul className="nav-menu-two">
                <li>
                  <Link to="/" className="button-link">
                    HOME
                  </Link>
                </li>
                <li>
                  <NavDropdown />
                </li>
                <li>
                  <Link to="/about-us" className="button-link">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="contact-us-link">
                    CONTACT US
                  </Link>
                </li>
                <li className="call-to-action mobile-only">
                  <a
                    href="#ROI-Section"
                    className="button w-button"
                    onClick={handleScrollToROI}
                  >
                    <span className="text-span-29">FREE</span> ROI
                  </a>
                </li>
              </ul>
            </nav>

            <div className="call-to-action desktop-only">
              <a
                href="#ROI-Section"
                className="button w-button"
                onClick={handleScrollToROI}
              >
                <span className="text-span-29">FREE</span> ROI
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
    </div>
  );
}
