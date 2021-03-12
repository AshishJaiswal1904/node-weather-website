const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoidml2ZWtwYXdhciIsImEiOiJja2xvbjNkNjUwdW40MnFuMWttdnNrenR0In0.XxFiJfWJbyrLPoFauCYfWw";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to get geocordinates, please try again!", undefined);
    } else if (body.features.length == 0) {
      callback.call("Unable to find location, please try again!", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
