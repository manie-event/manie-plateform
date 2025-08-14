<template>
  <v-dialog v-model="isOpen" v-bind="$attrs" max-width="900px">
    <v-card>
      <!-- En-tête -->
      <v-card-title class="d-flex align-center justify-space-between">
        <div class="text-h6">{{ currentPageTitle }}</div>
        <div class="text-caption">Page {{ currentPageIndex + 1 }} / {{ pages.length }}</div>
      </v-card-title>
      <v-divider></v-divider>

      <!-- Contenu -->
      <v-card-text>
        <v-window v-model="currentPageIndex">
          <v-window-item v-for="(page, pIdx) in pages" :key="`page-${pIdx}`" :value="pIdx">
            <div>
              <!-- Sections de la page -->
              <div v-for="section in page.sections" :key="section.id" class="mb-6">
                <v-divider class="mb-4">
                  <span class="px-3 text-subtitle-1">{{ section.title }}</span>
                </v-divider>

                <v-row class="mt-2" dense>
                  <!-- Contrôleur de section (switch) -->
                  <template v-if="getVisibleField(section)">
                    <v-col cols="12">
                      <SectionController
                        :section="section"
                        :field="getVisibleField(section)!"
                        :model-value="getSectionControllerValue(section)"
                        :error="fieldErrors[getVisibleField(section)?.id || '']"
                        @update:model-value="(v) => handleSectionControllerChange(section, !!v)"
                      />
                    </v-col>
                  </template>

                  <!-- Champs principaux -->
                  <template v-for="field in section.fields" :key="field.id">
                    <template v-if="!field.visibleSection && isFieldVisible(field, section)">
                      <v-col cols="12" md="6">
                        <FormField
                          :field="field"
                          :model-value="formState[field.id]"
                          :options="getDynamicOptions(field)"
                          :error="fieldErrors[field.id]"
                          @update:model-value="(v) => updateFieldValue(field, v)"
                        />
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </div>
            </div>
          </v-window-item>
        </v-window>

        <!-- Erreurs de validation -->
        <ValidationErrors :errors="pageErrors" />
      </v-card-text>

      <v-divider></v-divider>

      <!-- Actions -->
      <v-card-actions class="justify-space-between">
        <v-btn :disabled="currentPageIndex === 0" variant="text" color="primary" @click="prevPage">
          Précédent
        </v-btn>

        <div class="d-flex align-center" style="gap: 8px">
          <v-pagination
            v-model="paginationModel"
            :length="pages.length"
            density="comfortable"
            variant="outlined"
          />

          <v-btn v-if="!isLastPage" color="primary" variant="flat" @click="nextPage">
            Suivant
          </v-btn>

          <v-btn v-else color="success" variant="flat" @click="handleSubmit"> Valider </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import FormField from '@/components/questionnaires/FormField.vue';
import SectionController from '@/components/questionnaires/SectionController.vue';
import ValidationErrors from '@/components/questionnaires/ValidationError.vue';
import { useDynamicFormWithEmits } from '@/composables/QuestionnaireClient/UseDynamicFormWithEmits';
import { useKeywords } from '@/composables/professional-user/UseKeywords';
import type {
  EventCreatePayload,
  FieldSchema,
  SectionSchema,
} from '@/models/questionnaire/QuestionnaireClient';

/***** Props & Emits *****/
const props = defineProps<{
  sections: SectionSchema[];
  modelValue?: Record<string, any>;
  organisatorUuid: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', payload: Record<string, any>): void;
  (e: 'submit', payload: EventCreatePayload): void;
}>();

// v-model pour l'ouverture du dialog
const isOpen = defineModel<boolean>('openModal', { default: false });

// API pour charger les secteurs
const { getSectors } = useKeywords();

// Logique principale du formulaire
const {
  // État
  formState,
  fieldErrors,
  pageErrors,

  // Navigation
  currentPageIndex,
  pages,
  paginationModel,
  isLastPage,
  currentPageTitle,

  // Logique métier
  isFieldVisible,
  getDynamicOptions,

  // Contrôleurs
  getVisibleField,
  getSectionControllerValue,

  // Validation
  clearFieldError,

  // Handlers
  onMultiCheckboxChange,

  // Actions
  nextPage,
  prevPage,
  handleSubmit,
  handleSectionControllerChange,
} = useDynamicFormWithEmits(props, emit, getSectors);

/***** Handlers locaux *****/
const updateFieldValue = (field: FieldSchema, value: any): void => {
  console.log(`Mise à jour du champ ${field.id}:`, { old: formState[field.id], new: value });

  if (field.type === 'number') {
    const num = value === '' || value === null || value === undefined ? undefined : Number(value);
    formState[field.id] = Number.isNaN(num) ? undefined : num;
  } else if (field.type === 'checkbox' && field.multiple) {
    formState[field.id] = value || [];
    onMultiCheckboxChange(field, formState[field.id]);
  } else {
    formState[field.id] = value;
  }

  clearFieldError(field.id);
};
</script>
