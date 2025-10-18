import type { eventModel } from './eventModel';

export interface EventModelForProposition extends eventModel {
  progression: number;
  completedServices: number;
  totalServices: number;
}
