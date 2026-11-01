import React from 'react';
import { Wrench, CalendarCheck, ThermometerSnowflake, Users } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: Wrench,
      title: 'Professional Repair Services',
      description: 'Systematic diagnosis, quality workmanship, and attentive servicing for split ACs, window ACs, and refrigerators.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 text-blue-600'
    },
    {
      icon: CalendarCheck,
      title: 'Convenient Booking',
      description: 'Quick coordination through WhatsApp and direct phone calls with transparent scheduling for service visits.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: ThermometerSnowflake,
      title: 'AC & Refrigerator Solutions',
      description: 'Comprehensive cooling care covering repair, installation, uninstallation, gas refilling, and seasonal tune-ups.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50 text-cyan-600'
    },
    {
      icon: Users,
      title: 'Customer-Focused Support',
      description: 'Clear communication, prompt phone assistance, and helpful guidance for residential cooling needs across Lucknow.',
      color: 'from-brand-500 to-brand-700',
      bgColor: 'bg-brand-50 text-brand-600'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="relative p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
