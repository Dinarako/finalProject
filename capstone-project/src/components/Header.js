import React from "react";
import Nav from "./Nav";
import "./HeaderNav.css";

function Header() {
  return (
    <header className="site-header" role="banner">
    

      <div className="header-inner container">
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

        <Nav />
      </div>
    </header>
  );
}

export default Header;
