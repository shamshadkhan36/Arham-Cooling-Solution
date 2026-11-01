import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS_DATA } from '../data/faqsData';
import { BUSINESS_INFO } from '../data/servicesData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-brand-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Answers to common questions about our AC and refrigerator repair services in Lucknow.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-brand-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-navy-950">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-brand-600 border-brand-300' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 bg-slate-50/50 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-50 border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-navy-950">Have a different question or specific appliance issue?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Reach out directly and our technician will be happy to assist you.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="px-4 py-2 rounded-xl bg-white border border-brand-200 text-brand-700 hover:bg-brand-600 hover:text-white font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Arham Cooling Solution, I have a question regarding AC/fridge service.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
