import React, { useState } from "react";
import "./CustomerContactPageStyles.css";
import { reservationData } from "./Reservations.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js";
import dinnerTable from "../assets/dinnerTable.jpg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";
import guests from "../assets/guests.svg";
import seating from "../assets/seating.svg";
import occasion from "../assets/occasion.svg";

const CustomerContactPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textUpdates, setTextUpdates] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (firstName === "") {
      errors.firstName = "Please enter your first name.";
    }
    if (lastName === "") {
      errors.lastName = "Please enter your last name.";
    }
    if (email === "") {
      errors.email = "Please enter your email address.";
    }
    if (phone === "") {
      errors.phone = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Submit the form data
    }
  };

  return (
    <>
      <Header />
      <main className="contactInfo-main-container">
        <HeroSection
          heroImage={dinnerTable}
          imageAlt="birds-eye-view of diners at a table with dishes of Italian food"
          title="Contact Information"
          subtitle="We’ll keep you updated on your reservation!"
        />

        <section className="selected-reservations">
          <div className="selected-date">
            <img src={calendar} alt="calendar icon" />
            <h3>{props.reservationData.date} Date Placeholder</h3>
          </div>
          <div className="selected-time">
            <img src={clock} alt="clock icon" />
            <h3>{props.reservationData.time} Time Placeholder</h3>
          </div>
          <div className="selected-guests">
            <img src={guests} alt="person icon" />
            <h3>{props.reservationData.guests} Guests Placeholder</h3>
          </div>
          <div className="selected-seating">
            <img src={seating} alt="table and chair icon" />
            <h3>{props.reservationData.seating} Seating Placeholdre</h3>
          </div>
          <div className="selected-occasion">
            <img src={occasion} alt="party horn icon" />
            <h3>{props.reservationData.occasion} Occasion Placeholder</h3>
          </div>
          <div>
            <h3>Special Requests</h3>
            <p>{props.reservationData.specialRequests}</p>
          </div>
          <button>
            <a href="/reservations">Edit Reservation</a>
          </button>
        </section>
        <section className="contact-info">
          <h2>Your Details</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="first-name">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                name="first-name"
                id="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="last-name">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="text-updates">
              <input
                type="checkbox"
                value={textUpdates}
                onChange={(event) => setTextUpdates(event.target.value)}
                name="text-updates"
                id="text-updates"
              />
              <label htmlFor="text-updates">
                Yes, I want to receive text updates and reminders about my
                reservation.
              </label>
            </div>
            <div className="reserve-btn">
              <button type="submit" className="reserve-btn" id="reserve-btn">
                Complete Reservation
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CustomerContactPage;
