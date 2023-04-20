import React, { useState, useContext, useEffect } from "react";
import "./SelectedReservationsStyles.css";
import BookingForm from "./BookingForm.js";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";
import guests from "../assets/guests.svg";
import seating from "../assets/seating.svg";
import occasion from "../assets/occasion.svg";

function SelectedReservations(props) {


  return (
    <>
      <div className="selected-container">
        <div className="selected-reservations-container">
          <div className="selected-icon calendar-icon">
            <img src={calendar} alt="calendar icon" />
          </div>
          <div className="selected-date">
            <h3>{props.bookingInfo.date} Date</h3>
          </div>
          <div className="selected-icon clock-icon">
            <img src={clock} alt="clock icon" />
          </div>
          <div className="selected-time">
            <h3>{props.bookingInfo.time} Time</h3>
          </div>
          <div className="selected-icon person-icon">
            <img src={guests} alt="person icon" />
          </div>
          <div className="selected-guests">
            <h3>{props.bookingInfo.guests} Guests</h3>
          </div>
          <div className="selected-icon table-chair-icon">
            <img src={seating} alt="table and chair icon" />
          </div>
          <div className="selected-seating">
            <h3>{props.bookingInfo.seating} Seating</h3>
          </div>
          <div className="selected-icon party-horn-icon">
            <img src={occasion} alt="party horn icon" />
          </div>
          <div className="selected-occasion">
            <h3>{props.bookingInfo.occasion} Occasion</h3>
          </div>
        </div>
        <div className="requests-and-edit-container">
          <div className="special-requests">
            <div className="special-requests-title">
              <h3>Special Requests</h3>
            </div>
            <div className="special-requests-text">
              <p className="special-requests-para">
                {props.bookingInfo.specialRequests}Customer's text place holder
                for special requests
              </p>
            </div>
          </div>
          <div className="edit-button">
            <a type="btn" className="edit-res-btn" href="/reservations">
              Edit Reservation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedReservations;
