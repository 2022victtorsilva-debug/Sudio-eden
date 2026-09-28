export interface ServiceItem {
  id: string;
  category: 'cabelos' | 'penteados' | 'maquiagem' | 'tratamentos' | 'vip';
  title: string;
  tagline: string;
  price: string;
  priceDetail?: string;
  duration: string;
  isVip?: boolean;
  isPopular?: boolean;
  description: string;
  includes: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'noivas' | 'cabelos' | 'unhas' | 'espaco';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  shift: 'manha' | 'tarde' | 'noturno';
  notes: string;
}
