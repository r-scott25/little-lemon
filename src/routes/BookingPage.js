import React, { useState, useEffect } from "react";
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

  // state variable to keep track of the selected date
  const [selectedDate, setSelectedDate] = useState("");

  // useEffect hook updates the available times when the selected date changes
  useEffect(() => {
    // Call the updateTimes function to get the updated available times
    const updatedTimes = props.updateTimes(selectedDate);

    // Dispatch the updated times to the availableTimesReducer
    props.dispatchAvailableTimes({ type: "set", payload: updatedTimes });
  }, [selectedDate]);

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
        <section className="reservations-section-container"  aria-label="Reservations section">
          {/* the state is passed down to the BookingForm component as a prop (updateBookingInfo) */}
          <BookingForm
            updateBookingInfo={updateBookingInfo}
            availableTimes={props.availableTimes}
            dispatchAvailableTimes={props.dispatchAvailableTimes}
            bookedTimes={props.bookedTimes}
            setBookedTimes={props.setBookedTimes}
            aria-label="Booking form"
            aria-live="assertive"
            aria-atomic="true"
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
