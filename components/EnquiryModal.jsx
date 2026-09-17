"use client";

import { useState } from "react";
import { siteInfo } from "../data/siteData";

export default function EnquiryModal({ product, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    quantity: "1",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ fontSize: "50px", marginBottom: "16px" }}>✅</div>
            <h3 style={{ fontSize: "24px", color: "#021245", fontWeight: 800 }}>Enquiry Sent Successfully!</h3>
            <p style={{ color: "#64748b", marginTop: "8px" }}>
              Thank you for contacting KD Enterprises. Our technical sales team in Ludhiana will get back to you within 2 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="red-heading">Quick Quote Request</div>
            <h3 style={{ fontSize: "22px", color: "#021245", fontWeight: 800, marginBottom: "16px" }}>
              {product ? `Inquire for ${product.name}` : `Sales Enquiry - KD Enterprises`}
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Industrial Firm / Steel Plant"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Estimated Quantity / Requirements</label>
                <textarea
                  rows="3"
                  className="form-input"
                  placeholder="Specify ampere ratings (e.g. 125A), length, or custom requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center", cursor: "pointer" }}>
                Submit Instant Enquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
