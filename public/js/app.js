// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("http://localhost:3000/weather?address=boston,%20usa").then(
//   (response) => {
//     response.json().then((data) => {
//       if (data.error) {
//         console.log("Unable to find weather");
//       } else {
//         console.log(data);
//       }
//     });
//   }
// );

const weatherForm = document.querySelector("form");

const search = document.querySelector("input");

const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const weatherImg = document.querySelector("#weather-img");

// messageOne.textContent = "Form javascript";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  const url =
    "http://localhost:3000/weather?address=" + decodeURIComponent(location);

  messageTwo.textContent = "";
  messageOne.textContent = "Loading...";
  weatherImg.setAttribute("src", "");
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        weatherImg.setAttribute("src", data.weather_icons);
      }
    });
  });
});
