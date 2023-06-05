<template>
  <app-card class="max-w-xl mx-auto">
    <form>
      <app-input input-id="city" input-label="Type city:"></app-input>
      <app-button>Submit</app-button>
    </form>
  </app-card>
</template>

<script setup>
import AppButton from "./AppButton.vue";
import AppCard from "./AppCard.vue";
import AppInput from "./AppInput.vue";
</script>
