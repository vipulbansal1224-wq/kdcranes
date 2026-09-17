"use client";

import { useState } from "react";
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
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleOpenQuote = (prod = null) => {
    setQuoteProduct(prod);
    setShowQuoteModal(true);
  };

  return (
    <main>
      <TopBar />
      <Header
        onOpenDealerModal={() => setShowDealerModal(true)}
        onOpenCatalogModal={() => handleOpenQuote(null)}
      />

      <div style={{ background: "linear-gradient(135deg, #021245 0%, #0a2570 100%)", color: "#ffffff", padding: "60px 0 40px", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "40px", fontWeight: 800, fontFamily: "Outfit, sans-serif" }}>Complete Product Catalog</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "10px" }}>
            High performance industrial crane spare parts, busbars, current collectors, and remotes manufactured by KD Enterprises.
          </p>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="category-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`cat-tab ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="product-card">
                <div className="product-img-box">
                  <span className="card-badge">{prod.badge}</span>
                  <img src={prod.imageUrl} alt={prod.name} />
                </div>
                <div className="product-details">
                  <h3>{prod.name}</h3>
                  <p>{prod.shortDesc}</p>
                  <div className="product-btn-group">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="btn-card-action btn-outline"
                    >
                      Quick Specs
                    </button>
                    <button
                      onClick={() => handleOpenQuote(prod)}
                      className="btn-card-action btn-filled"
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

      {showDealerModal && (
        <DealerModal onClose={() => setShowDealerModal(false)} />
      )}
    </main>
  );
}
