<template>
  <v-card class="position-relative">
    <v-btn color="primary" class="checklist-btn" variant="flat" @click="addTask">
      <v-icon center>mdi-plus</v-icon>
    </v-btn>
    <v-card-title class="text-h5 font-weight-bold"> 🧾 Liste des tâches </v-card-title>

    <v-card-subtitle class="text-body-2 mb-4">
      {{ completedTasks }}/{{ tasks.length }} tâche(s) complétée(s)
    </v-card-subtitle>

    <transition-group name="fade" tag="div">
      <v-list-item
        v-for="(task, index) in tasks"
        :key="task.id"
        class="py-2"
        :class="task.done ? 'task-done' : 'task-pending'"
      >
        <v-row class="align-center" no-gutters>
          <v-col cols="auto">
            <v-checkbox v-model="task.done" color="primary" hide-details></v-checkbox>
          </v-col>

          <v-col class="flex-grow-1">
            <v-text-field
              v-model="task.text"
              variant="plain"
              density="compact"
              placeholder="Nouvelle tâche"
              hide-details
              class="task-input"
              @blur="saveTasks"
            ></v-text-field>
          </v-col>

          <v-col cols="auto">
            <v-icon color="error" class="cursor-pointer" @click="removeTask(index)">
              mdi-delete
            </v-icon>
          </v-col>
        </v-row>
      </v-list-item>
    </transition-group>
  </v-card>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';

const STORAGE_KEY = 'vuetify-checklist-tasks';

const tasks = ref([]);

// Charger les tâches
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      tasks.value = JSON.parse(saved);
    } catch {
      tasks.value = [];
    }
  } else {
    tasks.value = [
      { id: Date.now(), text: 'Apprendre Vuetify 3', done: false },
      { id: Date.now() + 1, text: 'Créer une checklist stylée', done: false },
    ];
  }
});

// Sauvegarde auto
watch(tasks, (newVal) => localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal)), { deep: true });

const addTask = () => {
  tasks.value.push({ id: Date.now(), text: '', done: false });
  saveTasks();
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
  saveTasks();
};

const completedTasks = computed(() => tasks.value.filter((t) => t.done).length);

const saveTasks = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value));
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
  opacity: 0.6;
  transition: all 0.25s ease;
}

.checklist-btn {
  position: absolute;
  top: 20px;
  right: 50px;
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
