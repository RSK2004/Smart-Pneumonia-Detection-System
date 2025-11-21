import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    
    <div className="about-container">
        <nav className="navbar">
            <div className="nav-logo"><Link to="/">LaserScan AI</Link></div>
        </nav>
      <div className="about-overlay"></div>

      <div className="about-content">
        <h1 className="about-title">About Our Innovation</h1>

        <p className="about-text">
          We are a team of engineers, researchers, and medical technology
          specialists who have developed a new way to detect pneumonia using
          a safe and fast laser-based scanning system. Our platform is built
          to deliver instant diagnostic reports that help doctors begin
          treatment without delay.
        </p>

        <p className="about-text">
          Unlike traditional hospital X-rays that use gamma radiation, our
          system uses a harmless laser dot pattern projected on the chest
          area. The captured pattern is analysed using advanced AI models to
          identify signs of pneumonia with high accuracy.
        </p>

        <p className="about-text">
          Our work combines laser imaging, computer vision, and deep learning
          to create a reliable and non-invasive method of early pneumonia
          detection. The goal is simple—make diagnosis faster, safer, and
          accessible for everyone.
        </p>

        <h2 className="about-subtitle">What We Do</h2>

        <ul className="about-list">
          <li>✔ Develop real-time chest scanning tools using laser dot projection</li>
          <li>✔ Use AI to analyse lung patterns and detect pneumonia instantly</li>
          <li>✔ Provide an online platform for patients to view live scan results</li>
          <li>✔ Offer safer alternatives to traditional radiation-based imaging</li>
          <li>✔ Build systems that can be used in hospitals, clinics, and remote areas</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
