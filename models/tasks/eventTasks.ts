export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export interface EventTasks {
  [eventUuid: string]: Task[];
}
