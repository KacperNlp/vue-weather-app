<template>
  <div class="flex flex-col gap-2 mb-6">
    <label :for="inputId" class="text-gray-300 text-sm">{{ inputLabel }}</label>
    <input type="text" :id="inputId" class="" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  inputLabel: {
    type: String,
    required: false,
  },
  inputId: {
    type: String,
    required: true,
  },
});
</script>
