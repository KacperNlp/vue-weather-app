<template>
  <app-layout>
    <template #main>
      <app-form></app-form>
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
</script>
