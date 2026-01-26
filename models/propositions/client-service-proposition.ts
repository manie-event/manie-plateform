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
  theme?: string;
  date: string;
  eventServices: eventService[];
  serviceEngage: string;
  groupType: string;
  duration: string;
  organizedFor: string;
  formule: string;
  typeEvent: string;
  eventName: string;
  eventUuid: string;
}

export interface eventService   {
      id: number;
      uuid: string;
      eventUuid: string;
      professionalServiceUuid: string;
      serviceUuid: string;
      status: string;
      sectorName: string;
      createdAt: string;
      updatedAt: string;
      keywordsUuid: [string];
    },
