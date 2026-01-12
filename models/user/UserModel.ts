import type { Services } from '../professionalService/Services';

export interface User {
  username: string;
  email: string;
  category: string;
  uuid: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface clientProfile {
  address: string;
  birthDate: string;
  businessLeader?: string;
  businessName?: string;
  businessSiret?: string;
  city: string;
  country: string;
  createdAt: string;
  email: string;
  id: number;
  isBusiness: boolean;
  phoneNumber: string;
  updatedAt: string;
  userUuid: string;
  username: string;
  uuid: string;
  zipCode: string;
}

export interface ProfessionalProfile {
  name: string;
  uuid?: string;
  email: string;
  userUuid?: string;
  siret: string;
  telephone: string;
  address: string;
  bio: string;
  mainActivity: string;
  secondActivity?: string;
  thirdActivity?: string;
  mainInterlocutor: string;
  experience: number;
  certification: string[];
  category?: string;
  picture: string;
  professionalServices: Services[];
  faq: Faq;
  minimumReservationPeriod: number;
  deposit: boolean;
  depositAmount?: number;
  billingPeriod: string;
  links?: Link[];
}

export interface Faq {
  [key: string]: string;
}

export interface Link {
  type: string;
  value: string;
}
