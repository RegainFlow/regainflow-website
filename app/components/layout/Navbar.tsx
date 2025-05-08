import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '@remix-run/react';
import NavDropdown from '~/components/layout/NavbarDropdown';

export default function Navbar() {
  // whenever the route changes, make sure the menu is closed
  const { pathname } = useLocation();
  useEffect(() => setIsMenuOpen(false), [pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToROI = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // first thing: always close the menu
    setIsMenuOpen(false);

    // if we’re on homepage, smooth‑scroll
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
      // otherwise go to /roi
      e.preventDefault();
      navigate('/roi');
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
                <NavDropdown onSelect={() => setIsMenuOpen(false)} />
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
            <Link
              to={pathname === '/' ? '#ROI-Section' : '/roi'}
              className="button w-button"
              onClick={handleScrollToROI}
            >
              <span className="text-span-29">FREE</span> ROI
            </Link>
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
