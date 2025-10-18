export interface QuestionnaireClient {
  uuid?: string;
  eventType: string;
  name: string;
  date: string[] | string;
  location: string;
  duration: string;
  group_type: string;
  theme: string;
  organized_for: string;
  people: number;
  isAlreadyCreated?: boolean;
  budget: number;
  services: Services[];
}

export interface Services {
  serviceUuid: string;
  keywordsUuid: string[];
}
