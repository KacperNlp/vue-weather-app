<template>
  <ul class="my-12 grid gap-4 xl:grid-cols-2">
    <li v-for="result in weatherAPI" :key="result.id">
      <app-card>
        <h3>{{ result.city }}</h3>
        <p>{{ result.temp }} C</p>
      </app-card>
    </li>
  </ul>
</template>

<script setup>
import { reactive } from "vue";
import AppCard from "./AppCard.vue";

const weatherAPI = reactive([
  {
    city: "Warsaw",
    temp: 15,
    id: 1,
  },
  {
    city: "Warsaw",
    temp: 15,
    id: 2,
  },
  {
    city: "Warsaw",
    temp: 15,
    id: 3,
  },
  {
    city: "Warsaw",
    temp: 15,
    id: 4,
  },
  {
    city: "Warsaw",
    temp: 15,
    id: 5,
  },
]);
</script>
