import React from "react";
import "./BookingPageStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import BookingForm from "../components/BookingForm.js";
import HeroSection from "../components/HeroSection.js";
import restaurant from "../assets/restaurant.jpg";


 function BookingPage(props) {

  return (
    <>
      <div className="res-body-container" role="main">
        <header role="banner">
          <Header />
        </header>
        <main className="res-main-container" aria-label="Main content">
          <div className="hero-image-hero-section-container">
            <section className="hero-image">
              <img
                className="restaurant-img"
                src={restaurant}
                alt="outdoor patio of a restaurant with a fresh, bright ambience"
              />
            </section>
            <section className="res-hero-section" aria-label="Hero section">
              <HeroSection
                title="Reservations"
                subtitle="Delicious Cuisine and Unforgettable Ambience Await!"
              />
            </section>
          </div>
          <section
            className="reservations-section-container"
            aria-label="Reservations section"
          >
            <BookingForm />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default BookingPage;
