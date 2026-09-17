"use client";

import { useState } from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import StatsSection from "../../components/StatsSection";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";
import DealerModal from "../../components/DealerModal";
import { siteInfo } from "../data/siteData";

export default function AboutPage() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);

  return (
    <main>
      <TopBar />
      <Header
        onOpenDealerModal={() => setShowDealerModal(true)}
        onOpenCatalogModal={() => setShowQuoteModal(true)}
      />

      <div style={{ background: "linear-gradient(135deg, #021245 0%, #0a2570 100%)", color: "#ffffff", padding: "60px 0 40px", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "40px", fontWeight: 800, fontFamily: "Outfit, sans-serif" }}>About {siteInfo.companyName}</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "10px" }}>
            Pioneer and leading manufacturer of E.O.T Crane Spare Parts & Busbar Systems in Ludhiana, Punjab.
          </p>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <img
                src="https://kdcranes.com/wp-content/uploads/2023/01/pic-19.jpeg"
                alt="KD Enterprises Manufacturing Facility"
                style={{ width: "100%", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              />
            </div>

            <div>
              <div className="red-heading">Established 2016 • Ludhiana, Punjab</div>
              <h2 style={{ fontSize: "32px", color: "#021245", fontWeight: 800, marginBottom: "20px" }}>
                Delivering High Precision Crane Components Across India & Internationally
              </h2>
              <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: "16px" }}>
                Established as a Sole Proprietorship firm in the year 2016, we <strong>“KD Enterprises”</strong> are a leading Manufacturer and Supplier of a wide range of Shrouded Busbar Systems, Conductor Bus Bars, Current Collectors, Wireless Radio Remote Controls, Hydraulic Brakes, and Crane Accessories.
              </p>
              <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: "20px" }}>
                Situated in Ludhiana (Punjab), our infrastructure is equipped with state-of-the-art machinery and quality testing rigs. Under the headship of <strong>"{siteInfo.owner}"</strong> (Owner), we have built an enviable reputation for reliability, rapid fulfillment, and strict quality assurance.
              </p>

              <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", borderLeft: "4px solid #ff9900", marginBottom: "24px" }}>
                <div style={{ fontWeight: 700, color: "#021245", fontSize: "15px" }}>Official Tax & Corporate Registration:</div>
                <div style={{ fontSize: "14px", color: "#475569", marginTop: "4px" }}>
                  GSTIN: <strong>{siteInfo.gstin}</strong> | Firm Type: <strong>Sole Proprietorship</strong>
                </div>
              </div>

              <button onClick={() => setShowQuoteModal(true)} className="btn-primary">
                Get Product Catalog & Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Footer />

      {showQuoteModal && <EnquiryModal onClose={() => setShowQuoteModal(false)} />}
      {showDealerModal && <DealerModal onClose={() => setShowDealerModal(false)} />}
    </main>
  );
}
