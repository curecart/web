import React, { useState } from 'react';
import {
  X,
  FileCheck,
  CheckCircle2,
  Percent,
  Camera,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Stethoscope
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CureCartCrossWatermark } from './CureCartCrossWatermark';

interface WhatsAppOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderDrawer: React.FC<WhatsAppOrderDrawerProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [medicineInput, setMedicineInput] = useState(initialMedicineName);
  const [patientNote, setPatientNote] = useState('');
  const [hasPrescriptionPhoto, setHasPrescriptionPhoto] = useState(true);
  const [isEmergency, setIsEmergency] = useState(false);
  const [includeDosageConsultancy, setIncludeDosageConsultancy] = useState(true);
  const [showPrescriptionGuide, setShowPrescriptionGuide] = useState(false);

  if (!isOpen) return null;

  const handleLaunchWhatsApp = () => {
    const lines = [
      `*CURE CART — PRESCRIPTION ORDER (VARANASI)*`,
      `━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Delivery Location:* ${deliveryAddress || 'Varanasi (Address to be confirmed on chat)'}`,
      `⏱️ *Expected Delivery:* ${isEmergency ? '🚨 Urgent Dispatch' : 'Standard Under 24 Hours'}`,
      medicineInput ? `💊 *Medicines Requested:*\n${medicineInput}` : `💊 *Order Type:* Doctor Prescription Order`,
      patientNote ? `📝 *Special Notes:* ${patientNote}` : null,
      `📎 *Prescription:* ${hasPrescriptionPhoto ? 'Attaching doctor slip photo in next message' : 'OTC / Wellness items'}`,
      includeDosageConsultancy ? `🩺 *Dosage Consultancy:* Yes, please provide dosage & food timing guidance as per prescription.` : null,
      `🏷️ *Discount:* Please apply 15% discount on MRP as shown on catalog.`,
      `━━━━━━━━━━━━━━━━━━━━━`,
      `Cure Cart Pharmacy · Varanasi`
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/919194001440?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white border border-sky-200/80 rounded-3xl shadow-2xl overflow-hidden text-slate-800 transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Subtle Light-colored Cure Cart Cross logo watermark inside modal backdrop */}
        <CureCartCrossWatermark className="absolute -bottom-8 -right-8" size={180} opacity={0.08} />

        {/* Header: Light Sky & Navy Cure Cart Gradient */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-gradient-to-r from-[#03438A] via-[#0284C7] to-[#0ea5e9] text-white relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 text-white shadow-2xs">
              <WhatsAppIcon className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-quincy font-bold text-2xl tracking-tight text-white">
                  Order via WhatsApp
                </h3>
                <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-950 font-sans shadow-2xs">
                  15% Off MRP
                </span>
              </div>
              <p className="text-xs text-sky-100 font-sans flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                <span>Direct Licensed Pharmacist · 24/7 Delivery Across Varanasi</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Form Body */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto font-sans relative z-10">
          
          {/* 1. 15% Discount Banner */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200/80 text-xs text-sky-900 shadow-2xs">
            <Percent className="w-4 h-4 text-sky-600 shrink-0" />
            <div className="flex-1">
              <span className="font-bold">Flat 15% Discount on MRP:</span>{' '}
              <span className="text-slate-600">
                Applied automatically to all medicines by our licensed pharmacist upon reviewing your prescription.
              </span>
            </div>
          </div>

          {/* 2. Prescription Guide Accordion */}
          <div className="rounded-2xl bg-slate-50/80 border border-slate-200 shadow-2xs overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => setShowPrescriptionGuide(!showPrescriptionGuide)}
              className={`w-full flex items-center justify-between p-3.5 bg-slate-50 text-left cursor-pointer transition-colors ${
                showPrescriptionGuide ? 'border-b border-slate-200' : ''
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <div>
                  <h4 className="font-quincy font-bold text-base tracking-tight text-slate-900">
                    <span>Prescription </span>
                    <span className="text-sky-800">Checklist</span>
                    <span className="font-normal font-sans text-xs text-slate-500 ml-1.5">/ पर्चे की मार्गदर्शिका</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Clear photos ensure instant pharmacy turnaround
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700">
                <span>{showPrescriptionGuide ? 'Hide' : 'View Checklist'}</span>
                {showPrescriptionGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {showPrescriptionGuide && (
              <div className="p-4 space-y-3 text-xs text-slate-700 bg-white">
                <p className="text-[11px] text-slate-500">
                  To ensure quick dispensing under the <em>Drugs &amp; Cosmetics Act</em>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-[11px]">1. Doctor Header</strong>
                      <p className="text-[10px] text-slate-500">Name, clinic letterhead &amp; RMP no.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-[11px]">2. Patient Details</strong>
                      <p className="text-[10px] text-slate-500">Patient name and consultation date.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-[11px] text-sky-900">
                  <Camera className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>
                    <strong>Quick Tip:</strong> Take photo directly over the slip under bright lighting.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 3. Delivery Destination Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              1. Delivery Location in Varanasi
            </label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="e.g. Assi Ghat, Sigra, Lanka, Mahmoorganj, Bhelupur..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 shadow-2xs transition-all"
            />
          </div>

          {/* 4. Medicine Names Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              2. Medicine Names / Rx Items
            </label>
            <textarea
              value={medicineInput}
              onChange={(e) => setMedicineInput(e.target.value)}
              rows={2}
              placeholder="Type medicine name or note: 'Attaching photo of doctor prescription slip'..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 shadow-2xs transition-all resize-none"
            />
          </div>

          {/* 5. Prescription Photo Check */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">I have a Doctor's Prescription Photo</span>
              <input
                type="checkbox"
                checked={hasPrescriptionPhoto}
                onChange={(e) => setHasPrescriptionPhoto(e.target.checked)}
                className="w-4 h-4 accent-sky-600 rounded cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              {hasPrescriptionPhoto
                ? 'Great! Once WhatsApp opens, tap the paperclip (📎) or camera icon to attach your photo.'
                : 'For OTC medicines, baby care, or everyday supplements where a prescription is not mandated.'}
            </p>
          </div>

          {/* 6. Emergency Dispatch Option */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-sky-50/60 border border-sky-200 text-xs text-sky-950">
            <div>
              <span className="font-bold">Urgent Medical Requirement?</span>
              <p className="text-[11px] text-sky-700">Flag as urgent priority for immediate rider assignment</p>
            </div>
            <input
              type="checkbox"
              checked={isEmergency}
              onChange={(e) => setIsEmergency(e.target.checked)}
              className="w-4 h-4 accent-sky-600 rounded cursor-pointer"
            />
          </div>

          {/* 7. Special Delivery Instructions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              3. Special Instructions (Optional)
            </label>
            <input
              type="text"
              value={patientNote}
              onChange={(e) => setPatientNote(e.target.value)}
              placeholder="e.g. Keep in ice pack, call before ringing bell, evening delivery..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 shadow-2xs transition-all"
            />
          </div>

        </div>

        {/* Action Footer */}
        <div className="p-6 border-t border-sky-100 bg-sky-50/50 space-y-3 font-sans relative z-10">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-emerald-600 shadow-md shadow-emerald-500/20 active:scale-98 transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
            <span>Open WhatsApp &amp; Order with 15% Off</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              UPPC Licensed
            </span>
            <span>·</span>
            <span>2°C–8°C Cold Chain</span>
            <span>·</span>
            <span className="flex items-center gap-1 font-medium">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
              Licensed Pharmacist Supervision
            </span>
            <span>·</span>
            <span>UPI or COD</span>
          </div>
        </div>

      </div>
    </div>
  );
};
