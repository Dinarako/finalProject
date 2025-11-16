import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Left column – overlapping images */}
        <div className="about-images">
          <img
            src="/greeksalad.jpg"
            alt="Little Lemon restaurant interior"
            className="about-image about-image--primary"
          />
          <img
            src="/lemon.jpg"
            alt="Fresh Mediterranean dishes at Little Lemon"
            className="about-image about-image--secondary"
          />
        </div>

        {/* Right column – text */}
        <div className="about-text">
          <h2>About Little Lemon</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla, nunc at fermentum hendrerit, nunc dolor porttitor
            mauris, sed luctus lorem nibh at ipsum. Integer sit amet elit sed
            neque pulvinar dictum. Curabitur egestas, odio ut porta commodo,
            turpis nibh porta lorem, quis accumsan sapien lorem id nunc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
