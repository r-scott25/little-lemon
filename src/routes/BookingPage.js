import React, { useState } from "react";
import "./BookingPageStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import BookingForm from "../components/BookingForm.js";
import HeroSection from "../components/HeroSection.js";
import restaurant from "../assets/restaurant.jpg";

function BookingPage(props) {
  // The state for the BookingForm component is managed by the useState hook in the BookingPage component,
  // and the state is passed down to the BookingForm component as a prop (updateBookingInfo).
  // The BookingForm component then updates the state of the BookingPage component by calling the updateBookingInfo function.
  const [bookingInfo, setBookingInfo] = useState({
    date: "",
    time: "",
    occasion: "",
    guests: 0,
    seating: "",
    specialRequests: "",
  });

  const updateBookingInfo = (
    date,
    time,
    occasion,
    guests,
    seating,
    specialRequests
  ) => {
    setBookingInfo({
      date: date,
      time: time,
      occasion: occasion,
      guests: guests,
      seating: seating,
      specialRequests: specialRequests,
    });
  };
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
          {/* the state is passed down to the BookingForm component as a prop (updateBookingInfo) */}
          <BookingForm
            updateBookingInfo={updateBookingInfo}
            availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} selectedTime={props.selectedTime} setSelectedTime={props.setSelectedTime}
            bookedTimes={props.bookedTimes}
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default BookingPage;
