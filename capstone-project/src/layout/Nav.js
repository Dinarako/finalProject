import React, { useState } from "react";
import "./Nav.css"; // keep your existing stylesheet

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner container">

        {/* Logo (kept exactly the same) */}
        <a href="/" className="brand" aria-label="Little Lemon — Home">
          <img
            src="/Logo.svg"
            alt="Little Lemon logo"
            className="brand__logo"
            width="160"
            height="auto"
          />
          <span className="sr-only">Little Lemon</span>
        </a>

        {/* Navigation (kept exactly as in your original Nav.js) */}
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
            <li><a href="#home" aria-current="page">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/contact">Login</a></li>
          </ul>

        </nav>

      </div>
    </header>
  );
}

export default Nav;
