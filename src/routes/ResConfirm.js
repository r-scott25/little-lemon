import "./ResConfirmStyles.css";
import { reservationData } from "./Reservations.js";
import homeIcon from "../assets/homeIcon.svg";
import Logo from "../assets/Logo.svg";
import calendarEE9972 from "../assets/calendar-EE9972.svg";
import clockEE9972 from "../assets/clock-EE9972.svg";
import guestsEE9972 from "../assets/guests-EE9972.svg";
import seatingEE9972 from "../assets/seating-EE9972.svg";
import occasionEE9972 from "../assets/occasion-EE9972.svg";

const ResConfirm = (props) => {
  return (
    <>
      <header>
        <img src={homeIcon} alt="home icon" />
        <div>
          <h1>Reservation Confirmed</h1>
          <h2>A confirmation email has been sent.</h2>
        </div>
      </header>
      <main>
        <hero>
          <img src={Logo} alt="Little Lemon Logo" />
        </hero>
        <section className="reservation-details">
          <h2>We look forward to dining with you!</h2>
          <div className="confirm-selected">
            <div className="selected-date">
              <img src={calendarEE9972} alt="calendar icon" />
              <h3>{props.reservationData.date} DATE Placeholder</h3>
            </div>
            <div className="selected-time">
              <img src={clockEE9972} alt="clock icon" />
              <h3>{props.reservationData.time} TIME Placeholder</h3>
            </div>
            <div className="selected-guests">
              <img src={guestsEE9972} alt="person icon" />
              <h3>{props.reservationData.guests} GUESTS Placeholder</h3>
            </div>
            <div className="selected-seating">
              <img src={seatingEE9972} alt="table and chair icon" />
              <h3>{props.reservationData.seating} SEATING Placeholdre</h3>
            </div>
            <div className="selected-occasion">
              <img src={occasionEE9972} alt="party horn icon" />
              <h3>{props.reservationData.occasion} OCCASION Placeholder</h3>
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
              <p>{props.reservationData.specialRequests}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ResConfirm;
