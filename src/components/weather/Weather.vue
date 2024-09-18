<template>
  <LoaderCard v-if="loading" />
  <ErrorCard :error="error" v-if="error" />
  <WeatherCard v-if="weatherData && !loading" />
</template>

<script setup>
// ~ imports
import WeatherCard from "./weatherCard/WeatherCard.vue";
import LoaderCard from "./loaderCard/LoaderCard.vue";
import ErrorCard from "./errorCard/ErrorCard.vue";

// ~ props
const props = defineProps({
  weatherData: {
    type: Object,
  },
  loading: {
    type: Boolean,
  },
  error: {
    type: String,
  },
});
</script>
