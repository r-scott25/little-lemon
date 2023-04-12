import React, { useState } from "react";
import "./ReservationFormStyles.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { reservationSchema } from "../Validations/ReservationValidation";

function ReservationForm() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions, history) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Submit the form data here using an API call or any other method

    navigate("/reservations/customerContact");
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    actions,
  } = useFormik({
    initialValues: {
      date: "",
      time: "",
      occasion: "",
      guests: 0,
      seating: "",
      specialRequests: "",
    },
    validationSchema: reservationSchema,
    onSubmit,
  });
  console.log(errors);

  const reservationData = {
    date: values.date,
    time: values.time,
    occasion: values.occasion,
    guests: values.guests,
    seating: values.seating,
    specialRequests: values.specialRequests,
  };

  const increment = () => {
    if (values.guests < 20) {
      handleChange({
        target: {
          name: "guests",
          value: values.guests + 1,
        },
      });
    }
  };

  const decrement = () => {
    if (values.guests > 0) {
      handleChange({
        target: {
          name: "guests",
          value: values.guests - 1,
        },
      });
    }
  };

  return (
    <div>
      <section className="reservations-container">
        <h2 className="res-form-title">Reservation Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="reservation-form-container">
            <div className="input-label">
              <label htmlFor="date">DATE</label>
            </div>
            <div className="data-input date-container">
              <input
                type="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.date && touched.date ? "input-error" : ""}
                id="date"
                name="date"
              />
              {errors.date && touched.date && (
                <p className="error">{errors.date}</p>
              )}
            </div>

            <div className="input-label">
              <label htmlFor="time">TIME</label>
            </div>
            <div className="data-input">
              <select
                type="text"
                value={values.time}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.time && touched.time ? "input-error" : ""}
                id="time"
                name="time"
              >
                <option value="select-time">Select a Time</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="5:30 PM">5:30 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="6:30 PM">6:30 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="7:30 PM">7:30 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="8:30 PM">8:30 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="9:30 PM">9:30 PM</option>
              </select>
              {errors.time && touched.time && (
                <p className="error">{errors.time}</p>
              )}
            </div>

            <div className="input-label">
              <label htmlFor="occasion">OCCASION</label>
            </div>
            <div className="data-input">
              <select
                type="text"
                value={values.occasion}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.occasion && touched.occasion ? "input-error" : ""
                }
                id="occasion"
                name="occasion"
              >
                <option value="select-occasion">Select an Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
              </select>
              {errors.occasion && touched.occasion && (
                <p className="error">{errors.occasion}</p>
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
                    onClick={decrement}
                    className="counter-button"
                    id="minus-button"
                  >
                    -
                  </button>
                </span>
                <span className="guest-count-input">
                  <input
                    type="text"
                    value={values.guests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.guests && touched.guests ? "input-error" : ""
                    }
                    id="guests"
                    name="guests"
                  />
                </span>
                <span className="plus-btn-span">
                  <button
                    type="button"
                    onClick={increment}
                    className="counter-button"
                    id="plus-button"
                  >
                    +
                  </button>
                </span>
              </span>
              {errors.guests && touched.guests && (
                <p className="error">{errors.guests}</p>
              )}
            </div>

            <div className="input-label">
              <label htmlFor="seating">SEATING</label>
            </div>
            <div className="data-input">
              <span
                value={values.seating}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  errors.seating && touched.seating ? "input-error " : ""
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
                    className
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
              {errors.seating && touched.seating && (
                <p className="error">{errors.seating}</p>
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
                  value={values.specialRequests}
                  onChange={handleChange}
                  id="special-requests"
                  name="specialRequests"
                  className="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="save-continue">
              <a  onClick={handleSubmit}
              type="submit"
              className="save-btn"
              id="save-btn" href="/reservations/customerContact">Save and Continue</a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ReservationForm;
