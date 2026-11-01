import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number');
      return;
    }
    setError('');

    const text = encodeURIComponent(
      `*DIRECT MESSAGE - Arham Cooling Solution*\n` +
      `------------------------------------\n` +
      `👤 Name: ${formData.name.trim()}\n` +
      `📱 Phone: ${formData.phone.trim()}\n` +
      `💬 Message: ${formData.message.trim() || 'Please contact me regarding AC/Fridge service.'}\n` +
      `📍 Location: Saripura, Alam Nagar, Lucknow`
    );

    setSubmitted(true);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold mb-3">
            <Phone className="w-4 h-4 text-brand-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Contact Arham Cooling Solution
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Reach out by phone, WhatsApp, or send a quick message. We are ready to assist with your cooling appliance requirements in Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Business Details</span>
              <h3 className="text-2xl font-black text-navy-950 mt-1">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">AC and Refrigerator Repair & Maintenance Services</p>
            </div>

            <div className="space-y-5 pt-2">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Address</div>
                  <div className="text-base font-bold text-navy-950">{BUSINESS_INFO.address}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Saripura, Alam Nagar, Lucknow, Uttar Pradesh</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone & WhatsApp</div>
                  <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-base font-bold text-navy-950 hover:text-brand-600 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Click-to-call or chat directly</div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Service Hours</div>
                  <div className="text-base font-bold text-navy-950">{BUSINESS_INFO.hours}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Monday to Sunday throughout Lucknow</div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Click to Call</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I would like to enquire about AC/Refrigerator service.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Google Maps link */}
            <a
              href={BUSINESS_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 hover:border-brand-400 text-slate-700 hover:text-brand-600 text-xs font-semibold transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-brand-600" />
              <span>Open in Google Maps (Saripura, Alam Nagar)</span>
            </a>

          </div>

          {/* Right Direct Message Form & Location Map Link Box */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-lg">
              <h3 className="text-xl font-bold text-navy-950 mb-1">
                Send a Quick Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Have a quick question or need a quote? Submit below and we will receive it directly on WhatsApp.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-xs sm:text-sm font-medium">
                    Message formatted! Opening WhatsApp with your inquiry.
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-2 text-xs">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleQuickContact} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 63861 18036"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Message / Appliance Query
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what repair or service you need for your AC or refrigerator..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Visual Location Frame */}
            <div className="bg-gradient-to-r from-navy-950 to-brand-950 rounded-3xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyanBrand-400 shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-cyanBrand-400">Direct Navigation</div>
                  <div className="text-base font-bold">Saripura, Alam Nagar, Lucknow</div>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white text-navy-950 font-bold text-xs hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                Get Directions
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
