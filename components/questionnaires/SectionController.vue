<template>
  <v-switch
    :label="field.label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', !!$event)"
    density="comfortable"
    :error="!!error"
    :error-messages="error ? [error] : []"
  />
</template>

<script setup lang="ts">
import type { FieldSchema } from '~/models/questionnaire/QuestionnaireClientModel';
defineProps<{
  section: any;
  field: FieldSchema;
  modelValue: boolean;
  error?: string;
}>();
defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>
