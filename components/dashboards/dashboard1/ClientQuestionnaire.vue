<template>
  <BaseModal v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <template #content>
      <form @submit.prevent="submitForm" class="space-y-12">
        <!-- Boucle sur les sections -->
        <div
          v-for="section in formData.sections"
          :key="section.id"
          class="section border-l-4 border-blue-500 pl-6 py-4"
        >
          <h2 class="text-2xl font-semibold mb-6 text-gray-700">
            {{ section.title }}
          </h2>

          <!-- Boucle sur les champs de chaque section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="field in section.fields"
              :key="field.id"
              v-show="shouldShowField(field)"
              :class="getFieldClass(field)"
            >
              <!-- Label du champ -->
              <label
                :for="field.id"
                class="block text-sm font-medium text-gray-700 mb-2"
                :class="{ 'text-red-600': field.required }"
              >
                {{ field.label }}
                <span v-if="field.required" class="text-red-500">*</span>
                <span v-if="field.category" class="text-xs text-gray-500 italic">
                  ({{ field.category }})
                </span>
              </label>

              <!-- Input text -->
              <input
                v-if="field.type === 'text'"
                :id="field.id"
                v-model="formValues[field.id]"
                type="text"
                :required="field.required"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                :placeholder="field.label"
              />

              <!-- Input number -->
              <input
                v-if="field.type === 'number'"
                :id="field.id"
                v-model="formValues[field.id]"
                type="number"
                :step="field.step"
                :required="field.required"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                :placeholder="field.label"
              />

              <!-- Input date -->
              <input
                v-else-if="field.type === 'date'"
                :id="field.id"
                v-model="formValues[field.id]"
                type="date"
                :required="field.required"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <!-- Select dropdown -->
              <select
                v-else-if="field.type === 'select'"
                :id="field.id"
                v-model="formValues[field.id]"
                :required="field.required"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choisir une option</option>
                <template v-if="field.conditional && field.conditional.dependsOn">
                  <option
                    v-for="option in getConditionalOptions(field)"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </template>
                <template v-else>
                  <option v-for="option in field.options" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </template>
              </select>

              <!-- Radio buttons -->
              <div v-else-if="field.type === 'radio'" class="space-y-2">
                <div v-for="option in field.options" :key="option.value" class="flex items-center">
                  <input
                    :id="`${field.id}_${option.value}`"
                    v-model="formValues[field.id]"
                    :value="option.value"
                    type="radio"
                    :name="field.id"
                    :required="field.required"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    :for="`${field.id}_${option.value}`"
                    class="ml-2 block text-sm text-gray-700"
                  >
                    {{ option.label }}
                  </label>
                </div>
              </div>

              <!-- Checkboxes -->
              <div v-else-if="field.type === 'checkbox'" class="space-y-2">
                <!-- Single checkbox -->
                <div v-if="!field.multiple" class="flex items-center">
                  <input
                    :id="field.id"
                    v-model="formValues[field.id]"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label :for="field.id" class="ml-2 block text-sm text-gray-700">
                    {{ field.label }}
                  </label>
                </div>

                <!-- Multiple checkboxes -->
                <div v-else>
                  <div
                    class="max-h-60 overflow-y-auto space-y-2 border border-gray-200 rounded p-3"
                  >
                    <!-- Group by category if options have groups -->
                    <template v-if="hasGroups(field.options)">
                      <div v-for="group in getGroups(field.options)" :key="group" class="mb-4">
                        <h4 class="font-medium text-gray-600 mb-2 border-b border-gray-200 pb-1">
                          {{ group }}
                        </h4>
                        <div
                          v-for="option in getOptionsByGroup(field.options, group)"
                          :key="option.value"
                          class="flex items-center ml-4"
                        >
                          <input
                            :id="`${field.id}_${option.value}`"
                            v-model="formValues[field.id]"
                            :value="option.value"
                            type="checkbox"
                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label
                            :for="`${field.id}_${option.value}`"
                            class="ml-2 block text-sm text-gray-700"
                          >
                            {{ option.label }}
                          </label>
                        </div>
                      </div>
                    </template>

                    <!-- Regular options without groups -->
                    <template v-else>
                      <div
                        v-for="option in field.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`${field.id}_${option.value}`"
                          v-model="formValues[field.id]"
                          :value="option.value"
                          type="checkbox"
                          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          :for="`${field.id}_${option.value}`"
                          class="ml-2 block text-sm text-gray-700"
                        >
                          {{ option.label }}
                        </label>
                      </div>
                    </template>
                  </div>

                  <!-- Max selections indicator -->
                  <div
                    v-if="field.max && Array.isArray(formValues[field.id])"
                    class="text-xs text-gray-500 mt-1"
                  >
                    {{ formValues[field.id].length || 0 }}/{{ field.max }} sélectionné(s)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit button -->
        <div class="flex justify-center pt-6">
          <button
            type="submit"
            class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Valider le formulaire
          </button>
        </div>
      </form>

      <!-- Debug: Display form values -->
      <div v-if="showDebug" class="mt-12 p-4 bg-gray-100 rounded">
        <h3 class="text-lg font-semibold mb-4">Valeurs du formulaire (Debug):</h3>
        <pre class="text-xs overflow-auto">{{ JSON.stringify(formValues, null, 2) }}</pre>
      </div>

      <!-- Toggle debug button -->
      <div class="text-center mt-6">
        <button @click="showDebug = !showDebug" class="text-sm text-gray-500 hover:text-gray-700">
          {{ showDebug ? 'Masquer' : 'Afficher' }} les valeurs debug
        </button>
      </div>
    </template>
  </BaseModal>
</template>
<script setup>
import { ref, reactive, computed, watch } from 'vue';
import BaseModal from '@/components/common/BaseModal.vue';
import formData from '@/data/questionnaire-client.json';

const openModal = defineModel('openModal');

// Reactive form values
const formValues = reactive({});

// Debug visibility
const showDebug = ref(false);

// Initialize form values
const initializeFormValues = () => {
  formData.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (field.type === 'checkbox' && field.multiple) {
        formValues[field.id] = [];
      } else if (field.type === 'checkbox') {
        formValues[field.id] = false;
      } else {
        formValues[field.id] = '';
      }
    });
  });
};

// Initialize on component mount
initializeFormValues();

// Helper functions
const shouldShowField = (field) => {
  // Handle skipSection logic for lieu section
  if (field.conditional && field.conditional.hideIf) {
    return !field.conditional.hideIf.some((fieldId) => formValues[fieldId]);
  }

  // Handle showIf conditions
  if (field.conditional && field.conditional.showIf) {
    const dependentField = field.conditional.showIf;
    const requiredValues = field.conditional.values;
    const currentValue = formValues[dependentField];

    if (Array.isArray(currentValue)) {
      return requiredValues.some((val) => currentValue.includes(val));
    } else {
      return requiredValues.includes(currentValue);
    }
  }

  return true;
};

const getFieldClass = (field) => {
  return {
    'md:col-span-2': field.type === 'checkbox' && field.multiple,
    'md:col-span-1': !(field.type === 'checkbox' && field.multiple),
  };
};

const getConditionalOptions = (field) => {
  if (!field.conditional || !field.conditional.dependsOn) return [];

  const dependentFieldValue = formValues[field.conditional.dependsOn]; // "particulier" ou "professionnel"
  const options = field.conditional.values[dependentFieldValue] || []; // Tableau d'options

  return options;
};

const hasGroups = (options) => {
  return options && options.some((option) => option.group);
};

const getGroups = (options) => {
  if (!options) return [];
  const groups = [...new Set(options.map((option) => option.group).filter(Boolean))];
  return groups;
};

const getOptionsByGroup = (options, group) => {
  return options.filter((option) => option.group === group);
};

// Watch for changes in checkbox fields with max limits
watch(
  formValues,
  (newValues) => {
    formData.sections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.type === 'checkbox' && field.multiple && field.max) {
          const currentValues = newValues[field.id];
          if (Array.isArray(currentValues) && currentValues.length > field.max) {
            // Remove the oldest selection to maintain the limit
            formValues[field.id] = currentValues.slice(-field.max);
          }
        }
      });
    });
  },
  { deep: true }
);

// Form submission
const submitForm = () => {
  console.log('Form submitted:', formValues);

  // Here you would typically send the data to your API
  // Example with Nuxt 3:
  // await $fetch('/api/events', {
  //   method: 'POST',
  //   body: formValues
  // })

  alert('Formulaire soumis ! Vérifiez la console pour voir les données.');
};
</script>

<style scoped lang="scss">
/* Additional custom styles if needed */
.section {
  scroll-margin-top: 2rem;
}

/* Custom checkbox and radio button styles */
input[type='checkbox']:checked,
input[type='radio']:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

/* Scrollbar styling for checkbox containers */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
