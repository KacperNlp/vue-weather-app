import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import axios from "axios";
import API_KEY from "../data/apiKey";

export const useAppStore = defineStore("appStore", () => {
  const isNotFound = ref(false);
  const city = reactive({});

  const getCity = computed(() => city);
  const isCitySet = computed(() => {
    console.log(city);
    return Object.keys(city).length && city !== null;
  });

  const updateCity = async (value) => {
    try {
      let data = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${value}`
      );

      isNotFound.value = false;
      Object.assign(city, data.data);
    } catch (err) {
      isNotFound.value = true;
      Object.assign(city, {});
      console.log("Error with API! May you pass wrong param!");
    }
  };

  return { city, isNotFound, getCity, isCitySet, updateCity };
});
