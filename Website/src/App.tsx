import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Footer } from './components/Footer';
import { WhatsAppOrderDrawer } from './components/WhatsAppOrderDrawer';
import { FloatingWhatsAppCTA } from './components/FloatingWhatsAppCTA';
import { MedicalCrossWatermark } from './components/MedicalCrossWatermark';
import { LuminousBokehBackground } from './components/LuminousBokehBackground';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState<string>('');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (medicineName?: string) => {
    setSelectedMedicineForOrder(medicineName || '');
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedMedicineForOrder('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-400 selection:text-slate-900 relative">
      {/* Luminous Light Blue Bokeh Background matching Cure Cart Logo Artwork */}
      <LuminousBokehBackground />

      {/* Luminous Light-Colored Cure Cart Cross Logo Watermarks in Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Top Left Cure Cart Cross */}
        <MedicalCrossWatermark className="absolute -top-10 -left-10 w-72 h-72" opacity={0.12} />
        {/* Top Right Floating Cross */}
        <MedicalCrossWatermark className="absolute top-36 -right-12 w-88 h-88" opacity={0.11} />
        {/* Center Subdued Cross */}
        <MedicalCrossWatermark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px]" opacity={0.06} />
        {/* Mid Left Cross */}
        <MedicalCrossWatermark className="absolute top-2/3 -left-14 w-80 h-80" opacity={0.10} />
        {/* Bottom Right Cross */}
        <MedicalCrossWatermark className="absolute bottom-12 right-10 w-96 h-96" opacity={0.11} />
      </div>

      {/* 1. Top Announcement Banner: Up to 25% OFF & 24h Delivery Notice */}
      <AnnouncementBanner
        onLearnMore={() => handleNavigate('services')}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      {/* 2. Top Navigation Bar: Clean Light Aesthetic with exact Cure Cart Logo */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      {/* 3. Main Multi-Page Content Area with Smooth Page Transition (Faded pop from bottom) */}
      <main className="flex-1 overflow-x-hidden relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 42, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenOrderModal={handleOpenOrderModal}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenOrderModal={() => handleOpenOrderModal()}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onOpenOrderModal={handleOpenOrderModal}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onOpenOrderModal={() => handleOpenOrderModal()}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Bottom Footer: Persistent WhatsApp Button & Registration Number Only in the Bottom */}
      <Footer onNavigate={handleNavigate} />

      {/* 5. Persistent Floating WhatsApp Button */}
      <FloatingWhatsAppCTA onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* 6. Interactive WhatsApp Prescription / Order Drawer Modal */}
      <WhatsAppOrderDrawer
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        initialMedicineName={selectedMedicineForOrder}
      />
    </div>
  );
}
