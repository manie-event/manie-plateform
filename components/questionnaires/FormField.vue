<template>
  <!-- Radio buttons -->
  <v-radio-group
    v-if="field.type === 'radio'"
    :label="field.label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :error="!!error"
    :error-messages="error ? [error] : []"
    density="comfortable"
  >
    <v-radio
      v-for="opt in options || []"
      :key="String(opt.value)"
      :label="opt.label"
      :value="opt.value"
    />
  </v-radio-group>

  <!-- Checkbox multiple -->
  <div v-else-if="field.type === 'checkbox' && field.multiple">
    <div class="mb-1 text-subtitle-2">{{ field.label }}</div>
    <v-chip-group
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      multiple
      filter
    >
      <v-chip
        v-for="opt in options || []"
        :key="String(opt.value)"
        :value="opt.value"
        variant="outlined"
        class="ma-1"
      >
        {{ opt.label }}
      </v-chip>
    </v-chip-group>
    <div v-if="error" class="text-error text-caption mt-1">{{ error }}</div>
  </div>

  <!-- Checkbox simple -->
  <v-checkbox
    v-else-if="field.type === 'checkbox' && !field.multiple"
    :label="field.label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :error="!!error"
    :error-messages="error ? [error] : []"
    density="comfortable"
  />

  <!-- Select -->
  <v-select
    v-else-if="field.type === 'select'"
    :label="field.label"
    :items="(options || []).map((o) => ({ title: o.label, value: o.value }))"
    item-title="title"
    item-value="value"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :error="!!error"
    :error-messages="error ? [error] : []"
    density="comfortable"
    clearable
  />

  <!-- Date -->
  <v-text-field
    v-else-if="field.type === 'date'"
    :label="field.label"
    type="date"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :error="!!error"
    :error-messages="error ? [error] : []"
    density="comfortable"
  />

  <!-- Number -->
  <v-text-field
    v-else-if="field.type === 'number'"
    :label="field.label"
    type="number"
    :step="field.step ?? 1"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :error="!!error"
    :error-messages="error ? [error] : []"
    density="comfortable"
  />

  <!-- Text (par défaut) -->
  <v-text-field
    v-else
    :label="field.label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :error="!!error"
    :error-messages="error ? [error] : []"
    density="comfortable"
    clearable
  />
</template>

<script setup lang="ts">
import type { FieldSchema, OptionItem } from '@/models/questionnaire/QuestionnaireClient';

defineProps<{
  field: FieldSchema;
  modelValue: any;
  options?: OptionItem[];
  error?: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();
</script>
