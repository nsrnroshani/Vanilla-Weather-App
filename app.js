function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  console.log(temperatureElement);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  console.log(response.data.name);
  let cityElement = document.querySelector("#city");
  console.log(cityElement);
  cityElement.innerHTML = response.data.name;

  console.log(response.data.weather[0].description);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  console.log(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  console.log(response.data.wind.speed);

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "f3009e4852fa0a079dab291dabf020c4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
