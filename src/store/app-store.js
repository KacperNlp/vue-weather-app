import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import axios from "axios";
import API_KEY from "../data/apiKey";

export const useAppStore = defineStore("appStore", () => {
  const cities = reactive([]);

  const getCities = computed(() => cities);

  const updateCity = (value) => {
    axios(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${value}`
    ).then((response) => {
      console.log(response);
    });
  };

  return { cities, getCities, updateCity };
});
