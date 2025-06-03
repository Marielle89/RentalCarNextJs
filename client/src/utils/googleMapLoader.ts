import { Libraries, Loader } from "@googlemaps/js-api-loader";

const libraries: Libraries = ["places", "maps"];

const loadGoogleMapsApi = () => {
  const loader = new Loader({
    apiKey: 'AIzaSyBJRoNBCFnUeo3kOOIwFLwBrW6GEXx6T-w',
    libraries,
  });

  return loader.load();
};

export default loadGoogleMapsApi;
