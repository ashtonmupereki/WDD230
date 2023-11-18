const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',()=>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
});

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 1000 * 60 * 60 * 24;

// initialize display elements
const todayElement = document.querySelector("#today");
const daysElement = document.querySelector("#daysleft");

// processing
const today = Date.now();

if (!localStorage.getItem("lastVisit")) {
  daysElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const lastVisit = parseInt(localStorage.getItem("lastVisit"));
  const timeDifference = today - lastVisit;
  const daysSinceLastVisit = Math.floor(timeDifference / msToDays);

  if (daysSinceLastVisit < 1) {
    daysElement.textContent = "Back so soon! Awesome!";
  } else {
    const message = (daysSinceLastVisit === 1) ? "day" : "days";
    daysElement.textContent = `You last visited ${daysSinceLastVisit} ${message} ago.`;
  }
}

todayElement.textContent = new Date(today).toLocaleString();

// Store the current visit date in localStorage
localStorage.setItem("lastVisit", today.toString());

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
  const apiKey = 'a46fbe9048f9add8c93a01bd93c8d12c';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=chamber&appid=' + apiKey;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract and display current temperature
      const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
      document.getElementById('currentTemperature').textContent = 'Temperature: ' + temperature + '°C';

      // Extract and display current weather description
      const weatherDescription = data.weather[0].description;
      document.getElementById('currentWeatherDescription').textContent = 'Weather: ' + weatherDescription;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
  const apiKey = '20fe2e5ccd70febfced2ffc798e5a3bf';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=chamber&appid=' + apiKey;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract and display current temperature
      const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
      document.getElementById('currentTemperature').textContent = 'Temperature: ' + temperature + '°C';

      // Extract and display current weather description
      const weatherDescription = data.weather[0].description;
      document.getElementById('currentWeatherDescription').textContent = 'Weather: ' + weatherDescription;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

// Function to fetch forecast data from OpenWeatherMap API
function fetchForecastData() {
  const apiKey = '20fe2e5ccd70febfced2ffc798e5a3bf';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=chamber&appid=' + apiKey;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract and display 3-day forecast
      const forecastList = document.getElementById('forecastList');
      forecastList.innerHTML = ''; // Clear previous forecast data

      for (let i = 0; i < 3; i++) {
        const forecastData = data.list[i * 8]; // Retrieve data for every 24 hours (8 data points per day)
        const temperature = Math.round(forecastData.main.temp - 273.15); // Convert from Kelvin to Celsius
        const weatherDescription = forecastData.weather[0].description;

        const listItem = document.createElement('li');
        listItem.textContent = `Temperature: ${temperature}°C, Weather: ${weatherDescription}`;
        forecastList.appendChild(listItem);
      }
    })
    .catch(error => {
      console.log('Error fetching forecast data:', error);
    });
}

// Function to show or hide the banner based on the current day
function toggleBanner() {
  const banner = document.getElementById('banner');
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  if (currentDay >= 1 && currentDay <= 3) {
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

// Function to close the banner
function closeBanner() {
  const banner = document.getElementById('banner');
  banner.classList.add('hidden');
}

// Event listener for close banner button
document.getElementById('closeBanner').addEventListener('click', closeBanner);

// Fetch weather data and forecast data on page load
fetchWeatherData();
fetchForecastData();

// Update banner visibility on page load
toggleBanner();