import { defineStore } from 'pinia';
import { ref } from 'vue';
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

  /** 👉 Juste lire les tâches, ne rien créer ici */
  const getTasksByEvent = (eventUuid: string): Task[] => {
    return tasksByEvent.value[eventUuid] || [];
  };

  /** Crée les tâches de démo uniquement s’il n’y a rien */
  const ensureTasksExistForEvent = (eventUuid: string) => {
    if (!tasksByEvent.value[eventUuid]) {
      tasksByEvent.value[eventUuid] = [
        { id: Date.now(), text: 'Apprendre Vuetify 3', done: false },
        { id: Date.now() + 1, text: 'Créer une checklist stylée', done: false },
      ];
      saveTasksToStorage();
    }
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
    saveTasksToStorage();
  };

  const removeTask = (eventUuid: string, index: number) => {
    if (tasksByEvent.value[eventUuid]) {
      tasksByEvent.value[eventUuid].splice(index, 1);
      saveTasksToStorage();
    }
  };

  const updateTask = (eventUuid: string, taskId: number, updates: Partial<Task>) => {
    const task = tasksByEvent.value[eventUuid]?.find((t) => t.id === taskId);
    if (task) {
      Object.assign(task, updates);
      saveTasksToStorage();
    }
  };

  return {
    tasksByEvent,
    loadTasksFromStorage,
    getTasksByEvent,
    ensureTasksExistForEvent,
    addTask,
    removeTask,
    updateTask,
  };
});
