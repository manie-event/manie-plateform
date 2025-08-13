<template>
  <v-dialog v-model="isOpen" v-bind="$attrs">
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        <div class="text-h6">{{ currentPageTitle }}</div>
        <div class="text-caption">Page {{ currentPageIndex + 1 }} / {{ pages.length }}</div>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-window v-model="currentPageIndex">
          <v-window-item v-for="(page, pIdx) in pages" :key="`page-${pIdx}`" :value="pIdx">
            <div>
              <div v-for="section in page.sections" :key="section.id" class="mb-6">
                <v-divider class="mb-4">
                  <span class="px-3 text-subtitle-1">{{ section.title }}</span>
                </v-divider>

                <v-row class="mt-2" dense>
                  <!-- Skip toggle if present -->
                  <template v-if="getSkipField(section)">
                    <v-col cols="12">
                      <template v-if="getSkipField(section)?.type === 'checkbox' && !getSkipField(section)?.multiple">
                        <v-checkbox
                          :label="getSkipField(section)?.label"
                          :model-value="!!formState[getSkipField(section)?.id]"
                          @update:model-value="v => {
                            const sf = getSkipField(section);
                            if (sf) {
                              formState[sf.id] = v;
                              fieldErrors[sf.id] = undefined;
                            }
                          }"
                          :error="!!fieldErrors[getSkipField(section)?.id || '']"
                          :error-messages="fieldErrors[getSkipField(section)?.id || ''] ? [fieldErrors[getSkipField(section)?.id || '']] : []"
                          density="comfortable"
                        />
                      </template>
                      <template v-else>
                        <v-text-field
                          :label="getSkipField(section)?.label"
                          v-model="formState[getSkipField(section)?.id]"
                          @update:model-value="() => {
                            const sf = getSkipField(section);
                            if (sf) fieldErrors[sf.id] = undefined;
                          }"
                        />
                      </template>
                    </v-col>
                  </template>

                  <!-- Main fields -->
                  <template v-for="field in section.fields" :key="field.id">
                    <template v-if="!field.skipSection && isFieldVisible(field, section)">
                      <v-col cols="12" md="6">
                        <!-- RADIO -->
                        <template v-if="field.type === 'radio'">
                          <v-radio-group
                            :label="field.label"
                            v-model="formState[field.id]"
                            @update:model-value="() => { fieldErrors[field.id] = undefined }"
                            :error="!!fieldErrors[field.id]"
                            :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id]] : []"
                            density="comfortable"
                          >
                            <v-radio
                              v-for="opt in (getDynamicOptions(field) || [])"
                              :key="String(opt.value)"
                              :label="opt.label"
                              :value="opt.value"
                            />
                          </v-radio-group>
                        </template>

                        <!-- CHECKBOX MULTI -->
                        <template v-else-if="field.type === 'checkbox' && field.multiple">
                          <div class="mb-1 text-subtitle-2">{{ field.label }}</div>
                          <div class="d-flex flex-column">
                            <v-checkbox
                              v-for="opt in (getDynamicOptions(field) || [])"
                              :key="String(opt.value)"
                              :label="opt.label"
                              :value="opt.value"
                              v-model="formState[field.id]"
                              @update:model-value="() => { onMultiCheckboxChange(field, formState[field.id] || []); fieldErrors[field.id] = undefined; }"
                              density="comfortable"
                            />
                          </div>
                          <div v-if="fieldErrors[field.id]" class="text-error text-caption">{{ fieldErrors[field.id] }}</div>
                        </template>

                        <!-- CHECKBOX SINGLE -->
                        <template v-else-if="field.type === 'checkbox' && !field.multiple">
                          <v-checkbox
                            :label="field.label"
                            v-model="formState[field.id]"
                            @update:model-value="() => { fieldErrors[field.id] = undefined }"
                            :error="!!fieldErrors[field.id]"
                            :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id]] : []"
                            density="comfortable"
                          />
                        </template>

                        <!-- SELECT -->
                        <template v-else-if="field.type === 'select'">
                          <v-select
                            :label="field.label"
                            :items="(getDynamicOptions(field) || []).map(o => ({ label: o.label, value: o.value }))"
                            item-title="label"
                            item-value="value"
                            v-model="formState[field.id]"
                            @update:model-value="() => { fieldErrors[field.id] = undefined }"
                            :error="!!fieldErrors[field.id]"
                            :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id]] : []"
                            density="comfortable"
                            clearable
                          />
                        </template>

                        <!-- DATE -->
                        <template v-else-if="field.type === 'date'">
                          <v-text-field
                            :label="field.label"
                            type="date"
                            v-model="formState[field.id]"
                            @update:model-value="() => { fieldErrors[field.id] = undefined }"
                            :error="!!fieldErrors[field.id]"
                            :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id]] : []"
                            density="comfortable"
                          />
                        </template>

                        <!-- NUMBER -->
                        <template v-else-if="field.type === 'number'">
                          <v-text-field
                            :label="field.label"
                            type="number"
                            :step="field.step ?? 1"
                            :model-value="formState[field.id]"
                            @update:model-value="v => { const num = v === '' || v === null || v === undefined ? undefined : Number(v); formState[field.id] = Number.isNaN(num) ? undefined : num; fieldErrors[field.id] = undefined; }"
                            :error="!!fieldErrors[field.id]"
                            :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id]] : []"
                            density="comfortable"
                          />
                        </template>

                        <!-- TEXT -->
                        <template v-else>
                          <v-text-field
                            :label="field.label"
                            v-model="formState[field.id]"
                            @update:model-value="() => { fieldErrors[field.id] = undefined }"
                            :error="!!fieldErrors[field.id]"
                            :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id]] : []"
                            density="comfortable"
                            clearable
                          />
                        </template>
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </div>
            </div>
          </v-window-item>
        </v-window>

        <div v-if="pageErrors.length" class="mt-3">
          <v-alert type="error" variant="tonal" density="comfortable">
            <div class="text-body-2">Merci de compléter les champs requis:</div>
            <ul class="mt-2 mb-0 pl-4">
              <li v-for="err in pageErrors" :key="err">{{ err }}</li>
            </ul>
          </v-alert>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-space-between">
        <v-btn :disabled="currentPageIndex === 0" variant="text" color="primary" @click="prevPage">
          Précédent
        </v-btn>
        <div class="d-flex align-center" style="gap: 8px">
          <v-pagination v-model="paginationModel" :length="pages.length" density="comfortable" variant="outlined" />
          <v-btn v-if="!isLastPage" color="primary" variant="flat" @click="nextPage">Suivant</v-btn>
          <v-btn v-else color="success" variant="flat" @click="submit">Valider</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';

// v-model:open-modal (parent uses v-model:open-modal)
const isOpen = defineModel<boolean>('openModal', { default: false });

/***** Types *****/
interface OptionItem {
  value: string | number | boolean;
  label: string;
  group?: string;
}

interface ConditionalConfig {
  dependsOn?: string;
  values?: any;
  showIf?: string | string[];
  hideIf?: string[];
}

interface FieldSchema {
  id: string;
  label: string;
  type: 'radio' | 'checkbox' | 'select' | 'date' | 'number' | 'text';
  required?: boolean;
  options?: OptionItem[];
  multiple?: boolean;
  category?: string;
  step?: number;
  skipSection?: boolean;
  max?: number;
  conditional?: ConditionalConfig;
}

interface SectionSchema {
  id: string;
  title: string;
  fields: FieldSchema[];
}

/***** Props & Emits *****/
const props = defineProps<{
  sections: SectionSchema[];
  modelValue?: Record<string, any>;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', payload: Record<string, any>): void;
  (e: 'submit', payload: Record<string, any>): void;
}>();

/***** State *****/
const formState = reactive<Record<string, any>>({ ...(props.modelValue || {}) });

// Build a quick lookup for fields by id (for enforcing max, etc.)
const fieldsById = computed<Map<string, FieldSchema>>(() => {
  const map = new Map<string, FieldSchema>();
  (props.sections || []).forEach((section) => {
    (section.fields || []).forEach((field) => {
      map.set(field.id, field);
    });
  });
  return map;
});

function initializeDefaults() {
  (props.sections || []).forEach((section) => {
    (section.fields || []).forEach((field) => {
      if (field.type === 'checkbox' && field.multiple) {
        if (!Array.isArray(formState[field.id])) formState[field.id] = [];
      } else if (field.type === 'checkbox' && !field.multiple) {
        if (typeof formState[field.id] !== 'boolean') formState[field.id] = false;
      } else if (formState[field.id] === undefined) {
        formState[field.id] = undefined as unknown as any;
      }
    });
  });
}

onMounted(() => {
  initializeDefaults();
});

watch(
  () => props.sections,
  () => initializeDefaults(),
  { deep: true, immediate: true }
);

watch(
  formState,
  (val) => {
    // Enforce max constraint for multi checkbox
    for (const [key, value] of Object.entries(val)) {
      if (Array.isArray(value)) {
        const field = fieldsById.value.get(key);
        if (field && field.type === 'checkbox' && field.multiple && typeof field.max === 'number') {
          if (value.length > field.max) {
            val[key] = value.slice(-field.max);
          }
        }
      }
    }
    emit('update:modelValue', { ...val });
  },
  { deep: true }
);

watch(
  () => props.modelValue,
  (v) => {
    if (v) Object.assign(formState, v);
  },
  { deep: true }
);

/***** Pagination *****/
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

const pages = computed(() => {
  if (!props.sections || props.sections.length === 0) return [] as { sections: SectionSchema[] }[];
  const [first, ...rest] = props.sections;
  const paired = chunkArray(rest, 2);
  return [{ sections: [first] }, ...paired.map((pair) => ({ sections: pair }))];
});

const currentPageIndex = ref(0);
const paginationModel = computed({
  get: () => currentPageIndex.value + 1,
  set: (v: number) => (currentPageIndex.value = v - 1),
});

const isLastPage = computed(() => currentPageIndex.value === pages.value.length - 1);

const currentPageTitle = computed(() => {
  const p = pages.value[currentPageIndex.value];
  if (!p) return '';
  return p.sections.map((s) => s.title).join(' + ');
});

/***** Conditional visibility & options *****/
function getControlValue(controlId?: string): any {
  if (!controlId) return undefined;
  return formState[controlId];
}

function includesAny(source: any[] | undefined, values: any[] | undefined): boolean {
  if (!Array.isArray(source) || !Array.isArray(values)) return false;
  return values.some((v) => source.includes(v));
}

function isSectionSkipped(section: SectionSchema): boolean {
  const skipField = section.fields.find((f) => f.skipSection);
  if (!skipField) return false;
  const val = formState[skipField.id];
  return !!val;
}

function isFieldVisible(field: FieldSchema, section: SectionSchema): boolean {
  if (!field.skipSection && isSectionSkipped(section)) return false;
  const cond = field.conditional;
  if (!cond) return true;

  if (Array.isArray(cond.hideIf) && cond.hideIf.length > 0) {
    const shouldHide = cond.hideIf.some((cid) => {
      const val = getControlValue(cid);
      if (Array.isArray(val)) return val.length > 0;
      return !!val;
    });
    if (shouldHide) return false;
  }

  if (cond.showIf) {
    const controls = Array.isArray(cond.showIf) ? cond.showIf : [cond.showIf];
    if (cond.values !== undefined) {
      return controls.some((cid) => {
        const controlVal = getControlValue(cid);
        if (Array.isArray(controlVal)) {
          const requiredVals = Array.isArray(cond.values) ? (cond.values as any[]) : [cond.values];
          return includesAny(controlVal, requiredVals);
        }
        return Array.isArray(cond.values)
          ? (cond.values as any[]).includes(controlVal)
          : controlVal === cond.values;
      });
    }
    return controls.some((cid) => !!getControlValue(cid));
  }

  return true;
}

function getDynamicOptions(field: FieldSchema): OptionItem[] | undefined {
  const cond = field.conditional as ConditionalConfig | undefined;
  if (
    cond &&
    cond.dependsOn &&
    cond.values &&
    typeof cond.values === 'object' &&
    !Array.isArray(cond.values)
  ) {
    const depVal = getControlValue(cond.dependsOn);
    const mapping = cond.values as Record<string, OptionItem[]>;
    return mapping[depVal as string] || [];
  }
  return field.options;
}

function getSkipField(section: SectionSchema): FieldSchema | undefined {
  return (section.fields || []).find((f) => f.skipSection);
}

/***** Helpers *****/
const fieldErrors = reactive<Record<string, string | undefined>>({});

function onMultiCheckboxChange(field: FieldSchema, nextValue: any[]) {
  if (typeof field.max === 'number' && Array.isArray(nextValue) && nextValue.length > field.max) {
    formState[field.id] = nextValue.slice(-field.max);
  }
}

/***** Navigation *****/
const pageErrors = ref<string[]>([]);

function isValueEmpty(field: FieldSchema, value: any): boolean {
  if (value === null || value === undefined) return true;
  if (field.type === 'text' && value === '') return true;
  if (field.type === 'number' && (value === '' || value === undefined)) return true;
  if (field.type === 'checkbox' && field.multiple && Array.isArray(value) && value.length === 0) return true;
  return false;
}

function validateCurrentPage(): boolean {
  const p = pages.value[currentPageIndex.value];
  const errs: string[] = [];
  p?.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (field.skipSection) return;
      if (!isFieldVisible(field, section)) return;
      if (field.required) {
        const val = formState[field.id];
        if (isValueEmpty(field, val)) {
          fieldErrors[field.id] = 'Champ requis';
          errs.push(field.label);
        }
      }
    });
  });
  pageErrors.value = errs;
  return errs.length === 0;
}

function nextPage() {
  if (!validateCurrentPage()) return;
  if (currentPageIndex.value < pages.value.length - 1) currentPageIndex.value += 1;
  pageErrors.value = [];
}

function prevPage() {
  if (currentPageIndex.value > 0) currentPageIndex.value -= 1;
  pageErrors.value = [];
}

function submit() {
  if (!validateCurrentPage()) return;
  emit('submit', { ...formState });
}
</script>