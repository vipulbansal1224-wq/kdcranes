"use client";

import { useState } from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";
import DealerModal from "../../components/DealerModal";
import { brochureFiles } from "../data/siteData";

export default function DownloadPage() {
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
          <h1 style={{ fontSize: "40px", fontWeight: 800, fontFamily: "Outfit, sans-serif" }}>Technical Downloads & Brochures</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "10px" }}>
            Download technical spec sheets, wiring manuals, and product catalogs for KD Cranes equipment.
          </p>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ display: "grid", gap: "24px" }}>
            {brochureFiles.map((file, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  padding: "28px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "20px"
                }}
              >
                <div style={{ flex: 1 }}>
                  <span className="card-badge" style={{ position: "static", marginBottom: "8px", display: "inline-block" }}>PDF Specification</span>
                  <h3 style={{ fontSize: "20px", color: "#021245", fontWeight: 700 }}>{file.title}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", marginTop: "6px" }}>{file.desc}</p>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "8px" }}>
                    File: {file.fileName} | Size: {file.size}
                  </div>
                </div>

                <a
                  href={file.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: "12px 24px", whiteSpace: "nowrap" }}
                >
                  📥 Download PDF
                </a>
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
