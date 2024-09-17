<template>
  <v-card class="vcard text-white">
    <v-container>
      <Loader v-if="loading" />
      <Error :error="error" v-if="error" />
      <Map v-if="weatherData && !loading" />
      <WeatherInfo v-if="weatherData && !loading" />
      <Error :forecastError="forecastError" v-if="forecastError" />
    </v-container>
  </v-card>
</template>

<script setup>
// ~ imports
import Loader from "./Loader.vue";
import Error from "./Error.vue";
import Map from "./Map.vue";
import WeatherInfo from "./weatherInfo/WeatherInfo.vue";

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

<style scoped lang="scss">
.vcard {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
