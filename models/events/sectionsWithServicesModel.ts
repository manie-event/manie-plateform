export interface SectionWithServicesModel {
  sector: string;
  isService: boolean;
  category: null | string;
  question: string;
  answers: serviceAnswer[] | keywordAnswer[];
}

export interface serviceAnswer {
  id: number;
  name: string;
  uuid: string;
}

export interface keywordAnswer {
  id: number;
  uuid: string;
  sector: string;
  category: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}
