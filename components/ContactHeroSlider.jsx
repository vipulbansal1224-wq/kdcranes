"use client";

import { useState, useEffect } from "react";

export const contactSlides = [
  {
    id: 1,
    title: "CONTACT KD ENTERPRISES - LUDHIANA",
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

  const current = contactSlides[currentIdx];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "560px",
        height: "60vh",
        maxHeight: "750px",
        overflow: "hidden",
        backgroundColor: "#000000"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fully Stretched HD Background Banner Images Carousel (R1 - R7) */}
      {contactSlides.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.15) 100%), url('${slide.bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
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
          height: "100%",
          minHeight: "560px",
          padding: "60px 20px 80px",
          color: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            background: "rgba(0, 0, 0, 0.55)",
            padding: "32px 36px",
            borderRadius: "24px",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.7)"
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #ff9900, #e68a00)",
              color: "#000000",
              padding: "5px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "1px",
              marginBottom: "16px",
              textTransform: "uppercase"
            }}
          >
            Factory HQ • Sahnewal, Ludhiana, Punjab
          </div>

          <h1
            style={{
              fontSize: "38px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: "16px",
              color: "#ffffff",
              textShadow: "0 2px 12px rgba(0,0,0,0.9)"
            }}
          >
            {current.title}
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#f1f5f9",
              marginBottom: "28px",
              lineHeight: 1.6,
              textShadow: "0 1px 6px rgba(0,0,0,0.9)"
            }}
          >
            {current.subtitle}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
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
            </a>
            <a
              href="tel:+918146077793"
              style={{
                background: "linear-gradient(135deg, #ff9900, #e68a00)",
                color: "#000000",
                fontWeight: 800,
                padding: "14px 28px",
                borderRadius: "30px",
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(255, 153, 0, 0.4)"
              }}
            >
              📞 +91 8146077793
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
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
          background: "rgba(0, 0, 0, 0.75)",
          color: "#ffffff",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
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
          background: "rgba(0, 0, 0, 0.75)",
          color: "#ffffff",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
        }}
      >
        ❯
      </button>

      {/* Bullet Dots */}
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
        {contactSlides.map((slide, idx) => (
          <button
            key={slide.id}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIdx(idx)}
            style={{
              width: idx === currentIdx ? "36px" : "12px",
              height: "12px",
              borderRadius: "6px",
              background: idx === currentIdx ? "#ff9900" : "rgba(255, 255, 255, 0.6)",
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
