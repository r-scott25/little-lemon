import React, { useState } from "react";
import { useFormik } from "formik";
import "./CustomerContactFormStyles.css";
import { customerContactSchema } from "../validations/CustomerContactValidation.js";
import ConfirmationModal from "./ConfirmationModal.js";
import "./ConfirmationModalStyles.css";
import Logo from "../assets/Logo.svg";
import calendarEE9972 from "../assets/calendar-EE9972.svg";
import clockEE9972 from "../assets/clock-EE9972.svg";
import guestsEE9972 from "../assets/guests-EE9972.svg";
import seatingEE9972 from "../assets/seating-EE9972.svg";
import occasionEE9972 from "../assets/occasion-EE9972.svg";
import homeIcon from "../assets/homeIcon.svg";

function CustomerContactForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textUpdates, setTextUpdates] = useState(false);

  //// useState for Confirm Reservation Modal ////
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const customerContactInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      textUpdates: textUpdates,
    };
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      guests: true,
      phone: true,
      textUpdates: false,
    });
    validateForm();

    if (Object.keys(errors).length > 0) {
      console.log("Form has errors");
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

    // Check if any fields have been touched
    if (Object.keys(touched).length === 0) {
      console.log("No fields have been touched");
      return;
    }
    if (isValid) {
      console.log("Customer Contact Info: ", customerContactInfo);
    } else {
      console.log("Form is invalid");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    event.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    setTouched,
    handleBlur,
    validateForm,
    handleChange,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      textUpdates: false,
    },
    onSubmit: (values) => {
      handleFormSubmit(values);
      console.log(values);
    },
    validationSchema: customerContactSchema,
  });

  console.log(errors);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    handleChange({
      target: {
        name,
        value: checked ? true : false,
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

  return (
    <>
      <div className="dividing-line" role="separator">
        .
      </div>
      <div
        className="contact-info-container"
        role="region"
        aria-label="contact-info-container"
      >
        <h2 className="contact-form-title" id="your-details-title">
          Your Details
        </h2>
        <form
          className="contact-form"
          onSubmit={handleFormSubmit}
          aria-labelledby="Your Details"
        >
          <div className="contact-form-container">
            <div className="firstName-label">
              <label htmlFor="firstName">First Name</label>
            </div>

            <div className="firstName-input">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                aria-label="First Name"
                aria-invalid={
                  errors.firstName && touched.firstName ? "true" : "false"
                }
                aria-describedby="firstNameError"
                aria-required="true"
                value={values.firstName}
                onChange={(event) => {
                  handleChange(event);
                  setFirstName(event.target.value);
                }}
                onBlur={handleBlur}
                className={`${
                  errors.firstName && touched.firstName ? "input-error" : ""
                } ${hoveredInputId === "firstName" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {errors.firstName && touched.firstName && (
                <p className="error" id="firstNameError">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="lastName-label">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="lastName-input">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-invalid={
                  errors.lastName && touched.lastName ? "true" : "false"
                }
                aria-describedby="lastNameError"
                aria-required="true"
                value={values.lastName}
                onChange={(event) => {
                  handleChange(event);
                  setLastName(event.target.value);
                }}
                onBlur={handleBlur}
                className={`${
                  errors.lastName && touched.lastName ? "input-error" : ""
                } ${hoveredInputId === "lastName" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {errors.lastName && touched.lastName && (
                <p className="error" id="lastNameError">
                  {errors.lastName}
                </p>
              )}
            </div>
            <div className="email-label">
              <label htmlFor="email">Email</label>
            </div>
            <div className="email-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                aria-label="Email"
                aria-invalid={errors.email && touched.email ? "true" : "false"}
                aria-describedby="emailError"
                aria-required="true"
                value={values.email}
                onChange={(event) => {
                  handleChange(event);
                  setEmail(event.target.value);
                }}
                onBlur={handleBlur}
                className={`${
                  errors.email && touched.email ? "input-error" : ""
                } ${hoveredInputId === "email" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {errors.email && touched.email && (
                <p className="error" id="emailError">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="phone-label">
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="phone-input">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                aria-invalid={errors.phone && touched.phone ? "true" : "false"}
                aria-describedby="phoneError"
                aria-required="true"
                value={values.phone}
                onChange={(event) => {
                  handleChange(event);
                  setPhone(event.target.value);
                }}
                onBlur={handleBlur}
                className={`${
                  errors.phone && touched.phone ? "input-error" : ""
                } ${hoveredInputId === "phone" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {errors.phone && touched.phone && (
                <p className="error" id="phoneError">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="empty"></div>
            <div className="textUpdates">
              <div className="text-updates-container">
                <div className="text-updates-input">
                  <input
                    type="checkbox"
                    checked={values.textUpdates === true}
                    onChange={(event) => {
                      handleChange(event);
                      handleCheckboxChange(event);
                    }}
                    name="textUpdates"
                    id="textUpdates"
                    aria-checked={values.textUpdates ? "true" : "false"}
                    aria-labelledby="textUpdates-label"
                  />
                </div>
                <div className="text-updates-label" id="textUpdates-label">
                  <label htmlFor="textUpdates">
                    Yes, I want to receive text updates and reminders about my
                    reservation.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="reserve-btn-container">
            <button
              type="submit"
              className="btn"
              id="reserve-btn"
              aria-label="Submit reservation"
              aria-disabled={isSubmitting}
              aria-live="polite"
              aria-controls="reservation-form"
            >
              Complete Reservation
            </button>
          </div>
          <div>
            <ConfirmationModal open={isOpen} firstName={firstName}>
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
                      We look forward to dining with you, {firstName} !
                    </h2>
                    <div className="confirm-contact-requests-container">
                      <div className="confirm-and-contact-container">
                        <div className="confirm-selected-container">
                          <div className="confirm-date-icon">
                            <img src={calendarEE9972} alt="calendar icon" />
                          </div>
                          <div className="confirm-date">
                            <h3 className="confirmed-text">
                              {props.date} Month 00, 0000
                            </h3>
                          </div>
                          <div className="confirm-time-icon">
                            <img src={clockEE9972} alt="clock icon" />
                          </div>
                          <div className="confirm-time">
                            <h3 className="confirmed-text">
                              {props.time} 00:00 PM{" "}
                            </h3>
                          </div>
                          <div className="confirm-guests-icon">
                            <img src={guestsEE9972} alt="person icon" />
                          </div>
                          <div className="confirm-guests">
                            <h3 className="confirmed-text">
                              {props.guests} 00
                            </h3>
                          </div>
                          <div className="confirm-seating-icon">
                            <img
                              src={seatingEE9972}
                              alt="table and chair icon"
                            />
                          </div>
                          <div className="confirm-seating">
                            <h3 className="confirmed-text">
                              {props.seating} Seating
                            </h3>
                          </div>
                          <div className="confirm-occasion-icon">
                            <img src={occasionEE9972} alt="party horn icon" />
                          </div>
                          <div className="confirm-occasion">
                            <h3 className="confirmed-text">
                              {props.occasion} Occasion
                            </h3>
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
                          <p className="confirmed-text">
                            {props.specialRequests}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </ConfirmationModal>
          </div>
        </form>
      </div>
    </>
  );
}

export default CustomerContactForm;
