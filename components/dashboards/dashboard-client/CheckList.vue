<template>
  <v-card class="position-relative">
    <div class="d-flex flex-row-reverse justify-space-between">
      <v-btn color="primary" class="checklist-btn" variant="flat" @click="handleAddTask()">
        <v-icon center>mdi-plus</v-icon>
      </v-btn>
      <div>
        <v-card-subtitle class="text-subtitle-1 font-weight-bold pt-5">
          Votre liste des tâches
        </v-card-subtitle>

        <v-card-subtitle class="text-body-2 mb-4">
          {{ completedTasks }}/{{ currentTasks.length }} tâche(s) complétée(s)
        </v-card-subtitle>
      </div>
    </div>

    <transition-group name="fade" tag="div">
      <v-list-item
        v-for="(task, index) in currentTasks"
        :key="task.id"
        class="py-2"
        :class="task.done ? 'task-done' : 'task-pending'"
      >
        <v-row class="align-center" no-gutters>
          <v-col cols="auto">
            <input
              type="checkbox"
              v-model="task.done"
              color="primary"
              hide-details
              @update:model-value="handleUpdateTask(task.id, { done: task.done })"
            />
          </v-col>

          <v-col class="flex-grow-1">
            <v-text-field
              v-model="task.text"
              variant="plain"
              density="compact"
              placeholder="Nouvelle tâche"
              hide-details
              class="task-input"
              @blur="handleUpdateTask(task.id, { text: task.text })"
            ></v-text-field>
          </v-col>

          <v-col cols="auto">
            <v-icon color="error" class="cursor-pointer" @click="handleRemoveTask(index)">
              mdi-delete
            </v-icon>
          </v-col>
        </v-row>
      </v-list-item>
    </transition-group>
  </v-card>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/taskStore';
import { computed, onMounted } from 'vue';
import type { eventModel } from '~/models/events/eventModel';
import type { Task } from '~/models/tasks/eventTasks';

const props = defineProps<{
  event?: eventModel;
}>();

const store = useTasksStore();
const { loadTasksFromStorage, getTasksByEvent, addTask, removeTask, updateTask } = store;

// Charger les tâches au montage
onMounted(() => {
  loadTasksFromStorage();
});

// Récupérer les tâches de cet événement
const currentTasks = computed(() => {
  if (!props.event?.uuid) return [];

  return getTasksByEvent(props.event.uuid);
});

// Nombre de tâches complétées
const completedTasks = computed(() => currentTasks.value.filter((t) => t.done).length);

// Handlers
const handleAddTask = () => {
  if (props.event?.uuid) {
    addTask(props.event.uuid);
  }
};

const handleRemoveTask = (index: number) => {
  if (props.event?.uuid) {
    removeTask(props.event.uuid, index);
  }
};

const handleUpdateTask = (taskId: number, updates: Partial<Task>) => {
  if (props.event?.uuid) {
    updateTask(props.event.uuid, taskId, updates);
  }
};
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
  opacity: 0.6;
  transition: all 0.25s ease;
}

.checklist-btn {
  position: relative;
  top: 20px;
  right: 20px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-pending {
  transition: all 0.25s ease;
}

.cursor-pointer {
  cursor: pointer;
}

.task-input {
  margin: unset !important;
  padding: 0 !important;
}

:deep(.v-field__input) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  min-height: auto !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
