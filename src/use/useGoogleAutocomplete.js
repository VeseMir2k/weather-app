// ~ imports
import { ref, onMounted, onUnmounted } from "vue";
import { loader } from "./useLoader";

// ~ useGoogleAutocomplete
export function useGoogleAutocomplete(weatherStore, inputId, options = {}) {
  // ~ refs
  const autocomplete = ref(null);
  const place = ref(null);

  // ~ initAutocomplete
  const initAutocomplete = () => {
    loader
      .load()
      .then(() => {
        const inputElement = document.getElementById(inputId);
        if (!inputElement) {
          console.error("Brak elementu DOM z id:", inputId);
          return;
        }

        autocomplete.value = new google.maps.places.Autocomplete(inputElement, {
          types: options.types || ["geocode"],
          ...options,
        });

        autocomplete.value.addListener("place_changed", () => {
          place.value = autocomplete.value.getPlace();
          weatherStore.placeData = place.value;
        });
      })
      .catch((error) => {
        console.error("Błąd podczas ładowania Google Maps API:", error);
      });
  };

  // ~ onMounted
  onMounted(() => {
    initAutocomplete();
  });

  // ~ onUnmounted
  onUnmounted(() => {
    autocomplete.value = null;
  });

  return { autocomplete, place };
}
