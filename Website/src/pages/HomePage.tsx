import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';
import { PHARMACY_CONFIG, TESTIMONIALS } from '../data/pharmacyData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { RatingStars } from '../components/RatingStars';
import { CureCartCrossWatermark } from '../components/CureCartCrossWatermark';
import {
  MapPin,
  CheckCircle2,
  Percent,
  ShieldCheck,
  Clock,
  FileText,
  Phone,
  HeartPulse,
  BadgeIndianRupee,
  MessageCircle,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  slideFromLeft,
  slideFromRight,
  smoothPopUp,
  popCard,
  smoothStepPop
} from '../components/MotionWrappers';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenOrderModal: (medicineName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenOrderModal }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Clean Medical Aesthetic with Anton Headline & Poppins Body */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-[#F0F8FF] pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-sky-100">
        
        {/* Soft radial glow matching Cure Cart logo background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-sky-200/35 via-cyan-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12, 0.05)}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            {/* Top Tag: Serving all 84 Varanasi Ghats */}
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-900 shadow-2xs backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Serving all 84 Varanasi Ghats &amp; Localities / संपूर्ण वाराणसी</span>
              </div>
            </motion.div>

            {/* Giant Quincy Bold Headline */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h1 className="font-quincy font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-slate-900">
                <span>Meds to your door,</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03438A] via-[#0284C7] to-[#0ea5e9]">
                  under 24 hours.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 font-['Noto_Sans_Devanagari',sans-serif] pt-1">
                आपकी दवाइयाँ आपके दरवाज़े पर, <span className="font-bold text-sky-800">24 घंटे के अंदर।</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-2 max-w-2xl mx-auto text-slate-600">
              <p className="text-base sm:text-lg leading-relaxed font-normal">
                Cure Cart delivers authentic, pharmacist-verified medicines straight to your home across Varanasi. Just share your doctor's prescription on WhatsApp — we handle the rest.
              </p>
              <p className="text-sm sm:text-base font-['Noto_Sans_Devanagari',sans-serif] text-slate-500">
                क्योर कार्ट वाराणसी में असली, फार्मासिस्ट-प्रमाणित दवाइयाँ आपके घर तक पहुँचाता है। बस अपना प्रिस्क्रिप्शन व्हाट्सएप पर भेजें।
              </p>
            </motion.div>

            {/* Pill Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={PHARMACY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-emerald-600 shadow-md shadow-emerald-500/20 transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer group"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Order on WhatsApp / व्हाट्सएप ऑर्डर</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <button
                onClick={() => onOpenOrderModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm sm:text-base text-slate-700 border-2 border-slate-300 bg-white hover:bg-slate-50 hover:border-cyan-500 transition-all duration-300 shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-600" />
                <span>Upload Prescription / पर्ची भेजें</span>
              </button>
            </motion.div>

            {/* Why Cure Cart Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-600"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Registered Pharmacist / पंजीकृत फार्मासिस्ट</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                <span>100% Genuine Medicines</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-2xs">
                <BadgeIndianRupee className="w-3.5 h-3.5 text-amber-600" />
                <span>Cash on Delivery Available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 3 HERO PROMISE CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer(0.12, 0.05)}
            className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1 */}
            <motion.div
              variants={popCard}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-cyan-500 hover:shadow-md transition-all duration-300 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                <Percent className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">Savings</span>
                <h3 className="font-quincy font-bold text-2xl tracking-tight text-slate-900">Up to <span className="text-sky-800">25% Discount</span></h3>
                <p className="text-sm font-medium text-slate-600">On all prescription orders</p>
                <p className="text-xs font-['Noto_Sans_Devanagari',sans-serif] text-slate-500 pt-1 border-t border-slate-100">
                  25% तक की छूट · हर प्रिस्क्रिप्शन ऑर्डर पर
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={popCard}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-cyan-500 hover:shadow-md transition-all duration-300 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Doorstep Speed</span>
                <h3 className="font-quincy font-bold text-2xl tracking-tight text-slate-900">Same Day <span className="text-emerald-700">Delivery</span></h3>
                <p className="text-sm font-medium text-slate-600">Across Varanasi under 24 hrs</p>
                <p className="text-xs font-['Noto_Sans_Devanagari',sans-serif] text-slate-500 pt-1 border-t border-slate-100">
                  उसी दिन डिलीवरी · पूरे वाराणसी में 24 घंटे में
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={popCard}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-cyan-500 hover:shadow-md transition-all duration-300 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Payment</span>
                <h3 className="font-quincy font-bold text-2xl tracking-tight text-slate-900">Cash on <span className="text-blue-800">Delivery</span></h3>
                <p className="text-sm font-medium text-slate-600">Pay only when you receive</p>
                <p className="text-xs font-['Noto_Sans_Devanagari',sans-serif] text-slate-500 pt-1 border-t border-slate-100">
                  कैश ऑन डिलीवरी · सामान मिलने पर भुगतान
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. FEATURES SECTION: Why Choose Cure Cart */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={smoothPopUp}
          className="text-center max-w-3xl mx-auto space-y-2 mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-4 py-1.5 rounded-full">
            Why Choose Cure Cart / हमें क्यों चुनें
          </span>
          <h2 className="font-quincy font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            A Pharmacy That <span className="text-sky-800">Comes To You</span>
          </h2>
          <p className="text-base sm:text-lg font-bold text-slate-700 font-['Noto_Sans_Devanagari',sans-serif]">
            एक फार्मेसी जो आपके पास आती है
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            Trusted by families across Varanasi for safe, fast, and friendly medicine delivery. / वाराणसी के परिवारों का सच्चा भरोसा।
          </p>
        </motion.div>

        {/* 4 Feature Cards with Clean Modern Borders & Pop Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1, 0.04)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {/* Card 1 */}
          <motion.div
            variants={popCard}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 bg-white border border-slate-200 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all duration-300 space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">
                Authentic <span className="text-sky-800">Medicines</span>
              </h3>
              <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">असली दवाइयाँ</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Every product is sourced directly from licensed pharmaceutical distributors. 100% genuine guaranteed.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={popCard}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 bg-white border border-slate-200 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all duration-300 space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">
                Fast <span className="text-emerald-700">Delivery</span>
              </h3>
              <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">तेज़ डिलीवरी</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Same-day or under 24-hour service to every ghat and neighborhood in Varanasi.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={popCard}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 bg-white border border-slate-200 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all duration-300 space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">
                Easy <span className="text-purple-700">WhatsApp Order</span>
              </h3>
              <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">आसान ऑर्डर</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Just share your prescription photo on WhatsApp — up to 25% discount automatically verified and applied.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={popCard}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 bg-white border border-slate-200 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all duration-300 space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900">
                24/7 <span className="text-rose-700">Dosage Advice</span>
              </h3>
              <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">मुफ़्त खुराक सलाह</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Free dosage verification and medicine guidance by Drx. Faisal Iqbal (Pharmacist &amp; Founder) on every prescription.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 3. HOW IT WORKS: Three Simple Steps (Smooth Step Window Animation) */}
      <section id="how" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={smoothPopUp}
          className="text-center max-w-2xl mx-auto space-y-2 mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-4 py-1.5 rounded-full">
            How It Works / कैसे काम करता है
          </span>
          <h2 className="font-quincy font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            How Cure Cart <span className="text-sky-800">Delivers Care</span> in 3 Simple Steps
          </h2>
          <p className="text-base sm:text-lg font-bold text-slate-700 font-['Noto_Sans_Devanagari',sans-serif]">
            सिर्फ़ तीन आसान कदम
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.12, 0.04)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Step 1 */}
          <motion.div
            variants={smoothStepPop}
            whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="rounded-2xl p-7 bg-white border border-slate-200 relative space-y-4 hover:border-cyan-500 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="font-quincy font-bold text-4xl text-cyan-600 leading-none">01</span>
              <span className="text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider">
                STEP 01
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-quincy font-bold text-2xl tracking-tight text-slate-900">
                Send <span className="text-sky-800">Prescription</span>
              </h3>
              <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">
                प्रिस्क्रिप्शन भेजें
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Click the WhatsApp button and share a quick photo of your doctor slip or medicine strip.
            </p>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5 font-medium border-t border-slate-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available 24/7 on +91 91940 01440</span>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={smoothStepPop}
            whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="rounded-2xl p-7 bg-white border border-slate-200 relative space-y-4 hover:border-cyan-500 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="font-quincy font-bold text-4xl text-cyan-600 leading-none">02</span>
              <span className="text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider">
                STEP 02
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-quincy font-bold text-2xl tracking-tight text-slate-900">
                Confirm <span className="text-sky-800">Order</span>
              </h3>
              <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">
                ऑर्डर पक्का करें
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our registered pharmacist verifies the dosage and sends an itemized bill with discounts applied.
            </p>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5 font-medium border-t border-slate-100">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span>Transparent invoice directly on WhatsApp</span>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={smoothStepPop}
            whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="rounded-2xl p-7 bg-white border border-slate-200 relative space-y-4 hover:border-cyan-500 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="font-quincy font-bold text-4xl text-cyan-600 leading-none">03</span>
              <span className="text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider">
                STEP 03
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-quincy font-bold text-2xl tracking-tight text-slate-900">
                Doorstep <span className="text-sky-800">Delivery</span>
              </h3>
              <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">
                घर पर पाएँ
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sit back — your medicines arrive sealed at your door in under 24 hours. Pay via Cash or UPI upon delivery.
            </p>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5 font-medium border-t border-slate-100">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              <span>Direct delivery across all Varanasi localities</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. REVIEWS & TESTIMONIALS (With smooth faded pop from bottom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={smoothPopUp}
          className="text-center max-w-2xl mx-auto space-y-2 mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-4 py-1.5 rounded-full">
            Patient Stories &amp; Feedback
          </span>
          <h2 className="font-quincy font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Trusted by <span className="text-sky-800">Families</span> Across Varanasi
          </h2>
          <p className="text-sm text-slate-600">
            Real feedback from verified patients who rely on Cure Cart for urgent medicine delivery.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer(0.08, 0.04)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TESTIMONIALS.map((test) => (
            <motion.div
              key={test.id}
              variants={popCard}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-3">
                <RatingStars rating={test.rating} />
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{test.review}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{test.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{test.locality}</p>
                </div>
                <span className="text-[11px] text-cyan-700 font-semibold bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">
                  {test.orderType}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. CONTACT / START YOUR ORDER CTA with Smooth Pop from Bottom */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-white via-sky-50/90 to-cyan-50/70 text-slate-900 text-center relative overflow-hidden shadow-xl border-2 border-sky-200">
          
          {/* Light-colored Cure Cart Cross logos embedded in background */}
          <CureCartCrossWatermark className="absolute -top-10 -right-10" size={240} opacity={0.14} />
          <CureCartCrossWatermark className="absolute -bottom-10 -left-10" size={200} opacity={0.12} />

          <motion.div
            initial={{ opacity: 0, y: 38, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto space-y-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/70 px-4 py-1.5 text-xs font-semibold backdrop-blur-md text-sky-900">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Start Your Order / ऑर्डर शुरू करें</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-quincy font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-slate-900">
                Need Your Medicines <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03438A] via-[#0284C7] to-[#0ea5e9]">Today?</span>
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-sky-800 font-['Noto_Sans_Devanagari',sans-serif]">
                आज ही दवा चाहिए?
              </p>
            </div>

            <div className="space-y-1 max-w-lg mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                We are just one WhatsApp message away. Order now and have your medicines delivered before sunset.
              </p>
              <p className="font-['Noto_Sans_Devanagari',sans-serif] text-xs sm:text-sm text-slate-500">
                हम बस एक संदेश दूर हैं। अभी ऑर्डर करें और शाम से पहले दवा पाएँ।
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHARMACY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Order on WhatsApp / व्हाट्सएप पर ऑर्डर करें</span>
              </a>

              <a
                href={`tel:${PHARMACY_CONFIG.phoneNumber}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm sm:text-base text-slate-800 border-2 border-sky-300 bg-white hover:bg-sky-50 transition-all duration-300 shadow-xs cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {PHARMACY_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            {/* Licence/Reg pill */}
            <div className="pt-6 border-t border-sky-200/80 text-xs text-slate-600 flex items-center justify-center gap-2">
              <span className="font-semibold text-slate-700">Licence/Reg:</span>
              <span className="font-mono bg-sky-100/80 px-3 py-1 rounded-full font-bold text-sky-900 border border-sky-200">
                {PHARMACY_CONFIG.registrationNumber}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
