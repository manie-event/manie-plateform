export interface EventServiceProposition {
  id: 'number';
  uuid: 'string';
  eventServiceUuid: 'string';
  professionalServiceUuid: 'string';
  status: 'pending | reviewing | completed | cancelled';
  professionalMessage: 'string | null';
  tokens: 'number';
  createdAt: 'date';
  updatedAt: 'date';
}
