import React, { useState } from "react";
import "./CustomerContactFormStyles.css";
import ResConfirm from "./ResConfirm.js";
import homeIcon from "../assets/homeIcon.svg";
import Logo from "../assets/Logo.svg";
import calendarEE9972 from "../assets/calendar-EE9972.svg";
import clockEE9972 from "../assets/clock-EE9972.svg";
import guestsEE9972 from "../assets/guests-EE9972.svg";
import seatingEE9972 from "../assets/seating-EE9972.svg";
import occasionEE9972 from "../assets/occasion-EE9972.svg";

function CustomerContactForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textUpdates, setTextUpdates] = useState(false);
  const [errors, setErrors] = useState({});

  //// useState for Confirm Reservation Modal ////
  const [isOpen, setIsOpen] = useState(false);

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
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsOpen(true);
    }
  };

  return (
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
            // onChange={(event) => setTextUpdates(event.target.value)}
            onChange={(event) =>
              setTextUpdates(event.target.checked ? "Yes" : "No")
            }
            name="text-updates"
            id="text-updates"
          />
          <label htmlFor="text-updates">
            Yes, I want to receive text updates and reminders about my
            reservation.
          </label>
        </div>
        <div className="reserve-btn">
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="reserve-btn"
            id="reserve-btn"
          >
            Complete Reservation
          </button>
        </div>
        <div>
          <ResConfirm open={isOpen}>
            <div className="confirm-modal-container" id="modal">
              <div className="confirm-header">
                {/* <a href="/">
                  <img src={homeIcon} alt="home icon" />
                </a> */}
                <div>
                  <h1>Reservation Confirmed</h1>
                  <h2>A confirmation email has been sent.</h2>
                </div>
              </div>
              <div className="confirm-main">
                <hero>
                  <img src={Logo} alt="Little Lemon Logo" />
                </hero>
                <section className="reservation-details">
                  <h2>We look forward to dining with you!</h2>
                  <div className="confirm-selected">
                    <div className="selected-date">
                      <img src={calendarEE9972} alt="calendar icon" />
                      <h3>{props.date} DATE Placeholder</h3>
                    </div>
                    <div className="selected-time">
                      <img src={clockEE9972} alt="clock icon" />
                      <h3>{props.time} TIME Placeholder</h3>
                    </div>
                    <div className="selected-guests">
                      <img src={guestsEE9972} alt="person icon" />
                      <h3>{props.guests} GUESTS Placeholder</h3>
                    </div>
                    <div className="selected-seating">
                      <img src={seatingEE9972} alt="table and chair icon" />
                      <h3>{props.seating} SEATING Placeholder</h3>
                    </div>
                    <div className="selected-occasion">
                      <img src={occasionEE9972} alt="party horn icon" />
                      <h3>{props.occasion} OCCASION Placeholder</h3>
                    </div>
                    <div className="lit-lem-contact">
                      <h3>LITTLE LEMON</h3>
                      <p>
                        123 Lemon St.
                        <br />
                        Chicago, IL 60654
                      </p>
                      <p>(312) 555-5555</p>
                      <p>lemon@email.com</p>
                    </div>
                    <div className="confirm-requests">
                      <h3>Special Requests</h3>
                      <p>{props.specialRequests}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </ResConfirm>
        </div>
      </form>
    </section>
  );
}

export default CustomerContactForm;
