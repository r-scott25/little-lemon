import React from "react";
import { Link } from "react-router-dom";
import "./HomepageHeroStyles.css";
import restaurantfood from "../assets/restaurantfood.jpg";

function HomepageHero() {
  return (
    <section className="heroHome-container">
      <div>
        <article className="heroIntro">
          <h1 className="lemon-title">Little Lemon</h1>
          <h2 className="chicago-subtitle">Chicago</h2>
          <p className="lemon-blurb">
            We are a family owned Mediterranean restaurant focused <br /> on
            traditional recipes served with a modern twist.
          </p>
          <div>
              <a  className="btn" id="smallReserveTableBtn" href="/reservations">Reserve a Table</a>
          </div>
        </article>
      </div>
      <div>
        <img
          className="server-image"
          src={restaurantfood}
          alt="restaurant server holding a plate of bread."
        />
      </div>
    </section>
  );
}

export default HomepageHero;
