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

  // Auto-play timer (changes slide every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slidesData.length);
    }, 3500);
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
        minHeight: "560px",
        overflow: "hidden",
        backgroundColor: "#000000"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* HD Crisp Background Banner Image Carousel WITHOUT BLUE OVERLAY */}
      {slidesData.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%), url('${slide.bgImage}'), url('${slide.localBg}')`,
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
          minHeight: "560px",
          padding: "60px 20px 80px",
          color: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            background: "rgba(0, 0, 0, 0.45)",
            padding: "32px",
            borderRadius: "20px",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #ff9900, #e68a00)",
              color: "#000000",
              padding: "4px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "1px",
              marginBottom: "16px",
              textTransform: "uppercase"
            }}
          >
            Pioneer Crane Manufacturer • Ludhiana, Punjab
          </div>

          <h2
            style={{
              fontSize: "38px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: "16px",
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)"
            }}
          >
            {current.title}
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#f1f5f9",
              marginBottom: "28px",
              lineHeight: 1.6,
              textShadow: "0 1px 4px rgba(0,0,0,0.8)"
            }}
          >
            {current.subtitle}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href={current.btnLink}
              style={{
                background: "linear-gradient(135deg, #1346af, #061954)",
                color: "#ffffff",
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: "30px",
                fontSize: "15px",
                boxShadow: "0 4px 15px rgba(19, 70, 175, 0.5)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              {current.btnText} →
            </Link>
            <button
              onClick={() => onOpenQuoteModal(null)}
              style={{
                background: "linear-gradient(135deg, #ff9900, #e68a00)",
                color: "#000000",
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: "30px",
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(255, 153, 0, 0.4)"
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
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.7)",
          color: "#ffffff",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
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
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.7)",
          color: "#ffffff",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
        }}
      >
        ❯
      </button>

      {/* Bullet Indicator Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
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
              width: idx === currentIdx ? "36px" : "12px",
              height: "12px",
              borderRadius: "6px",
              background: idx === currentIdx ? "#ff9900" : "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(0,0,0,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>
    </div>
  );
}
