const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ebc85317e52055cf5126ed078bd18dc9&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect weather service", undefined);
    } else if (body.error) {
      callback("Unable to find weather!", undefined);
    } else {
      callback(undefined, {
        forecast:
          body.current.weather_descriptions[0] +
          "! It is " +
          body.current.temperature +
          " degree outside,but its feels like " +
          body.current.feelslike +
          ".",
        weather_icons: body.current.weather_icons[0],
      });
    }
  });
};

module.exports = forecast;
