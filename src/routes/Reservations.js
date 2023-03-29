import React, { useState } from "react";
import "./ReservationsStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ReservationForm from "../components/ReservationForm.js";
import HeroSection from "../components/HeroSection.js";
import restaurant from "../assets/restaurant.jpg";

export const reservationData = {
  date: "",
  time: "",
  occasion: "",
  guests: "",
  seating: "",
  specialRequests: "",
};

// const Reservations = () => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [occasion, setOccasion] = useState("");
//   const [guests, setGuests] = useState("");
//   const [seating, setSeating] = useState("");
//   const [specialRequests, setSpecialRequests] = useState("");

//   const [guestCount, setGuestCount] = useState(0);

//   const increment = () => {
//     if (guestCount < 20) {
//       setGuestCount(guestCount + 1);
//     }
//   };

//   const decrement = () => {
//     if (guestCount > 0) {
//       setGuestCount(guestCount - 1);
//     }
//   };

//   const handleReservationSubmit = (reservationData) => {
//     const queryParams = new URLSearchParams(reservationData).toString();
//     window.location.href = `/reservations/customerContact?${queryParams}`;
//   };

//   return (
//     <body className="reservations-container">
//       <Header />
//       <main className="reservations-main-container">
//         <HeroSection
//           heroImage={restaurant}
//           imageAlt="outdoor patio of a restaurant with a fresh, bright ambience"
//           title="Reservations"
//           subtitle="Delicious Cuisine and Unforgettable Ambience Await!"
//         />
//         <section className="reservation-form-container">
//           <h2>Reservation Details</h2>
//           <form
//             className="reservations-form"
//             onSubmit={handleReservationSubmit}
//           >
//             <div className="date">
//               <label htmlFor="date">Date</label>
//               <input
//                 value={date}
//                 type="date"
//                 onChange={(reservationData) =>
//                   setDate(reservationData.target.value)
//                 }
//                 id="date"
//                 name="date"
//                 className="form-control"
//                 required
//               />
//             </div>
//             <div className="time">
//               <label htmlFor="time">Time</label>
//               <select
//                 value={time}
//                 id="time"
//                 onChange={(reservationData) =>
//                   setTime(reservationData.target.value)
//                 }
//                 name="time"
//                 className="form-control"
//                 required
//               >
//                 <option value="select-time">Select a Time</option>
//                 <option value="11:00 AM">11:00 AM</option>
//                 <option value="11:30 AM">11:30 AM</option>
//                 <option value="12:00 PM">12:00 PM</option>
//                 <option value="12:30 PM">12:30 PM</option>
//                 <option value="1:00 PM">1:00 PM</option>
//                 <option value="1:30 PM">1:30 PM</option>
//                 <option value="2:00 PM">2:00 PM</option>
//                 <option value="2:30 PM">2:30 PM</option>
//                 <option value="3:00 PM">3:00 PM</option>
//                 <option value="3:30 PM">3:30 PM</option>
//                 <option value="4:00 PM">4:00 PM</option>
//                 <option value="4:30 PM">4:30 PM</option>
//                 <option value="5:00 PM">5:00 PM</option>
//                 <option value="5:30 PM">5:30 PM</option>
//                 <option value="6:00 PM">6:00 PM</option>
//                 <option value="6:30 PM">6:30 PM</option>
//                 <option value="7:00 PM">7:00 PM</option>
//                 <option value="7:30 PM">7:30 PM</option>
//                 <option value="8:00 PM">8:00 PM</option>
//                 <option value="8:30 PM">8:30 PM</option>
//                 <option value="9:00 PM">9:00 PM</option>
//                 <option value="9:30 PM">9:30 PM</option>
//               </select>
//             </div>
//             <div className="occasion">
//               <label htmlFor="occasion">Occasion</label>
//               <select
//                 value={occasion}
//                 onChange={(reservationData) =>
//                   setOccasion(reservationData.target.value)
//                 }
//                 id="occasion"
//                 name="occasion"
//                 className="form-control"
//                 required
//               >
//                 <option value="select-occasion">Select an Occasion</option>
//                 <option value="birthday">Birthday</option>
//                 <option value="anniversary">Anniversary</option>
//                 <option value="engagement">Engagement</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <div className="guests">
//               <label htmlFor="guests">Guests</label>
//               <span>
//                 <button type="button" onClick={decrement}>
//                   -
//                 </button>
//                 <input
//                   type="text"
//                   id="guests"
//                   name="guests"
//                   value={guestCount}
//                   onChange={(event) => setGuestCount(event.target.value)}
//                   className="form-control"
//                 />
//                 <button type="button" onClick={increment}>
//                   +
//                 </button>
//               </span>
//             </div>
//             <div className="seating-radio-buttons">
//               <label htmlFor="seating">Seating</label>
//               <span
//                 value={seating}
//                 onChange={(reservationData) =>
//                   setSeating(reservationData.target.value)
//                 }
//                 id="seating"
//                 name="seating"
//                 className="form-control"
//                 required
//               >
//                 <input type="radio" name="seating" id="indoor" value="indoor" />
//                 <label htmlFor="indoor">Indoor</label>
//                 <input
//                   type="radio"
//                   name="seating"
//                   id="outdoor"
//                   value="outdoor"
//                 />
//                 <label htmlFor="outdoor">Outdoor</label>
//               </span>
//             </div>
//             <div className="special-requests">
//               <label htmlFor="special-requests">Special Requests</label>
//               <div>
//                 <textarea
//                   value={specialRequests}
//                   id="special-requests"
//                   onChange={(reservationData) =>
//                     setSpecialRequests(reservationData.target.value)
//                   }
//                   name="special-requests"
//                 ></textarea>
//               </div>
//             </div>
//             <div className="save-continue">
//               <button type="submit">
//                 <a href="/reservations/customerContact">Save and Continue</a>
//               </button>
//             </div>
//           </form>
//         </section>
//       </main>
//       <Footer />
//     </body>
//   );
// };

const Reservations = (props) => {
  return (
    <body className="reservations-container">
      <header>
        <Header />
      </header>
      <main className="res-main-container">
        <section className="hero-image">
          <img
          className="restaurant-img"
            src={restaurant}
            alt="outdoor patio of a restaurant with a fresh, bright ambience"
          />
        </section>
        <section className="hero-title">
          <HeroSection
            title="Reservations"
            subtitle="Delicious Cuisine and Unforgettable Ambience Await!"
          />
        </section>
        <section className="reservations-section">
          <ReservationForm />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Reservations;
