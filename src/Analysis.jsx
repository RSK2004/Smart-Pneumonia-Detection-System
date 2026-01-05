import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./analysis.css";
import {io} from "socket.io-client";
import createMockIRReport from "./utils/dynamicmockIRReport";

const Analysis = () => {
  const [selected, setSelected] = useState("");

  const username = localStorage.getItem("username");
  const storedReport = localStorage.getItem(`ir_report_${username?.toLowerCase()}`);

  const userReport = storedReport
  ? JSON.parse(storedReport)
  : createMockIRReport[username?.toLowerCase()];

  const handleSelect = (type) => {
    setSelected(type);
  };

  const socket = io("http://localhost:6000");

  socket.on("ai_result", (data) => {
    setPrediction(data.prediction);
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <div className="analysis-container">

      <div className="user-bar">
        <span>Welcome, {username}!</span>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>

      <nav className="auth-navbar">
        <div className="auth-logo"><Link to="/">LaserScan AI</Link></div>
      </nav>


      {selected === "" && (
        <div className="analysis-options">
          <div className="analysis-card" onClick={() => handleSelect("IR")}>
            IR Analysis
          </div>
          <div className="analysis-card" onClick={() => handleSelect("Xray")}>
            X-ray Analysis
          </div>
        </div>
      )}


      {selected === "IR" && (
        <div className="analysis-result">
          <h2>IR Analysis Report</h2>
          <div className="patient-report">
            <p><strong>Name:</strong> {username}</p>
            <p><strong>Age:</strong> {userReport.age}</p>
            <p><strong>Gender:</strong> {userReport.gender}</p>
            <p><strong>Date:</strong> {userReport.date}</p>
            <p><strong>Symptoms:</strong> {userReport.symptoms}</p>
          </div>
          <img src={userReport.image} alt="IR Scan" className="analysis-image" />
          <div className="dashboard">
            <h3>Pneumonia Detection (IR System)</h3>
            <div className="graph-bar" style={{width: `${userReport.prediction}%`,color: "black"}}>{userReport.prediction}% Pneumonia Detected</div>
          </div>
          <button className="auth-button" onClick={() => setSelected("")}>Back</button>
        </div>
      )}

      {selected === "IR" && !userReport && (
        <div className="analysis-result">
          <h2>No IR Report Found</h2>
          <p>This user has no assigned IR report yet.</p>
          <button className="auth-button" onClick={() => setSelected("")}>Back</button>
        </div>
      )}

      {selected === "Xray" && (
        <div className="analysis-result">
          <h2>X-ray Analysis Report</h2>
          <div className="patient-report">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Age:</strong> 45</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Date:</strong> 21-Nov-2025</p>
            <p><strong>Symptoms:</strong> Fever, Cough, Difficulty breathing</p>
          </div>
          <img src="/images/xray-sample.jpg" alt="X-ray Scan" className="analysis-image" />
          <div className="dashboard">
            <h3>Pneumonia Detection (X-ray)</h3>
            <div className="graph-bar" style={{width: "60%",color: "black"}}>60% Pneumonia Detected</div>
          </div>
          <button className="auth-button" onClick={() => setSelected("")}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Analysis;
