import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  User, 
  Wrench, 
  FileText, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/servicesData';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  preselectedService,
  onClearPreselectedService 
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: preselectedService || 'Split AC Repair',
    address: 'Saripura, Alam Nagar, Lucknow',
    preferredDate: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set default minimum date as today
  const todayDateString = new Date().toISOString().split('T')[0];

  const quickIssueChips = [
    'Not Cooling Properly',
    'Water Dripping / Leakage',
    'Gas Leak / Refilling',
    'Compressor Not Starting',
    'Unusual Noise / Vibration',
    'Regular Season Servicing'
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.service) {
      errs.service = 'Please choose a service';
    }

    if (!formData.address.trim()) {
      errs.address = 'Please specify your location/address';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build formatted WhatsApp message
    const message = 
`*NEW SERVICE ENQUIRY - Arham Cooling Solution*
---------------------------------------
👤 *Customer Name:* ${formData.fullName.trim()}
📱 *Mobile Number:* ${formData.phone.trim()}
🛠️ *Service Required:* ${formData.service}
📍 *Address / Location:* ${formData.address.trim()}
📅 *Preferred Date:* ${formData.preferredDate ? formData.preferredDate : 'Earliest Available'}
📝 *Problem Description:* ${formData.description.trim() || 'General service & inspection'}
---------------------------------------
_Sent via Arham Cooling Solution Website_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;

    // Mark as submitted and open WhatsApp
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const handleChipClick = (issue: string) => {
    setFormData((prev) => ({
      ...prev,
      description: prev.description ? `${prev.description}, ${issue}` : issue,
    }));
  };

  return (
    <section id="book-service" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>Fast WhatsApp Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Book an AC or Refrigerator Service
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Fill in your details below. Your enquiry will instantly open in WhatsApp to <span className="font-semibold text-brand-600">+91 63861 18036</span> for direct scheduling.
          </p>
        </div>

        {/* Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Helpful Details Column */}
            <div className="lg:col-span-4 bg-navy-950 text-white p-7 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-cyanBrand-400">Direct Support</span>
                  <h3 className="text-xl font-bold mt-1">Arham Cooling Solution</h3>
                  <p className="text-xs text-slate-300 mt-1">Saripura, Alam Nagar, Lucknow</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyanBrand-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400">Call Us Anytime</div>
                      <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-sm font-semibold hover:text-cyanBrand-300">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400">WhatsApp Chat</div>
                      <a 
                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:text-emerald-300"
                      >
                        +91 63861 18036
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyanBrand-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400">Workshop Location</div>
                      <div className="text-xs font-medium text-slate-200">Saripura, Alam Nagar, Lucknow, UP</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span>⚡ Quick WhatsApp Response</span>
                  </div>
                  <p>Submitting this form immediately launches WhatsApp with your formatted service details. No waiting for email replies.</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-center lg:text-left">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-8 p-6 sm:p-8">
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-fadeIn">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">Opening WhatsApp with your booking details...</p>
                    <p className="mt-0.5 text-emerald-700">If WhatsApp did not open automatically, tap below:</p>
                    <button
                      onClick={handleSubmit}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Open WhatsApp Now
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Customer Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-white'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. 98765 43210"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Required <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (onClearPreselectedService) onClearPreselectedService();
                        }}
                        className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all cursor-pointer"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        min={todayDateString}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Address / Location */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Address / Location in Lucknow <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        if (errors.address) setErrors({ ...errors, address: '' });
                      }}
                      placeholder="e.g. Saripura, Alam Nagar, Lucknow"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all ${
                        errors.address ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-white'
                      }`}
                    />
                  </div>
                  {errors.address && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.address}
                    </p>
                  )}
                </div>

                {/* Problem Description */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Problem Description
                    </label>
                    <span className="text-[11px] text-slate-400">Optional notes</span>
                  </div>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the issue (e.g. Split AC not cooling, making noise, water dripping from indoor unit)"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    />
                  </div>

                  {/* Quick Issue Chips */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {quickIssueChips.map((chip, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleChipClick(chip)}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-pointer border border-slate-200"
                      >
                        + {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Enquiry on WhatsApp (+91 63861 18036)</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    🔒 No payment needed upfront. Discuss service details directly with Arham Cooling Solution.
                  </p>
                </div>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
