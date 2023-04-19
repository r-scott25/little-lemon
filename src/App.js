import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import Home from "./routes/Home";
import BookingForm from "./components/BookingForm";
import BookingPage from "./routes/BookingPage";
import SelectedReservations from "./components/SelectedReservations";
import About from "./routes/About";
import Menu from "./routes/Menu";
import CustomerContactPage from "./routes/CustomerContactPage";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";
import ShoppingCart from "./routes/ShoppingCart";
import ConfirmationModal from "./components/ConfirmationModal";

import { Routes, Route } from "react-router-dom";

function App() {


  //// Booking Info ///
  const [bookingInfo, setBookingInfo] = useState(null);
  function handleBookingInfo(booking) {
    setBookingInfo(booking);
  }

  //// Available Times ///
  // const [availableTimes, setAvailableTimes] = useState([  "11:00 AM",  "11:30 AM",  "12:00 PM",  "12:30 PM",  "1:00 PM",  "1:30 PM",  "2:00 PM",  "2:30 PM",  "3:00 PM",  "3:30 PM",  "4:00 PM",  "4:30 PM",  "5:00 PM",  "5:30 PM",  "6:00 PM",  "6:30 PM",  "7:00 PM",  "7:30 PM",  "8:00 PM",  "8:30 PM",  "9:00 PM",  "9:30 PM",]);


  //// Selected Date ///
  const [selectedDate, setSelectedDate] = useState("");


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={<BookingPage onBooking={handleBookingInfo} />}
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route
          path="/reservations/customercontact"
          element={<CustomerContactPage />}
        />

        <Route
          path="/booking-form"
          element={
            <BookingForm

              selectedDate={selectedDate}
            />
          }
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
