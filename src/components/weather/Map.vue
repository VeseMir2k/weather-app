<template>
  <div class="map-container">
    <GoogleMap
      class="map-container__map"
      :api-key="apiMap"
      :center="city"
      :zoom="10"
      :styles="customsMap"
      :disable-default-ui="true"
      :draggable="false"
      :scrollwheel="false"
      :disable-double-click-zoom="true"
      :gesture-handling="none"
    >
      <Marker :options="{ position: city }" />
    </GoogleMap>
  </div>
</template>

<script setup>
// ~ imports
import { GoogleMap, Marker } from "vue3-google-map";
import { useWeatherStore } from "@/stores/app";

// ~ store
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;

// ~ api google map
const apiMap = import.meta.env.VITE_API_URL_MAPA_GOOGLE;

// ~ coord
const coordLat = weatherData.coord.lat;
const coordLng = weatherData.coord.lon;

// ~ mark
const city = {
  lat: coordLat,
  lng: coordLng,
};

// ~ customs map
const customsMap = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];
</script>

<style lang="scss">
.map-container {
  width: 100%;
  height: 175px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 25px;
    background-color: white;
  }
  &__map {
    width: 100%;
    height: 100%;
  }
}
</style>
