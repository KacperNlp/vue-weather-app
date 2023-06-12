<template>
  <div>
    <h2
      class="flex items-center gap-4 text-4xl font-semibold text-indigo-500 mb-2"
    >
      {{ data.location.name }}
      <app-icon
        :iconName="setIconForCloud"
        class="w-8 h-8 fill-gray-100"
      ></app-icon>
    </h2>
    <h3 class="text-xl font-light mb-4">{{ data.location.country }}</h3>
    <ul class="flex gap-12">
      <li class="flex gap-2">
        <app-icon iconName="celsius" class="w-6 h-6"></app-icon>
        {{ data.current.temp_c }}
      </li>
      <li class="flex gap-2">
        <app-icon iconName="wind" class="w-6 h-6"></app-icon>
        {{ data.current.wind_kph }} km/h
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
