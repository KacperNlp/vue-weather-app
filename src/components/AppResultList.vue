<template>
  <div class="my-12 grid gap-4 xl:grid-cols-2">
    <app-card v-if="store.isCitySet">
      <app-city-block-info :data="store.getCity"></app-city-block-info>
    </app-card>
    <p v-else-if="store.isNotFound">This City doesn't exist!</p>
    <p v-else>Sorry you have to type city!</p>
  </div>
</template>

<script setup>
import AppCard from "./AppCard.vue";
import AppCityBlockInfo from "./AppCityBlockInfo.vue";

//store
import { useAppStore } from "../store/app-store.js";

const store = useAppStore();
</script>
