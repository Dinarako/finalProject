import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="primary-nav" aria-label="Primary">
      {/* Mobile toggle (hidden on desktop via CSS) */}
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-menu"
        onClick={() => setOpen(v => !v)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span aria-hidden="true" className="hamburger"></span>
      </button>

      <ul
        id="primary-menu"
        className={`nav-list ${open ? "nav-list--open" : ""}`}
      >
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
