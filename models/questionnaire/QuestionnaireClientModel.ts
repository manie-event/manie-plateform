export interface QuestionnaireClient {
  eventType: string;
  eventName: string;
  date: Date;
  location: string;
  duration: string;
  invites: string;
  formule?: string;
  name: string;
  isAlreadyCreated?: boolean;
  organisation: string;
  people: number;
  budget: number;
  status: string;
  theme: string;
  services: Services[];
}

export interface Date {
  type: string[] | string | null;
  value: string;
}

export interface Services {
  serviceUuid: string;
  keywordsUuid: string[];
}
