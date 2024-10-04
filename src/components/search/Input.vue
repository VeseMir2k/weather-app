<template>
  <div class="search-input">
    <input
      id="autocomplete"
      class="search-input__input"
      type="text"
      v-model="searchInputValue"
      @keydown.enter.prevent="getCurrentWeather"
      ref="searchInputRef"
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
const searchInputValue = ref("");
const searchInputRef = ref(null);

// ~ getWeather
const getCurrentWeather = async () => {
  weatherStore.searchInputValue = searchInputValue.value;
  try {
    const autocompletePlaceData =
      weatherStore.autocompletePlaceData?.geometry?.location;

    if (autocompletePlaceData) {
      const lat = autocompletePlaceData.lat();
      const lng = autocompletePlaceData.lng();
      await weatherStore.fetchCurrentWeather({ lat, lng }, null);
    } else {
      await weatherStore.fetchCurrentWeather(null, searchInputValue.value);
    }

    searchInputRef.value.blur();
    searchInputValue.value = "";
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
