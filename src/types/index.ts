export interface User {
  id: string;
  email: string;
  displayName: string;
  role: 'user' | 'admin';
  studentId?: string;
}

export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  website?: string;
  hours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  photos: string[];
  rating: number;
  reviewCount: number;
  discounts: Discount[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  businessId: string;
  userId: string;
  rating: number;
  comment: string;
  photos?: string[];
  createdAt: Date;
}

export interface Discount {
  id: string;
  businessId: string;
  title: string;
  description: string;
  code: string;
  percentage: number;
  validUntil: Date;
  terms: string;
}