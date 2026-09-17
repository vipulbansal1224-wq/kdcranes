"use client";

import { companyStats } from "../data/siteData";

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {companyStats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-val">{stat.value}</div>
              <div className="stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
