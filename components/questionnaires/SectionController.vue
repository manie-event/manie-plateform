<template>
  <v-switch
    :label="field.label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', !!$event)"
    density="comfortable"
    :error="!!error"
    :error-messages="error ? [error] : []"
    :disabled="disabled"
  />
  <div v-if="disabled" class="text-caption text-warning mt-1">
    Cette section est n'est pas modifiable
  </div>
</template>

<script setup lang="ts">
import type { FieldSchema } from '~/models/questionnaire/QuestionnaireClientModel';
defineProps<{
  section: any;
  field: FieldSchema;
  modelValue: boolean;
  error?: string;
  disabled?: boolean;
}>();
defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>
