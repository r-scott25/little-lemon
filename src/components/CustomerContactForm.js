import React, { useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import "./CustomerContactFormStyles.css";
import { customerContactSchema } from "../Validations/CustomerContactValidation.js";
import ConfirmationModal from "./ConfirmationModal.js";
import "./ConfirmationModalStyles.css";
import Logo from "../assets/Logo.svg";
import calendarEE9972 from "../assets/calendar-EE9972.svg";
import clockEE9972 from "../assets/clock-EE9972.svg";
import guestsEE9972 from "../assets/guests-EE9972.svg";
import seatingEE9972 from "../assets/seating-EE9972.svg";
import occasionEE9972 from "../assets/occasion-EE9972.svg";
import homeIcon from "../assets/homeIcon.svg";
import Error from "next/error";

function CustomerContactForm(props) {
  const onSubmit = async (values, actions) => {
    if (Object.keys(errors).length > 0) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      textUpdates: false,
    },
    validationSchema: customerContactSchema,
    onSubmit,
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

  const customerContactData = {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    phone: values.phone,
    textUpdates: values.textUpdates,
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

  //// useState for Confirm Reservation Modal ////
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="dividing-line">.</div>
      <div className="contact-info-container">
        <h2 className="contact-form-title">Your Details</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-container">
            <div className="firstName-label">
              <label htmlFor="firstName">First Name</label>
            </div>

            <div className="firstName-input">
              <input
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={
                //   errors.firstName && touched.firstName ? "input-error" : ""
                // }
                className={`${
                  errors.firstName && touched.firstName ? "input-error" : ""
                } ${hoveredInputId === "firstName" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              {errors.firstName && touched.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>

            <div className="lastName-label">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="lastName-input">
              <input
                type="text"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={
                //   errors.lastName && touched.lastName ? "input-error" : ""
                // }
                className={`${
                  errors.lastName && touched.lastName ? "input-error" : ""
                } ${hoveredInputId === "lastName" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
            <div className="email-label">
              <label htmlFor="email">Email</label>
            </div>
            <div className="email-input">
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={errors.email && touched.email ? "input-error" : ""}
                className={`${
                  errors.email && touched.email ? "input-error" : ""
                } ${hoveredInputId === "email" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                name="email"
                id="email"
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <div className="phone-label">
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="phone-input">
              <input
                type="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={errors.phone && touched.phone ? "input-error" : ""}
                className={`${
                  errors.phone && touched.phone ? "input-error" : ""
                } ${hoveredInputId === "phone" ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>
            <div className="empty"></div>
            <div className="textUpdates">
              <div className="text-updates-container">
                <div className="text-updates-input">
                  <input
                    type="checkbox"
                    checked={values.textUpdates === true}
                    onChange={handleCheckboxChange}
                    name="textUpdates"
                    id="textUpdates"
                  />
                </div>
                <div className="text-updates-label">
                  <label htmlFor="textUpdates">
                    Yes, I want to receive text updates and reminders about my
                    reservation.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="reserve-btn-container">
            <a
              href="#"
              onClick={handleSubmit}
              type="submit"
              className="btn"
              id="reserve-btn"
            >
              Complete Reservation
            </a>
          </div>
          <div>
            <ConfirmationModal open={isOpen}>
              <div className="confirm-modal-container" id="modal">
                <div className="confirm-header">
                  <div className="home-icon-div">
                    <a href="/">
                      <img src={homeIcon} alt="home icon" className="confirm-home-icon"/>
                    </a>
                  </div>
                  <div className="confirm-header-container">
                    <h1 className="confirm-title">Reservation Confirmed</h1>
                    <h2 className="confirm-subtitle">A confirmation email has been sent.</h2>
                  </div>
                </div>
                <div className="confirm-main-container">
                  <div className="logo-background">
                    <img src={Logo} className="confirm-lemon-logo" alt="Little Lemon Logo" />
                  </div>
                  <section className="reservation-details">
                    <h2 className="dine-with-you-text">We look forward to dining with you!</h2>
                    <div className="confirm-contact-requests-container">
                    <div className="confirm-and-contact-container">
                    <div className="confirm-selected-container">
                      <div className="confirm-date-icon">
                        <img src={calendarEE9972} alt="calendar icon" />
                      </div>
                      <div className="confirm-date">
                        <h3 className="confirmed-text">{props.date} Month 00, 0000</h3>
                      </div>
                      <div className="confirm-time-icon">
                        <img src={clockEE9972} alt="clock icon" />
                      </div>
                      <div className="confirm-time">
                        <h3 className="confirmed-text">{props.time} 00:00 PM </h3>
                      </div>
                      <div className="confirm-guests-icon">
                        <img src={guestsEE9972} alt="person icon" />
                      </div>
                      <div className="confirm-guests">
                        <h3 className="confirmed-text">{props.guests} 00</h3>
                      </div>
                      <div className="confirm-seating-icon">
                        <img src={seatingEE9972} alt="table and chair icon" />
                      </div>
                      <div className="confirm-seating">
                        <h3 className="confirmed-text">{props.seating} Seating</h3>
                      </div>
                      <div className="confirm-occasion-icon">
                        <img src={occasionEE9972} alt="party horn icon" />
                      </div>
                      <div className="confirm-occasion">
                        <h3 className="confirmed-text">{props.occasion} Occasion</h3>
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
                      <h3 className="confirm-requests-label">SPECIAL REQUESTS</h3>
                      <div className="confirm-requests-box">
                      <p className="confirmed-text">{props.specialRequests}</p>
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
