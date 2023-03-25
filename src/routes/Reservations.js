import React from "react";
import ReservationsStyles from "./ReservationsStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js";
import restaurant from "../assets/restaurant.jpg";

const Reservations = () => {
  return (
    <>
      <Header />
      <main className="reservations-main-container">
        <HeroSection
          heroImage={restaurant}
          imageAlt="outdoor patio of a restaurant with a fresh, bright ambience"
          title="Reservations"
          subtitle="Delicious Cuisine and Unforgettable Ambience Await!"
        />
        <section className="reservation-form-container">
          <h2>Reservation Details</h2>
          {/* <form onSubmit={}>
        <label>Date</label>
        <input type="date" id="date" name="date" className="form-control"></input>
      </form> */}
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Reservations;
