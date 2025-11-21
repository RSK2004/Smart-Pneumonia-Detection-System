import React from "react";
import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
        <div className="position-overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">LaserScan AI</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signup">Login/SignUp</Link></li>
          <li><Link to="/analysis">Analysis</Link></li>
        </ul>
      </nav>

      {/* Center Content */}
      <div className="center-content">
        <h1 className="title">Smart LaserScan AI</h1>
        <p className="subtitle">
          A real-time laser dot scanning system powered by AI
        </p>
      </div>

    </div>
  );
};

export default Home;
