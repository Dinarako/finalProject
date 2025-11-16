import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // keep your existing stylesheet

function Nav() {
  const [open, setOpen] = useState(false);

  // helper: close mobile menu when a link is clicked
  const handleNavClick = () => setOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner container">

        {/* Logo */}
        <Link to="/" className="brand" aria-label="Little Lemon — Home" onClick={handleNavClick}>
          <img
            src="/Logo.svg"
            alt="Little Lemon logo"
            className="brand__logo"
            width="160"
            height="auto"
          />
          <span className="sr-only">Little Lemon</span>
        </Link>

        {/* Navigation */}
        <nav className="primary-nav" aria-label="Primary">

          {/* Mobile toggle button */}
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true" className="hamburger"></span>
          </button>

          {/* Nav list */}
          <ul
            id="primary-menu"
            className={`nav-list ${open ? "nav-list--open" : ""}`}
          >
            {/* HOME -> route "/" which renders Main -> Home.js */}
            <li>
              <Link to="/" onClick={handleNavClick}>
                Home
              </Link>
            </li>

            {/* These still scroll to sections on the main page (if you have ids set) */}
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#specials" onClick={handleNavClick}>Specials</a></li>
            <li><a href="#testimonials" onClick={handleNavClick}>Testimonials</a></li>

            {/* Example route links if you add those pages later */}
            <li>
              <Link to="/order" onClick={handleNavClick}>
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick}>
                Login
              </Link>
            </li>
          </ul>

        </nav>

      </div>
    </header>
  );
}

export default Nav;
