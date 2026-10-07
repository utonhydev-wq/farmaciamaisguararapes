/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { WhatsAppSection } from './components/WhatsAppSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { GoogleReviewSection } from './components/GoogleReviewSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { WhatsAppIcon } from './components/Icons';
import { PHARMACY_INFO } from './data/links';
import { motion } from 'motion/react';

export default function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-slate-50 to-emerald-50/30 text-slate-800 flex flex-col items-center antialiased selection:bg-emerald-500 selection:text-white">
      {/* Decorative background ambient glows */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-radial from-emerald-200/35 via-teal-100/20 to-transparent pointer-events-none -z-10 blur-2xl" 
        aria-hidden="true"
      />

      {/* Main Container - Mobile First layout with centered container on tablets and desktops */}
      <main className="w-full max-w-md mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4 relative">
        {/* 1. Header (Logo, Name, Description, Verified Badge) */}
        <Header onOpenQr={() => setIsQrOpen(true)} />

        {/* 2. WhatsApp Main Call to Action (3 Distinct Options) */}
        <WhatsAppSection />

        {/* 3. Official Instagram Card */}
        <InstagramSection />

        {/* 4. Location & Directions Section */}
        <LocationSection />

        {/* 5. Google Reviews */}
        <GoogleReviewSection />

        {/* 6. Prepared Services & Links Area */}
        <ServicesSection />

        {/* 6. Footer */}
        <Footer />
      </main>

      {/* Quick sticky floating thumb WhatsApp pill for seamless mobile conversion */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <motion.a
          href={PHARMACY_INFO.whatsAppList[0].url}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.92 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs shadow-lg shadow-emerald-700/30 border border-emerald-400/40"
          aria-label="Iniciar atendimento pelo WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>Falar no WhatsApp</span>
        </motion.a>
      </div>

      {/* Share / QR Code Modal */}
      <ShareModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
    </div>
  );
}
