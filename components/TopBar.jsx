"use client";

import { siteInfo } from "../data/siteData";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="ticker-wrap">
          <div className="ticker-move">
            {siteInfo.tickerItems.concat(siteInfo.tickerItems).map((item, idx) => (
              <span key={idx} className="ticker-item">
                ⚡ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="top-right">
          <span className="gst-badge">GSTIN: {siteInfo.gstin}</span>
          <a href={`tel:${siteInfo.phone}`} style={{ color: "inherit", textDecoration: "none" }}>
            📞 {siteInfo.phone}
          </a>
          <a href={`mailto:${siteInfo.email}`} style={{ color: "inherit", textDecoration: "none" }}>
            ✉️ {siteInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
}
