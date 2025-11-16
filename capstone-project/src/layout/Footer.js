import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Logo */}
        <div className="footer__brand">
          <img
            src="/Logo.svg"                // from /public
            alt="Little Lemon logo"
            className="footer__logo"
            width="120"
            height="120"
          />
        </div>

        {/* Navigation */}
        <nav className="footer__section" aria-label="Footer navigation">
          <h4 className="footer__title">Navigation</h4>
          <ul className="footer__list">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="footer__section" aria-labelledby="contact-title">
          <h4 id="contact-title" className="footer__title">Contact</h4>
          <address className="footer__address">
            123 Lemon St.<br />
            Los Angeles, CA 90000
          </address>
          <ul className="footer__list">
            <li><a href="tel:+15551234567">(555) 123-4567</a></li>
            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
          </ul>
        </section>

        {/* Social */}
        <section className="footer__section" aria-labelledby="social-title">
          <h4 id="social-title" className="footer__title">Social Media</h4>
          <ul className="footer__list">
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
          </ul>
        </section>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
