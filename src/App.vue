<template>
  <app-layout>
    <template #main>
      <app-form></app-form>
      <app-result-list></app-result-list>
    </template>
    <template #footer>
      <p>Weather App</p>
    </template>
  </app-layout>
</template>

<script setup>
//layout
import AppLayout from "./layout/AppLayout.vue";

//components
import AppForm from "./components/AppForm.vue";
import AppResultList from "./components/AppResultList.vue";
</script>
