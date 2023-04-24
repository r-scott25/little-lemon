import React, { useReducer, useState, useEffect, Link } from "react";
import "./App.css";
import Home from "./routes/Home";
import BookingPage from "./routes/BookingPage";
import SelectedReservations from "./components/SelectedReservations";
import About from "./routes/About";
import Menu from "./routes/Menu";
import CustomerContactPage from "./routes/CustomerContactPage";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";
import ShoppingBasket from "./routes/ShoppingBasket";
import ConfirmationModal from "./components/ConfirmationModal";

import { Routes, Route } from "react-router-dom";

export function initializeTimes() {
  return [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];
}

// updateTimes Function: handles state change. Changes availableTimes based on the selected date

export function updateTimes(selectedDate) {
  // Here you can update the available times based on the selected date
  // For now, we'll just return the same initialTimes regardless of the date
  return initializeTimes();
}

function App() {
  //// Booking Info ///
  const [bookingInfo, setBookingInfo] = useState(null);

  //////////// Available Times ///////////

  // Available Times useReducer

  // 1.  Define an initial state and a reducer function that will handle state updates.

  function availableTimesReducer(state, action) {
    switch (action.type) {
      case "set":
        //******validation**********************

        //************************************ */
        return action.payload;
      case "add":
        return [...state, action.payload];
      case "remove":
        return state.filter((time) => time !== action.payload);
      default:
        return state;
    }
  }

  // 2. replace the useState call with a useReducer call

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );
  console.log("Available times:", availableTimes);
  // 3.  Replace the setAvailableTimes function with a dispatchAvailableTimes function

  // Handler functions for selecting and booking a time
  function handleTimeSelection(time) {
    setSelectedTime(time);
  }

  function handleBookingInfo(booking) {
    setBookingInfo({
      time: selectedTime,
    });

    // Remove the booked time from the available times
    dispatchAvailableTimes({ type: "remove", payload: selectedTime });

    console.log("Available times:", availableTimes);

    // Clear the selected time
    setSelectedTime("");
  }

  //// Selected Time ////
  const [selectedTime, setSelectedTime] = useState("");

  //// Booked Times ////
  const [bookedTimes, setBookedTimes] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} id="home-route" />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              onBooking={handleBookingInfo}
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
              bookedTimes={bookedTimes}
              setBookedTimes={setBookedTimes}
              updateTimes={updateTimes}
            />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<ShoppingBasket />} />
        <Route
          path="/reservations/customercontact"
          element={<CustomerContactPage />}
        />

        <Route
          path="/reservations/customercontact/selectedreservations"
          element={<SelectedReservations />}
        />
        <Route
          path="reservations/customercontact/resconfirm"
          element={<ConfirmationModal />}
        />
      </Routes>
    </>
  );
}

export default App;
