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

  // Function to fetch the weather data
function fetchWeatherData() {
  // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
  var apiKey = 'f3c61e6adcb4f31195c10ee3e27d62ab';

  // Fetch the current weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=GWERU&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Update the current weather element
      var currentWeatherElement = document.getElementById('current-weather');
      currentWeatherElement.textContent = `${data.main.temp}°C, ${data.weather[0].description}`;
    })
    .catch(error => console.log('Error fetching current weather:', error));

  // Fetch the 3-day weather forecast
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=YOUR_CITY_NAME&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Update the 3-day weather forecast elements
      var forecastElements = document.querySelectorAll('.weather-forecast');
      for (var i = 0; i < forecastElements.length; i++) {
        var forecastElement = forecastElements[i];
        var forecastData = data.list[i * 8]; // Fetching data for every 24 hours (8 data points per day)
        forecastElement.textContent = `${forecastData.main.temp}°C, ${forecastData.weather[0].description}`;
      }
    })
    .catch(error => console.log('Error fetching weather forecast:', error));
}

// Call the fetchWeatherData function when the page loads
window.addEventListener('load', fetchWeatherData);