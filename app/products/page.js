"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductModal from "../../components/ProductModal";
import EnquiryModal from "../../components/EnquiryModal";
import DealerModal from "../../components/DealerModal";
import { categories, products } from "../data/siteData";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDropdownProduct, setSelectedDropdownProduct] = useState("");
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesDropdown = selectedDropdownProduct === "" || item.id === selectedDropdownProduct;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDropdown && matchesSearch;
  });

  const handleOpenQuote = (prod = null) => {
    setQuoteProduct(prod);
    setShowQuoteModal(true);
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setSelectedDropdownProduct(value);
    if (value !== "") {
      const found = products.find((p) => p.id === value);
      if (found) {
        setSelectedProduct(found);
      }
    }
  };

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <TopBar />
      <Header
        onOpenDealerModal={() => setShowDealerModal(true)}
        onOpenCatalogModal={() => handleOpenQuote(null)}
      />

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
            KD Enterprises • Complete 25+ Product Portfolio
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
            Full E.O.T Crane Spare Parts & Products List
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
            Browse and inspect all 25+ industrial products manufactured by KD Enterprises. Use the dropdown menu below or categories to filter any item.
          </p>

          {/* Search & Dropdown Controls Box */}
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {/* Direct Product Dropdown Menu */}
            <div style={{ flex: "1 1 300px", position: "relative" }}>
              <select
                value={selectedDropdownProduct}
                onChange={handleDropdownChange}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "30px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  background: "#ffffff",
                  color: "#021245",
                  fontSize: "15px",
                  fontWeight: 700,
                  outline: "none",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                <option value="">▼ Select Any Product (All 25+ Products)...</option>
                {products.map((p, idx) => (
                  <option key={p.id} value={p.id}>
                    {idx + 1}. {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Box Input */}
            <div style={{ flex: "1 1 300px", position: "relative" }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  paddingRight: "50px",
                  borderRadius: "30px",
                  border: "2px solid rgba(255,255,255,0.3)",
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
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedDropdownProduct("");
                  }}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
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

      {/* Products Grid Section */}
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
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#021245", fontFamily: "Outfit, sans-serif" }}>
              Showing {filteredProducts.length} of {products.length} Products
            </h2>
            {(selectedDropdownProduct !== "" || searchQuery !== "" || selectedCategory !== "all") && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedDropdownProduct("");
                  setSearchQuery("");
                }}
                style={{
                  background: "#e2e8f0",
                  color: "#0f172a",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "13px",
                  cursor: "pointer"
                }}
              >
                Clear All Filters ✕
              </button>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "28px"
            }}
          >
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                }}
                className="product-card-item"
              >
                {prod.badge && (
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
                    {prod.badge}
                  </div>
                )}

                <div
                  style={{
                    height: "260px",
                    padding: "24px",
                    background: "linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={prod.imageUrl}
                    onError={(e) => {
                      if (prod.fallbackUrl) {
                        e.target.onerror = null;
                        e.target.src = prod.fallbackUrl;
                      }
                    }}
                    alt={prod.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.15))"
                    }}
                  />
                </div>

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
                    {prod.name}
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
                    {prod.shortDesc}
                  </p>

                  <div style={{ marginTop: "auto", display: "flex", gap: "10px", alignItems: "center" }}>
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "12px",
                        border: "1px solid #1346af",
                        background: "#ffffff",
                        color: "#1346af",
                        fontWeight: 700,
                        fontSize: "13px",
                        cursor: "pointer"
                      }}
                    >
                      Quick Specs
                    </button>

                    <button
                      onClick={() => handleOpenQuote(prod)}
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
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuote={(prod) => handleOpenQuote(prod)}
        />
      )}

      {showQuoteModal && (
        <EnquiryModal
          product={quoteProduct}
          onClose={() => {
            setShowQuoteModal(false);
            setQuoteProduct(null);
          }}
        />
      )}

      {showDealerModal && <DealerModal onClose={() => setShowDealerModal(false)} />}
    </main>
  );
}
