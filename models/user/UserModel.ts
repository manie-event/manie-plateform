export interface User {
  username: string;
  email: string;
  name?: string;
  phraseInspirante?: string;
  phraseDePresentation?: string;
  category: string;
  phone?: string;
  adresse?: string;
  diplome?: string;
  langues?: string;
}

export interface ProfessionalProfile {
  name: string;
  uuid?: string;
  userUuid?: string;
  siret: string;
  address: string;
  bio: string;
  mainActivity: string;
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
