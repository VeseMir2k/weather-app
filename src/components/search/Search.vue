<template>
  <v-card class="mx-auto vcard">
    <v-card-text>
      <div class="input-search-container">
        <input
          class="input-search-container__input"
          placeholder="Wpisz nazwę miasta"
          style="background-color: transparent; border: none"
          type="text"
        />
        <span class="input-search-container__button">
          <v-icon icon="mdi-magnify" size="large"></v-icon>
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useWeatherStore } from "@/stores/app";

// ~ stores
const weatherStore = useWeatherStore();

// ~ refs
const searchInputRef = ref(null);
const searchInputValue = ref("");
const city = ref("");

// ~ props
const props = defineProps({
  getWeather: {
    type: Function,
    required: true,
  },
});

// ~ handle search
const handleSearch = () => {
  props.getWeather();
  searchInputRef.value.blur();
};

// ~ handle eventListener
const handleEnter = (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
};

// ~ initAutocomplete
const initAutocomplete = () => {
  const inputElement = document.querySelector(".search-input"); // Znajdź wewnętrzny input generowany przez Vuetify
  if (!inputElement) {
    console.error("Nie znaleziono elementu input");
    return;
  }

  const autocomplete = new google.maps.places.Autocomplete(inputElement, {
    types: ["(cities)"], // Ograniczamy wyniki do miast
  });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      weatherStore.placeData = place;
      city.value = place.formatted_address; // Pobierz pełny adres
      searchInputValue.value = city.value; // Ustaw wybraną nazwę miasta w polu tekstowym
    } else {
      alert("Nie wybrano poprawnego miejsca.");
    }
  });
};

// Inicjalizacja Google Places Autocomplete
onMounted(() => {
  initAutocomplete();
  document.addEventListener("keydown", handleEnter);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEnter);
});
</script>

<style scoped lang="scss">
.vcard {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.input-search-container {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;
  &__input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: inherit;
  }
  &__button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
