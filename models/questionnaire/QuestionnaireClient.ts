export interface QuestionnaireClient {
  organisatorUuid: string;
  date: string[];
  budget: number;
  location: string;
  name: string;
  people: string;
  services: [{ serviceUuid: string; keywordsUuid: string[] }];
}

export interface OptionItem {
  value: string | number | boolean;
  label: string;
  group?: string;
}

export interface ConditionalConfig {
  dependsOn?: string;
  values?: any;
  showIf?: string | string[];
  hideIf?: string[];
}

export interface FieldSchema {
  id: string;
  label: string;
  type: 'radio' | 'checkbox' | 'select' | 'date' | 'number' | 'text';
  required?: boolean;
  options?: OptionItem[];
  multiple?: boolean;
  category?: string;
  step?: number;
  visibleSection?: boolean;
  max?: number;
  conditional?: ConditionalConfig;
}

export interface SectionSchema {
  id: string;
  title: string;
  fields: FieldSchema[];
}

export interface ServiceSelection {
  serviceUuid: string;
  keywordsUuid: string[];
}

export interface EventCreatePayload {
  organisatorUuid: string;
  date: [string, string];
  budget: number;
  location: string;
  name: string;
  people: string;
  services: ServiceSelection[];
}

export interface SectorData {
  services: Array<{ uuid: string; name: string }>;
  keywords: Array<{ uuid: string; name: string }>;
}

export interface FormState {
  [fieldId: string]: any;
}

export interface FieldErrors {
  [fieldId: string]: string | undefined;
}

export interface PageInfo {
  sections: SectionSchema[];
}
