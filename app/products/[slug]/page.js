"use client";

import { use } from "react";
import { useState } from "react";
import Link from "next/link";
import TopBar from "../../../components/TopBar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EnquiryModal from "../../../components/EnquiryModal";
import DealerModal from "../../../components/DealerModal";
import { products } from "../../data/siteData";

export default function SingleProductPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const product = products.find((p) => p.slug === slug) || products[0];

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);

  return (
    <main>
      <TopBar />
      <Header
        onOpenDealerModal={() => setShowDealerModal(true)}
        onOpenCatalogModal={() => setShowQuoteModal(true)}
      />

      <div style={{ background: "linear-gradient(135deg, #021245 0%, #0a2570 100%)", color: "#ffffff", padding: "50px 0 30px" }}>
        <div className="container">
          <div style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#cbd5e1" }}>Home</Link> &gt; <Link href="/products" style={{ color: "#cbd5e1" }}>Products</Link> &gt; {product.name}
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: 800, fontFamily: "Outfit, sans-serif" }}>{product.name}</h1>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="about-grid">
            <div style={{ background: "#f8fafc", padding: "40px", borderRadius: "16px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={product.imageUrl} alt={product.name} style={{ maxWidth: "100%", maxHeight: "360px", objectFit: "contain" }} />
            </div>

            <div>
              <span className="card-badge" style={{ position: "static", marginBottom: "12px", display: "inline-block" }}>{product.badge}</span>
              <h2 style={{ fontSize: "30px", color: "#021245", fontWeight: 800, marginBottom: "16px" }}>{product.name}</h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "28px" }}>{product.shortDesc}</p>

              <div style={{ marginBottom: "28px" }}>
                <h3 style={{ fontSize: "18px", color: "#021245", fontWeight: 700, marginBottom: "12px", borderBottom: "2px solid #e2e8f0", paddingBottom: "6px" }}>
                  Technical Parameters & Specifications
                </h3>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "10px 0", fontWeight: 600, color: "#021245", width: "40%" }}>{spec.key}</td>
                        <td style={{ padding: "10px 0", color: "#475569" }}>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontSize: "18px", color: "#021245", fontWeight: 700, marginBottom: "10px" }}>Product Features & Highlights</h3>
                <ul style={{ listStyle: "circle", paddingLeft: "20px", fontSize: "14px", color: "#475569" }}>
                  {product.features.map((feat, idx) => (
                    <li key={idx} style={{ marginBottom: "8px" }}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button onClick={() => setShowQuoteModal(true)} className="btn-primary" style={{ padding: "14px 28px" }}>
                  Request Instant Best Price Quote
                </button>
                <Link href="/download" className="btn-secondary" style={{ padding: "14px 28px", color: "#021245", borderColor: "#021245" }}>
                  Download Spec PDF
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showQuoteModal && <EnquiryModal product={product} onClose={() => setShowQuoteModal(false)} />}
      {showDealerModal && <DealerModal onClose={() => setShowDealerModal(false)} />}
    </main>
  );
}
