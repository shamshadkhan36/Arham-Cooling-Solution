import React from 'react';
import { Snowflake, Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-28 md:pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyanBrand-500 flex items-center justify-center text-white shadow-md">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white font-sans">
                  Arham <span className="text-cyanBrand-400">Cooling Solution</span>
                </span>
                <span className="block text-xs uppercase tracking-wider text-slate-400">
                  Saripura, Alam Nagar, Lucknow
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional AC and refrigerator repair and maintenance services in Lucknow. Dedicated to prompt troubleshooting, honest advice, and quality cooling service for homes and workplaces.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyanBrand-400 shrink-0" />
                <span>Saripura, Alam Nagar, Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-cyanBrand-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-cyanBrand-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyanBrand-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyanBrand-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#book-service" className="hover:text-cyanBrand-400 transition-colors">Book a Service</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyanBrand-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-cyanBrand-400 transition-colors">Service Location</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyanBrand-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyanBrand-400 transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Our Services list */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Cooling Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-cyanBrand-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyanBrand-400" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I need service assistance.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Arham Cooling Solution. All rights reserved. Saripura, Alam Nagar, Lucknow.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with care for reliable cooling in Lucknow
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
