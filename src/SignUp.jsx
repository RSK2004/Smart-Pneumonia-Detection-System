import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-overlay"></div>

      {/* Navbar */}
      <nav className="auth-navbar">
        <div className="auth-logo"><Link to="/">LaserScan AI</Link></div>
        <ul className="auth-nav-links">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Form Box */}
      <div className="auth-box">
        <h2 className="auth-title">Create Account</h2>

        <input type="text" placeholder="Username" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        <button className="auth-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
