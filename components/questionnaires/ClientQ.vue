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
                  <template v-if="getVisibleField(section)">
                    <v-col cols="12">
                      <template v-if="getVisibleField(section)?.type === 'checkbox' && !getVisibleField(section)?.multiple">
                        <v-switch
                          :label="getVisibleField(section)?.label"
                          :model-value="!!formState[getVisibleField(section)?.id]"
                          @update:model-value="v => {
                            const sf = getVisibleField(section);
                            if (sf) {
                              formState[sf.id] = v;
                              fieldErrors[sf.id] = undefined;
                              onSectionControllerChanged(section, sf, v);
                            }
                          }"
                          :error="!!fieldErrors[getVisibleField(section)?.id || '' ]"
                          :error-messages="fieldErrors[getVisibleField(section)?.id || ''] ? [fieldErrors[getVisibleField(section)?.id || '']] : []"
                          density="comfortable"
                        />
                      </template>
                      <template v-else>
                        <v-text-field
                          :label="getVisibleField(section)?.label"
                          v-model="formState[getVisibleField(section)?.id]"
                          @update:model-value="() => {
                            const sf = getVisibleField(section);
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

                          <v-chip-group
                            v-model="formState[field.id]"
                            multiple
                            filter
                            @update:model-value="() => {
                              onMultiCheckboxChange(field, formState[field.id] || []);
                              fieldErrors[field.id] = undefined;
                            }"
                          >
                            <v-chip
                              v-for="opt in (getDynamicOptions(field) || [])"
                              :key="String(opt.value)"
                              :value="opt.value"
                              variant="outlined"
                              class="ma-1"
                            >
                              {{ opt.label }}
                            </v-chip>
                          </v-chip-group>

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
import { ref, reactive, computed, onMounted } from 'vue';
import { useKeywords } from '@/composables/UseKeywords';

// v-model:open-modal (parent uses v-model:open-modal)
const isOpen = defineModel<boolean>('openModal', { default: false });
const { getSectors } = useKeywords();
const loadedSectors = ref<Set<string>>(new Set());
const currentPageIndex = ref(0);
const pageErrors = ref<string[]>([]);

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
  visibleSection?: boolean;
  max?: number;
  conditional?: ConditionalConfig;
}

interface SectionSchema {
  id: string;
  title: string;
  fields: FieldSchema[];
}

// Event payload & mappings
type ServiceSelection = { serviceUuid: string; keywordsUuid: string[] };
interface EventCreatePayload {
  organisatorUuid: string;
  date: [string, string];
  budget: number;
  location: string;
  name: string;
  people: string;
  services: ServiceSelection[];
}

type KeywordMap = Record<string, Record<string, string>>; // sectionId -> (value -> keywordUuid)
type ServiceMap = Record<string, string>; // sectionId -> serviceUuid

/***** Props & Emits *****/
const props = defineProps<{
  sections: SectionSchema[];
  modelValue?: Record<string, any>;
  organisatorUuid: string;
  keywordUuidBySectionId?: KeywordMap;
  serviceUuidBySectionId?: ServiceMap;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', payload: Record<string, any>): void;
  (e: 'submit', payload: EventCreatePayload): void;
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
  const skipField = section.fields.find((f) => f.visibleSection);
  if (!skipField) return false;
  const val = formState[skipField.id];
  return !!val;
}

function isFieldVisible(field: FieldSchema, section: SectionSchema): boolean {
  if (!field.visibleSection && isSectionSkipped(section)) return false;
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

// Lazy sector loading on controller interaction
function getVisibleField(section: SectionSchema): FieldSchema | undefined {
  return (section.fields || []).find((f) => f.visibleSection);
}

function isMeaningfulSelection(field: FieldSchema, val: any) {
  if (field.type === 'checkbox' && field.multiple) return Array.isArray(val) && val.length > 0;
  if (field.type === 'checkbox' && !field.multiple) return !!val;
  if (field.type === 'radio' || field.type === 'select') return val !== undefined && val !== '';
  return !!val;
}

async function onSectionControllerChanged(section: SectionSchema, field: FieldSchema, value: any) {
  if (!isMeaningfulSelection(field, value)) return;
  const sector = section.id;
  if (loadedSectors.value.has(sector)) return;
  loadedSectors.value.add(sector);
  try {
    await getSectors(sector);
  } catch (e) {
    loadedSectors.value.delete(sector);
    console.error(e);
  }
}

/***** Helpers *****/
const fieldErrors = reactive<Record<string, string | undefined>>({});

function onMultiCheckboxChange(field: FieldSchema, nextValue: any[]) {
  if (typeof field.max === 'number' && Array.isArray(nextValue) && nextValue.length > field.max) {
    formState[field.id] = nextValue.slice(-field.max);
  }
}

/***** Event payload build (services) *****/
function isUuid(v: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
}

function buildSelectedServices(
  answers: Record<string, any>,
  sections: SectionSchema[],
  keywordUuidBySectionId: KeywordMap,
  serviceUuidBySectionId?: ServiceMap
): ServiceSelection[] {
  const result: ServiceSelection[] = [];
  for (const section of sections) {
    const serviceUuid = serviceUuidBySectionId?.[section.id] ?? section.id;
    const selectedValues: string[] = [];

    for (const field of section.fields) {
      const val = answers[field.id];
      if (field.type === 'checkbox' && field.multiple && Array.isArray(val)) {
        selectedValues.push(...val.map(String));
      } else if ((field.type === 'radio' || field.type === 'select') && val !== undefined && val !== null && val !== '') {
        selectedValues.push(String(val));
      }
    }

    const sectionMap = keywordUuidBySectionId[section.id] || {};
    const keywordsUuid = Array.from(
      new Set(
        selectedValues
          .map((v) => sectionMap[v] ?? (isUuid(v) ? v : undefined))
          .filter((v): v is string => !!v)
      )
    );

    if (keywordsUuid.length > 0) result.push({ serviceUuid, keywordsUuid });
  }
  return result;
}

function humanizeEventName(value?: string, fallback = 'Événement'): string {
  if (!value) return fallback;
  return value.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function computeDateRange(answers: Record<string, any>): [string, string] {
  if (answers.date_status === 'arretee') {
    const start = String(answers.date_debut || '');
    const end = String(answers.date_fin || answers.date_debut || '');
    return [start, end];
  }
  return ['', ''];
}

function buildEventPayload(
  answers: Record<string, any>,
  organisatorUuid: string,
  services: ServiceSelection[]
): EventCreatePayload {
  const peopleNum = Number(answers.nb_personnes || 0);
  const budget =
    answers.budget_type === 'par_personne'
      ? Number(answers.budgetParPersonne || 0) * peopleNum
      : Number(answers.budget || 0);

  return {
    organisatorUuid,
    date: computeDateRange(answers),
    budget,
    location: String(answers.localisation || ''),
    name: answers.theme ? String(answers.theme) : humanizeEventName(answers.evenement),
    people: String(answers.nb_personnes ?? ''),
    services,
  };
}

/***** Navigation *****/
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
      if (field.visibleSection) return;
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
  const services = buildSelectedServices(
    formState,
    props.sections,
    props.keywordUuidBySectionId || {},
    props.serviceUuidBySectionId || {}
  );
  const payload = buildEventPayload(formState, props.organisatorUuid, services);
  emit('submit', payload);
}
</script>