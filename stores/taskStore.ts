import type { EventTasks, Task } from '~/models/tasks/eventTasks';

export const useTasksStore = defineStore('tasks', () => {
  const tasksByEvent = ref<EventTasks>({});

  const loadTasksFromStorage = () => {
    const saved = localStorage.getItem('tasksByEvent');
    if (saved) {
      try {
        tasksByEvent.value = JSON.parse(saved);
      } catch {
        tasksByEvent.value = {};
      }
    }
  };

  const saveTasksToStorage = () => {
    localStorage.setItem('tasksByEvent', JSON.stringify(tasksByEvent.value));
  };

  const getTasksByEvent = (eventUuid: string): Task[] => {
    if (!tasksByEvent.value[eventUuid]) {
      tasksByEvent.value[eventUuid] = [
        { id: Date.now(), text: 'Apprendre Vuetify 3', done: false },
        { id: Date.now() + 1, text: 'Créer une checklist stylée', done: false },
      ];
      saveTasksToStorage();
    }
    return tasksByEvent.value[eventUuid];
  };

  const addTask = (eventUuid: string) => {
    if (!tasksByEvent.value[eventUuid]) {
      tasksByEvent.value[eventUuid] = [];
    }
    tasksByEvent.value[eventUuid].push({
      id: Date.now(),
      text: '',
      done: false,
    });

    tasksByEvent.value = { ...tasksByEvent.value };

    saveTasksToStorage();
  };

  const removeTask = (eventUuid: string, index: number) => {
    if (tasksByEvent.value[eventUuid]) {
      tasksByEvent.value[eventUuid].splice(index, 1);
      saveTasksToStorage();
    }
  };

  const updateTask = (eventUuid: string, taskId: number, updates: Partial<Task>) => {
    if (tasksByEvent.value[eventUuid]) {
      const task = tasksByEvent.value[eventUuid].find((t) => t.id === taskId);
      if (task) {
        Object.assign(task, updates);
        saveTasksToStorage();
      }
    }
  };

  const saveTasks = (eventUuid: string) => {
    saveTasksToStorage();
  };

  return {
    tasksByEvent,
    loadTasksFromStorage,
    getTasksByEvent,
    addTask,
    removeTask,
    updateTask,
    saveTasks,
  };
});
