"use client";

import { useState } from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DealerModal from "../../components/DealerModal";
import { siteInfo } from "../data/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <TopBar />
      <Header onOpenDealerModal={() => setShowDealerModal(true)} />

      <div style={{ background: "linear-gradient(135deg, #021245 0%, #0a2570 100%)", color: "#ffffff", padding: "60px 0 40px", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "40px", fontWeight: 800, fontFamily: "Outfit, sans-serif" }}>Contact Us</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "10px" }}>
            Get in touch with KD Enterprises sales team in Ludhiana, Punjab.
          </p>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="about-grid">
            <div style={{ background: "#ffffff", padding: "36px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
              <div className="red-heading">Sales & Technical Office</div>
              <h2 style={{ fontSize: "28px", color: "#021245", fontWeight: 800, marginBottom: "20px" }}>{siteInfo.companyName}</h2>

              <div style={{ display: "grid", gap: "20px", fontSize: "15px", color: "#475569" }}>
                <div>
                  <strong>📍 Factory & Registered Address:</strong>
                  <p style={{ marginTop: "4px" }}>{siteInfo.address}</p>
                </div>

                <div>
                  <strong>📞 Mobile Helpline:</strong>
                  <p style={{ marginTop: "4px" }}>{siteInfo.phone}</p>
                </div>

                <div>
                  <strong>☎️ Landline / Office:</strong>
                  <p style={{ marginTop: "4px" }}>{siteInfo.landline}</p>
                </div>

                <div>
                  <strong>✉️ Email Address:</strong>
                  <p style={{ marginTop: "4px" }}>{siteInfo.email} / {siteInfo.secondaryEmail}</p>
                </div>

                <div style={{ background: "#f1f5f9", padding: "14px 18px", borderRadius: "10px", borderLeft: "4px solid #ff9900" }}>
                  <strong>Tax Registration (GSTIN):</strong> {siteInfo.gstin}
                  <br />
                  <strong>Proprietor:</strong> {siteInfo.owner}
                </div>
              </div>
            </div>

            <div style={{ background: "#ffffff", padding: "36px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: "50px", marginBottom: "16px" }}>✅</div>
                  <h3 style={{ fontSize: "24px", color: "#021245", fontWeight: 800 }}>Message Received!</h3>
                  <p style={{ color: "#64748b", marginTop: "8px" }}>
                    Thank you for reaching out. A representative from KD Enterprises will respond to your query shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: "24px", color: "#021245", fontWeight: 800, marginBottom: "20px" }}>Send Direct Inquiry</h3>

                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Message / Specifications *</label>
                    <textarea
                      rows="4"
                      required
                      className="form-input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                    Send Message to KD Enterprises
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showDealerModal && <DealerModal onClose={() => setShowDealerModal(false)} />}
    </main>
  );
}
