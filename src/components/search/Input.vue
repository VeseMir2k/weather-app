<template>
  <div class="search-input">
    <input
      id="autocomplete"
      class="search-input__input"
      type="text"
      v-model="inputValue"
      @keydown.enter.prevent="getWeather"
      ref="inputRef"
    />
    <span
      @click="getWeather"
      class="search-input__button"
      aria-label="Search weather"
    >
      <v-icon icon="mdi-magnify" size="x-large"></v-icon>
    </span>
  </div>
</template>

<script setup>
// ~ imports
import { ref } from "vue";
import { useWeatherStore } from "@/stores/app";

// ~ store
const weatherStore = useWeatherStore();

// ~ refs
const inputValue = ref("");
const inputRef = ref(null);

// ~ getWeather
const getWeather = async () => {
  if (!inputValue.value.trim()) {
    console.log("Please enter a valid city name.");
    return;
  }

  try {
    if (weatherStore.placeData?.geometry) {
      await weatherStore.fetchWeatherCoord(
        weatherStore.placeData.geometry.location.lat(),
        weatherStore.placeData.geometry.location.lng()
      );
    } else {
      await weatherStore.fetchWeatherCity(inputValue.value);
    }

    inputRef.value.blur();
    inputValue.value = "";
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
};
</script>

<style scoped lang="scss">
.search-input {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;

  &__input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: inherit;

    &:focus {
      outline: 2px solid rgba(255, 255, 255, 0.6);
    }
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 5px;
    cursor: pointer;
  }
}
</style>
