import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { InstagramIcon } from '../components/InstagramIcon';
import { FacebookIcon } from '../components/FacebookIcon';
import { PHARMACY_CONFIG } from '../data/pharmacyData';
import { CureCartCrossWatermark } from '../components/CureCartCrossWatermark';
import { Page } from '../types';
import {
  Award,
  ShieldCheck,
  Clock,
  ThermometerSnowflake,
  ArrowRight,
  ArrowUpRight,
  Percent
} from 'lucide-react';
import { MotionSection, staggerContainer, fadeInUp, scaleUpCard } from '../components/MotionWrappers';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  onOpenOrderModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenOrderModal }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION: The Mission */}
      <section className="pt-10 md:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.05)}
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-4 py-1.5 rounded-full uppercase tracking-wider">
              <span>About Cure Cart</span>
              <span aria-hidden="true">·</span>
              <span>Reliable Pharmacy Logistics</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-quincy font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 leading-[1.05]">
              Certified Healthcare{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03438A] via-[#0284C7] to-[#0ea5e9]">
                Delivered to Your Door
              </span>{' '}
              Under 24 Hours.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Cure Cart was established with a singular commitment: to make genuine, life-saving medicines accessible to every patient in Varanasi within 24 hours — without the burden of long pharmacy lines, retail markups, or emergency stockouts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. OFFICIAL PHARMACIST COMMITMENT BOX (Light-themed with Cure Cart Cross logo) */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50 to-cyan-50/70 text-slate-800 p-8 sm:p-12 relative overflow-hidden shadow-xl border-2 border-sky-200">
          
          {/* Light-colored Cure Cart Cross logo watermarks */}
          <CureCartCrossWatermark className="absolute -top-10 -right-10" size={240} opacity={0.12} />
          <CureCartCrossWatermark className="absolute -bottom-10 -left-10" size={200} opacity={0.10} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer(0.08, 0.05)}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-sky-800 font-bold">
                    Pharmacist &amp; Founder
                  </span>
                  <h2 className="font-quincy font-bold text-2xl sm:text-3xl tracking-tight text-slate-900">
                    <span className="text-sky-800">Drx. Faisal Iqbal</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Pharmacist &amp; Founder
                  </p>
                </div>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-sm text-slate-600 leading-relaxed font-sans">
                Operated under the strict statutory purview of the <strong>Pharmacy Council of India (PCI)</strong> and the <strong>State Pharmacy Council</strong> in compliance with the Drugs and Cosmetics Act, 1940 and Rules, 1945.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-sky-200 text-slate-800 shadow-2xs">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Pharmacist &amp; Founder</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">{PHARMACY_CONFIG.pharmacistName}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{PHARMACY_CONFIG.pharmacistTitle}</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sky-200 text-slate-800 shadow-2xs">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Pricing Policy</p>
                  <p className="text-sm font-bold text-sky-700 mt-1">Up to 25% Discount</p>
                  <p className="text-xs text-slate-600 mt-0.5">Applied Directly on MRP</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-2 text-xs text-slate-600 space-y-1">
                <p><strong>PCI Verification Number:</strong> <span className="font-mono text-sky-800 font-semibold">UPPC/PH/2021/89201</span></p>
                <p><strong>Licence/Reg:</strong> <span className="font-mono text-sky-800 font-semibold">{PHARMACY_CONFIG.registrationNumber}</span></p>
              </motion.div>
            </motion.div>

            {/* Right Column: Quote Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-8 space-y-4 shadow-md text-slate-800"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">Our Vision</span>
                <blockquote className="text-sm sm:text-base italic leading-relaxed font-quincy text-slate-700">
                  &ldquo;No family should have to wander from chemist to chemist in Varanasi searching for essential medicines or pay inflated retail markups. We bring the dispensary directly to your door with guaranteed authenticity and an honest discount of up to 25% on medicines.&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{PHARMACY_CONFIG.pharmacistName}</p>
                    <p className="text-[11px] text-slate-500">Pharmacist &amp; Founder</p>
                  </div>
                  <a
                    href={PHARMACY_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#25D366] text-white hover:bg-emerald-600 transition-colors shadow-2xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* 3. FOUR CORE VALUES */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
            Standards &amp; Principles
          </span>
          <h2 className="font-quincy font-bold text-3xl sm:text-5xl tracking-tight text-slate-900">
            What We <span className="text-sky-800">Stand For</span>
          </h2>
          <p className="text-sm text-slate-600">
            Four non-negotiable standards upheld by Cure Cart under professional pharmacist supervision.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer(0.08, 0.05)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={scaleUpCard} whileHover={{ y: -4 }} className="rounded-2xl p-6 bg-white border border-slate-200 space-y-3 shadow-2xs hover:border-cyan-500 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">Zero <span className="text-sky-800">Counterfeit Policy</span></h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Every strip and vial is procured directly through authenticated manufacturer lines. No third-party brokers.
            </p>
          </motion.div>

          <motion.div variants={scaleUpCard} whileHover={{ y: -4 }} className="rounded-2xl p-6 bg-white border border-slate-200 space-y-3 shadow-2xs hover:border-cyan-500 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">Under 24h <span className="text-emerald-700">Fulfillment</span></h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Express delivery network operating across all 84 Varanasi ghats and surrounding zones.
            </p>
          </motion.div>

          <motion.div variants={scaleUpCard} whileHover={{ y: -4 }} className="rounded-2xl p-6 bg-white border border-slate-200 space-y-3 shadow-2xs hover:border-cyan-500 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ThermometerSnowflake className="w-6 h-6" />
            </div>
            <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">Cold-Chain <span className="text-blue-800">Integrity</span></h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Certified 2°C–8°C insulated transport with temperature logs for insulins, vaccines, and biologics.
            </p>
          </motion.div>

          <motion.div variants={scaleUpCard} whileHover={{ y: -4 }} className="rounded-2xl p-6 bg-white border border-slate-200 space-y-3 shadow-2xs hover:border-cyan-500 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">Up to <span className="text-purple-700">25% Discount</span></h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Direct wholesale savings passed to Varanasi families without hidden convenience surcharges.
            </p>
          </motion.div>
        </motion.div>
      </MotionSection>

      {/* 4. SOCIAL MEDIA CONNECT: Facebook & Instagram */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-xs text-center space-y-5">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-3.5 py-1 rounded-full">
              Stay Connected With Cure Cart
            </span>
            <h2 className="font-quincy font-bold text-3xl sm:text-4xl tracking-tight text-slate-900">
              Join Our Varanasi <span className="text-sky-800">Healthcare Community</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto font-sans">
              Follow our official pages on Facebook and Instagram for health awareness, seasonal medicine safety, and delivery updates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Facebook Link */}
            <a
              href={PHARMACY_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <FacebookIcon className="w-4 h-4 fill-white" />
              <span>Facebook: {PHARMACY_CONFIG.facebookName}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Instagram Link */}
            <a
              href={PHARMACY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>Instagram: {PHARMACY_CONFIG.instagramUsername}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </MotionSection>

      {/* 5. CALL TO ACTION */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="font-quincy font-bold text-3xl sm:text-4xl tracking-tight text-slate-900">
            Experience Trusted Pharmacy Delivery
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            Have questions about your prescription or need advice on branded medicine discounts? Chat directly with our pharmacist on WhatsApp or email{' '}
            <a href={`mailto:${PHARMACY_CONFIG.email}`} className="text-cyan-700 font-bold underline">
              {PHARMACY_CONFIG.email}
            </a>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHARMACY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-emerald-600 shadow-md transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>Connect on WhatsApp ({PHARMACY_CONFIG.phoneDisplay})</span>
            </a>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs cursor-pointer transition-colors"
            >
              <span>View Services &amp; Products</span>
              <ArrowRight className="w-4 h-4 text-cyan-600" />
            </button>
          </div>
        </div>
      </MotionSection>

    </div>
  );
};
