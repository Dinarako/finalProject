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

  {/* Navigation FIRST (left side) */}
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
      <li>
        <Link to="/" onClick={handleNavClick}>Home</Link>
      </li>
      <li><a href="#about" onClick={handleNavClick}>About</a></li>
      <li><a href="#specials" onClick={handleNavClick}>Specials</a></li>
      <li><a href="#testimonials" onClick={handleNavClick}>Testimonials</a></li>
      <li>
        <Link to="/reservation" onClick={handleNavClick}>Reservation</Link>
      </li>
    </ul>

  </nav>

  {/* Logo SECOND (right side now) */}
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

</div>

    </header>
  );
}

export default Nav;
