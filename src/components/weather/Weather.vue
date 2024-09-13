<template>
  <div class="weather">
    <Loader v-if="loading" />
    <Error :error="error" v-if="error" />
    <Map v-if="weatherData && !loading" />
    <WeatherInfo v-if="weatherData && !loading" />
    <Error :forecastError="forecastError" v-if="forecastError" />
    <ForecastWeather v-if="forecastWeatherData && !forecastLoading" />
  </div>
</template>

<script setup>
// ~ imports
import Loader from "./Loader.vue";
import Error from "./Error.vue";
import Map from "./Map.vue";
import WeatherInfo from "./weatherInfo/WeatherInfo.vue";
import ForecastWeather from "./forecastWeather/ForecastWeather.vue";

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
  forecastWeatherData: {
    type: Object,
  },
  forecastLoading: {
    type: Boolean,
  },
  forecastError: {
    type: String,
  },
});

const showData = () => {
  console.log(props.forecastWeatherData.list[2]);
};
</script>
