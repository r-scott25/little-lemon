import React, { useState } from "react";
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
      <section className="reservation-form-container">
        <h2>Reservation Details</h2>
        <form className="reservations-form" onSubmit={handleSubmit}>
          <div className="date">
            <label htmlFor="date">Date</label>
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
          <div className="time">
            <label htmlFor="time">Time</label>
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
          <div className="occasion">
            <label htmlFor="occasion">Occasion</label>
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
          <div className="guests">
            <label htmlFor="guests">Guests</label>
            <span>
              <button type="button" onClick={decrement}>
                -
              </button>
              <input
                type="text"
                value={values.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.guests && touched.guests ? "input-error" : ""}
                id="guests"
                name="guests"
              />

              <button type="button" onClick={increment}>
                +
              </button>
            </span>
            {errors.guests && touched.guests && (
              <p className="error">{errors.guests}</p>
            )}
          </div>
          <div className="seating-radio-buttons">
            <label htmlFor="seating">Seating</label>
            <span
              value={values.seating}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.seating && touched.seating ? "input-error" : ""}
              id="seating"
              name="seating"
            >
              <input type="radio" name="seating" id="indoor" value="indoor" />
              <label htmlFor="indoor">Indoor</label>
              <input type="radio" name="seating" id="outdoor" value="outdoor" />
              <label htmlFor="outdoor">Outdoor</label>
              <input
                type="radio"
                name="seating"
                id="noPreference"
                value="noPreference"
              />
              <label htmlFor="noPreference">No Preference</label>
            </span>
            {errors.seating && touched.seating && (
              <p className="error">{errors.seating}</p>
            )}
          </div>
          <div className="specialRequests">
            <label htmlFor="specialRequests">Special Requests</label>
            <div>
              <textarea
                value={values.specialRequests}
                onChange={handleChange}
                id="specialRequests"
                name="specialRequests"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="save-continue">
            <button
              onClick={handleSubmit}
              type="submit"
              className="save-btn"
              id="save-btn"
            >
              <a href="/reservations/customerContact">Save and Continue</a>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ReservationForm;
