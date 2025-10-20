export interface ClientServiceProposition {
  id: number;
  uuid: string;
  eventServiceUuid: string;
  professionalServiceUuid: string;
  status: string;
  professionalMessage: string;
  createdAt: string;
  updatedAt: string;
  tokens: number;
  propositionUuid: string;
  propositionStatus: string;
  organisatorUuid: string;
  isAlreadyCreated: true;
  budget: number;
  location: string;
  people: string;
  name: string;
  date: string;
  eventServices: [
    {
      id: number;
      uuid: string;
      eventUuid: string;
      professionalServiceUuid: string;
      serviceUuid: string;
      status: string;
      createdAt: string;
      updatedAt: string;
      keywordsUuid: [string];
    },
  ];
  serviceEngage: string;
}
