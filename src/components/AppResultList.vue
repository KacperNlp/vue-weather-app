<template>
  <ul class="my-12 grid gap-4 xl:grid-cols-2">
    <li v-for="result in store.getCities" :key="result.id">
      <app-card>
        <h3>{{ result.city }}</h3>
        <p>{{ result.temp }} C</p>
      </app-card>
    </li>
  </ul>
</template>

<script setup>
import AppCard from "./AppCard.vue";

//store
import { useAppStore } from "../store/app-store.js";

const store = useAppStore();
</script>
