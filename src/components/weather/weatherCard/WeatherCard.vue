<template>
  <v-card class="vcard text-white">
    <v-container>
      <Header />
      <Map />
      <Main />
      <LoaderCard v-if="isLoadingForecastWeather" />
      <ErrorCard :error="forecastWeatherError" v-if="forecastWeatherError" />
      <WeatherForecast
        v-if="
          forecastWeatherData &&
          !isLoadingForecastWeather &&
          !forecastWeatherError &&
          weatherStore.forecastWeatherDates
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
  const autocompletePlaceData =
    weatherStore.autocompletePlaceData?.geometry?.location;

  try {
    if (autocompletePlaceData) {
      const lat = autocompletePlaceData.lat();
      const lng = autocompletePlaceData.lng();
      await weatherStore.fetchForecastWeather({ lat, lng }, null);
    } else {
      await weatherStore.fetchForecastWeather(
        null,
        weatherStore.searchInputValue
      );
    }

    console.log(weatherStore.forecastWeatherData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  } finally {
    weatherStore.autocompletePlaceData = null;
  }
};

// ~ computed
const forecastWeatherData = computed(() => weatherStore.forecastWeatherData);
const isLoadingForecastWeather = computed(
  () => weatherStore.isLoadingForecastWeather
);
const forecastWeatherError = computed(() => weatherStore.forecastWeatherError);

// ~ getDates
const getDates = () => {
  const { list } = weatherStore.forecastWeatherData;
  const forecastWeatherDates = [];
  list.forEach((item) => {
    if (
      forecastWeatherDates.length === 0 ||
      timestampToDate(item.dt) !==
        forecastWeatherDates[forecastWeatherDates.length - 1]
    ) {
      forecastWeatherDates.push(timestampToDate(item.dt));
    }
  });

  weatherStore.forecastWeatherDates = forecastWeatherDates;
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
