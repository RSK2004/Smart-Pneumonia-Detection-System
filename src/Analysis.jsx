import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./analysis.css";

const Analysis = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (type) => {
    setSelected(type);
  };

  return (
    <div className="analysis-container">

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
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Age:</strong> 45</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Date:</strong> 21-Nov-2025</p>
            <p><strong>Symptoms:</strong> Fever, Cough, Difficulty breathing</p>
          </div>
          <img src="/images/ir-sample.jpg" alt="IR Scan" className="analysis-image" />
          <div className="dashboard">
            <h3>Pneumonia Detection (IR System)</h3>
            <div className="graph-bar" style={{width: "80%"}}>80% Pneumonia Detected</div>
          </div>
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
            <div className="graph-bar" style={{width: "60%"}}>60% Pneumonia Detected</div>
          </div>
          <button className="auth-button" onClick={() => setSelected("")}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Analysis;
