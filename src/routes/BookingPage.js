import React, { useReducer } from "react";
import "./BookingPageStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import BookingForm from "../components/BookingForm.js";
import HeroSection from "../components/HeroSection.js";
import restaurant from "../assets/restaurant.jpg";

// Initialize the available times as an array of strings
export function initializeTimes() {
  return [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];
}




// Update the available times based on the selected date

export function updateTimes(date) {
  // Update the available times based on the selected date
  // For now, we'll just return the same initializeTimes regardless of the date
  return initializeTimes();
};


function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  console.log("availableTimes:", availableTimes);
  console.log("updateTimes:", updateTimes);

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
            <BookingForm
              availableTimes={availableTimes}
              updateTimes={dispatch}
            />
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
