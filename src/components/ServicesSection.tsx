import React, { useState } from 'react';
import { 
  SplitSquareVertical, 
  AirVent, 
  Wrench, 
  ArrowDownToLine, 
  Gauge, 
  Sparkles, 
  Refrigerator, 
  ShieldCheck, 
  Activity, 
  MessageCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ac' | 'refrigerator' | 'diagnostic'>('all');

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'SplitSquareVertical':
        return <SplitSquareVertical className="w-6 h-6 text-brand-600" />;
      case 'AirVent':
        return <AirVent className="w-6 h-6 text-brand-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-brand-600" />;
      case 'ArrowDownToLine':
        return <ArrowDownToLine className="w-6 h-6 text-brand-600" />;
      case 'FlameKindling':
        return <Gauge className="w-6 h-6 text-brand-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-600" />;
      case 'Refrigerator':
        return <Refrigerator className="w-6 h-6 text-brand-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-brand-600" />;
      default:
        return <Wrench className="w-6 h-6 text-brand-600" />;
    }
  };

  const handleWhatsAppEnquiry = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello Arham Cooling Solution, I would like to enquire about: *${service.title}* at my address in Lucknow.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100/70 text-brand-800 text-xs sm:text-sm font-semibold mb-3">
            <span>Specialized Cooling Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Professional Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From emergency split and window AC repair to precision refrigerator maintenance, we deliver reliable cooling solutions in Lucknow.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl max-w-md mx-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-navy-950 shadow-sm'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              All (9)
            </button>
            <button
              onClick={() => setSelectedCategory('ac')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === 'ac'
                  ? 'bg-white text-navy-950 shadow-sm'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              AC Services
            </button>
            <button
              onClick={() => setSelectedCategory('refrigerator')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === 'refrigerator'
                  ? 'bg-white text-navy-950 shadow-sm'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              Refrigerator
            </button>
            <button
              onClick={() => setSelectedCategory('diagnostic')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === 'diagnostic'
                  ? 'bg-white text-navy-950 shadow-sm'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              Diagnosis
            </button>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-sm">
                  Most Requested
                </div>
              )}

              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all group-hover:scale-105 duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.category === 'ac' ? 'Air Conditioner' : service.category === 'refrigerator' ? 'Refrigerator' : 'Diagnostic Check'}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-navy-950 mb-2.5 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer group/btn"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsAppEnquiry(service)}
                  title="Enquire on WhatsApp"
                  className="p-2.5 rounded-xl border border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 transition-colors shrink-0 cursor-pointer"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-brand-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Need assistance with your cooling system today?</h4>
            <p className="text-sm text-slate-300">Call our workshop or start a WhatsApp chat for immediate scheduling.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="px-5 py-2.5 rounded-xl bg-white text-navy-950 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I need urgent cooling service assistance.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
