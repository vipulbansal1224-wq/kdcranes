"use client";

import Link from "next/link";
import { siteInfo } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>About {siteInfo.companyName}</h4>
            <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
              KD Enterprises is Ludhiana's premier manufacturer of high-performance E.O.T Crane Spare Parts, Shrouded DSL Busbar Systems, Current Collectors, and Wireless Remote Controls.
            </p>
            <div style={{ fontSize: "13px", color: "#fbbf24", fontWeight: 600 }}>
              GSTIN: {siteInfo.gstin}
            </div>
            <div style={{ fontSize: "13px", color: "#cbd5e1", marginTop: "4px" }}>
              Proprietor: {siteInfo.owner}
            </div>
          </div>

          <div className="footer-col">
            <h4>Product Categories</h4>
            <ul className="footer-menu">
              <li><Link href="/products/dsl-busbar-system-125amp">DSL Busbar Systems (125A)</Link></li>
              <li><Link href="/products/eot-crane-current-collector">EOT Crane Current Collectors</Link></li>
              <li><Link href="/products/eot-crane-wireless-radio-remote-control-system">Wireless Radio Remotes (6D/8D)</Link></li>
              <li><Link href="/products/lever-limit-switch-for-eot-crane">Lever Limit Switches</Link></li>
              <li><Link href="/products/hydraulic-thruster-brake">Hydraulic Thruster Brakes</Link></li>
              <li><Link href="/products/electric-wire-rope-hoist">Electric Wire Rope Hoists</Link></li>
              <li><Link href="/products/crane-trolleys-and-forged-hooks">Crane Trolleys & Hooks</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About KD Enterprises</Link></li>
              <li><Link href="/products">All Products Portfolio</Link></li>
              <li><Link href="/download">Brochure Downloads</Link></li>
              <li><Link href="/gallery">Equipment Gallery</Link></li>
              <li><Link href="/contact">Contact & Location</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ludhiana Sales Office</h4>
            <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
              <p>📍 {siteInfo.address}</p>
              <p style={{ marginTop: "10px" }}>📞 {siteInfo.phone}</p>
              <p>☎️ {siteInfo.landline}</p>
              <p style={{ marginTop: "10px" }}>✉️ {siteInfo.email}</p>
              <p>✉️ {siteInfo.secondaryEmail}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {siteInfo.companyName} ({siteInfo.brandName}). All Rights Reserved.
          </div>
          <div>
            Designed & Developed in Next.js for Maximum Performance.
          </div>
        </div>
      </div>
    </footer>
  );
}
