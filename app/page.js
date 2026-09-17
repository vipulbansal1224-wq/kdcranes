"use client";

import { useState } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import PioneerSection from "../components/PioneerSection";
import StatsSection from "../components/StatsSection";
import ProductCategoriesGrid from "../components/ProductCategoriesGrid";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import EnquiryModal from "../components/EnquiryModal";
import DealerModal from "../components/DealerModal";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDealerModal, setShowDealerModal] = useState(false);

  const handleOpenQuote = (prod = null) => {
    setQuoteProduct(prod);
    setShowQuoteModal(true);
  };

  return (
    <main>
      <TopBar />
      <Header
        onOpenDealerModal={() => setShowDealerModal(true)}
        onOpenCatalogModal={() => handleOpenQuote(null)}
      />
      <HeroSlider onOpenQuoteModal={() => handleOpenQuote(null)} />
      <PioneerSection />
      <StatsSection />
      <ProductCategoriesGrid
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onOpenQuoteModal={(prod) => handleOpenQuote(prod)}
      />
      <TestimonialsSection />
      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuote={(prod) => handleOpenQuote(prod)}
        />
      )}

      {showQuoteModal && (
        <EnquiryModal
          product={quoteProduct}
          onClose={() => {
            setShowQuoteModal(false);
            setQuoteProduct(null);
          }}
        />
      )}

      {showDealerModal && (
        <DealerModal onClose={() => setShowDealerModal(false)} />
      )}
    </main>
  );
}
