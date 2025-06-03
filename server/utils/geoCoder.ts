const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  apiKey: 'AIzaSyBJRoNBCFnUeo3kOOIwFLwBrW6GEXx6T-w',
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;
