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
  ArrowRight,
  Tag
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
        return <SplitSquareVertical className="w-4 h-4 text-brand-600" />;
      case 'AirVent':
        return <AirVent className="w-4 h-4 text-brand-600" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-brand-600" />;
      case 'ArrowDownToLine':
        return <ArrowDownToLine className="w-4 h-4 text-brand-600" />;
      case 'FlameKindling':
        return <Gauge className="w-4 h-4 text-brand-600" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-brand-600" />;
      case 'Refrigerator':
        return <Refrigerator className="w-4 h-4 text-brand-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-brand-600" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-brand-600" />;
      default:
        return <Wrench className="w-4 h-4 text-brand-600" />;
    }
  };

  const handleWhatsAppEnquiry = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello Arham Cooling Solution, I would like to enquire about: *${service.title}* (Starts at ${service.price}) in Lucknow.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100/80 text-brand-800 text-xs sm:text-sm font-semibold mb-3">
            <Tag className="w-3.5 h-3.5 text-brand-600" />
            <span>Transparent Pricing & Professional Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Services & Standard Rates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Professional AC and refrigerator repair in Lucknow. Clear starting prices with no hidden charges, genuine diagnostics, and skilled technician visits.
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
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Visual Service Photo Header with Price Tag Overlay */}
                <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-3xl bg-slate-900 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent pointer-events-none" />

                  {/* Top Left Badge: Category */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[11px] font-bold text-navy-950 shadow-md flex items-center gap-1.5">
                    {getServiceIcon(service.icon)}
                    <span>{service.category === 'ac' ? 'AC Care' : service.category === 'refrigerator' ? 'Refrigerator' : 'Diagnosis'}</span>
                  </div>

                  {/* Top Right: Most Requested */}
                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-brand-600 to-cyanBrand-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md">
                      Popular Choice
                    </div>
                  )}

                  {/* Bottom Price Banner directly over Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] font-semibold text-cyanBrand-300 uppercase tracking-wider block">Starts from</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-xs text-slate-300 line-through">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md text-slate-100 font-medium">
                      {service.priceNote || 'Starting rate'}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-navy-950 mb-2 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2 mb-5">
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
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm hover:shadow active:scale-98 group/btn"
                >
                  <span>Book at {service.price}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsAppEnquiry(service)}
                  title="Enquire on WhatsApp"
                  className="p-3 rounded-xl border border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-400 transition-colors shrink-0 cursor-pointer"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-brand-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-cyanBrand-400 text-xs font-bold uppercase tracking-wider">
              <span>Fair & Transparent Pricing Policy</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold">Inspection charges are adjusted against final repair costs</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              No hidden visiting fees. Exact quote provided upfront before starting work in Saripura, Alam Nagar, Lucknow.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="px-5 py-3 rounded-xl bg-white text-navy-950 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I want to know repair charges for my AC/Fridge.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Price Quote</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
