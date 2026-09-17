"use client";

import { useState } from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";
import DealerModal from "../../components/DealerModal";

export default function GalleryPage() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);

  const galleryItems = [
    { title: "DSL Busbar System Installation", url: "https://kdcranes.com/wp-content/uploads/2023/01/pic-19.jpeg" },
    { title: "Current Collector Shoe Assembly", url: "https://kdcranes.com/wp-content/uploads/2023/01/eot-cranes-current-collector-500x500-1.webp" },
    { title: "Overhead Crane Radio Remote Control 8D", url: "https://kdcranes.com/wp-content/uploads/2023/01/pic-10-1.jpg" },
    { title: "Lever Type Limit Switch IP65", url: "https://kdcranes.com/wp-content/uploads/2023/01/lever-type-limit-switch-500x500-1.webp" },
    { title: "Electro-Hydraulic Thruster Brake Unit", url: "https://kdcranes.com/wp-content/uploads/2023/01/pic-6-1.jpg" },
    { title: "Heavy Duty Electric Wire Rope Hoist", url: "https://kdcranes.com/wp-content/uploads/2023/01/pic-16-1.jpeg" },
    { title: "Crane Trolleys & Festoon Cable Systems", url: "https://kdcranes.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-28-at-15.20.04.jpeg" },
    { title: "Quality Certification Gold Badge", url: "https://kdcranes.com/wp-content/uploads/2023/02/exclusive-gold-badge-color-46166840-150x150.jpg" }
  ];

  return (
    <main>
      <TopBar />
      <Header
        onOpenDealerModal={() => setShowDealerModal(true)}
        onOpenCatalogModal={() => setShowQuoteModal(true)}
      />

      <div style={{ background: "linear-gradient(135deg, #021245 0%, #0a2570 100%)", color: "#ffffff", padding: "60px 0 40px", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "40px", fontWeight: 800, fontFamily: "Outfit, sans-serif" }}>Equipment & Manufacturing Gallery</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "10px" }}>
            Visual showcase of our E.O.T Crane Spare Parts, Busbar Systems, and Ludhiana Facility.
          </p>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "#ffffff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#f8fafc",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ height: "240px", padding: "16px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.url} alt={item.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ padding: "16px", fontWeight: 700, fontSize: "14px", color: "#021245", textAlign: "center" }}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {showQuoteModal && <EnquiryModal onClose={() => setShowQuoteModal(false)} />}
      {showDealerModal && <DealerModal onClose={() => setShowDealerModal(false)} />}
    </main>
  );
}
