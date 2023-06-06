<template>
  <div>
    <h2 class="text-4xl font-semibold text-indigo-500 mb-2">
      {{ data.location.name }}
    </h2>
    <h3 class="text-xl font-light mb-4">{{ data.location.country }}</h3>
    <ul class="flex gap-4">
      <li>Cloud: {{ data.current.cloud }}</li>
      <li>Temp: {{ data.current.temp_c }}</li>
      <li>Wind: {{ data.current.wind_kph }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  data: {
    type: Object,
  },
});
</script>
