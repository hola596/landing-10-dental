'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoDemoSection from '../components/VideoDemoSection';
import TreatmentMatrixSection from '../components/TreatmentMatrixSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import QualificationModal from '../components/QualificationModal';
import CookieBanner from '../components/CookieBanner';
import LegalModal from '../components/LegalModal';

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms' | 'legal'>('privacy');

  const handleOpenFilter = () => {
    setIsFilterOpen(true);
  };

  const handleOpenLegal = (tab: 'privacy' | 'terms' | 'legal') => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenModal={handleOpenFilter} />

      <main className="flex-grow">
        <Hero onOpenModal={handleOpenFilter} />
        <VideoDemoSection />
        <TreatmentMatrixSection onOpenModal={handleOpenFilter} />
        <FAQSection />
      </main>

      <Footer onOpenLegal={handleOpenLegal} />

      {/* Interactive Qualification Modal (4-step quiz) */}
      <QualificationModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      {/* Legal Compliance Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        activeTab={legalTab}
        onClose={() => setIsLegalOpen(false)}
        onTabChange={(tab) => setLegalTab(tab)}
      />

      {/* Interactive Cookie Consent Banner */}
      <CookieBanner onOpenLegal={handleOpenLegal} />
    </div>
  );
}
