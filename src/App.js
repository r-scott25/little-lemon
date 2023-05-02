import React from "react";
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



function App() {

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
          path="/reservations/selectedreservations"
          element={<SelectedReservations />}
        />
        <Route
          path="reservations/resconfirm"
          element={<ConfirmationModal />}
        />
      </Routes>
    </>
  );
}

export default App;
