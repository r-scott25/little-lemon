import React from "react";
import "./SelectedReservationsStyles.css";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";
import guests from "../assets/guests.svg";
import seating from "../assets/seating.svg";
import occasion from "../assets/occasion.svg";

function SelectedReservations(props) {
  return (
    <div>
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
          <h3>{props.reservationData.seating} Seating Placeholder</h3>
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
    </div>
  );
}

export default SelectedReservations;
