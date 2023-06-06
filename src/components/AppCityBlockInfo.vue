<template>
  <div>
    <h2 class="text-4xl font-semibold text-indigo-500 mb-2">
      {{ data.location.name }}
    </h2>
    <h3 class="text-xl font-light mb-4">{{ data.location.country }}</h3>
    <ul class="flex gap-4">
      <li class="flex gap-2">
        <app-icon :iconName="setIconForCloud" class="w-6 h-6"></app-icon>
      </li>
      <li class="flex gap-2">
        <app-icon iconName="celsius" class="w-6 h-6"></app-icon>:
        {{ data.current.temp_c }}
      </li>
      <li class="flex gap-2">
        <app-icon iconName="wind" class="w-6 h-6"></app-icon>:
        {{ data.current.wind_kph }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import AppIcon from "./AppIcon.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const setIconForCloud = computed(() => {
  if (props.data.current.cloud <= 20) return "sun";
  else return "cloud";
});
</script>
