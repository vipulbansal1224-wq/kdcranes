"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";
import DealerModal from "../../components/DealerModal";
import { products, categories } from "../../data/siteData";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <TopBar />
      <Header
        onOpenDealerModal={() => setShowDealerModal(true)}
        onOpenCatalogModal={() => handleOpenQuote(null)}
      />

      {/* Hero Header Section */}
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 153, 0, 0.15) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />

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
            HD Equipment & Product Gallery • 25+ Crane Spares
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
            Complete EOT Crane Equipment & Spares Showcase
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "17px",
              maxWidth: "800px",
              margin: "0 auto 30px",
              lineHeight: 1.6
            }}
          >
            Browse high-definition photos, technical parameters, and live manufacturing specs for our full range of E.O.T Crane Spare Parts, DSL Busbar Systems, Current Collectors, Limit Switches, and Accessories.
          </p>

          {/* Search Bar Input */}
          <div
            style={{
              maxWidth: "540px",
              margin: "0 auto",
              position: "relative"
            }}
          >
            <input
              type="text"
              placeholder="Search products (e.g. Busbar 125A, Current Collector, Radio Remote, Limit Switch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 24px",
                paddingRight: "50px",
                borderRadius: "30px",
                border: "2px solid rgba(255,255,255,0.2)",
                background: "rgba(255, 255, 255, 0.95)",
                color: "#0f172a",
                fontSize: "15px",
                outline: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
            />
            <span
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "18px",
                color: "#64748b"
              }}
            >
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section style={{ padding: "30px 0 10px", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: isActive ? "2px solid #1346af" : "1px solid #cbd5e1",
                    background: isActive ? "linear-gradient(135deg, #1346af, #061954)" : "#ffffff",
                    color: isActive ? "#ffffff" : "#334155",
                    boxShadow: isActive ? "0 4px 15px rgba(19, 70, 175, 0.3)" : "none",
                    transform: isActive ? "translateY(-2px)" : "none"
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Gallery Grid Section */}
      <section style={{ padding: "60px 0 90px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
              flexWrap: "wrap",
              gap: "16px"
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#021245",
                fontFamily: "Outfit, sans-serif"
              }}
            >
              Showing {filteredProducts.length} Equipment Items
            </h2>
            <div style={{ fontSize: "14px", color: "#64748b" }}>
              💡 Click any item to inspect full HD details & technical parameters
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #e2e8f0"
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>📦</div>
              <h3 style={{ fontSize: "20px", color: "#0f172a", fontWeight: 700 }}>No products matched your search filter</h3>
              <p style={{ color: "#64748b", marginTop: "8px" }}>Try selecting &quot;All Products&quot; or clearing your search term.</p>
              <button
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                style={{
                  marginTop: "20px",
                  padding: "10px 24px",
                  background: "#1346af",
                  color: "#ffffff",
                  borderRadius: "25px",
                  border: "none",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "28px"
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  className="gallery-card-hover"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        zIndex: 10,
                        background: "linear-gradient(135deg, #ff9900, #e68a00)",
                        color: "#000000",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        boxShadow: "0 4px 10px rgba(255, 153, 0, 0.4)"
                      }}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* HD Image Container */}
                  <div
                    style={{
                      height: "260px",
                      padding: "24px",
                      background: "linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      src={product.imageUrl}
                      onError={(e) => {
                        if (product.fallbackUrl) {
                          e.target.onerror = null;
                          e.target.src = product.fallbackUrl;
                        }
                      }}
                      alt={product.name}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        transition: "transform 0.5s ease",
                        filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.15))"
                      }}
                      className="product-img-zoom"
                    />

                    <div
                      className="hover-overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(2, 18, 69, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease"
                      }}
                    >
                      <span
                        style={{
                          background: "#ff9900",
                          color: "#000000",
                          padding: "10px 20px",
                          borderRadius: "25px",
                          fontWeight: 800,
                          fontSize: "13px",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                        }}
                      >
                        🔍 View Full HD Details
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 800,
                        color: "#021245",
                        marginBottom: "10px",
                        lineHeight: 1.4,
                        fontFamily: "Outfit, sans-serif"
                      }}
                    >
                      {product.name}
                    </h3>

                    <p
                      style={{
                        fontSize: "13px",
                        color: "#64748b",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {product.shortDesc}
                    </p>

                    {/* Technical Specs Preview */}
                    {product.specs && product.specs.length > 0 && (
                      <div
                        style={{
                          background: "#f1f5f9",
                          borderRadius: "10px",
                          padding: "10px 14px",
                          marginBottom: "20px",
                          fontSize: "12px",
                          color: "#334155"
                        }}
                      >
                        <div style={{ fontWeight: 700, color: "#1346af", marginBottom: "4px" }}>
                          ⚙️ Key Spec:
                        </div>
                        <div>
                          <strong>{product.specs[0].key}:</strong> {product.specs[0].value}
                        </div>
                      </div>
                    )}

                    {/* Card Footer Actions */}
                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        gap: "10px",
                        alignItems: "center"
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setSelectedProduct(product)}
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "12px",
                          border: "1px solid #1346af",
                          background: "#ffffff",
                          color: "#1346af",
                          fontWeight: 700,
                          fontSize: "13px",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        Inspect Details
                      </button>

                      <button
                        onClick={() => handleOpenQuote(product)}
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "12px",
                          border: "none",
                          background: "linear-gradient(135deg, #1346af, #061954)",
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "13px",
                          cursor: "pointer",
                          boxShadow: "0 4px 12px rgba(19, 70, 175, 0.3)"
                        }}
                      >
                        Get Price Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Product Details Lightbox Modal */}
      {selectedProduct && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(2, 18, 69, 0.85)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              maxWidth: "850px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              animation: "modalFadeIn 0.3s ease-out"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "20px 28px",
                background: "linear-gradient(135deg, #021245 0%, #0a2570 100%)",
                color: "#ffffff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px"
              }}
            >
              <div>
                <div style={{ fontSize: "12px", color: "#ff9900", fontWeight: 700, textTransform: "uppercase" }}>
                  KD Cranes Equipment Specifications
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, fontFamily: "Outfit, sans-serif" }}>
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "20px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "28px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.2fr",
                  gap: "28px",
                  marginBottom: "28px"
                }}
              >
                {/* Image */}
                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "280px"
                  }}
                >
                  <img
                    src={selectedProduct.imageUrl}
                    onError={(e) => {
                      if (selectedProduct.fallbackUrl) {
                        e.target.onerror = null;
                        e.target.src = selectedProduct.fallbackUrl;
                      }
                    }}
                    alt={selectedProduct.name}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>

                {/* Info & Specs */}
                <div>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, marginBottom: "20px" }}>
                    {selectedProduct.shortDesc}
                  </p>

                  {/* Specs Table */}
                  {selectedProduct.specs && (
                    <div style={{ marginBottom: "20px" }}>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#021245", marginBottom: "10px" }}>
                        📋 Technical Parameters:
                      </h4>
                      <div style={{ border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
                        {selectedProduct.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              padding: "8px 14px",
                              fontSize: "13px",
                              background: idx % 2 === 0 ? "#f8fafc" : "#ffffff",
                              borderBottom: idx < selectedProduct.specs.length - 1 ? "1px solid #e2e8f0" : "none"
                            }}
                          >
                            <span style={{ fontWeight: 700, width: "45%", color: "#334155" }}>{spec.key}:</span>
                            <span style={{ width: "55%", color: "#0f172a" }}>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Features List */}
              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div style={{ background: "#f1f5f9", borderRadius: "16px", padding: "20px", marginBottom: "24px" }}>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#021245", marginBottom: "12px" }}>
                    ⭐ Key Manufacturing Features:
                  </h4>
                  <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: 0, paddingLeft: "20px" }}>
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: "13px", color: "#334155" }}>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Actions */}
              <div style={{ display: "flex", gap: "14px", justifyContent: "flex-end" }}>
                <Link
                  href={`/products/${selectedProduct.slug}`}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "30px",
                    border: "1px solid #cbd5e1",
                    color: "#334155",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "14px"
                  }}
                >
                  View Full Product Page →
                </Link>

                <button
                  onClick={() => {
                    const prod = selectedProduct;
                    setSelectedProduct(null);
                    handleOpenQuote(prod);
                  }}
                  style={{
                    padding: "12px 28px",
                    borderRadius: "30px",
                    border: "none",
                    background: "linear-gradient(135deg, #ff9900, #e68a00)",
                    color: "#000000",
                    fontWeight: 800,
                    fontSize: "14px",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(255,153,0,0.4)"
                  }}
                >
                  Request Instant Quote for this Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for Animations */}
      <style jsx global>{`
        .gallery-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(2, 18, 69, 0.15) !important;
          border-color: #1346af !important;
        }
        .gallery-card-hover:hover .product-img-zoom {
          transform: scale(1.08);
        }
        .gallery-card-hover:hover .hover-overlay {
          opacity: 1 !important;
        }
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <Footer />

      {showQuoteModal && (
        <EnquiryModal
          onClose={() => setShowQuoteModal(false)}
          productTitle={quoteProduct ? quoteProduct.name : ""}
        />
      )}

      {showDealerModal && (
        <DealerModal onClose={() => setShowDealerModal(false)} />
      )}
    </main>
  );
}
