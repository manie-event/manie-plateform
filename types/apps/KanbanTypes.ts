interface taskData {
  id?: number | any;
  title?: string;
  subtitle?: string;
  datef?: Date | any;
  deleted?: boolean;
  taskimg?: string;
  date?: Date | any;
  category?: string;
  categorybg?: string;
}

interface TaskColumn {
  title: string;
  cardbg: string;
  tasks: taskData[];
}

export type { TaskColumn };
