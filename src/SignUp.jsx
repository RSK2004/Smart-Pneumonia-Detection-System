import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

const Signup = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      alert(data.message);
    } 
    catch (err) {
        alert("Signup failed");
      }
  };

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

        <input type="text" placeholder="Username" className="auth-input" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" className="auth-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button className="auth-button" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;