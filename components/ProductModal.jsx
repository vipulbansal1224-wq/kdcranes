"use client";

import Link from "next/link";

export default function ProductModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
          <div style={{ width: "120px", height: "120px", background: "#f1f5f9", borderRadius: "12px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={product.imageUrl} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ flex: 1 }}>
            <span className="card-badge" style={{ position: "static", marginBottom: "8px", display: "inline-block" }}>{product.badge}</span>
            <h2 style={{ fontSize: "22px", color: "#021245", fontWeight: 800 }}>{product.name}</h2>
            <p style={{ fontSize: "14px", color: "#64748b", marginTop: "6px" }}>{product.shortDesc}</p>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ fontSize: "16px", color: "#021245", marginBottom: "12px", borderBottom: "2px solid #e2e8f0", paddingBottom: "6px" }}>
            Technical Parameters & Specifications
          </h4>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <tbody>
              {product.specs.map((spec, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "8px 0", fontWeight: 600, color: "#334155", width: "40%" }}>{spec.key}</td>
                  <td style={{ padding: "8px 0", color: "#64748b" }}>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ fontSize: "16px", color: "#021245", marginBottom: "10px" }}>Key Product Features</h4>
          <ul style={{ listStyle: "circle", paddingLeft: "20px", fontSize: "13px", color: "#475569" }}>
            {product.features.map((feat, idx) => (
              <li key={idx} style={{ marginBottom: "6px" }}>{feat}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => {
              onClose();
              onOpenQuote(product);
            }}
            className="btn-primary"
            style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
          >
            Get Best Price Quote
          </button>
          <Link
            href={`/products/${product.slug}`}
            className="btn-secondary"
            style={{ flex: 1, textAlign: "center", color: "#021245", borderColor: "#021245" }}
            onClick={onClose}
          >
            Full Product Page
          </Link>
        </div>
      </div>
    </div>
  );
}
