<template>
  <app-card class="max-w-xl mx-auto">
    <form>
      <div class="flex flex-col gap-2 mb-6">
        <label for="city">Type place:</label>
        <input type="text" id="city" />
      </div>
      <app-button>Submit</app-button>
    </form>
  </app-card>
</template>

<script setup>
import AppButton from "./AppButton.vue";
import AppCard from "./AppCard.vue";
</script>
