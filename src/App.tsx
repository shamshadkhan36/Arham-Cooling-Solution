import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { BookingSection } from './components/BookingSection';
import { AboutSection } from './components/AboutSection';
import { ServiceAreas } from './components/ServiceAreas';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';

export function App() {
  const [preselectedService, setPreselectedService] = useState<string>('Split AC Repair');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const bookingEl = document.getElementById('book-service');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Section */}
        <TrustSection />

        {/* 3. Our Services Section */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 5. How It Works Section */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Service Enquiry / WhatsApp Booking Section */}
        <BookingSection 
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService('')}
        />

        {/* 7. About Us Section */}
        <AboutSection />

        {/* 8. Service Location Section */}
        <ServiceAreas />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Contact Details & Quick Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp, Mobile Call & Sticky Mobile CTA Bar */}
      <FloatingCTAs onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

export default App;
