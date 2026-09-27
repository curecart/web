import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DISCOUNT_TIERS, SAMPLE_PRODUCTS, PHARMACY_CONFIG } from '../data/pharmacyData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { CureCartCrossWatermark } from '../components/CureCartCrossWatermark';
import {
  Percent,
  Search,
  CheckCircle2,
  Calculator,
  ArrowUpRight
} from 'lucide-react';
import { MotionSection, staggerContainer, fadeInUp, scaleUpCard, popCard } from '../components/MotionWrappers';

interface ServicesPageProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenOrderModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [monthlySpend, setMonthlySpend] = useState<number>(3500);

  const categories = [
    'All',
    'Prescription & Chronic',
    'OTC & First Aid',
    'Health & Supplements',
    'Mother & Baby',
    'Medical Devices'
  ];

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.genericName && product.genericName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.indication && product.indication.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const estimatedDiscountPct = 20;
  const monthlySavings = Math.round((monthlySpend * estimatedDiscountPct) / 100);
  const annualSavings = monthlySavings * 12;

  return (
    <div className="space-y-16 md:space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Services & Products */}
      <section className="pt-10 md:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.05)}
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-4 py-1.5 rounded-full uppercase tracking-wider">
              <span>Healthcare Services</span>
              <span aria-hidden="true">·</span>
              <span>Doorstep Delivery &amp; Catalog</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-quincy font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 leading-[1.05]">
              Genuine Pharmacy Care with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03438A] via-[#0284C7] to-[#0ea5e9]">
                Up to 25% Discount.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              From vital daily diabetes &amp; cardiac medications to specialized neonatal formulas and hospital-grade diagnostic monitors, Cure Cart delivers certified healthcare to your doorstep in under 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. UP TO 25% DISCOUNT BREAKDOWN */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Percent className="w-3.5 h-3.5" />
            Transparent Discount Structure
          </span>
          <h2 className="font-quincy font-bold text-3xl sm:text-5xl tracking-tight text-slate-900">
            Up to <span className="text-emerald-700">25% Discount</span> on Medicines
          </h2>
          <p className="text-sm text-slate-600">
            No confusing coupon codes or hidden convenience fees. We apply discounts up to 25% directly on your itemized WhatsApp invoice.
          </p>
        </div>

        {/* 4 Discount Tiers Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer(0.08, 0.05)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {DISCOUNT_TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={scaleUpCard}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white shadow-lg relative border border-cyan-500/30'
                  : 'bg-white border border-slate-200 text-slate-900 shadow-2xs hover:border-cyan-500 hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-6 px-3.5 py-1 rounded-full bg-cyan-400 text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow-xs">
                  Top Savings
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <span className={`text-xs uppercase tracking-wider font-bold ${tier.highlight ? 'text-cyan-300' : 'text-slate-500'}`}>
                    CATEGORY 0{idx + 1}
                  </span>
                  <h3 className={`font-quincy font-bold text-2xl tracking-tight mt-1 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {tier.title}
                  </h3>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className={`font-quincy font-bold text-4xl tracking-tight ${tier.highlight ? 'text-cyan-300' : 'text-cyan-600'}`}>
                    {tier.discount}
                  </span>
                  <span className={`text-xs font-semibold ${tier.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    on MRP
                  </span>
                </div>

                <p className={`text-xs leading-relaxed ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.description}
                </p>
              </div>

              <div className={`pt-4 mt-4 border-t ${tier.highlight ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-500'} text-[11px]`}>
                {tier.eligibility}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>

      {/* 3. INTERACTIVE SAVINGS CALCULATOR */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50 to-cyan-50/70 text-slate-800 p-8 sm:p-12 shadow-xl border-2 border-sky-200 relative overflow-hidden">
          
          {/* Light-colored Cure Cart Cross logo watermark in background */}
          <CureCartCrossWatermark className="absolute -top-10 -right-10" size={240} opacity={0.12} />
          <CureCartCrossWatermark className="absolute -bottom-10 -left-10" size={200} opacity={0.10} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left explanation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-100 border border-sky-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Household Savings Calculator</span>
              </div>
              
              <h2 className="font-quincy font-bold text-3xl sm:text-4xl tracking-tight text-slate-900">
                Calculate Your <span className="text-sky-800">Medicine Savings</span>
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                If your family manages regular chronic conditions like Diabetes, Blood Pressure, or Thyroid with branded medicines, see how much you save every month by switching your refills to Cure Cart.
              </p>

              {/* Spend Slider */}
              <div className="space-y-3 pt-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700 font-medium">Monthly Medicine Bill:</span>
                  <span className="text-2xl font-quincy font-bold text-sky-700 tabular-nums">₹{monthlySpend.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                  <span>₹500 / mo</span>
                  <span>₹7,500 / mo</span>
                  <span>₹15,000 / mo</span>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-7 sm:p-8 bg-white border border-sky-200 text-slate-900 space-y-5 shadow-lg"
              >
                <div className="grid grid-cols-2 gap-4 divide-x divide-slate-200">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Monthly Savings</span>
                    <p className="font-quincy font-bold text-4xl text-sky-700 mt-1 tabular-nums">
                      ₹{monthlySavings.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Saved every 30 days (~20% avg)</p>
                  </div>

                  <div className="pl-4">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Annual Savings</span>
                    <p className="font-quincy font-bold text-4xl text-emerald-600 mt-1 tabular-nums">
                      ₹{annualSavings.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Direct yearly pocket savings</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>Free Doorstep Delivery on Orders &gt; ₹499</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Plus scheduled refill reminders on WhatsApp so you never run out of critical meds.
                  </p>
                </div>

                <a
                  href={PHARMACY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-emerald-600 shadow-md transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Start Saving on WhatsApp Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* 4. SEARCHABLE & FILTERABLE MEDICINE CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
                Inventory Directory
              </span>
              <h2 className="font-quincy font-bold text-3xl sm:text-4xl tracking-tight text-slate-900 mt-2">
                Explore <span className="text-sky-800">Certified Medicines</span> &amp; Healthcare Products
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-500">
                <span>Filter by category or active salt. Flat 15% discount applied on MRP.</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search medicine, salt, or indication..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-full text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Product Cards Grid with Smooth Bottom Pop Animation */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
              <p className="text-slate-600 text-sm">
                No items found matching "{searchQuery}". We stock over 10,000+ certified medicines in our fulfillment pharmacy.
              </p>
              <a
                href={PHARMACY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md cursor-pointer hover:bg-emerald-600 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Ask Pharmacist for "{searchQuery}" on WhatsApp</span>
              </a>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={staggerContainer(0.06, 0.02)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => {
                const discount = 15;
                const discountedPrice = Math.round(product.mrp * (1 - discount / 100));
                return (
                  <motion.div
                    key={product.id}
                    variants={popCard}
                    whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                    className="rounded-2xl p-5 bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-cyan-500 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-cyan-700 font-semibold">{product.category}</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-[11px]">
                          {discount}% OFF
                        </span>
                      </div>

                      <h3 className="font-quincy font-bold text-lg tracking-tight text-slate-900 leading-snug">{product.name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2">{product.genericName || product.indication}</p>
                      
                      <div className="text-[11px] text-slate-400">
                        <span>{product.packageSize}</span>
                        {product.prescriptionRequired && (
                          <span className="ml-2 text-rose-600 font-medium">· Rx Required</span>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-quincy font-bold text-xl text-slate-900">₹{discountedPrice}</span>
                          <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-bold">Save ₹{Math.round(product.mrp - discountedPrice)}</span>
                      </div>

                      <button
                        onClick={() => onOpenOrderModal(product.name)}
                        className="p-2.5 rounded-full bg-emerald-50 text-emerald-600 hover:bg-[#25D366] hover:text-white border border-emerald-200 transition-all cursor-pointer"
                        title="Order via WhatsApp"
                        aria-label={`Order ${product.name} on WhatsApp`}
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* 5. UPLOAD PRESCRIPTION BANNER */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-cyan-600 to-blue-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-quincy font-bold text-3xl tracking-tight">Can't Find Your Exact Medicine?</h3>
            <p className="text-sm text-cyan-100 max-w-xl font-sans">
              We stock over 10,000+ branded and prescription medicines. Send a picture of your prescription on WhatsApp and our registered pharmacist will confirm availability in minutes with your discount of up to 25%.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 font-bold text-xs text-cyan-800 shadow-xs cursor-pointer transition-colors"
            >
              Upload Prescription
            </button>
            <a
              href={PHARMACY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-emerald-600 text-xs font-bold shadow-md cursor-pointer transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat with Pharmacist</span>
            </a>
          </div>
        </div>
      </MotionSection>

    </div>
  );
};
