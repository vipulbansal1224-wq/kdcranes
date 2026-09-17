"use client";

import { useState, useEffect } from "react";

export const contactSlides = [
  {
    id: 1,
    title: "KD ENTERPRISES - LUDHIANA HEADQUARTERS",
    subtitle: "Pioneer & Largest Manufacturer of E.O.T Crane Spare Parts, DSL Busbars, and Current Collectors.",
    bgImage: "/images/r1.jpeg",
    btnText: "Call Sales Helpline",
    btnLink: "tel:+918146077793"
  },
  {
    id: 2,
    title: "DSL BUSBAR SYSTEMS & ACCESSORIES",
    subtitle: "Visit our Ludhiana factory at Village Dharour, Sahnewal for direct factory wholesale orders.",
    bgImage: "/images/r2.jpeg",
    btnText: "View Map Location",
    btnLink: "#map-section"
  },
  {
    id: 3,
    title: "WIRELESS REMOTE CONTROLS & SWITCHES",
    subtitle: "Industrial IP65 rated safety switches and wireless controls with instant factory support.",
    bgImage: "/images/r3.jpeg",
    btnText: "Email Technical Team",
    btnLink: "mailto:kdcranesldh@gmail.com"
  },
  {
    id: 4,
    title: "ELECTRO-HYDRAULIC THRUSTER BRAKES",
    subtitle: "High performance braking systems engineered for heavy steel mills and industrial cranes.",
    bgImage: "/images/r4.jpeg",
    btnText: "Send Online Inquiry",
    btnLink: "#inquiry-form"
  },
  {
    id: 5,
    title: "WIRE ROPE HOISTS & CRANE TROLLEYS",
    subtitle: "Heavy duty lifting hoists from 1 Ton to 10 Ton manufactured under strict quality standards.",
    bgImage: "/images/r5.jpeg",
    btnText: "Call Helpline +91 8146077793",
    btnLink: "tel:+918146077793"
  },
  {
    id: 6,
    title: "CRANE FESTOON CABLE SYSTEMS",
    subtitle: "Complete C-track festoon cable trolleys and forged crane hook accessories.",
    bgImage: "/images/r6.jpeg",
    btnText: "Direct Factory Inquiry",
    btnLink: "#inquiry-form"
  },
  {
    id: 7,
    title: "KD ENTERPRISES FACTORY HEADQUARTERS",
    subtitle: "Contact Mr. Pankesh Thakur & sales engineering team for technical guidance and bulk pricing.",
    bgImage: "/images/r7.jpeg",
    btnText: "Email kdcranesldh@gmail.com",
    btnLink: "mailto:kdcranesldh@gmail.com"
  }
];

export default function ContactHeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % contactSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? contactSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % contactSlides.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#0f172a",
        overflow: "hidden"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 100% Full Width Crisp HD Banner Container without Blue Overlay or Vertical Cropping */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000"
        }}
      >
        {contactSlides.map((slide, idx) => (
          <div
            key={slide.id}
            style={{
              display: idx === currentIdx ? "block" : "none",
              width: "100%",
              transition: "opacity 0.6s ease-in-out",
              textAlign: "center"
            }}
          >
            <img
              src={slide.bgImage}
              alt={slide.title}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "550px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            />
          </div>
        ))}

        {/* Clean HD Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.75)",
            color: "#ffffff",
            border: "2px solid #ff9900",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.6)"
          }}
        >
          ❮
        </button>

        {/* Clean HD Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.75)",
            color: "#ffffff",
            border: "2px solid #ff9900",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.6)"
          }}
        >
          ❯
        </button>
      </div>

      {/* Slide Navigation Dots */}
      <div
        style={{
          background: "#021245",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderTop: "3px solid #ff9900"
        }}
      >
        <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginRight: "12px" }}>
          KD Enterprises Banner Slider ({currentIdx + 1} / {contactSlides.length})
        </span>

        {contactSlides.map((slide, idx) => (
          <button
            key={slide.id}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIdx(idx)}
            style={{
              width: idx === currentIdx ? "32px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background: idx === currentIdx ? "#ff9900" : "#64748b",
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
