import React from 'react';
import { MessageSquare, CalendarClock, Wrench, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Contact Us',
      subtitle: 'Call or WhatsApp',
      description: 'Reach out to Arham Cooling Solution via phone or WhatsApp with your appliance issue or servicing query.',
      icon: MessageSquare,
      color: 'from-brand-600 to-cyanBrand-500',
      actionText: `Call ${BUSINESS_INFO.phone}`,
      actionLink: `tel:${BUSINESS_INFO.rawPhone}`,
    },
    {
      stepNumber: '02',
      title: 'Schedule Service',
      subtitle: 'Discuss your repair requirements',
      description: 'Tell us about your AC or refrigerator model, address in Lucknow, and your preferred convenient time slot.',
      icon: CalendarClock,
      color: 'from-brand-700 to-brand-600',
      actionText: 'Use Booking Form',
      isBookingButton: true,
    },
    {
      stepNumber: '03',
      title: 'Get Assistance',
      subtitle: 'Arrange the service visit',
      description: 'Our technician coordinates the visit to inspect the fault, provide honest diagnosis, and carry out necessary repairs.',
      icon: Wrench,
      color: 'from-emerald-600 to-teal-500',
      actionText: 'Chat on WhatsApp',
      actionLink: `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I would like to arrange a service visit.")}`,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold mb-3">
            <span>Simple & Hassle-Free</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Getting your AC or refrigerator repaired with Arham Cooling Solution is straightforward and transparent.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-emerald-200 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between z-10 group"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-brand-500/30 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-navy-950 mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100">
                  {step.isBookingButton ? (
                    <button
                      onClick={onOpenBooking}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-slate-100 hover:bg-brand-600 text-slate-700 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                    >
                      <span>{step.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={step.actionLink}
                      target={step.actionLink?.startsWith('https') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-slate-100 hover:bg-brand-600 text-slate-700 hover:text-white text-xs font-semibold transition-all"
                    >
                      {step.actionLink?.startsWith('tel') ? <Phone className="w-3.5 h-3.5" /> : null}
                      <span>{step.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
