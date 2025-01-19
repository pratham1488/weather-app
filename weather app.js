<!DOCTYPE html>
<html lang="en" dir="ltr">
  <style>
    /* Import Google Font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  --primary-color: #495af7;
  --secondary-color: #fff;
  --text-color: #fff;
  --input-color: #000;
  --light-grey: #f5f5f5;
  --pending-color: #b7e4ec;
  --pending-text-color: #0c6047;
  --error-color: #ffc1c5;
  --error-text-color: #631920;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--primary-color);
  color: var(--text-color);
}

::selection {
  color: #fff;
  background: var(--primary-color);
}

.wrapper {
  width: 90%;
  background: #fff;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 30px;
}

.wrapper header {
  display: flex;
  font-size: 21px;
  font-weight: 500;
  color: var(--text-color);
  padding: 16px 15px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

header i {
  font-size: 0em;
  cursor: pointer;
  margin-right: 8px;
}

.wrapper.active header i {
  margin-left: 5px;
  font-size: 30px;
}

.wrapper .input-part {
  margin: 20px 25px 30px;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper.active .input-part {
  display: none;
}

.input-part .info-txt {
  display: none;
  font-size: 17px;
  text-align: center;
  padding: 12px 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.input-part .info-txt.error {
  color: var(--error-text-color);
  display: block;
  background: var(--error-color);
  border: 1px solid #f5c6cb;
}

.input-part .info-txt.pending {
  color: var(--pending-text-color);
  display: block;
  background: var(--pending-color);
  border: 1px solid #bee5eb;
}

.input-part :where(input, button) {
  width: 100%;
  height: 55px;
  border: none;
  outline: none;
  font-size: 18px;
  border-radius: 7px;
}

.input-part input {
  text-align: center;
  padding: 0 15px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.input-part input:is(:focus, :valid) {
  border: 2px solid var(--primary-color);
}

.input-part input::placeholder {
  color: rgb(24, 24, 24) !important;
}

.input-part .separator {
  height: 1px;
  width: 100%;
  margin: 25px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.separator::before {
  content: "or";
  color: var(--light-grey);
  font-size: 19px;
  padding: 0 15px;
  border-radius: 20px;
}

.input-part button {
  color: var(--text-color);
  cursor: pointer;
  background: var(--primary-color);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: 0.3s ease;
}

.input-part button:hover {
  transform: scale(1.03);
}

.wrapper .weather-part {
  display: none;
  margin: 30px 0 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.wrapper.active .weather-part {
  display: flex;
}

.weather-part img {
  max-width: 125px;
}

.weather-part .temp {
  display: flex;
  font-weight: 500;
  font-size: 72px;
}

.weather-part .temp .numb {
  font-weight: 600;
}

.weather-part .temp .deg {
  font-size: 40px;
  display: block;
  margin: 10px 5px 0 0;
}

.weather-part .weather {
  font-size: 21px;
  text-align: center;
  margin: -5px 20px 15px;
}

.weather-part .location {
  display: flex;
  font-size: 19px;
  padding: 0 20px;
  text-align: center;
  margin-bottom: 30px;
  align-items: flex-start;
}

.location i {
  font-size: 22px;
  margin: 4px 5px 0 0;
}

.weather-part .bottom-details {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.bottom-details .column {
  display: flex;
  width: 100%;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
}

.column i {
  color: var(--secondary-color);
  font-size: 40px;
}

.column.humidity {
  border-left: 1px solid #ccc;
}

.column.wind {
  border-left: 1px solid #ccc;
}

.column.date-time {
  border-left: 1px solid #ccc;
}

.column .details {
  margin-left: 3px;
}

.details .temp,
.humidity span {
  font-size: 18px;
  font-weight: 500;
  margin-top: -3px;
}

.details .temp .deg {
  margin: 0;
  font-size: 17px;
  padding: 0 2px 0 1px;
}

.column .details p {
  font-size: 14px;
  margin-top: -6px;
}

.humidity i {
  font-size: 37px;
}

/* COLOR PALETTE */
.color-palette {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 30px;
  padding: 8px;
  text-align: center;
}

.color-palette .theme-color {
  background-color: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.color-palette .theme-color:not(:last-child) {
  margin-bottom: 10px;
}

/* DARK MODE */
.dark-mode {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 50%;
  padding: 8px 13px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.dark-mode span {
  font-size: 20px;
  cursor: pointer;
}

/* COPYRIGHT */

.copyright {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--main-padding);
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 20px;
  text-align: center;
}

.copyright p a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}

/* Media Queries */
@media only screen and (max-width: 436px) {
  .wrapper {
    max-width: 90%;
    min-width: 90%;
  }

  .color-palette {
    max-width: 90%;
    min-width: 90%;
  }

  .color-palette .theme-color {
    width: 22px;
    height: 22px;
  }
}

@media only screen and (max-width: 636px) {
  .color-palette {
    display: flex;
    flex-direction: row;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    padding: 0;
    margin: 0;
    width: 400px;
    margin-bottom: 16px;
  }

  .color-palette .theme-color {
    margin-top: 10px;
  }

  .color-palette .theme-color:not(:last-child) {
    margin-right: 10px;
  }
}

.forecast-details {
  display: flex;
  flex-wrap: wrap; /* Ensure items wrap to the next line when necessary */
  justify-content: space-around;
  padding: 10px; /* Adjust padding as needed */
}

.forecast-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.forecast-card .forecast-day {
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 10px;
}

.forecast-card img {
  max-width: 80px;
}

.forecast-card .forecast-temp {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.forecast-card .forecast-temp .max-temp,
.forecast-card .forecast-temp .min-temp {
  font-size: 18px;
  font-weight: 500;
  margin: 0 5px;
}

.forecast-card .forecast-desc {
  font-size: 16px;
  text-align: center;
}
  </style>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="css/style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Linking BoxIcon for Icon -->
  <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
  <!-- Favicon -->
  <link rel="icon" href="icons/favicon.svg" />
  <title>Weather Web App</title>
</head>
<body>
  <!-- Main content -->
  <div class="wrapper">
    <div class="container">
  </div>
    <header><i class="bx bx-left-arrow-alt"></i>Weather App</header>
    <section class="input-part">
      <p class="info-txt"></p>
      <div class="content">
        <input
          type="text"
          spellcheck="false"
          placeholder="Enter City Name"
          required
        />
        <div class="separator"></div>
        <button>Location auto-detect</button>
      </div>
    </section>
    <section class="weather-part">
      <img src="https://raw.githubusercontent.com/abdellatif-laghjaj/weather-web-app/d5ac4d58f68ce93647eb42396039805282d32f23/icons/clear.svg" alt="Weather Icon" />
      <div class="temp">
        <span class="numb">_</span>
        <span class="deg">°</span>C
      </div>
      <div class="weather">_ _</div>
      <div class="location">
        <i class="bx bx-map"></i>
        <span>_, _</span>
      </div>
      <div class="bottom-details">
        <div class="column feels">
          <i class="bx bxs-thermometer"></i>
          <div class="details">
            <div class="temp">
              <span class="numb-2">_</span>
              <span class="deg">°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div class="column humidity">
          <i class="bx bxs-droplet-half"></i>
          <div class="details">
            <span>_</span>
            <p>Humidity</p>
          </div>
        </div>
        <div class="column wind">
          <i class="bx bx-wind"></i>
          <div class="details">
            <span>_</span>
            <p>Wind Speed</p>
          </div>
        </div>
        <div class="column date-time">
          <i class="bx bx-time"></i>
          <div class="details">
            <span>_</span>
            <p>Date & Time</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <!-- Canvas for Weather Chart -->
  

    <!-- Forecast for Next 7 Days -->
    <section class="forecast" hidden>
      <section class="charts" id="chartSection">
        <canvas id="weatherChart"></canvas>
      </section>
      <div class="forecast-details"></div>
    </section>
  </div>
  <!-- Dark mode toggle -->
  <div class="dark-mode">
    <span class="dark-mode-btn">
      <i class="bx bx-moon"></i>
    </span>
  </div>
  <!-- Color picker -->
  <div class="color-palette">
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
  </div>
  <section class="copyright">
    <p>
      Made  by <a href="https://github.com/pratham1488/pratham1488" target="_blank">Pratham Mahajan</a>
    </p>
  </section>
  <!-- Scripts -->
  <script src="js/script.js"></script>
  <script>
    // Get references to DOM elements
    const detectBtn = document.querySelector('.input-part button');
    const backIcon = document.getElementById('backIcon');
    
    // Add click event listener to detectBtn
    detectBtn.addEventListener('click', () => {
      // Toggle visibility of forecastSection
      const forecastSection = document.querySelector('.forecast');
      forecastSection.removeAttribute('hidden');
      
      // Call function to update chart (if needed)
      updateChart(); // Replace with your chart update function
    });
    
    // Add click event listener to backIcon
    backIcon.addEventListener('click', () => {
      // Reload the page
      location.reload();
    });
  </script>
  
</body>
</html>
<script>
  const wrapper = document.querySelector(".wrapper"),
  inputPart = document.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"),
  weatherPart = wrapper.querySelector(".weather-part"),
  forecastSection = wrapper.querySelector(".forecast"),
  forecastDetails = forecastSection.querySelector(".forecast-details"),
  wIcon = weatherPart.querySelector("img"),
  arrowBack = wrapper.querySelector("header i");

let api;
let apiKey = "b190a0605344cc4f3af08d0dd473dd25";

const weatherChartCtx = document.getElementById("weatherChart").getContext("2d");
let weatherChart;

// Function to create or update weather chart
function createWeatherChart(labels, data) {
  if (weatherChart) {
    weatherChart.destroy();
  }

  weatherChart = new Chart(weatherChartCtx, {
    type: "line", // Change chart type as needed (line, bar, etc.)
    data: {
      labels: labels,
      datasets: [{
        label: "Temperature (°C)",
        data: data,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Event listeners
inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && inputField.value.trim() !== "") {
    requestApi(inputField.value.trim());
  }
});

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser does not support geolocation API.");
  }
});

// Function to request weather data
function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  fetchData();
}

// Function to handle geolocation success
function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  fetchData();
}

// Function to handle geolocation error
function onError(error) {
  infoTxt.innerText = error.message;
  infoTxt.classList.add("error");
  clearWeatherData();
}

// Function to fetch weather data from API
function fetchData() {
  infoTxt.innerText = "Fetching weather details...";
  infoTxt.classList.add("pending");

  fetch(api)
    .then((res) => res.json())
    .then((result) => {
      if (result.cod && result.cod === "404") {
        infoTxt.innerText = `${inputField.value} is not a valid city name`;
        infoTxt.classList.replace("pending", "error");
        clearWeatherData();
      } else {
        clearWeatherData(); // Clear previous weather and forecast data
        weatherDetails(result);
        fetchForecast(result.coord.lat, result.coord.lon); // Fetch 7-day forecast
        fetchHourlyForecast(result.coord.lat, result.coord.lon); // Fetch hourly forecast
      }
    })
    .catch(() => {
      infoTxt.innerText = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
      clearWeatherData();
    });
}



// Function to display weather details
function weatherDetails(info) {
  const { name: city, sys: { country }, weather: [{ description, id }], main: { temp, feels_like, humidity }, wind: { speed }, dt } = info;
  
  const weatherDate = new Date(dt * 1000).toLocaleString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  wIcon.src = getWeatherIcon(id);
  weatherPart.querySelector(".temp .numb").innerText = Math.round(temp);
  weatherPart.querySelector(".weather").innerText = description;
  weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
  weatherPart.querySelector(".temp .numb-2").innerText = Math.round(feels_like);
  weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
  weatherPart.querySelector(".wind span").innerText = `${speed} m/s`;
  weatherPart.querySelector(".date-time").innerText = weatherDate;

  infoTxt.classList.remove("pending", "error");
  infoTxt.innerText = "";
  inputField.value = "";
  wrapper.classList.add("active");
}

// Function to fetch daily forecast data
function fetchForecast(latitude, longitude) {
  const forecastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=metric&appid=${apiKey}`;
  
  fetch(forecastApi)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod && data.cod === "404") {
        infoTxt.innerText = "Forecast data not available";
        infoTxt.classList.replace("pending", "error");
        clearForecast();
      } else {
        updateForecast(data.daily.slice(1, 8)); // Update forecast for next 7 days
      }
    })
    .catch(() => {
      infoTxt.innerText = "Forecast data not available";
      infoTxt.classList.replace("pending", "error");
      clearForecast();
    });
}


// Function to fetch hourly forecast data
function fetchHourlyForecast(latitude, longitude) {
  const hourlyForecastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,daily,minutely&units=metric&appid=${apiKey}`;
  
  fetch(hourlyForecastApi)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod && data.cod === "404") {
        infoTxt.innerText = "Hourly forecast data not available";
        infoTxt.classList.replace("pending", "error");
        clearHourlyForecast();
      } else {
        updateHourlyForecast(data.hourly.slice(0, 24)); // Update hourly forecast for next 24 hours
      }
    })
    .catch(() => {
      infoTxt.innerText = "Hourly forecast data not available";
      infoTxt.classList.replace("pending", "error");
      clearHourlyForecast();
    });
}

// Function to update daily forecast
function updateForecast(dailyData) {
  forecastDetails.innerHTML = ""; // Clear previous forecast details

  dailyData.forEach((day) => {
    const { dt, weather: [{ description, id }], temp: { max, min } } = day;
    const dayOfWeek = new Date(dt * 1000).toLocaleDateString('en', { weekday: 'long' });
    
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");
    forecastCard.innerHTML = `
      <div class="forecast-day">${dayOfWeek}</div>
      <img src="${getWeatherIcon(id)}" alt="Weather Icon" />
      <div class="forecast-temp">
        <span class="max-temp">${Math.round(max)}°C</span> / 
        <span class="min-temp">${Math.round(min)}°C</span>
      </div>
      <div class="forecast-desc">${description}</div>
    `;
    forecastDetails.appendChild(forecastCard);
  });
}

// Function to update hourly forecast
function updateHourlyForecast(hourlyData) {
  const labels = [];
  const data = [];

  hourlyData.forEach((hour) => {
    const { dt, temp } = hour;
    const hourOfDay = new Date(dt * 1000).toLocaleTimeString('en', { hour: 'numeric', hour12: true });
    labels.push(hourOfDay);
    data.push(temp);
  });

  createWeatherChart(labels, data); // Create or update hourly weather chart
}

// Function to clear weather data
function clearWeatherData() {
  wIcon.src = "";
  weatherPart.querySelector(".temp .numb").innerText = "";
  weatherPart.querySelector(".weather").innerText = "";
  weatherPart.querySelector(".location span").innerText = "";
  weatherPart.querySelector(".temp .numb-2").innerText = "";
  weatherPart.querySelector(".humidity span").innerText = "";
  weatherPart.querySelector(".wind span").innerText = "";
  weatherPart.querySelector(".date-time").innerText = "";
  infoTxt.innerText = "";
  forecastSection.style.display = "block"; // Ensure forecast section is visible
  clearForecast(); // Clear previous forecast data
  clearHourlyForecast(); // Clear previous hourly forecast data
}


// Function to clear forecast data
function clearForecast() {
  forecastDetails.innerHTML = ""; // Clear daily forecast details
}

// Function to clear hourly forecast data
function clearHourlyForecast() {
  if (weatherChart) {
    weatherChart.destroy();
  }
}

// Function to get weather icon based on weather id
function getWeatherIcon(weatherId) {
  if (weatherId === 800) {
    return "icons/clear.svg";
  } else if (weatherId >= 200 && weatherId <= 232) {
    return "icons/storm.svg";
  } else if (weatherId >= 600 && weatherId <= 622) {
    return "icons/snow.svg";
  } else if (weatherId >= 701 && weatherId <= 781) {
    return "icons/haze.svg";
  } else if (weatherId >= 801 && weatherId <= 804) {
    return "icons/cloud.svg";
  } else if ((weatherId >= 500 && weatherId <= 531) || (weatherId >= 300 && weatherId <= 321)) {
    return "icons/rain.svg";
  } else {
    return "icons/unknown.svg";
  }
}

// Event listener for back button
arrowBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
  clearWeatherData();
});

// Change Color Theme
var isDark = false;
const colors = [
  "hsl(345, 80%, 50%)",
  "hsl(100, 80%, 50%)",
  "hsl(200, 80%, 50%)",
  "hsl(227, 66%, 55%)",
  "hsl(26, 80%, 50%)",
  "hsl(44, 90%, 51%)",
  "hsl(280, 100%, 65%)",
  "hsl(480, 100%, 25%)",
  "hsl(180, 100%, 25%)",
];
const colorBtns = document.querySelectorAll(".theme-color");
const darkModeBtn = document.querySelector(".dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
  isDark = !isDark;
  changeTheme(isDark ? "#000" : colors[3]);
});

colorBtns.forEach((btn, index) => {
  btn.style.backgroundColor = colors[index];
  btn.addEventListener("click", () => {
    changeTheme(btn.style.backgroundColor);
  });
});

function changeTheme(color) {
  document.documentElement.style.setProperty("--primary-color", color);
  saveTheme(color);
}

function saveTheme(color) {
  localStorage.setItem("theme", color);
}

function getTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
  }
}

getTheme(); // Initialize theme on page load
</script>
