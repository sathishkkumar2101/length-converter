const apikey = "a2983c90a99240268a21704936bc4e2b";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector("input");
const button = document.querySelector("button");
var weathers = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".humi").innerHTML = data.main.humidity + "%";
  document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clear") {
    weathers.src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weathers.src = "images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathers.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathers.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weathers.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weathers.src = "images/snow.png";
  }
  document.querySelector("#sun").style.display = "block";
}

button.addEventListener("click", function () {
  checkWeather(searchbox.value);
});