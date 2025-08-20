export interface User {
  username: string;
  email: string;
  category: string;
  uuid: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProfessionalProfile {
  name: string;
  uuid?: string;
  userUuid?: string;
  siret: string;
  address: string;
  bio: string;
  mainActivity: string;
  secondActivity?: string;
  thirdActivity?: string;
  mainInterlocutor: string;
  experience: number;
  category?: string;
  geographicArea: string;
  faq: Faq;
  minimumBenefit: number;
  minimumReservationPeriod: number;
  deposit: boolean;
  depositAmount?: number;
  billingPeriod: string;
  links?: Link[];
}

export interface ProfessionalProfile {
  name: string;
  uuid?: string;
  userUuid?: string;
  siret: string;
  address: string;
  bio: string;
  mainActivity: string;
  secondActivity?: string;
  thirdActivity?: string;
  mainInterlocutor: string;
  experience: number;
  category?: string;
  geographicArea: string;
  faq: Faq;
  minimumBenefit: number;
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
