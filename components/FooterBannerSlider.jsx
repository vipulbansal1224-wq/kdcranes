"use client";

import { useState, useEffect } from "react";

export const bannerSlides = [
  { id: 1, title: "DSL Busbar & Current Collector Range", image: "/images/r1.jpeg" },
  { id: 2, title: "Wireless Radio Remote Control System", image: "/images/r2.jpeg" },
  { id: 3, title: "Heavy Duty Lever Limit Switch", image: "/images/r3.jpeg" },
  { id: 4, title: "Electro-Hydraulic Thruster Brake", image: "/images/r4.jpeg" },
  { id: 5, title: "Electric Wire Rope Hoist Assembly", image: "/images/r5.jpeg" },
  { id: 6, title: "Crane Trolleys & Festoon Systems", image: "/images/r6.jpeg" },
  { id: 7, title: "KD Enterprises Manufacturing HQ", image: "/images/r7.jpeg" }
];

export default function FooterBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    if (isPaused || fullscreenImage) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, fullscreenImage]);

  const prevBanner = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  };

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  };

  return (
    <section
      style={{
        padding: "60px 0 40px",
        background: "linear-gradient(180deg, #021245 0%, #061954 100%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255, 153, 0, 0.2)",
              border: "1px solid #ff9900",
              color: "#ff9900",
              padding: "4px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px"
            }}
          >
            Manufacturing Showcase Banners
          </div>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: 800,
              fontFamily: "Outfit, sans-serif",
              color: "#ffffff",
              marginBottom: "10px"
            }}
          >
            KD Enterprises Product & Quality Banners
          </h2>

          <p style={{ color: "#cbd5e1", fontSize: "15px", maxWidth: "700px", margin: "0 auto" }}>
            Explore our featured product lines and manufacturing banners highlighting EOT Crane Accessories & DSL Busbar Systems.
          </p>
        </div>

        {/* Banner Carousel Box */}
        <div
          style={{
            position: "relative",
            maxWidth: "1050px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            border: "2px solid rgba(255,255,255,0.15)",
            background: "#000000"
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <div
            style={{
              position: "relative",
              height: "420px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {bannerSlides.map((slide, idx) => (
              <div
                key={slide.id}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: idx === currentIndex ? 1 : 0,
                  transition: "opacity 0.7s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: idx === currentIndex ? 1 : 0
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  onClick={() => setFullscreenImage(slide.image)}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    cursor: "pointer"
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                    padding: "24px 30px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}>
                      {slide.title}
                    </h3>
                    <span style={{ fontSize: "13px", color: "#ff9900", fontWeight: 700 }}>
                      Banner {idx + 1} of {bannerSlides.length} • Click image to inspect HD view
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left / Right Navigation Buttons */}
          <button
            onClick={prevBanner}
            aria-label="Previous Banner"
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.75)",
              color: "#ffffff",
              border: "2px solid rgba(255,255,255,0.4)",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease"
            }}
          >
            ❮
          </button>

          <button
            onClick={nextBanner}
            aria-label="Next Banner"
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.75)",
              color: "#ffffff",
              border: "2px solid rgba(255,255,255,0.4)",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease"
            }}
          >
            ❯
          </button>

          {/* Indicator Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "24px",
              zIndex: 10,
              display: "flex",
              gap: "8px"
            }}
          >
            {bannerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background: idx === currentIndex ? "#ff9900" : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen HD Lightbox Modal */}
      {fullscreenImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "#ff9900",
              color: "#000000",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              fontSize: "22px",
              fontWeight: 800,
              cursor: "pointer"
            }}
          >
            ✕
          </button>
          <img
            src={fullscreenImage}
            alt="HD Banner Lightbox"
            style={{ maxWidth: "95vw", maxHeight: "90vh", objectFit: "contain", borderRadius: "12px" }}
          />
        </div>
      )}
    </section>
  );
}
