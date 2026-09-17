"use client";

import { useState } from "react";
import Link from "next/link";
import { heroSlides } from "../data/siteData";

export default function HeroSlider({ onOpenQuoteModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentSlide = heroSlides[activeIdx];

  return (
    <section className="hero-section" style={{ background: currentSlide.bgPattern }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-left-inner">
              <h2>{currentSlide.title}</h2>
              <p>{currentSlide.subtitle}</p>
              <div className="hero-btn-group">
                <Link href={currentSlide.btnLink} className="btn-primary">
                  {currentSlide.btnText}
                </Link>
                <button onClick={onOpenQuoteModal} className="btn-secondary">
                  Instant Quote Enquiry
                </button>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-right-image">
              <div className="hero-img-card">
                <img src={currentSlide.badgeImg} alt={currentSlide.title} />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-nav-tabs">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-nav-item ${activeIdx === idx ? "active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              {slide.title.split(" ")[0]} {slide.title.split(" ")[1] || ""}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
