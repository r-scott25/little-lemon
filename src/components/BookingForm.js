import React, { useState, useReducer} from "react";
import { submitAPI } from "../LittleLemonAPI.js";
import "./BookingFormStyles.css";
import { useFormik } from "formik";
import { reservationSchema } from "../validations/ReservationValidation";
import ConfirmationModal from "./ConfirmationModal.js";
import "./ConfirmationModalStyles.css";
import Logo from "../assets/Logo.svg";
import calendarEE9972 from "../assets/calendar-EE9972.svg";
import clockEE9972 from "../assets/clock-EE9972.svg";
import guestsEE9972 from "../assets/guests-EE9972.svg";
import seatingEE9972 from "../assets/seating-EE9972.svg";
import occasionEE9972 from "../assets/occasion-EE9972.svg";
import homeIcon from "../assets/homeIcon.svg";
import { initializeTimes, updateTimes, availableTimesReducer } from "./Main";

export default function BookingForm() {


  const [state, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState(0);
  const [seating, setSeating] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [textUpdates, setTextUpdates] = useState(false);

  //// useState for Confirm Reservation Modal ////
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const fetchTimes = async () => {
  //     const { date, formData } = state;
  //     const times = await fetchData(date, formData);
  //     dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
  //   };

  //   fetchTimes();
  // }, [state]);


  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    date: date,
    time: time,
    occasion: occasion,
    guests: guests,
    seating:seating,
    specialRequests: specialRequests,
    textUpdates: textUpdates,
  };

  const formik = useFormik({
    initialValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      occasion: formData.occasion,
      guests: formData.guests,
      seating: formData.seating,
      specialRequests: formData.specialRequests,
      textUpdates: formData.textUpdates,
      availableTimes: [initializeTimes.availableTimes],
    },
    onSubmit: async (values) => {
     await new Promise((r) => setTimeout(r, 500));
      submitForm(values.formData);

    },
    validationSchema: reservationSchema,
  });

  console.log("Initial Available Times: ", state.availableTimes);


  // Format date to  MM/DD/YYY
  const selectedDate = new Date(formik.values.date);

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });


  // Handler for text updates checkbox

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setTextUpdates(checked);
    formik.handleChange({
      target: {
        name: event.target.name,
        value: checked,
      },
    });
  };
  
  //// useState to change placeholder color when Hovering over input boxes ////
  const [hoveredInputId, setHoveredInputId] = useState("");

  function handleMouseEnter(event) {
    setHoveredInputId(event.target.id);
    event.target.classList.add("hovered");
  }

  function handleMouseLeave(event) {
    setHoveredInputId("");
    event.target.classList.remove("hovered");
  }

 


  async function submitForm(formData) {
    const formSubmitted = await submitAPI(formData);

    // Check if any fields have been touched
    if (Object.keys(formik.touched).length === 0) {
      console.log("No fields have been touched");
      return formik.setTouched({
        firstName: true,
        lastName: true,
        email: true,
        guests: true,
        phone: true,
        date: true,
        time: true,
        occasion: true,
        seating: true,
        specialRequests: true,
        textUpdates: false,
      });
    }

    // Validate all fields
    await formik.validateForm();

    console.log("Form errors:", formik.errors);

    if (Object.keys(formik.errors).length > 0) {
      console.log("Form has errors");
      setIsOpen(false);
    } else {
      formSubmitted(true);
      setIsOpen(true);
      formData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        occasion: formData.occasion,
        guests: formData.guests,
        seating: formData.seating,
        specialRequests: formData.specialRequests,
        textUpdates: formData.textUpdates,
      };

    }
  }
 
  console.log("Form Data: ", formData);

 async function loggingFunc() {
  console.log("Updated Available Times: ", await updateTimes(state, date).availableTimes);
 }
  

  loggingFunc();

  return (
    <>
      <section
        className="reservations-container"
        aria-labelledby="res-form-title"
      >
        <h2 className="res-form-title">Reservation Details</h2>
        {formik.values && (
          <form onSubmit={submitForm} aria-labelledby="Reservation Details">
            <div className="reservation-form-container">
              <div className="input-label">
                <label htmlFor="firstName">FIRST NAME</label>
              </div>
              <div className="contact-info firstName-input">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  aria-invalid={
                    formik.errors.firstName && formik.touched.firstName
                      ? "true"
                      : "false"
                  }
                  aria-describedby="firstNameError"
                  aria-required="true"
                  value={formik.values.firstName}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setFirstName(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.firstName && formik.touched.firstName
                      ? "input-error"
                      : ""
                  } ${hoveredInputId === "firstName" ? "hovered" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <p className="error" id="firstNameError">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>
              <div className="input-label">
                <label htmlFor="lastName">LAST NAME</label>
              </div>
              <div className="contact-info lastName-input">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  aria-invalid={
                    formik.errors.lastName && formik.touched.lastName
                      ? "true"
                      : "false"
                  }
                  aria-describedby="lastNameError"
                  aria-required="true"
                  value={formik.values.lastName}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setLastName(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.lastName && formik.touched.lastName
                      ? "input-error"
                      : ""
                  } ${hoveredInputId === "lastName" ? "hovered" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <p className="error" id="lastNameError">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
              <div className="input-label">
                <label htmlFor="email">EMAIL</label>
              </div>
              <div className="contact-info email-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  aria-label="Email"
                  aria-invalid={
                    formik.errors.email && formik.touched.email
                      ? "true"
                      : "false"
                  }
                  aria-describedby="emailError"
                  aria-required="true"
                  value={formik.values.email}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setEmail(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.email && formik.touched.email
                      ? "input-error"
                      : ""
                  } ${hoveredInputId === "email" ? "hovered" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="error" id="emailError">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="input-label">
                <label htmlFor="phone">PHONE</label>
              </div>
              <div className="contact-info phone-input">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  aria-invalid={
                    formik.errors.phone && formik.touched.phone
                      ? "true"
                      : "false"
                  }
                  aria-describedby="phoneError"
                  aria-required="true"
                  value={formik.values.phone}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setPhone(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik.errors.phone && formik.touched.phone
                      ? "input-error"
                      : ""
                  } ${hoveredInputId === "phone" ? "hovered" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="error" id="phoneError">
                    {formik.errors.phone}
                  </p>
                )}
              </div>
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
                    dispatch({
                      type: "SET_DATE",
                      payload: event.target.value,
                    });
                    setDate(event.target.value);
                    console.log("Date event.target.value: ", event.target.value);
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
                  value={state.time}
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
                  {state.availableTimes.map((time) => (
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
                  <option value="Select-occasion">Select an Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Other">Other</option>
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
                  <div className="Indoor-seating">
                    <input
                      type="radio"
                      name="seating"
                      id="Indoor"
                      value="Indoor"
                      aria-label="Reservation seating: Indoor"
                    />
                    <label htmlFor="indoor">Indoor</label>
                  </div>
                  <div className="outdoor-seating">
                    <input
                      type="radio"
                      name="seating"
                      id="Outdoor"
                      value="Outdoor"
                      aria-label="Reservation seating: Outdoor"
                    />
                    <label htmlFor="Outdoor">Outdoor</label>
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
            <div className="textUpdates">
              <div className="text-updates-container">
                <div className="text-updates-input">
                  <input
                    type="checkbox"
                    checked={formik.values.textUpdates === true}
                    onChange={(event) => {
                      formik.handleChange(event);
                      handleCheckboxChange(event);
                    }}
                    name="textUpdates"
                    id="textUpdates"
                    aria-checked={formik.values.textUpdates ? "true" : "false"}
                    aria-labelledby="textUpdates-label"
                  />
                </div>
                <div className="text-updates-label" id="textUpdates-label">
                  <label htmlFor="textUpdates">
                    I would like to receive text updates and reminders about my
                    reservation.
                  </label>
                </div>
              </div>
            </div>
            <div className="reserve-button-container">
              <button
                type="submit"
                className="reserve-button"
                name="submit"
                value="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                aria-label="submit"
                aria-disabled={!formik.isValid}
              >
                Reserve
              </button>
            </div>
            <ConfirmationModal open={isOpen}>
              <div className="confirm-modal-container" id="modal">
                <div className="confirm-header">
                  <div className="home-icon-div">
                    <a href="/">
                      <img
                        src={homeIcon}
                        alt="home icon"
                        className="confirm-home-icon"
                      />
                    </a>
                  </div>
                  <div className="confirm-header-container">
                    <h1 className="confirm-title">Reservation Confirmed</h1>
                    <h2 className="confirm-subtitle">
                      A confirmation email has been sent.
                    </h2>
                  </div>
                </div>
                <div className="confirm-main-container">
                  <div className="logo-background">
                    <img
                      src={Logo}
                      className="confirm-lemon-logo"
                      alt="Little Lemon Logo"
                    />
                  </div>
                  <section className="reservation-details">
                    <h2 className="dine-with-you-text">
                      We look forward to dining with you, {formData.firstName} !
                    </h2>
                    <div className="confirm-contact-requests-container">
                      <div className="confirm-and-contact-container">
                        <div className="confirm-selected-container">
                          <div className="confirm-date-icon">
                            <img src={calendarEE9972} alt="calendar icon" />
                          </div>
                          <div className="confirm-date">
                            <h3 className="confirmed-text">{formattedDate}</h3>
                          </div>
                          <div className="confirm-time-icon">
                            <img src={clockEE9972} alt="clock icon" />
                          </div>
                          <div className="confirm-time">
                            <h3 className="confirmed-text">{formData.time}</h3>
                          </div>
                          <div className="confirm-guests-icon">
                            <img src={guestsEE9972} alt="person icon" />
                          </div>
                          <div className="confirm-guests">
                            <h3 className="confirmed-text">{formData.guests}</h3>
                          </div>
                          <div className="confirm-seating-icon">
                            <img
                              src={seatingEE9972}
                              alt="table and chair icon"
                            />
                          </div>
                          <div className="confirm-seating">
                            <h3 className="confirmed-text">{formData.seating}</h3>
                          </div>
                          <div className="confirm-occasion-icon">
                            <img src={occasionEE9972} alt="party horn icon" />
                          </div>
                          <div className="confirm-occasion">
                            <h3 className="confirmed-text">{formData.occasion}</h3>
                          </div>
                        </div>
                        <div className="lit-lem-contact-container">
                          <h3>LITTLE LEMON</h3>
                          <p>
                            123 Lemon St.
                            <br />
                            Chicago, IL 60654
                          </p>
                          <p>(312) 555-5555</p>
                          <p>lemon@email.com</p>
                        </div>
                      </div>
                      <div className="confirm-requests">
                        <h3 className="confirm-requests-label">
                          SPECIAL REQUESTS
                        </h3>
                        <div className="confirm-requests-box">
                          <div className="confirm-requests-box-inner">
                            <p className="confirmed-text">{formData.specialRequests}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </ConfirmationModal>
          </form>
        )}
      </section>
    </>
  );
}
