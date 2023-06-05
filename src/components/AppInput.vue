<template>
  <div class="flex flex-col gap-2 mb-6">
    <label :for="inputId" class="text-gray-300 text-sm">{{ inputLabel }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="inputId"
      type="text"
      class="border border-gray-400 bg-gray-700 focus:bg-gray-900 p-2 text-sm rounded-none outline-slate-500 duration-300"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  inputLabel: {
    type: String,
    required: false,
  },
  inputId: {
    type: String,
    required: true,
  },
  modelValue: String,
});

defineEmits(["update:modelValue"]);

const updateInputValue = (value) => {};
</script>
