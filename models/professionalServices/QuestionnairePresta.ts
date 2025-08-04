export interface QuestionnairePresta {
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
