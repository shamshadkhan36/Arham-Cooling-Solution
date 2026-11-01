import React from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  Home, 
  MapPin, 
  Snowflake,
  Shield,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const points = [
    {
      icon: Snowflake,
      title: 'AC and Refrigerator Service Solutions',
      description: 'Complete range of repair, servicing, installation, and component maintenance tailored specifically for cooling appliances.',
      badge: 'Comprehensive Care'
    },
    {
      icon: MessageCircle,
      title: 'Convenient Booking Through WhatsApp',
      description: 'Easily send your location, preferred time slot, and appliance issue in a few taps without complicated forms.',
      badge: 'Instant Coordination'
    },
    {
      icon: PhoneCall,
      title: 'Service Enquiries by Phone',
      description: 'Speak directly with our team at +91 63861 18036 to discuss your AC or refrigerator repair requirements.',
      badge: 'Direct Communication'
    },
    {
      icon: Home,
      title: 'Support for Residential Customers',
      description: 'Dedicated doorstep assistance for homeowners, apartments, and residential properties across Lucknow.',
      badge: 'Homeowner Friendly'
    },
    {
      icon: MapPin,
      title: 'Local Service Business Based in Lucknow',
      description: 'Located in Saripura, Alam Nagar, we understand the climate and seasonal cooling demands of Lucknow residents.',
      badge: 'Local Community'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-brand-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold mb-3">
            <Shield className="w-4 h-4 text-brand-600" />
            <span>Reliable Cooling Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Why Choose Arham Cooling Solution?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We focus on dependable diagnostics, clear communication, and prompt service so your cooling systems run smoothly when you need them most.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Points List */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-brand-50/40 hover:border-brand-200 transition-all duration-200 flex flex-col sm:flex-row sm:items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 shrink-0 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-navy-950 group-hover:text-brand-700 transition-colors">
                        {pt.title}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-100 text-brand-800">
                        {pt.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-navy-950 text-white p-7 sm:p-9 flex flex-col justify-between h-full">
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-600/30 border border-brand-500/50 flex items-center justify-center text-cyanBrand-400">
                  <Snowflake className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-cyanBrand-400">Lucknow's Local Specialist</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                    Committed to keeping your space comfortable all summer.
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyanBrand-400 shrink-0" />
                    <span>Split AC & Window AC servicing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyanBrand-400 shrink-0" />
                    <span>Single-door & Double-door fridge repair</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyanBrand-400 shrink-0" />
                    <span>Refrigerant leak detection & gas charging</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyanBrand-400 shrink-0" />
                    <span>Saripura, Alam Nagar service location</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-600/30"
                >
                  <span>Book a Repair Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-xs text-slate-400">
                  Or call directly at <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-cyanBrand-400 hover:underline">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
