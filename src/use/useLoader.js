// ~ imports
import { Loader } from "@googlemaps/js-api-loader";

// ~ loader
export const loader = new Loader({
  apiKey: import.meta.env.VITE_API_URL_MAPA_GOOGLE,
  version: "weekly",
  libraries: ["places"],
});
