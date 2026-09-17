"use client";

import Link from "next/link";
import { siteInfo } from "../data/siteData";

export default function PioneerSection() {
  return (
    <section className="pioneer-section">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img
            src="https://kdcranes.com/wp-content/uploads/2023/01/pic-19.jpeg"
            alt="KD Enterprises Manufacturing Unit"
            className="about-main-img"
          />
          <div className="about-badge-overlay">
            <div className="badge-num">10+</div>
            <div className="badge-text">
              Years of Excellence <br />
              Ludhiana Industrial Hub
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <div className="red-heading">Pioneer Manufacturer Since {siteInfo.established}</div>
          <h3>
            KD Enterprises is the leading manufacturer of Busbar Systems, Conductor Bus Bars & EOT Crane Spare Parts in India.
          </h3>
          <p>
            Established as a Sole Proprietorship firm in the year 2016 in Ludhiana (Punjab), under the leadership of{" "}
            <strong>{siteInfo.owner}</strong>, we have constructed a state-of-the-art infrastructural unit equipped with high-precision manufacturing machinery.
          </p>
          <p>
            Our extensive product range includes <strong>DSL Busbar Systems (125Amp G.I. Coated)</strong>, <strong>Current Collectors (60A to 400A)</strong>, <strong>Wireless Radio Remote Control Systems (6D & 8D)</strong>, <strong>Lever Limit Switches</strong>, <strong>Hydraulic Thruster Brakes</strong>, and <strong>Wire Rope Hoists (1T - 10T)</strong>.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
            <Link href="/about" className="btn-primary" style={{ padding: "12px 24px" }}>
              Read Full Company Story
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: "12px 24px", color: "#021245", borderColor: "#021245" }}>
              Contact Ludhiana HQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
