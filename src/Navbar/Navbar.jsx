import { useState } from 'react';
import { FiHome, FiBriefcase, FiUser, FiMail } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home', icon: FiHome },
  { label: 'Projects', href: '#works', icon: FiBriefcase },
  { label: 'About', href: '#about', icon: FiUser },
  { label: 'Contact', href: '#contact', icon: FiMail },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Brand Link */}
        <a
          className="navbar__brand"
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          <span className="navbar__brand-icon">{'</>'}</span>
          <span className="navbar__brand-text">
            Kerub <span className="navbar__brand-last">Saquisame</span>
          </span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        {/* Navigation Menu Links */}
        <nav
          className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <a
                key={item.label}
                className="navbar__link"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <IconComponent className="navbar__link-icon" />
                <span className="navbar__link-text">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;