export type Page = 'home' | 'about' | 'services' | 'contact';

export interface MedicineProduct {
  id: string;
  name: string;
  category: 'Prescription & Chronic' | 'OTC & First Aid' | 'Mother & Baby' | 'Health & Supplements' | 'Medical Devices';
  genericName?: string;
  indication: string;
  mrp: number;
  discountPercentage: number;
  prescriptionRequired: boolean;
  packageSize: string;
  inStock: boolean;
  image?: string;
}

export interface VaranasiZone {
  id: string;
  name: string;
  landmark: string;
  expressTime: string; // e.g. "45 - 90 mins"
  standardTime: string; // e.g. "Under 24 hours"
  is24x7Hub: boolean;
  pinCode: string;
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  review: string;
  rating: number;
  orderType: string;
  date: string;
}

export interface DiscountTier {
  title: string;
  discount: string;
  description: string;
  eligibility: string;
  highlight?: boolean;
}
