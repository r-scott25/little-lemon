import React, { useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import "./CustomerContactFormStyles.css";
import { customerContactSchema } from "../Validations/CustomerContactValidation.js";
import ConfirmationModal from "./ConfirmationModal.js";
import Logo from "../assets/Logo.svg";
import calendarEE9972 from "../assets/calendar-EE9972.svg";
import clockEE9972 from "../assets/clock-EE9972.svg";
import guestsEE9972 from "../assets/guests-EE9972.svg";
import seatingEE9972 from "../assets/seating-EE9972.svg";
import occasionEE9972 from "../assets/occasion-EE9972.svg";
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
              className={
                errors.firstName && touched.firstName ? "input-error" : ""
              }
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
              className={
                errors.lastName && touched.lastName ? "input-error" : ""
              }
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
              className={errors.email && touched.email ? "input-error" : ""}
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
              className={errors.phone && touched.phone ? "input-error" : ""}
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
            <a href="#"
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
                <div>
                  <h1>Reservation Confirmed</h1>
                  <h2>A confirmation email has been sent.</h2>
                </div>
              </div>
              <div className="confirm-main">
                <div>
                  <img src={Logo} alt="Little Lemon Logo" />
                </div>
                <section className="reservation-details">
                  <h2>We look forward to dining with you!</h2>
                  <div className="confirm-selected">
                    <div className="selected-date">
                      <img src={calendarEE9972} alt="calendar icon" />
                      <h3>{props.date} DATE Placeholder</h3>
                    </div>
                    <div className="selected-time">
                      <img src={clockEE9972} alt="clock icon" />
                      <h3>{props.time} TIME Placeholder</h3>
                    </div>
                    <div className="selected-guests">
                      <img src={guestsEE9972} alt="person icon" />
                      <h3>{props.guests} GUESTS Placeholder</h3>
                    </div>
                    <div className="selected-seating">
                      <img src={seatingEE9972} alt="table and chair icon" />
                      <h3>{props.seating} SEATING Placeholder</h3>
                    </div>
                    <div className="selected-occasion">
                      <img src={occasionEE9972} alt="party horn icon" />
                      <h3>{props.occasion} OCCASION Placeholder</h3>
                    </div>
                    <div className="lit-lem-contact">
                      <h3>LITTLE LEMON</h3>
                      <p>
                        123 Lemon St.
                        <br />
                        Chicago, IL 60654
                      </p>
                      <p>(312) 555-5555</p>
                      <p>lemon@email.com</p>
                    </div>
                    <div className="confirm-requests">
                      <h3>Special Requests</h3>
                      <p>{props.specialRequests}</p>
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
