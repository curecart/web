import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { PHARMACY_CONFIG } from '../data/pharmacyData';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';

interface AnnouncementBannerProps {
  onLearnMore?: () => void;
  onOpenOrderModal?: () => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  onLearnMore,
  onOpenOrderModal
}) => {
  return (
    <div className="relative z-40 bg-gradient-to-r from-[#03438A] via-[#0284C7] to-[#03438A] text-white text-xs py-2 px-4 border-b border-sky-300/30 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-medium">
        
        {/* Left side: Tagline & Upto 25% Discount Notice */}
        <div className="flex items-center gap-2.5 mx-auto md:mx-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300"></span>
          </span>
          <p className="tracking-tight text-sky-100">
            <span className="font-quincy font-bold text-sm text-white">Varanasi 24×7 Pharma Delivery:</span>{' '}
            <span className="bg-sky-200 text-sky-950 font-bold px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wide shadow-2xs font-sans">
              Up to 25% Discount
            </span>{' '}
            · Direct doorstep delivery under 24 hours across all ghats.
          </p>
        </div>

        {/* Right side: Quick Action Link + Social Links (Facebook & Instagram) */}
        <div className="hidden md:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-sky-100">
            <Clock className="w-3.5 h-3.5 text-sky-300" />
            <span>24/7 Dispatch · 365 Days</span>
          </div>

          <button
            onClick={onLearnMore}
            className="flex items-center gap-1 text-sky-200 hover:text-white transition-colors font-semibold cursor-pointer underline underline-offset-4 decoration-sky-300/60"
          >
            <span>Discount Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Social Icons: Instagram & Facebook */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-white/20">
            <a
              href={PHARMACY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cure Cart Instagram"
              title="Follow us on Instagram @curecart_vns"
              className="text-slate-300 hover:text-pink-400 transition-transform hover:scale-110"
            >
              <InstagramIcon className="w-3.5 h-3.5 fill-current" />
            </a>
            <a
              href={PHARMACY_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cure Cart Varanasi on Facebook"
              title="Cure Cart Varanasi on Facebook"
              className="text-slate-300 hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FacebookIcon className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>

          <a
            href={PHARMACY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white hover:bg-emerald-600 font-bold px-3 py-1 rounded-full transition-all flex items-center gap-1 text-[11px] shadow-xs hover:scale-105"
          >
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
