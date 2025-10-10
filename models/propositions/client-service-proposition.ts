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
  eventName: string;
  eventUuid: string;
  eventDate: string[];
  serviceUuid: string;
}
