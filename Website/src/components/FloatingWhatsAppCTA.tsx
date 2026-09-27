import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHARMACY_CONFIG } from '../data/pharmacyData';
import { ArrowUpRight, FileUp, X } from 'lucide-react';

interface FloatingWhatsAppCTAProps {
  onOpenOrderModal: () => void;
}

export const FloatingWhatsAppCTA: React.FC<FloatingWhatsAppCTAProps> = ({ onOpenOrderModal }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* 1. Mobile Bottom Sticky Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-md p-3 shadow-2xl border-t border-slate-200 md:hidden flex items-center justify-between gap-3">
        <button
          onClick={onOpenOrderModal}
          className="flex-1 py-2.5 px-3 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-200"
        >
          <FileUp className="w-3.5 h-3.5 text-cyan-600" />
          <span>Upload Slip</span>
        </button>

        <a
          href={PHARMACY_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-2 py-2.5 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
          <span>Order on WhatsApp</span>
        </a>
      </div>

      <div className="h-14 md:hidden pointer-events-none" aria-hidden="true" />

      {/* 2. Desktop Floating Widget */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end">
        {/* Expanded options popup */}
        {expanded && (
          <div className="mb-3 w-80 rounded-2xl bg-white border border-slate-200 text-slate-900 p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="font-quincy font-bold text-sm text-sky-800">
                Quick Pharmacy Service
              </span>
              <button
                onClick={() => setExpanded(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed font-sans">
              Need medicines? Order Now for fast doorstep delivery across Varanasi:
            </p>

            <div className="space-y-2.5">
              <a
                href={PHARMACY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-between shadow-xs transition-colors"
              >
                <span className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => { setExpanded(false); onOpenOrderModal(); }}
                className="w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-between shadow-xs transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <FileUp className="w-4 h-4 text-cyan-600" />
                  <span>Prescription Checklist</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Floating Capsule Bar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label="Need medicines? Order Now"
            className="group flex items-center gap-3.5 bg-slate-900 text-white pl-5 pr-2.5 py-2.5 rounded-full shadow-xl border border-slate-700/80 hover:bg-slate-800 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105"
          >
            <div className="text-left font-sans">
              <p className="text-[11px] text-slate-300 font-medium tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Need medicines?
              </p>
              <p className="font-quincy font-bold text-base tracking-tight text-white uppercase leading-none mt-0.5">
                Order Now
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <WhatsAppIcon className="w-5 h-5 fill-white" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
