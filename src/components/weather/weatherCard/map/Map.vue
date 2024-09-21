<template>
  <v-row>
    <v-col>
      <div id="map" style="width: 100%; height: 200px"></div>
    </v-col>
  </v-row>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import { useGoogleMaps } from "@/use/useGoogleMap";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;

// ~ coord
const coordLat = weatherData.coord.lat;
const coordLng = weatherData.coord.lon;

// ~ optionMap
const optionsMap = {
  center: { lat: coordLat, lng: coordLng },
  zoom: 12,
};

const optionsMarker = {
  position: { lat: coordLat, lng: coordLng },
  title: "Znacznik",
};

// ~ useGoogleMap
useGoogleMaps("map", optionsMap, optionsMarker);
</script>

<style lang="scss">
#map {
  border-radius: 16px;
  overflow: hidden;
}
</style>
