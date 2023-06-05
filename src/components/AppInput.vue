<template>
  <div class="flex flex-col gap-2 mb-6">
    <label :for="inputId" class="text-gray-300 text-sm">{{ inputLabel }}</label>
    <input
      type="text"
      :id="inputId"
      class="border border-gray-400 bg-gray-700 focus:bg-gray-900 p-2 text-sm rounded-none outline-slate-500 duration-300"
    />
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
