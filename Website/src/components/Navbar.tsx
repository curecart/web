import React, { useState } from 'react';
import { CureCartLogo } from './CureCartLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';
import { Page } from '../types';
import { PHARMACY_CONFIG } from '../data/pharmacyData';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenOrderModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Medicines & Catalog' },
    { id: 'contact', label: 'Contact & Support' }
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/92 border-b border-sky-200/70 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 md:h-24">
          
          {/* Left Column: Navigation Links on Desktop / Hamburger on Mobile */}
          <div className="flex-1 flex items-center justify-start">
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1.5 transition-colors cursor-pointer whitespace-nowrap hover:text-sky-600 ${
                    currentPage === link.id
                      ? 'text-[#03438A] font-bold border-b-2 border-sky-500'
                      : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-sky-50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center Column: Cure Cart Brand Logo */}
          <div className="flex-shrink-0 flex items-center justify-center px-2 relative z-30 pointer-events-auto">
            <button
              onClick={() => handleNavClick('home')}
              className="relative flex items-center justify-center focus:outline-none rounded-2xl p-0.5 cursor-pointer transition-transform hover:scale-[1.02] active:scale-100"
              aria-label="Cure Cart Home"
            >
              <CureCartLogo size="top-xl" className="-my-7 sm:-my-10 md:-my-12" />
            </button>
          </div>

          {/* Right Column: Social Links & CTA Buttons */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
            
            {/* Social Links on Desktop */}
            <div className="hidden xl:flex items-center gap-2 text-slate-500 pr-2 border-r border-slate-200">
              <a
                href={PHARMACY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Cure Cart on Instagram @curecart_vns"
                className="p-1.5 rounded-full hover:bg-pink-50 hover:text-pink-600 transition-all hover:scale-110"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href={PHARMACY_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Cure Cart Varanasi on Facebook"
                className="p-1.5 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all hover:scale-110"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
            </div>

            {/* Desktop Prescription Button */}
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-sky-200 bg-sky-50/70 text-sky-800 hover:bg-sky-100 hover:border-sky-300 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              <span>Prescription</span>
            </button>

            {/* Primary Action Button: WhatsApp Order */}
            <a
              href={PHARMACY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md"
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span className="hidden xs:inline">Order Now</span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 group-hover:bg-white group-hover:text-emerald-700 transition-colors">
                <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'bg-cyan-50 text-cyan-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links on Mobile */}
          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-medium">Follow Cure Cart:</span>
            <a
              href={PHARMACY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold"
            >
              <InstagramIcon className="w-3.5 h-3.5 fill-current" />
              <span>Instagram</span>
            </a>
            <a
              href={PHARMACY_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold"
            >
              <FacebookIcon className="w-3.5 h-3.5 fill-current" />
              <span>Facebook</span>
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOrderModal(); }}
              className="w-full py-2.5 px-4 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
            >
              Upload Prescription Photo
            </button>

            <a
              href={PHARMACY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-emerald-600 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
