import React, { useState, useEffect } from "react";
import "./BookingFormStyles.css";
import { useFormik } from "formik";
import { reservationSchema } from "../Validations/ReservationValidation";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    props.updateBookingInfo(name, value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    formik.setTouched({
      date: true,
      time: true,
      occasion: true,
      guests: true,
      seating: true,
      specialRequests: true,
    });

    // Validate all fields
    formik.validateForm();

    if (Object.keys(formik.errors).length > 0) {
      console.log("Form has errors");
      return;
    }

    // Check if any fields have been touched
    if (Object.keys(formik.touched).length === 0) {
      console.log("No fields have been touched");
      return;
    }

    if (formik.isValid) {
      const updatedAvailableTimes = [...props.availableTimes];

      // Remove booked times from available times
      props.bookedTimes.forEach((time) => {
        props.dispatchAvailableTimes({ type: "remove", payload: time });
      });

      // Add selected time to available times
      if (
        props.selectedTime &&
        !props.bookedTimes.includes(props.selectedTime)
      ) {
        props.dispatchAvailableTimes({
          type: "add",
          payload: props.selectedTime,
        });
      }
      console.log(props.availableTimes);
      navigate("/reservations/customerContact");
    } else {
      // form is invalid, show error message or do something else
      console.log("Form is invalid");
    }
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      occasion: "",
      guests: 0,
      seating: "",
      specialRequests: "",
    },
    onSubmit: (values) => {
      handleFormSubmit();
      console.log(values);
    },
    validationSchema: reservationSchema,
  });

  return (
    <>
      <section
        className="reservations-container"
        aria-labelledby="res-form-title"
      >
        <h2 className="res-form-title">Reservation Details</h2>
        {formik.values && (
          <form
            onSubmit={handleFormSubmit}
            role="form"
            aria-labelledby="Reservation Details"
          >
            <div className="reservation-form-container">
              <div className="input-label">
                <label htmlFor="date">DATE</label>
              </div>
              <div className="data-input date-container">
                <input
                  type="date"
                  id="date"
                  name="date"
                  aria-label="Reservation date"
                  aria-describedby="dateError"
                  aria-invalid={
                    formik.errors.date && formik.touched.date ? "true" : "false"
                  }
                  value={formik.values.date}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange(e);
                  }}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.date && formik.touched.date
                      ? "input-error"
                      : ""
                  }`}
                />
                <div id="dateError" role="alert">
                  {formik.errors.date && formik.touched.date && (
                    <p className="error">{formik.errors.date}</p>
                  )}
                </div>
              </div>
              <div className="input-label">
                <label htmlFor="time">TIME</label>
              </div>
              <div className="data-input">
                <select
                  id="time"
                  name="time"
                  aria-label="Reservation time"
                  aria-describedby="timeError"
                  aria-live="assertive"
                  value={formik.values.time}
                  onChange={(event) => {
                    formik.handleChange(event);
                  }}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.time && formik.touched.time
                      ? "input-error"
                      : ""
                  }`}
                >
                  <option value="">Select a Time</option>
                  {props.availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <div id="timeError" role="alert">
                  {formik.errors.time && formik.touched.time && (
                    <p className="error">{formik.errors.time}</p>
                  )}
                </div>
              </div>
              <div className="input-label">
                <label htmlFor="occasion">OCCASION</label>
              </div>
              <div className="data-input">
                <select
                  type="text"
                  id="occasion"
                  name="occasion"
                  aria-label="Reservation occasion"
                  aria-describedby="occasionError"
                  value={formik.values.occasion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.occasion && formik.touched.occasion
                      ? "input-error"
                      : ""
                  }`}
                >
                  <option value="select-occasion">Select an Occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">Engagement</option>
                  <option value="other">Other</option>
                </select>
                <div id="occasionError" role="alert">
                  {formik.errors.occasion && formik.touched.occasion && (
                    <p className="error">{formik.errors.occasion}</p>
                  )}
                </div>
              </div>
              <div className="input-label">
                <label htmlFor="guests">GUESTS</label>
              </div>
              <div className="data-input">
                <span className="guests-counter">
                  <span className="minus-btn-span">
                    <button
                      type="button"
                      className="counter-button"
                      id="minus-button"
                      onClick={() => {
                        if (formik.values.guests > 0) {
                          formik.handleChange({
                            target: {
                              name: "guests",
                              value: formik.values.guests - 1,
                            },
                          });
                        }
                      }}
                    >
                      -
                    </button>
                  </span>
                  <span className="guest-count-input">
                    <input
                      type="text"
                      id="guests"
                      name="guests"
                      aria-label="Reservation guest count"
                      aria-describedby="guestsError"
                      value={formik.values.guests}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`${
                        formik.errors.guests && formik.touched.guests
                          ? "input-error"
                          : ""
                      }`}
                    />
                  </span>
                  <span className="plus-btn-span">
                    <button
                      type="button"
                      // onClick={increment}
                      className="counter-button"
                      id="plus-button"
                      onClick={() => {
                        if (formik.values.guests < 20) {
                          formik.handleChange({
                            target: {
                              name: "guests",
                              value: formik.values.guests + 1,
                            },
                          });
                        }
                      }}
                    >
                      +
                    </button>
                  </span>
                </span>
                <div id="guestsError" role="alert">
                  {formik.errors.guests && formik.touched.guests && (
                    <p className="error">{formik.errors.guests}</p>
                  )}
                </div>
              </div>
              <div className="input-label">
                <label htmlFor="seating">SEATING</label>
              </div>
              <div className="data-input">
                <span
                  aria-label="Reservation seating"
                  aria-describedby="seatingError"
                  value={formik.values.seating}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.seating && formik.touched.seating
                      ? "input-error "
                      : ""
                  }seating-container`}
                  id="seating"
                  name="seating"
                >
                  <div className="indoor-seating">
                    <input
                      type="radio"
                      name="seating"
                      id="indoor"
                      value="indoor"
                      aria-label="Reservation seating: indoor"
                    />
                    <label htmlFor="indoor">Indoor</label>
                  </div>
                  <div className="outdoor-seating">
                    <input
                      type="radio"
                      name="seating"
                      id="outdoor"
                      value="outdoor"
                      aria-label="Reservation seating: outdoor"
                    />
                    <label htmlFor="outdoor">Outdoor</label>
                  </div>
                  <div className="no-pref-seating">
                    <input
                      type="radio"
                      name="seating"
                      id="noPreference"
                      value="noPreference"
                      aria-label="Reservation seating: no preference"
                    />
                    <label htmlFor="noPreference">No Preference</label>
                  </div>
                </span>
                <div id="seatingError" role="alert">
                  {formik.errors.seating && formik.touched.seating && (
                    <p className="error">{formik.errors.seating}</p>
                  )}
                </div>
              </div>
              <div className="special-requests">
                <label
                  htmlFor="special-requests"
                  className="special-requests-label"
                >
                  SPECIAL REQUESTS
                </label>
                <div>
                  <textarea
                    value={formik.values.specialRequests}
                    onChange={formik.handleChange}
                    id="special-requests"
                    name="specialRequests"
                    className="form-control"
                    aria-label="Reservation special requests"
                    aria-describedby="special-requests-container"
                  />
                </div>
              </div>
            </div>
            <div className="save-continue">
              <button
                type="submit"
                className="save-btn"
                value="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                aria-label="Reservation save and continue button"
                aria-disabled={!formik.isValid}
              >
                Save and Continue
              </button>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default BookingForm;
