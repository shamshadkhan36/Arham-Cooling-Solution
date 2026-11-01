import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface FloatingCTAsProps {
  onOpenBooking: () => void;
}

export const FloatingCTAs: React.FC<FloatingCTAsProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button (Desktop & Mobile) */}
      <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex flex-col items-end">
        {/* Help Tooltip Bubble */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 mb-2 p-2.5 px-3 bg-white text-navy-950 rounded-2xl shadow-xl border border-slate-200 text-xs font-medium animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Need quick repair? Chat on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I need assistance with AC/Refrigerator repair in Lucknow.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat with Arham Cooling Solution on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-75 animate-ping -z-10" />
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Floating Call Button for Mobile (Left side) */}
      <div className="md:hidden fixed bottom-20 left-5 z-40">
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="flex items-center justify-center w-13 h-13 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-600/40 active:scale-95 transition-transform"
          aria-label={`Call Arham Cooling Solution at ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wide transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-600" />
            <span>Call Now</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs uppercase tracking-wide shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Service</span>
          </button>
        </div>
      </div>
    </>
  );
};
