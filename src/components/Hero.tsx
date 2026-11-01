import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, MapPin, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-12 w-96 h-96 bg-cyanBrand-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Local Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>Saripura, Alam Nagar, Lucknow</span>
            </div>

            {/* Exact Required Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              Reliable AC & Refrigerator Repair Services in <span className="bg-gradient-to-r from-brand-600 to-cyanBrand-600 bg-clip-text text-transparent">Lucknow</span>
            </h1>

            {/* Exact Required Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Professional repair, installation and maintenance services for your home and business. Get reliable service from Arham Cooling Solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-semibold text-base shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-navy-900 font-semibold text-base border-2 border-slate-200 hover:border-brand-500 shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-5 h-5 text-brand-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Key Service Highlights Bar */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Split & Window AC</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Refrigerator Repair</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-2 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">WhatsApp Booking</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image & Tech Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Professional Technician Servicing AC Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop"
                  alt="Professional AC technician servicing split air conditioner system"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-cyanBrand-400 font-medium uppercase tracking-wider">Arham Cooling Solution</div>
                      <div className="text-sm sm:text-base font-semibold">Specialized AC & Fridge Care</div>
                    </div>
                    <div className="p-2 rounded-xl bg-brand-600/30 border border-brand-400/40 text-brand-300">
                      <Wrench className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Local Support */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Service Hub</div>
                  <div className="text-sm font-bold text-navy-950">Alam Nagar, Lucknow</div>
                </div>
              </div>

              {/* Floating Badge 2: Quick Booking */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct Assistance</div>
                  <div className="text-sm font-bold text-navy-950">Call or WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
