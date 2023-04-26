import React, { useState, useEffect } from "react";
import "./BookingFormStyles.css";
import { useFormik } from "formik";
import { reservationSchema } from "../Validations/ReservationValidation";
import { useNavigate } from "react-router-dom";

export default function BookingForm(props) {
  console.log(props.availableTimes);

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState(0);
  const [seating, setSeating] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const [selectedTime, setSelectedTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const handleDateChange = (event) => {
    setDate(event.target.value);

    var stringify = event.target.value;
    props.updateTimes(stringify);

    setSelectedTime(
      props.availableTimes.map((times) => <option>{times}</option>)
    );
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      occasion: "",
      guests: 0,
      seating: "",
      specialRequests: "",
      availableTimes: [...props.availableTimes],
    },
    onSubmit: (values) => {
      handleFormSubmit(values);
      console.log(values);
    },
    validationSchema: reservationSchema,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const bookingInfo = {
      date: date,
      time: time,
      occasion: occasion,
      guests: guests,
      seating: seating,
      specialRequests: specialRequests,
    };
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
      console.log("Booking Info: ", bookingInfo);
      navigate("/reservations/customerContact");
    } else {
      console.log("Form is invalid");
    }
  };

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
                  aria-required="true"
                  value={formik.values.date}
                  onChange={(event) => {
                    formik.handleChange(event);
                    handleDateChange(event);
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
                  aria-required="true"
                  value={formik.values.time}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setTime(event.target.value);
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
                    <option key={time} id={time} value={time}>
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
                  aria-required="true"
                  value={formik.values.occasion}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setOccasion(event.target.value);
                  }}
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
                          formik.setFieldValue(
                            "guests",
                            formik.values.guests - 1
                          );
                          setGuests(formik.values.guests - 1);
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
                      aria-required="true"
                      value={formik.values.guests}
                      onChange={(event) => {
                        formik.handleChange(event);
                        setGuests(event.target.value);
                      }}
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
                      className="counter-button"
                      id="plus-button"
                      onClick={() => {
                        if (formik.values.guests < 20) {
                          formik.setFieldValue(
                            "guests",
                            formik.values.guests + 1
                          );
                          setGuests(formik.values.guests + 1);
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
                  aria-required="true"
                  value={formik.values.seating}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setSeating(event.target.value);
                  }}
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
                    onChange={(event) => {
                      formik.handleChange(event);
                      setSpecialRequests(event.target.value);
                    }}
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
                name="submit"
                value="submit"
                role="button"
                disabled={!formik.isValid || formik.isSubmitting}
                aria-label="submit"
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
}
