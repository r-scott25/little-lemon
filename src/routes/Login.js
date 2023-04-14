import React from 'react';
import "./LoginStyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  return (
   <>
    <div className="login-body-container">
      <header>
        <Header />
      </header>

      <main className="login-main-container">
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <div className="login-subtitle"> 
          <h2>Login Page Coming Soon</h2>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default Login;

