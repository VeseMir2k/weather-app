export const initAutocomplete = (inputClass, weatherStore) => {
  const inputElement = document.querySelector(`.${inputClass}`);
  if (!inputElement) {
    console.error("Nie znaleziono elementu input");
    return;
  }

  const autocomplete = new google.maps.places.Autocomplete(inputElement, {
    types: ["(cities)"],
  });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      weatherStore.placeData = place;
    } else {
      alert("Nie wybrano poprawnego miejsca.");
    }
  });
};
