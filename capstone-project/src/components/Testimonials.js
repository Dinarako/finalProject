import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <h2>Lets Hear From Our Customers</h2>

        <div className="testimonials-grid">
          {/* Card 1 */}
          <article className="testimonial-card">
            <h3 className="testimonial-name">Sophia M.</h3>
            <div className="testimonial-stars" aria-label="5 star rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>
              Little Lemon has become our go-to spot. The food is always fresh,
              and the staff make us feel like family every time we visit.
            </p>
          </article>

          {/* Card 2 */}
          <article className="testimonial-card">
            <h3 className="testimonial-name">Daniel R.</h3>
            <div className="testimonial-stars" aria-label="5 star rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>
              The Greek salad and bruschetta are incredible. You can really tell
              how much care they put into every dish.
            </p>
          </article>

          {/* Card 3 */}
          <article className="testimonial-card">
            <h3 className="testimonial-name">Emma L.</h3>
            <div className="testimonial-stars" aria-label="5 star rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>
              Cozy atmosphere, friendly service, and the lemon dessert is out of
              this world. Highly recommend!
            </p>
          </article>

          {/* Card 4 */}
          <article className="testimonial-card">
            <h3 className="testimonial-name">Marcus K.</h3>
            <div className="testimonial-stars" aria-label="5 star rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>
              Their online ordering is super easy, and the food arrives hot and
              delicious every time. Great for busy weeknights.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
