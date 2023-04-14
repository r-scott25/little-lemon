import React from "react";
import "./App.css";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
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
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/reservations/customercontact"
          // element={<CustomerContactPage reservationData={reservationData} />}
          element={<CustomerContactPage />}
        />
        <Route
          path="/res-confirm"
          // element={<ResConfirm reservationData={reservationData} />}
          element={<ConfirmationModal />}
        />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
