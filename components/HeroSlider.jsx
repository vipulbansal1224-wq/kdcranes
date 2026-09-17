"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const slidesData = [
  {
    id: 1,
    title: "K.D. CRANE SPARE PARTS & ACCESSORIES",
    subtitle: "Pioneer & Largest Manufacturer of E.O.T Crane Spare Parts, DSL Busbars, and Current Collectors in Ludhiana, Punjab.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2023/01/banner-2-1.jpg",
    localBg: "/images/banner-2-1.jpg",
    btnText: "Explore Products",
    btnLink: "/products"
  },
  {
    id: 2,
    title: "DSL BUSBAR SYSTEM – 125 AMP G.I. COATED",
    subtitle: "High safety shrouded conductor busbar systems available in 60A, 100A, 125A, 200A, 250A, and 400A ratings.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2023/01/banner5.jpg",
    localBg: "/images/banner5.jpg",
    btnText: "View Busbar Systems",
    btnLink: "/products/dsl-busbar-system-125amp"
  },
  {
    id: 3,
    title: "EOT CRANE CURRENT COLLECTOR (60A - 400A)",
    subtitle: "Heavy duty copper current collector shoes, gravity type and spring loaded assemblies for overhead cranes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/08/eot_crane_banner_2_1787744731192.jpg",
    localBg: "/images/eot_crane_banner_2_1787744731192.jpg",
    btnText: "View Collectors",
    btnLink: "/products/eot-crane-current-collector"
  },
  {
    id: 4,
    title: "WIRELESS RADIO REMOTE CONTROL SYSTEM (6D & 8D)",
    subtitle: "Industrial IP65 waterproof wireless radio remote control system with emergency stop for overhead cranes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/08/eot_slide_6_1787744944890.jpg",
    localBg: "/images/eot_slide_6_1787744944890.jpg",
    btnText: "Download Brochure",
    btnLink: "/download"
  },
  {
    id: 5,
    title: "HEAVY DUTY LEVER LIMIT SWITCH FOR EOT CRANE",
    subtitle: "Instantaneous trip action 2-position lever limit switches for overhoist and long travel protection.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_3_nologo_1789039671056.jpg",
    localBg: "/images/eot_slide_3_nologo_1789039671056.jpg",
    btnText: "View Limit Switches",
    btnLink: "/products/lever-limit-switch-for-eot-crane"
  },
  {
    id: 6,
    title: "ELECTRO-HYDRAULIC THRUSTER BRAKES",
    subtitle: "Smooth braking torque up to 5000 Nm with automatic shoe wear compensation for industrial cranes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_4_nologo_1789039694265.jpg",
    localBg: "/images/eot_slide_4_nologo_1789039694265.jpg",
    btnText: "View Thruster Brakes",
    btnLink: "/products/hydraulic-thruster-brake"
  },
  {
    id: 7,
    title: "ELECTRIC WIRE ROPE HOISTS (1 TON - 10 TON)",
    subtitle: "Precision machined alloy steel helical gears with oil bath lubrication and electromagnetic disc brakes.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_5_nologo_1789039719383.jpg",
    localBg: "/images/eot_slide_5_nologo_1789039719383.jpg",
    btnText: "View Wire Rope Hoists",
    btnLink: "/products/electric-wire-rope-hoist"
  },
  {
    id: 8,
    title: "CRANE TROLLEYS & FORGED HOOK ACCESSORIES",
    subtitle: "Complete range of Gear Trolleys, MS Trolleys, PVC Cable Carry Trolleys, and Forged Crane Hooks.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_6_nologo_1789039750385.jpg",
    localBg: "/images/eot_slide_6_nologo_1789039750385.jpg",
    btnText: "View Trolleys & Hooks",
    btnLink: "/products/crane-trolleys-and-forged-hooks"
  },
  {
    id: 9,
    title: "KD ENTERPRISES - LUDHIANA MANUFACTURING HQ",
    subtitle: "Contact Mr. Pankesh Thakur & sales team for direct factory wholesale rates and technical assistance.",
    bgImage: "https://kdcranes.com/wp-content/uploads/2026/09/eot_slide_7_nologo_1789039779877.jpg",
    localBg: "/images/eot_slide_7_nologo_1789039779877.jpg",
    btnText: "Contact Factory HQ",
    btnLink: "/contact"
  }
];

export default function HeroSlider({ onOpenQuoteModal }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % slidesData.length);
  };

  const current = slidesData[currentIdx];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "520px",
        overflow: "hidden",
        backgroundColor: "#021245"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with smooth crossfade */}
      {slidesData.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(2, 18, 69, 0.65), rgba(2, 18, 69, 0.75)), url('${slide.bgImage}'), url('${slide.localBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: idx === currentIdx ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            zIndex: idx === currentIdx ? 1 : 0
          }}
        />
      ))}

      {/* Hero Banner Content Overlay */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "520px",
          padding: "60px 20px 80px",
          color: "#ffffff"
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255, 153, 0, 0.25)",
              color: "#ffaa00",
              border: "1px solid rgba(255, 153, 0, 0.5)",
              padding: "4px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "16px",
              textTransform: "uppercase"
            }}
          >
            Pioneer Crane Manufacturer • Ludhiana, Punjab
          </div>

          <h2
            style={{
              fontSize: "42px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "16px",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)"
            }}
          >
            {current.title}
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#cbd5e1",
              marginBottom: "28px",
              lineHeight: 1.6,
              textShadow: "0 1px 4px rgba(0,0,0,0.5)"
            }}
          >
            {current.subtitle}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href={current.btnLink}
              style={{
                background: "linear-gradient(135deg, #ff9900, #e68a00)",
                color: "#000000",
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: "30px",
                fontSize: "15px",
                boxShadow: "0 4px 15px rgba(255, 153, 0, 0.4)",
                textDecoration: "none"
              }}
            >
              {current.btnText} →
            </Link>
            <button
              onClick={() => onOpenQuoteModal(null)}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                border: "1.5px solid rgba(255, 255, 255, 0.3)",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "30px",
                fontSize: "15px",
                backdropFilter: "blur(8px)",
                cursor: "pointer"
              }}
            >
              Request Quick Price Quote
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows (< and >) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
      >
        ❯
      </button>

      {/* Bullet Indicator Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          gap: "10px"
        }}
      >
        {slidesData.map((slide, idx) => (
          <button
            key={slide.id}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIdx(idx)}
            style={{
              width: idx === currentIdx ? "32px" : "12px",
              height: "12px",
              borderRadius: "6px",
              background: idx === currentIdx ? "#ff9900" : "rgba(255, 255, 255, 0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>
    </div>
  );
}
