import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';
import { CureCartCrossWatermark } from './CureCartCrossWatermark';
import { PHARMACY_CONFIG } from '../data/pharmacyData';
import { Page } from '../types';
import { Phone, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { smoothPopUp, staggerContainer, popCard } from './MotionWrappers';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-sky-200 bg-gradient-to-b from-sky-50/70 via-white to-sky-100/60 text-slate-700 text-sm overflow-hidden relative">
      {/* Light-colored Cure Cart Cross logo watermarks in background */}
      <CureCartCrossWatermark className="absolute -top-10 -right-10" size={260} opacity={0.12} />
      <CureCartCrossWatermark className="absolute -bottom-10 -left-10" size={220} opacity={0.10} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        
        {/* Grand Cure Cart Brand Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={smoothPopUp}
          className="w-full flex flex-col items-center justify-center text-center pb-12 mb-12 border-b border-sky-200/80 overflow-hidden"
        >
          <div className="w-full flex items-center justify-center px-2 sm:px-4 py-2">
            <img
              src="/curecart-logo.png"
              alt="Cure Cart - Meds To Your Door Under 24 Hours"
              className="w-full max-w-4xl md:max-w-5xl h-auto object-contain max-h-[160px] sm:max-h-[220px] md:max-h-[280px] drop-shadow-md hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="mt-4 max-w-3xl px-4 space-y-1">
            <h2 className="font-quincy font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              <span>Medicines Delivered Across All 84 Varanasi Ghats </span>
              <span className="text-sky-800">Under 24 Hours</span>
            </h2>
            <p className="text-sm font-medium text-slate-600 font-['Noto_Sans_Devanagari',sans-serif]">
              फार्मासिस्ट-प्रमाणित असली दवाइयाँ — 24 घंटे में आपके द्वार पर।
            </p>
          </div>
        </motion.div>

        {/* 4 Columns Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.08, 0.04)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          
          {/* Brand & Mission with trust credentials & Socials */}
          <motion.div variants={popCard} className="space-y-4">
            <h4 className="font-quincy font-bold text-xl text-slate-900 tracking-tight">
              <span>About </span>
              <span className="text-sky-800">Cure Cart</span>
              <span className="font-sans text-xs text-slate-500 font-normal ml-1">/ क्योर कार्ट</span>
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Registered 24×7 fulfillment pharmacy delivering verified authentic medicines across all 84 Varanasi ghats &amp; zones.
            </p>

            {/* Regulatory Badges */}
            <div className="pt-1 space-y-2">
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Govt. Licensed · 100% Authentic</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-sky-800 font-medium bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full">
                <span className="font-bold text-sky-700">24/7</span>
                <span>Pharmacist Verification &amp; Cold-Chain</span>
              </div>
            </div>

            {/* Social Media Links (Instagram & Facebook) */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Follow Us On Social Media:
              </p>
              
              <div className="flex flex-col gap-2">
                {/* Instagram */}
                <a
                  href={PHARMACY_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-pink-600 transition-colors bg-white px-3 py-2 rounded-xl border border-sky-200 shadow-2xs hover:border-pink-300"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram: {PHARMACY_CONFIG.instagramUsername}</span>
                </a>

                {/* Facebook */}
                <a
                  href={PHARMACY_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors bg-white px-3 py-2 rounded-xl border border-sky-200 shadow-2xs hover:border-blue-300"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600" />
                  <span>Facebook: {PHARMACY_CONFIG.facebookName}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact / संपर्क */}
          <motion.div variants={popCard} className="space-y-3">
            <h4 className="font-quincy font-bold text-xl text-slate-900 tracking-tight">
              <span>Contact </span>
              <span className="text-sky-800">Support</span>
              <span className="font-sans text-xs text-slate-500 font-normal ml-1">/ संपर्क</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-sans">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`tel:${PHARMACY_CONFIG.phoneNumber}`} className="hover:text-sky-800 transition-colors font-medium">
                  {PHARMACY_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={PHARMACY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors font-medium"
                >
                  WhatsApp: 24×7 Orders &amp; Inquiries
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Varanasi, UP - 221002 (All 84 Ghats)</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={PHARMACY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-emerald-600 shadow-xs transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div variants={popCard} className="space-y-3">
            <h4 className="font-quincy font-bold text-xl text-slate-900 tracking-tight">
              <span>Quick </span>
              <span className="text-sky-800">Navigation</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600 font-medium"
                >
                  Home / मुख्य
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600 font-medium"
                >
                  About Us / हमारे बारे में
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600 font-medium"
                >
                  Medicines &amp; Catalog / दवाइयाँ
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600 font-medium"
                >
                  Contact &amp; Support / संपर्क
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Trust & Compliance */}
          <motion.div variants={popCard} className="space-y-3">
            <h4 className="font-quincy font-bold text-xl text-slate-900 tracking-tight">
              <span>Statutory </span>
              <span className="text-sky-800">Compliance</span>
            </h4>
            <div className="rounded-2xl border border-sky-200 bg-white p-4 space-y-2 shadow-2xs">
              <div className="flex items-center gap-1.5 text-sky-700 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Licence/Reg</span>
              </div>
              <div className="font-mono text-sm font-bold text-sky-900 pt-0.5 tracking-wide">
                {PHARMACY_CONFIG.registrationNumber}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>
            &copy; 2026 Cure Cart. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PHARMACY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-800 font-medium transition-colors"
            >
              Instagram
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={PHARMACY_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-800 font-medium transition-colors"
            >
              Facebook
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={PHARMACY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-800 font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <p className="font-medium text-slate-600">
            Dedicated to Varanasi / काशी के लिए समर्पित।
          </p>
        </div>

      </div>
    </footer>
  );
};
