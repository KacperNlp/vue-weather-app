<template>
  <div>
    <h2>{{ data.location.name }}</h2>
    <h3>{{ data.location.country }}</h3>
    <ul>
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
