import React from 'react';
import "./App.css";
import homepageOGimage from './assets/homepageOGimage.png';
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import About from "./routes/About";
import Menu from "./routes/Menu";
import CustomerInfoPage from "./routes/CustomerInfoPage";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";

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
          path="/reservations/customerinfo"
          element={<CustomerInfoPage />}
        />
      </Routes>
    </>
  );
}

export default App;
