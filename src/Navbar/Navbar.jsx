import { useState } from "react";
import {
  FiHome,
  FiBriefcase,
  FiUser,
  FiMail,
} from "react-icons/fi";
import "./Navbar.css";

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: FiHome,
  },
  {
    label: "Projects",
    href: "#works",
    icon: FiBriefcase,
  },
  {
    label: "About",
    href: "#about",
    icon: FiUser,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: FiMail,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}

        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
        >
          <div className="navbar__brand-icon">
            {"</>"}
          </div>

          <span className="navbar__brand-text">
            Kerub
            <span className="navbar__brand-dot">
              .
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}

        <nav
          className={`navbar__links ${
            isOpen ? "navbar__links--open" : ""
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                className="navbar__link"
                onClick={closeMenu}
              >
                <Icon className="navbar__link-icon" />

                <span>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}

        <button
          className={`navbar__toggle ${
            isOpen
              ? "navbar__toggle--open"
              : ""
          }`}
          onClick={() =>
            setIsOpen(!isOpen)
          }
          aria-label="Toggle Navigation"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;