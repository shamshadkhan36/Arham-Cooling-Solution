import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Snowflake, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#service-areas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro bar for direct contact details */}
      <div className="bg-navy-950 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-navy-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-cyanBrand-400 shrink-0" />
              <span>Saripura, Alam Nagar, Lucknow</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyanBrand-400 shrink-0" />
              <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center gap-1.5 font-medium text-cyanBrand-400 hover:text-cyanBrand-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I need assistance with AC/Refrigerator service in Lucknow.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-cyanBrand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Snowflake className="w-6 h-6 animate-pulse-slow" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-navy-900 font-sans">
                Arham <span className="text-brand-600">Cooling</span>
              </span>
              <span className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-500 -mt-1">
                Solution • Lucknow
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50/50 text-sm font-medium transition-all"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-md shadow-brand-600/25 transition-all hover:shadow-lg hover:shadow-brand-600/35 active:scale-95 cursor-pointer"
            >
              <span>Book a Service</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-600 text-white font-medium text-center shadow-md active:scale-98"
              >
                <span>Book a Service</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 font-medium text-center hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I want to book an AC or Refrigerator service.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-medium text-center hover:bg-emerald-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
