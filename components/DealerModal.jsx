"use client";

import { useState } from "react";

export default function DealerModal({ onClose }) {
  const [dealerId, setDealerId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "450px" }}>
        <button className="modal-close" onClick={onClose}>×</button>

        {loggedIn ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔐</div>
            <h3 style={{ fontSize: "20px", color: "#021245", fontWeight: 800 }}>Welcome to Dealer Portal</h3>
            <p style={{ color: "#64748b", fontSize: "14px", marginTop: "6px" }}>
              Authorized dealer access verified. Downloading wholesale price sheet...
            </p>
            <button onClick={onClose} className="btn-primary" style={{ marginTop: "20px" }}>
              Close Portal
            </button>
          </div>
        ) : (
          <div>
            <div className="red-heading">Authorized Network</div>
            <h3 style={{ fontSize: "22px", color: "#021245", fontWeight: 800, marginBottom: "20px" }}>
              KD Cranes Dealer Login
            </h3>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Dealer Code / Registered ID</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. KD-DEALER-1029"
                  value={dealerId}
                  onChange={(e) => setDealerId(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                Login to Dealer Dashboard
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
