import React from "react";
import "./App.css";
import Home from "./routes/Home";
import Reservations, { reservationData } from "./routes/Reservations";
import About from "./routes/About";
import Menu from "./routes/Menu";
import CustomerContactPage from "./routes/CustomerContactPage";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";
import ResConfirm from "./components/ResConfirm";

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
          element={<CustomerContactPage reservationData={reservationData} />}
        />
        <Route
          path="/res-confirm"
          element={<ResConfirm reservationData={reservationData} />}
        />
      </Routes>
    </>
  );
}

export default App;
