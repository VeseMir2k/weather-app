<template>
  <v-container width="900px">
    <v-row justify="center">
      <v-col> <h1 class="text-center">WEATHER APP</h1> </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <Search />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <Weather
          :weatherData="weatherData"
          :loading="loading"
          :error="error" /></v-col
    ></v-row>
  </v-container>
</template>

<script setup>
// ~ imports
import { computed } from "vue";
import { useWeatherStore } from "@/stores/app";
import { useGoogleAutocomplete } from "./use/useGoogleAutocomplete";
import Search from "./components/search/Search.vue";
import Weather from "./components/weather/Weather.vue";

// ~ stores
const weatherStore = useWeatherStore();

// ~ useGoogleAutocomplete
useGoogleAutocomplete(weatherStore, "autocomplete", {
  types: ["locality"],
});

// ~ computed
const weatherData = computed(() => weatherStore.weatherData);
const loading = computed(() => weatherStore.loading);
const error = computed(() => weatherStore.error);
</script>
