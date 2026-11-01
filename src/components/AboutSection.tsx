import React from 'react';
import { Snowflake, Wrench, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop"
                  alt="Technician testing AC pressure and components"
                  className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <div className="text-xs uppercase font-semibold text-cyanBrand-400">Our Focus</div>
                  <div className="text-base font-bold">Reliable Diagnosis & Prompt Service</div>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white shadow-xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                  <Snowflake className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Appliance Care</div>
                  <div className="text-sm font-bold text-navy-950">AC & Refrigerator</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>Saripura, Alam Nagar, Lucknow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              About Arham Cooling Solution
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Arham Cooling Solution is a specialized air conditioning and refrigerator repair and maintenance service provider based in Saripura, Alam Nagar, Lucknow. We help residential and commercial customers keep their indoor cooling systems working efficiently throughout the intense summer seasons and year-round.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Whether your split AC has stopped cooling, your window AC is vibrating loudly, or your household refrigerator requires gas replenishment and compressor troubleshooting, we provide attentive service with transparent communication from the first phone call to the completed repair.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-navy-950">
                  <Wrench className="w-4 h-4 text-brand-600" />
                  <span>Specialized Tooling</span>
                </div>
                <p className="text-xs text-slate-600">
                  Accurate pressure gauges, leak testers, and jet pump cleaning machines for thorough servicing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-navy-950">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>Prompt Local Response</span>
                </div>
                <p className="text-xs text-slate-600">
                  Direct WhatsApp coordination and phone consultations with rapid scheduling in Lucknow.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Split AC Care
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Window AC Care
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Single & Double-Door Fridges
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Gas Refilling (R32 / R410A)
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
