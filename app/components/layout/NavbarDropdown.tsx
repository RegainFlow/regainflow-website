import { useState } from 'react';
import { Link } from '@remix-run/react';
import { PiCaretDownBold } from 'react-icons/pi';

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
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

      {isOpen && (
        <div className="nav-dropdown-list w--open">
          <Link to="/services/automation-audit" className="button-link">
            Automation Audit + Strategy
          </Link>
          <Link to="/services/rapid-prototyping" className="button-link">
            Rapid R&D Prototyping
          </Link>
        </div>
      )}
    </div>
  );
}
