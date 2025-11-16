import React from "react";
import "./Home.css"; 

function Home() {
  return (
    <section className="home-section">
      <div className="home-left">
        <h1 className="home-title">Little Lemon</h1>
        <h3 className="home-location">Los Angeles</h3>
        <p className="home-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
          tincidunt, nunc at interdum pretium, justo felis tempus urna, in 
          placerat lectus felis at lorem.
        </p>

        <button className="home-button">Make Reservation</button>
      </div>

      <div className="home-right">
        <img
          src="/home.jpg"
          alt="Little Lemon Restaurant"
          className="home-image"
        />
      </div>
    </section>
  );
}

export default Home;