import React from "react";
import "./Specials.css";

function Specials() {
  return (
    <section id="specials" className="specials-section">
      {/* Top row: heading + button (like reference) */}
      <div className="specials-header">
        <h2>This Weeks Specials!</h2>
        <button className="specials-btn">Online Menu</button>
      </div>

      {/* Cards */}
      <div className="specials-grid">
        {/* Card 1 */}
        <article className="special-card">
          <img
            src="/greek-salad.jpg"
            alt="Greek salad"
            className="special-card__image"
          />
          <div className="special-card__body">
            <div className="special-card__title-row">
              <h3>Greek salad</h3>
              <span className="special-card__price">$12.99</span>
            </div>
            <p className="special-card__description">
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button className="special-card__cta">
              <span>Order a delivery</span>
              <span className="special-card__icon" aria-hidden="true">
                🛎️
              </span>
            </button>
          </div>
        </article>

        {/* Card 2 */}
        <article className="special-card">
          <img
            src="/bruschetta.jpg"
            alt="Bruschetta"
            className="special-card__image"
          />
          <div className="special-card__body">
            <div className="special-card__title-row">
              <h3>Bruschetta</h3>
              <span className="special-card__price">$5.99</span>
            </div>
            <p className="special-card__description">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil, topped with
              fresh tomatoes.
            </p>
            <button className="special-card__cta">
              <span>Order a delivery</span>
              <span className="special-card__icon" aria-hidden="true">
                🛎️
              </span>
            </button>
          </div>
        </article>

        {/* Card 3 */}
        <article className="special-card">
          <img
            src="/lemon-dessert.png"
            alt="Lemon dessert"
            className="special-card__image"
          />
          <div className="special-card__body">
            <div className="special-card__title-row">
              <h3>Lemon Dessert</h3>
              <span className="special-card__price">$4.99</span>
            </div>
            <p className="special-card__description">
              This comes straight from grandma&apos;s recipe book. Every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <button className="special-card__cta">
              <span>Order a delivery</span>
              <span className="special-card__icon" aria-hidden="true">
                🛎️
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;
