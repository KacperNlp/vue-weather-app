<template>
  <component :is="icon" class="fill-current" />
</template>

<script setup>
import { defineProps } from "vue";
import { defineAsyncComponent } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
});

const icon = defineAsyncComponent(() => import(`../svg/${props.iconName}.svg`));
</script>
