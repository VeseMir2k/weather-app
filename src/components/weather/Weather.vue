<template>
  <LoaderCard v-if="isLoadingCurrentWeather" />
  <ErrorCard :error="currentWeatherError" v-if="currentWeatherError" />
  <WeatherCard
    v-if="
      currentWeatherData && !isLoadingCurrentWeather && !currentWeatherError
    "
  />
</template>

<script setup>
// ~ imports
import WeatherCard from "./weatherCard/WeatherCard.vue";
import LoaderCard from "./loaderCard/LoaderCard.vue";
import ErrorCard from "./errorCard/ErrorCard.vue";

// ~ props
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
  isLoadingCurrentWeather: {
    type: Boolean,
  },
  currentWeatherError: {
    type: String,
  },
});
</script>
