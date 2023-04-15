import React, { useState } from "react";
import "./ReservationsStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ReservationForm from "../components/ReservationForm.js";
import HeroSection from "../components/HeroSection.js";
import restaurant from "../assets/restaurant.jpg";



function Reservations(props) {
  return (
    <div className="res-body-container">
      <header>
        <Header />
      </header>
      <main className="res-main-container">
        <section className="hero-image">
          <img
            className="restaurant-img"
            src={restaurant}
            alt="outdoor patio of a restaurant with a fresh, bright ambience"
          />
        </section>
        <section className="res-hero-section">
          <HeroSection
            title="Reservations"
            subtitle="Delicious Cuisine and Unforgettable Ambience Await!"
          />
        </section>
        <section className="reservations-section-container">
          <ReservationForm />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Reservations;
