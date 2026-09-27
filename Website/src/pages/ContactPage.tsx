import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { InstagramIcon } from '../components/InstagramIcon';
import { FacebookIcon } from '../components/FacebookIcon';
import { PHARMACY_CONFIG } from '../data/pharmacyData';
import {
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { MotionSection, staggerContainer, fadeInUp, scaleUpCard } from '../components/MotionWrappers';

interface ContactPageProps {
  onOpenOrderModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenOrderModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'General Medicine Inquiry',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `*New Pharmacist Inquiry - Cure Cart*`,
      `━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `📋 *Category:* ${formData.orderType}`,
      formData.message ? `💬 *Message:* ${formData.message}` : null
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/919194001440?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Contact & Pharmacist Desk */}
      <section className="pt-10 md:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.05)}
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-4 py-1.5 rounded-full uppercase tracking-wider">
              <span>Customer Care &amp; Support</span>
              <span aria-hidden="true">·</span>
              <span>24/7 Pharmacist Desk</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-quincy font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 leading-[1.05]">
              <span>Speak Directly with Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03438A] via-[#0284C7] to-[#0ea5e9]">
                Registered Pharmacist.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Whether you need to confirm medication stock, check active salt composition, verify our discount of up to 25%, or schedule monthly refills, our clinical team is ready 24/7 on WhatsApp, call, Facebook, or Instagram.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFO CARDS (Including Facebook & Instagram) */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer(0.08, 0.05)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {/* Channel 1: WhatsApp Primary */}
          <motion.div
            variants={scaleUpCard}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex flex-col justify-between space-y-4 shadow-sm"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">
                <WhatsAppIcon className="w-6 h-6 fill-white" />
              </div>
              <h3 className="font-quincy font-bold text-xl tracking-tight text-white mt-4">WhatsApp 24/7</h3>
              <p className="text-xs text-emerald-100 mt-1">Instant response for prescription orders &amp; invoices.</p>
              <p className="text-sm font-extrabold text-white font-mono mt-2">{PHARMACY_CONFIG.phoneNumber}</p>
            </div>

            <a
              href={PHARMACY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-emerald-50 text-emerald-700 text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Channel 2: Phone Call Direct */}
          <motion.div
            variants={scaleUpCard}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900 mt-4">Phone Support</h3>
              <p className="text-xs text-slate-500 mt-1">Direct telephonic consultations &amp; order inquiries.</p>
              <p className="text-sm font-bold text-slate-900 font-mono mt-2">{PHARMACY_CONFIG.phoneNumber}</p>
            </div>

            <a
              href={`tel:${PHARMACY_CONFIG.phoneNumber}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span>Call Helpline</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Channel 3: Facebook Page (User Requested) */}
          <motion.div
            variants={scaleUpCard}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FacebookIcon className="w-6 h-6 fill-blue-600" />
              </div>
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900 mt-4">Facebook Page</h3>
              <p className="text-xs text-slate-500 mt-1">Updates, community reviews, and Varanasi service news.</p>
              <p className="text-xs font-bold text-blue-600 mt-2 truncate">{PHARMACY_CONFIG.facebookName}</p>
            </div>

            <a
              href={PHARMACY_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span>Visit Facebook Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Channel 4: Instagram */}
          <motion.div
            variants={scaleUpCard}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs hover:border-pink-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E1306C] flex items-center justify-center shadow-xs">
                <InstagramIcon className="w-6 h-6 fill-[#E1306C]" />
              </div>
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900 mt-4">Instagram</h3>
              <p className="text-xs text-slate-500 mt-1">Health tips, medicine alerts, and express dispatch stories.</p>
              <p className="text-xs font-bold text-[#E1306C] mt-2">{PHARMACY_CONFIG.instagramUsername}</p>
            </div>

            <a
              href={PHARMACY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
            >
              <span>Follow Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Channel 5: Official Email */}
          <motion.div
            variants={scaleUpCard}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-quincy font-bold text-xl tracking-tight text-slate-900 mt-4">Official Email</h3>
              <p className="text-xs text-slate-500 mt-1">Formal inquiries, hospital orders, or feedback notes.</p>
              <p className="text-xs font-bold text-slate-800 break-all mt-2">{PHARMACY_CONFIG.email}</p>
            </div>

            <a
              href={`mailto:${PHARMACY_CONFIG.email}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span>Email Sales Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </MotionSection>

      {/* 3. DIRECT INQUIRY & CALLBACK FORM */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Direct Contact
            </span>
            <h2 className="font-quincy font-bold text-3xl sm:text-4xl tracking-tight text-slate-900">
              <span>Send an Inquiry or </span>
              <span className="text-sky-800">Request a Callback</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Prefer typing your query here? Submit this simple form and it will automatically open your inquiry in WhatsApp for an instant response from our certified team.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Helpline / Direct Call: <strong>+919194001440</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>Official Email: <strong>{PHARMACY_CONFIG.email}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span>24/7 round-the-clock service with deliveries under 24 hours.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Up to 25% discount applied on eligible medications.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-md"
            >
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +919194001440"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.orderType}
                    onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 shadow-2xs cursor-pointer"
                  >
                    <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                    <option value="Doctor Prescription Order">Doctor Prescription Order</option>
                    <option value="Up to 25% Discount Inquiry">Up to 25% Discount Inquiry</option>
                    <option value="Monthly Chronic Refill Subscription">Monthly Chronic Refill Subscription</option>
                    <option value="Cold-Chain Insulin / Biologics">Cold-Chain Insulin / Biologics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Question or Medicine Names (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide medicine names or special storage instructions..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 shadow-2xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-emerald-600 shadow-md transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Send Message on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </MotionSection>

    </div>
  );
};
