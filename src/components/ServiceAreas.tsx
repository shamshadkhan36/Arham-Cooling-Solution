import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold mb-3">
            <MapPin className="w-4 h-4 text-brand-600" />
            <span>Service Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Business Location
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Arham Cooling Solution is based in Saripura, Alam Nagar, Lucknow. Contact us for service inquiries and booking arrangements.
          </p>
        </div>

        {/* Location Display Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Local Service Location
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy-950">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-base text-slate-700 font-medium mt-1">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                We provide cooling service assistance centered at our Alam Nagar workshop. For service scheduling, inquiries about split AC repair, window AC servicing, or refrigerator troubleshooting, please contact us via phone or WhatsApp.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-semibold shadow transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>View on Google Maps</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-brand-500 text-slate-700 hover:text-brand-600 text-xs sm:text-sm font-semibold transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Visual Location Map Preview Box */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-100 to-brand-50 rounded-2xl p-6 border border-slate-200/90 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-brand-200 flex items-center justify-center text-brand-600">
                <MapPin className="w-8 h-8 animate-bounce" />
              </div>

              <div className="space-y-1">
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">Service Base</div>
                <div className="text-lg font-bold text-navy-950">Saripura, Alam Nagar</div>
                <div className="text-xs text-slate-600">Lucknow, Uttar Pradesh</div>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I need service in/near Alam Nagar, Lucknow.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
