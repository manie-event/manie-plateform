<template>
  <v-card>
    <v-card-title class="d-flex align-center justify-space-between">
      <div class="text-h6">{{ currentPageTitle }}</div>
      <div class="text-caption">Page {{ currentPageIndex + 1 }} / {{ pages.length }}</div>
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text>
      <v-window v-model="currentPageIndex">
        <v-window-item
          v-for="(page, pIdx) in pages"
          :key="`page-${pIdx}`"
          :value="pIdx"
        >
          <div>
            <div v-for="section in page.sections" :key="section.id" class="mb-6">
              <v-divider class="mb-4"><span class="px-3 text-subtitle-1">{{ section.title }}</span></v-divider>

              <!-- Section body -->
              <v-row class="mt-2" dense>
                <!-- Render skipSection toggle first if present -->
                <template v-if="getSkipField(section)">
                  <v-col cols="12">
                    <template v-if="getSkipField(section)!.type === 'checkbox' && !getSkipField(section)!.multiple">
                      <v-checkbox
                        :label="getSkipField(section)!.label"
                        :model-value="!!formState[getSkipField(section)!.id]"
                        @update:model-value="(v: boolean) => { formState[getSkipField(section)!.id] = v; fieldErrors[getSkipField(section)!.id] = undefined; }"
                        :error="!!fieldErrors[getSkipField(section)!.id]"
                        :error-messages="fieldErrors[getSkipField(section)!.id] ? [fieldErrors[getSkipField(section)!.id] as string] : []"
                        density="comfortable"
                      />
                    </template>
                    <template v-else>
                      <!-- Fallback generic -->
                      <v-text-field :label="getSkipField(section)!.label" v-model="formState[getSkipField(section)!.id]" />
                    </template>
                  </v-col>
                </template>

                <!-- Other fields, respecting conditional visibility and skipping when skip toggle is true -->
                <template v-for="field in section.fields" :key="field.id">
                  <template v-if="!field.skipSection && isFieldVisible(field, section)">
                    <v-col cols="12" md="6">
                      <!-- RADIO -->
                      <template v-if="field.type === 'radio'">
                        <v-radio-group
                          :label="field.label"
                          :model-value="formState[field.id]"
                          @update:model-value="(v: any) => { formState[field.id] = v; fieldErrors[field.id] = undefined; }"
                          :error="!!fieldErrors[field.id]"
                          :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id] as string] : []"
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
                            @change="() => onMultiCheckboxChange(field, formState[field.id] || [])"
                            density="comfortable"
                          />
                        </div>
                        <div v-if="fieldErrors[field.id]" class="text-error text-caption">{{ fieldErrors[field.id] }}</div>
                      </template>

                      <!-- CHECKBOX SINGLE -->
                      <template v-else-if="field.type === 'checkbox' && !field.multiple">
                        <v-checkbox
                          :label="field.label"
                          :model-value="!!formState[field.id]"
                          @update:model-value="(v: boolean) => { formState[field.id] = v; fieldErrors[field.id] = undefined; }"
                          :error="!!fieldErrors[field.id]"
                          :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id] as string] : []"
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
                          :model-value="formState[field.id]"
                          @update:model-value="(v: any) => { formState[field.id] = v; fieldErrors[field.id] = undefined; }"
                          :error="!!fieldErrors[field.id]"
                          :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id] as string] : []"
                          density="comfortable"
                          clearable
                        />
                      </template>

                      <!-- DATE -->
                      <template v-else-if="field.type === 'date'">
                        <v-text-field
                          :label="field.label"
                          type="date"
                          :model-value="formState[field.id] ?? null"
                          @update:model-value="(v: any) => { formState[field.id] = v; fieldErrors[field.id] = undefined; }"
                          :error="!!fieldErrors[field.id]"
                          :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id] as string] : []"
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
                          @update:model-value="(v: any) => { const num = v === '' || v === null || v === undefined ? undefined : Number(v); formState[field.id] = Number.isNaN(num) ? undefined : num; fieldErrors[field.id] = undefined; }"
                          :error="!!fieldErrors[field.id]"
                          :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id] as string] : []"
                          density="comfortable"
                        />
                      </template>

                      <!-- TEXT -->
                      <template v-else>
                        <v-text-field
                          :label="field.label"
                          :model-value="formState[field.id] ?? ''"
                          @update:model-value="(v: string) => { formState[field.id] = v; fieldErrors[field.id] = undefined; }"
                          :error="!!fieldErrors[field.id]"
                          :error-messages="fieldErrors[field.id] ? [fieldErrors[field.id] as string] : []"
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

      <!-- Validation summary -->
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
        <v-pagination
          v-model="paginationModel"
          :length="pages.length"
          density="comfortable"
          variant="outlined"
        />
        <v-btn
          v-if="!isLastPage"
          color="primary"
          variant="flat"
          @click="nextPage"
        >
          Suivant
        </v-btn>
        <v-btn
          v-else
          color="success"
          variant="flat"
          @click="submit"
        >
          Valider
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, onMounted } from 'vue';

/***** Types *****/
interface OptionItem {
  value: string | number | boolean;
  label: string;
  group?: string;
}

interface ConditionalConfig {
  // For dynamic options based on another field value
  dependsOn?: string;
  values?: any;
  // For visibility control
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
  max?: number; // for limiting multi-select checkboxes
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

watch(
  () => props.modelValue,
  (val) => {
    if (val) Object.assign(formState, val);
  },
  { deep: true }
);

watch(
  formState,
  (val) => emit('update:modelValue', { ...val }),
  { deep: true }
);

/***** Pagination Logic *****/
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

/***** Conditional Visibility & Options *****/
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
  // Never render non-skip fields if section is skipped
  if (!field.skipSection && isSectionSkipped(section)) return false;

  const cond = field.conditional;
  if (!cond) return true;

  // hideIf: if any control is truthy, hide
  if (Array.isArray(cond.hideIf) && cond.hideIf.length > 0) {
    const shouldHide = cond.hideIf.some((cid) => {
      const val = getControlValue(cid);
      if (Array.isArray(val)) return val.length > 0; // arrays considered truthy if not empty
      return !!val;
    });
    if (shouldHide) return false;
  }

  // showIf: default false unless satisfied
  if (cond.showIf) {
    const controls = Array.isArray(cond.showIf) ? cond.showIf : [cond.showIf];
    // If values provided, match equality or intersection accordingly
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
    // No specific values: show if any control is truthy
    return controls.some((cid) => !!getControlValue(cid));
  }

  // Default visible
  return true;
}

function getDynamicOptions(field: FieldSchema): OptionItem[] | undefined {
  // Support conditional.dependsOn for dynamic options
  const cond = field.conditional as ConditionalConfig | undefined;
  if (cond && cond.dependsOn && cond.values && typeof cond.values === 'object' && !Array.isArray(cond.values)) {
    const depVal = getControlValue(cond.dependsOn);
    const mapping = cond.values as Record<string, OptionItem[]>;
    const opts = mapping[depVal as string] || [];
    return opts as OptionItem[];
  }
  return field.options;
}

/***** Rendering helpers *****/
function ensureDefaultValue(field: FieldSchema): void {
  const key = field.id;
  if (formState[key] !== undefined) return;
  if (field.type === 'checkbox' && field.multiple) formState[key] = [];
  else if (field.type === 'checkbox' && !field.multiple) formState[key] = false;
  else formState[key] = undefined;
}

function onMultiCheckboxChange(field: FieldSchema, nextValue: any[]) {
  // Enforce max if provided
  if (typeof field.max === 'number' && Array.isArray(nextValue) && nextValue.length > field.max) {
    // Keep the most recent selections within limit
    formState[field.id] = nextValue.slice(-field.max);
  }
}

const fieldErrors = reactive<Record<string, string | undefined>>({});

function getFieldComponent(field: FieldSchema) {
  // Map field types to Vuetify components (using strings works in Vuetify)
  switch (field.type) {
    case 'radio':
      return 'v-radio-group';
    case 'checkbox':
      // Single checkbox returns v-checkbox; multiple will render a wrapper div with many v-checkbox children in getFieldProps
      return field.multiple ? 'div' : 'v-checkbox';
    case 'select':
      return 'v-select';
    case 'date':
      return 'v-text-field';
    case 'number':
      return 'v-text-field';
    case 'text':
      return 'v-text-field';
    default:
      return 'div';
  }
}

function getFieldProps(field: FieldSchema) {
  ensureDefaultValue(field);

  const common = {
    label: field.label,
    'error': !!fieldErrors[field.id],
    'error-messages': fieldErrors[field.id] ? [fieldErrors[field.id] as string] : [],
    class: 'mb-2',
  } as Record<string, any>;

  // Radio group
  if (field.type === 'radio') {
    return {
      ...common,
      modelValue: formState[field.id],
      'onUpdate:modelValue': (v: any) => {
        formState[field.id] = v;
        fieldErrors[field.id] = undefined;
      },
      density: 'comfortable',
      children: (getDynamicOptions(field) || []).map((opt) => ({
        is: 'v-radio',
        label: opt.label,
        value: opt.value,
      })),
      // Enable slot-like rendering via v-for in template using this meta info
      // We will render radios inside a template using a helper render function below
    };
  }

  // Checkbox
  if (field.type === 'checkbox') {
    if (field.multiple) {
      return {
        ...common,
        // For multiple, we will render a group of checkboxes manually
        __multipleOptions: getDynamicOptions(field) || [],
        modelValue: formState[field.id] as any[],
        'onUpdate:modelValue': (v: any[]) => {
          formState[field.id] = v;
          onMultiCheckboxChange(field, v);
          fieldErrors[field.id] = undefined;
        },
      };
    }
    // Single checkbox boolean
    return {
      ...common,
      modelValue: !!formState[field.id],
      'onUpdate:modelValue': (v: boolean) => {
        formState[field.id] = v;
        fieldErrors[field.id] = undefined;
      },
      density: 'comfortable',
    };
  }

  // Select
  if (field.type === 'select') {
    return {
      ...common,
      modelValue: formState[field.id],
      'onUpdate:modelValue': (v: any) => {
        formState[field.id] = v;
        fieldErrors[field.id] = undefined;
      },
      items: (getDynamicOptions(field) || []).map((o) => ({ label: o.label, value: o.value })),
      'item-title': 'label',
      'item-value': 'value',
      density: 'comfortable',
      clearable: true,
    };
  }

  // Date
  if (field.type === 'date') {
    return {
      ...common,
      type: 'date',
      modelValue: formState[field.id] ?? null,
      'onUpdate:modelValue': (v: any) => {
        formState[field.id] = v;
        fieldErrors[field.id] = undefined;
      },
      density: 'comfortable',
    };
  }

  // Number
  if (field.type === 'number') {
    return {
      ...common,
      type: 'number',
      step: field.step ?? 1,
      modelValue: formState[field.id],
      'onUpdate:modelValue': (v: any) => {
        const num = v === '' || v === null || v === undefined ? undefined : Number(v);
        formState[field.id] = Number.isNaN(num) ? undefined : num;
        fieldErrors[field.id] = undefined;
      },
      density: 'comfortable',
    };
  }

  // Text
  if (field.type === 'text') {
    return {
      ...common,
      modelValue: formState[field.id] ?? '',
      'onUpdate:modelValue': (v: string) => {
        formState[field.id] = v;
        fieldErrors[field.id] = undefined;
      },
      density: 'comfortable',
      clearable: true,
    };
  }

  return common;
}

function getSkipField(section: SectionSchema): FieldSchema | undefined {
  return section.fields.find((f) => f.skipSection);
}

/***** Validation *****/
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

  p.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (field.skipSection) return; // skip field is never required
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

const pageErrors = ref<string[]>([]);

/***** Navigation *****/
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

<!-- Render helpers for radio and multiple checkbox inside the component template using Vue slots approach -->

<style scoped>
.questionnaires-container {
  width: 100%;
}
</style>