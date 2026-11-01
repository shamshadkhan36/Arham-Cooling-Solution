export interface ServiceItem {
  id: string;
  title: string;
  category: 'ac' | 'refrigerator' | 'diagnostic';
  icon: string;
  shortDesc: string;
  features: string[];
  popular?: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  address: string;
  preferredDate: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'ac' | 'refrigerator' | 'booking';
}
