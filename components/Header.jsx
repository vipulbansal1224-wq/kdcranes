"use client";

import { useState } from "react";
import Link from "next/link";
import { siteInfo, products } from "../data/siteData";

export default function Header({ onOpenDealerModal, onOpenCatalogModal }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query.trim().length > 1) {
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDesc.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <header className="site-header">
      <div className="middle-bar">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <Link href="/" className="logo-brand">
            <img
              src="/images/logo.jpg"
              alt="KD Cranes Logo"
              style={{
                height: "52px",
                width: "auto",
                maxHeight: "52px",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
              }}
            />
            <div className="logo-text">
              <h1>{siteInfo.companyName}</h1>
              <p>{siteInfo.brandName}</p>
            </div>
          </Link>

          <div className="search-box-wrap">
            <input
              type="text"
              placeholder="Search DSL busbars, current collectors, remotes, switches..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => searchTerm.trim().length > 1 && setShowResults(true)}
            />
            <button className="search-btn" aria-label="Search">🔍</button>

            {showResults && (
              <div
                style={{
                  position: "absolute",
                  top: "110%",
                  left: 0,
                  right: 0,
                  background: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  zIndex: 300,
                  maxHeight: "350px",
                  overflowY: "auto",
                  padding: "10px"
                }}
              >
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <Link
                      key={item.id}
                      href={`/products/${item.slug}`}
                      onClick={() => setShowResults(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px",
                        borderBottom: "1px solid #f1f5f9"
                      }}
                    >
                      <img src={item.imageUrl} alt={item.name} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "14px", color: "#021245" }}>{item.name}</div>
                        <div style={{ fontSize: "12px", color: "#64748b" }}>{item.shortDesc.slice(0, 60)}...</div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div style={{ padding: "16px", textAlign: "center", color: "#64748b", fontSize: "14px" }}>
                    No products found matching "{searchTerm}"
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="header-actions">
            <Link href="/download" className="btn-catalogue">
              📥 DOWNLOAD CATALOGUE
            </Link>
            <button onClick={onOpenDealerModal} className="btn-dealer">
              Dealer Login
            </button>
          </div>
        </div>
      </div>

      <nav className="nav-bar">
        <div className="container nav-container">
          <ul className="nav-links">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link">
                Products <span style={{ fontSize: "10px" }}>▼</span>
              </Link>
              <ul className="dropdown-menu">
                {products.map((item) => (
                  <li key={item.id}>
                    <Link href={`/products/${item.slug}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/gallery" className="nav-link">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link href="/download" className="nav-link">Brochures & Downloads</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
