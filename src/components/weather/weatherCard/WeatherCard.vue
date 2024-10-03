<template>
  <v-card class="vcard text-white">
    <v-container>
      <Header />
      <Map />
      <Main />
      <LoaderCard v-if="loadingForecast" />
      <ErrorCard :error="errorForecast" v-if="errorForecast" />
      <WeatherForecast
        v-if="
          weatherForecastData &&
          !loadingForecast &&
          !errorForecast &&
          weatherStore.dates
        "
      />
    </v-container>
  </v-card>
</template>

<script setup>
// ~ imports
import Header from "./header/Header.vue";
import Map from "./map/Map.vue";
import Main from "./main/Main.vue";
import WeatherForecast from "./weatherForecast/WeatherForecast.vue";
import { useWeatherStore } from "@/stores/app";
import { computed } from "vue";
import { timestampToDate } from "@/use/useDate";

// ~ stores
const weatherStore = useWeatherStore();

// ~ getWeatherForecast
const getWeatherForecast = async () => {
  const placeData = weatherStore.placeData?.geometry?.location;

  try {
    if (placeData) {
      const lat = placeData.lat();
      const lng = placeData.lng();
      await weatherStore.fetchWeatherForecast({ lat, lng }, null);
    } else {
      await weatherStore.fetchWeatherForecast(null, weatherStore.inputValue);
    }
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  } finally {
    weatherStore.placeData = null;
  }
};

// ~ computed
const weatherForecastData = computed(() => weatherStore.weatherForecastData);
const loadingForecast = computed(() => weatherStore.loadingForecast);
const errorForecast = computed(() => weatherStore.errorForecast);

// ~ getDates
const getDates = () => {
  const { list } = weatherStore.weatherForecastData;
  const dates = [];
  list.forEach((item) => {
    if (
      dates.length === 0 ||
      timestampToDate(item.dt) !== dates[dates.length - 1]
    ) {
      dates.push(timestampToDate(item.dt));
    }
  });

  weatherStore.dates = dates;
};

onMounted(async () => {
  await getWeatherForecast();
  getDates();
  console.log("weatherCard");
});
</script>

<style scoped lang="scss">
.vcard {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
