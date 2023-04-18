import React from "react";
import "./App.css";
import Home from "./routes/Home";
import BookingForm from "./components/BookingForm";
import BookingPage from "./routes/BookingPage";
import ResDataProvider from "./components/ResDataProvider";
import SelectedReservations from "./components/SelectedReservations";
// import { reservationData }from "./components/ReservationForm.js";
import About from "./routes/About";
import Menu from "./routes/Menu";
import CustomerContactPage from "./routes/CustomerContactPage";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";
import ShoppingCart from "./routes/ShoppingCart";
import ConfirmationModal from "./components/ConfirmationModal";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route
          path="/reservations/customercontact"
          element={<CustomerContactPage />}
        />

          <Route
            path="/resdataprovider/booking-form"
            element={BookingForm}
          />

          <Route
            path="/resdataprovider/selectedreservations"
            element={SelectedReservations}
          />
          <Route
            path="/resdataprovider/res-confirm"
            element={<ConfirmationModal />}
          />
          <Route
            path="/resdataprovider/customer-contact"
            element={CustomerContactPage}
          />
      </Routes>
    </>
  );
}

export default App;
