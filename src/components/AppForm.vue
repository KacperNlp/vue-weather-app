<template>
  <app-card class="max-w-xl mx-auto">
    <form class="flex flex-col items-center" @submit.prevent="updateResult">
      <app-input
        v-model="city"
        input-id="city"
        input-label="Type city:"
        class="w-full"
      ></app-input>
      <app-button>Submit</app-button>
    </form>
  </app-card>
</template>

<script setup>
import { ref } from "vue";
import AppButton from "./AppButton.vue";
import AppCard from "./AppCard.vue";
import AppInput from "./AppInput.vue";

//store
import { useAppStore } from "../store/app-store.js";

const store = useAppStore();
const city = ref();
const updateResult = () => {
  store.updateCity(city.value);
  city.value = "";
};
</script>
