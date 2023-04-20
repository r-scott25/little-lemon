import React, { useState } from "react";
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

    const updatedAvailableTimes = [...props.availableTimes];

    // Remove booked times from available times
    props.bookedTimes.forEach((time) => {
      props.dispatchAvailableTimes({ type: "remove", payload: time });
    });

    // Add selected time to available times
    if (props.selectedTime && !props.bookedTimes.includes(props.selectedTime)) {
      props.dispatchAvailableTimes({
        type: "add",
        payload: props.selectedTime,
      });
    }

    navigate("/reservations/customerContact");
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
      // navigate("/reservations/customerContact");
      console.log(values);
    },
    validationSchema: reservationSchema,
  });

  return (
    <>
      <section className="reservations-container">
        <h2 className="res-form-title">Reservation Details</h2>
        {formik.values && (
          <form onSubmit={handleFormSubmit}>
            <div className="reservation-form-container">
              <div className="input-label">
                <label htmlFor="date">DATE</label>
              </div>
              <div className="data-input date-container">
                <input
                  type="date"
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
                  id="date"
                  name="date"
                />
                {formik.errors.date && formik.touched.date && (
                  <p className="error">{formik.errors.date}</p>
                )}
              </div>
              <div className="input-label">
                <label htmlFor="time">TIME</label>
              </div>
              <div className="data-input">
                <select
                  id="time"
                  name="time"
                  value={formik.values.time}
                  onBlur={formik.handleBlur}
                  onChange={(event) => {
                    formik.handleChange(event);
                  }}
                >
                  <option value="">Select a Time</option>
                  {props.availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {formik.errors.time && formik.touched.time && (
                  <p className="error">{formik.errors.time}</p>
                )}
              </div>
              <div className="input-label">
                <label htmlFor="occasion">OCCASION</label>
              </div>
              <div className="data-input">
                <select
                  type="text"
                  value={formik.values.occasion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.occasion && formik.touched.occasion
                      ? "input-error"
                      : ""
                  }`}
                  id="occasion"
                  name="occasion"
                >
                  <option value="select-occasion">Select an Occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">Engagement</option>
                  <option value="other">Other</option>
                </select>
                {formik.errors.occasion && formik.touched.occasion && (
                  <p className="error">{formik.errors.occasion}</p>
                )}
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
                      value={formik.values.guests}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`${
                        formik.errors.guests && formik.touched.guests
                          ? "input-error"
                          : ""
                      }`}
                      id="guests"
                      name="guests"
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
                {formik.errors.guests && formik.touched.guests && (
                  <p className="error">{formik.errors.guests}</p>
                )}
              </div>
              <div className="input-label">
                <label htmlFor="seating">SEATING</label>
              </div>
              <div className="data-input">
                <span
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
                    />
                    <label htmlFor="indoor">Indoor</label>
                  </div>
                  <div className="outdoor-seating">
                    <input
                      type="radio"
                      name="seating"
                      id="outdoor"
                      value="outdoor"
                    />
                    <label htmlFor="outdoor">Outdoor</label>
                  </div>
                  <div className="no-pref-seating">
                    <input
                      type="radio"
                      name="seating"
                      id="noPreference"
                      value="noPreference"
                    />
                    <label htmlFor="noPreference">No Preference</label>
                  </div>
                </span>
                {formik.errors.seating && formik.touched.seating && (
                  <p className="error">{formik.errors.seating}</p>
                )}
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
                  />
                </div>
              </div>
            </div>
            <div className="save-continue">
              <button type="submit" className="save-btn" value="submit">
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
