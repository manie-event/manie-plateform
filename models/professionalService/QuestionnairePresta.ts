import type { Keywords } from './Keywords';
import type { Services } from './Services';

export interface SectorFormDefinition {
  sector: string;
  general: {
    questions: QuestionGeneral[];
  };
  services: 'string';
  servicesSection: {
    questions: QuestionGeneral[];
  };
  habitudes: 'string';
  habitudesSection: string[];
}

export interface QuestionGeneral {
  id: string;
  question: string;
  type: string;
  required: boolean;
}

export interface QuestionnaireItem {
  linkUuid?: string; // UUID du professional_service existant
  sector: string;
  questionnaireData: any;
  services: Services[];
  keywordsByCategory: Record<string, Keywords[]>;
  selectedServiceUuid: string | null;
  selectedKeywords: Set<string>;

  // ✅ Ajouter cette propriété
  original?: {
    serviceUuid: string | null;
    keywords: Set<string>;
  };
}
