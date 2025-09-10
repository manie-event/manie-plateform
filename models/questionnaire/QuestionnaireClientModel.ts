export interface QuestionnaireClient {
  eventType: string;
  eventName: string;
  date: Date;
  location: string;
  duration: string;
  invites: string;
  theme: string;
  organisation: string;
  people: number;
  budget: number;
  services: Services[];
}

export interface Date {
  type: string;
  value: string;
}

export interface Services {
  serviceUuid: string;
  keywordsUuid: string[];
}
