"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, products } from "../data/siteData";

export default function ProductCategoriesGrid({ onSelectProduct, onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-title-wrap">
          <div className="red-heading">Industrial Crane Equipment & Accessories</div>
          <h2>Choose Your Products</h2>
          <p>
            Explore our complete portfolio of heavy-duty E.O.T Crane Spare Parts, Shrouded Busbar Systems, and Controls.
          </p>
        </div>

        <div className="category-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
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
                    onClick={() => onSelectProduct(prod)}
                    className="btn-card-action btn-outline"
                  >
                    Quick Specs
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(prod)}
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
  );
}
