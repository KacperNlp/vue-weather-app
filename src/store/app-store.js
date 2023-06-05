import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useAppStore = defineStore("appStore", () => {
  const cities = reactive([]);

  const getCities = computed(() => cities);

  return { cities, getCities };
});
