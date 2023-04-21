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
      <div className="selected-container" role="region" aria-label="Selected reservations">
        <div className="selected-reservations-container" aria-labelledby="selected-info">
          <div className="selected-icon calendar-icon">
            <img src={calendar} alt="calendar icon" aria-label="Calendar icon" />
          </div>
          <div className="selected-date">
            <h3 id="selected-info-date">{props.bookingInfo.date} Date</h3>
          </div>
          <div className="selected-icon clock-icon">
            <img src={clock} alt="clock icon" aria-label="Clock icon" />
          </div>
          <div className="selected-time">
            <h3 id="selected-info-time">{props.bookingInfo.time} Time</h3>
          </div>
          <div className="selected-icon person-icon">
            <img src={guests} alt="person icon" aria-label="Guests icon"/>
          </div>
          <div className="selected-guests">
            <h3 id="selected-info-guests">{props.bookingInfo.guests} Guests</h3>
          </div>
          <div className="selected-icon table-chair-icon">
            <img src={seating} alt="table and chair icon" aria-label="Seating icon"/>
          </div>
          <div className="selected-seating">
            <h3 id="selected-info-seating">{props.bookingInfo.seating} Seating</h3>
          </div>
          <div className="selected-icon party-horn-icon">
            <img src={occasion} alt="party horn icon" aria-label="Occasion icon"/>
          </div>
          <div className="selected-occasion">
            <h3 id="selected-info-occasion">{props.bookingInfo.occasion} Occasion</h3>
          </div>
        </div>
        <div className="requests-and-edit-container">
          <div className="special-requests">
            <div className="special-requests-title">
              <h3 id="selected-info">Special Requests</h3>
            </div>
            <div className="special-requests-text">
              <p className="special-requests-para" aria-labelledby="special-requests-heading">
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
