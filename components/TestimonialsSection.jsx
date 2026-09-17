"use client";

import { testimonials } from "../data/siteData";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="red-heading">Client Trust & Testimonials</div>
          <h2>What Industrial Clients Say About KD Cranes</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((test, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="test-stars">{"★".repeat(test.rating)}</div>
              <div className="test-quote">"{test.quote}"</div>
              <div className="test-author">{test.author}</div>
              <div className="test-role">{test.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
