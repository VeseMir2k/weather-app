// ~ imports
import { ref, onMounted, onUnmounted } from "vue";
import { loader } from "./useLoader";

// ~ useGoogleMaps
export const useGoogleMaps = (
  mapContainerId,
  optionsMap = {},
  optionsMarker
) => {
  // ~ refs
  const map = ref(null);
  const marker = ref(null);

  // ~ initMap
  const initMap = () => {
    loader
      .load()
      .then(() => {
        const mapElement = document.getElementById(mapContainerId);
        if (!mapElement) {
          console.error("Brak elementu DOM z id:", mapContainerId);
          return;
        }

        map.value = new google.maps.Map(mapElement, {
          center: optionsMap.center || { lat: 0, lng: 0 },
          zoom: optionsMap.zoom || 8,
          ...optionsMap,
        });

        const marker = new google.maps.Marker({
          position: optionsMarker.position || { lat: 0, lng: 0 }, // Ustawienie pozycji znacznika
          map: map.value, // Przypisanie mapy do znacznika
          title: optionsMarker.title || "Znacznik", // Tytuł dla znacznika
        });
      })
      .catch((error) => {
        console.error("Błąd podczas ładowania Google Maps API:", error);
      });
  };

  // ~ onMounted
  onMounted(() => {
    initMap();
  });

  // ~ onUnmounted
  onUnmounted(() => {
    map.value = null;
    marker.value = null;
  });

  return { map };
};
