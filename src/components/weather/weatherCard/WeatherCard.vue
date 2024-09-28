<template>
  <v-card class="vcard text-white">
    <v-container>
      <Header />
      <Map />
      <Main />
      <WeatherForecast />
    </v-container>
  </v-card>
</template>

<script setup>
// ~ imports
import Header from "./header/Header.vue";
import Map from "./map/Map.vue";
import Main from "./main/Main.vue";
import WeatherForecast from "./weatherForecast/WeatherForecast.vue";
import { onMounted } from "vue";
import { useWeatherStore } from "@/stores/app";

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
    }
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  } finally {
    weatherStore.placeData = null;
  }
};

onMounted(async () => {
  await getWeatherForecast();
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
