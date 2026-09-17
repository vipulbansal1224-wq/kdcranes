"use client";

import { useState } from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import FooterBannerSlider from "../../components/FooterBannerSlider";
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
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <TopBar />
      <Header onOpenDealerModal={() => setShowDealerModal(true)} />

      {/* Hero Banner Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #021245 0%, #0a2570 100%)",
          color: "#ffffff",
          padding: "70px 0 50px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255, 153, 0, 0.2)",
              border: "1px solid #ff9900",
              color: "#ff9900",
              padding: "6px 18px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "16px"
            }}
          >
            Factory & Sales Support • Sahnewal, Ludhiana
          </div>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              fontFamily: "Outfit, sans-serif",
              color: "#ffffff",
              marginBottom: "14px",
              lineHeight: 1.2
            }}
          >
            Contact KD Enterprises
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "17px",
              maxWidth: "750px",
              margin: "0 auto",
              lineHeight: 1.6
            }}
          >
            Get in touch directly with Mr. Pankesh Thakur and our engineering sales team for quotes, dealer inquiries, and technical support.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid & Inquiry Form */}
      <section style={{ padding: "70px 0 40px", background: "#f8fafc" }}>
        <div className="container">
          {/* Quick Contact Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "50px"
            }}
          >
            {/* Phone Card */}
            <div
              style={{
                background: "#ffffff",
                padding: "28px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start"
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #1346af, #061954)",
                  color: "#ffffff",
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                📞
              </div>
              <div>
                <h4 style={{ fontSize: "14px", color: "#64748b", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}>
                  Phone Number / Helpline
                </h4>
                <a
                  href={`tel:${siteInfo.phone}`}
                  style={{ fontSize: "19px", color: "#021245", fontWeight: 800, textDecoration: "none", display: "block", marginBottom: "4px" }}
                >
                  {siteInfo.phone}
                </a>
                <span style={{ fontSize: "13px", color: "#16a34a", fontWeight: 600 }}>
                  Available 9:00 AM - 8:00 PM IST
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div
              style={{
                background: "#ffffff",
                padding: "28px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start"
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #ff9900, #e68a00)",
                  color: "#000000",
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                ✉️
              </div>
              <div>
                <h4 style={{ fontSize: "14px", color: "#64748b", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}>
                  Email Address
                </h4>
                <a
                  href={`mailto:${siteInfo.email}`}
                  style={{ fontSize: "17px", color: "#021245", fontWeight: 800, textDecoration: "none", display: "block", wordBreak: "break-all" }}
                >
                  {siteInfo.email}
                </a>
                <span style={{ fontSize: "13px", color: "#64748b" }}>
                  Direct Factory Sales Inquiry
                </span>
              </div>
            </div>

            {/* Address Card */}
            <div
              style={{
                background: "#ffffff",
                padding: "28px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start"
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #021245, #0a2570)",
                  color: "#ffffff",
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                📍
              </div>
              <div>
                <h4 style={{ fontSize: "14px", color: "#64748b", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}>
                  Factory Address
                </h4>
                <p style={{ fontSize: "15px", color: "#021245", fontWeight: 700, lineHeight: 1.5, margin: 0 }}>
                  {siteInfo.address}
                </p>
              </div>
            </div>
          </div>

          <div className="about-grid">
            {/* Left Info Panel */}
            <div
              style={{
                background: "#ffffff",
                padding: "36px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #e2e8f0"
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#fee2e2",
                  color: "#dc2626",
                  fontWeight: 800,
                  fontSize: "12px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  textTransform: "uppercase",
                  marginBottom: "14px"
                }}
              >
                Sales & Technical HQ
              </div>
              <h2 style={{ fontSize: "26px", color: "#021245", fontWeight: 800, marginBottom: "20px", fontFamily: "Outfit, sans-serif" }}>
                {siteInfo.companyName}
              </h2>

              <div style={{ display: "grid", gap: "18px", fontSize: "15px", color: "#475569" }}>
                <div>
                  <strong style={{ color: "#0f172a" }}>📍 Factory & Registered Address:</strong>
                  <p style={{ marginTop: "4px", color: "#334155", fontWeight: 600 }}>{siteInfo.address}</p>
                </div>

                <div>
                  <strong style={{ color: "#0f172a" }}>📞 Mobile Helpline:</strong>
                  <p style={{ marginTop: "4px" }}>
                    <a href={`tel:${siteInfo.phone}`} style={{ color: "#1346af", fontWeight: 800, textDecoration: "none" }}>
                      {siteInfo.phone}
                    </a>
                  </p>
                </div>

                <div>
                  <strong style={{ color: "#0f172a" }}>✉️ Email Address:</strong>
                  <p style={{ marginTop: "4px" }}>
                    <a href={`mailto:${siteInfo.email}`} style={{ color: "#1346af", fontWeight: 700, textDecoration: "none" }}>
                      {siteInfo.email}
                    </a>
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: "16px 20px", borderRadius: "14px", borderLeft: "4px solid #ff9900", marginTop: "10px" }}>
                  <div style={{ fontSize: "14px", color: "#0f172a", marginBottom: "4px" }}>
                    <strong>GSTIN:</strong> {siteInfo.gstin}
                  </div>
                  <div style={{ fontSize: "14px", color: "#0f172a" }}>
                    <strong>Proprietor:</strong> {siteInfo.owner}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div
              style={{
                background: "#ffffff",
                padding: "36px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #e2e8f0"
              }}
            >
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
                  <h3 style={{ fontSize: "24px", color: "#021245", fontWeight: 800, marginBottom: "20px", fontFamily: "Outfit, sans-serif" }}>
                    Send Direct Inquiry
                  </h3>

                  <div className="form-group">
                    <label style={{ fontWeight: 700, fontSize: "13px", color: "#334155" }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 700, fontSize: "13px", color: "#334155" }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 700, fontSize: "13px", color: "#334155" }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 700, fontSize: "13px", color: "#334155" }}>Message / Specifications *</label>
                    <textarea
                      rows="4"
                      required
                      className="form-input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px", borderRadius: "25px" }}>
                    Send Message to KD Enterprises
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section style={{ padding: "0 0 60px", background: "#f8fafc" }}>
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              border: "1px solid #e2e8f0"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#021245", fontFamily: "Outfit, sans-serif" }}>
                  📍 Google Maps Location
                </h3>
                <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
                  Back Side Gurudwara Sahib, Village Dharour, Sahnewal, Ludhiana, Punjab, 141120
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Village+Dharour,+Sahnewal,+Ludhiana,+Punjab+141120"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg, #1346af, #061954)",
                  color: "#ffffff",
                  padding: "10px 22px",
                  borderRadius: "25px",
                  fontWeight: 700,
                  fontSize: "13px",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(19,70,175,0.3)"
                }}
              >
                Open in Google Maps ↗
              </a>
            </div>

            <div style={{ width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", border: "1px solid #cbd5e1" }}>
              <iframe
                title="KD Enterprises Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Village%20Dharour%2C%20Sahnewal%2C%20Ludhiana%2C%20Punjab%20141120&t=&z=14&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* R1-R7 Banner Slider on Contact Page */}
      <FooterBannerSlider />

      <Footer />

      {showDealerModal && <DealerModal onClose={() => setShowDealerModal(false)} />}
    </main>
  );
}
