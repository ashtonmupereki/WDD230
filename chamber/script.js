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

  // OpenWeatherMap API endpoint and API key
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall";
  var apiKey = "f3c61e6adcb4f31195c10ee3e27d62ab";

  // Chamber location coordinates
  var latitude = 59.99; // Replace with actual latitude
  var longitude = 59.99; // Replace with actual longitude

  // Make API request to retrieve weather data
  fetch(`${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Display current temperature and weather description
      var currentTemperature = data.current.temp;
      var currentWeatherDescription = data.current.weather[0].description;

      document.getElementById("currentTemperature").textContent = "Temperature: " + currentTemperature + "°C";
      document.getElementById("currentWeatherDescription").textContent = "Description: " + currentWeatherDescription;

      // Display 3-day temperature forecast
      var forecastContainer = document.getElementById("forecastContainer");
      var forecastData = data.daily.slice(1, 4); // Get next 3 days' forecast data

      forecastData.forEach(day => {
        var date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        var temperature = day.temp.day;
        var forecastItem = document.createElement("div");
        forecastItem.innerHTML = "<p><strong>" + date + "</strong></p><p>Temperature: " + temperature + "°C</p>";
        forecastContainer.appendChild(forecastItem);
      });
    })
    .catch(error => {
      console.log("Error:", error);
    });
  
  // Get the current day of the week
  var currentDate = new Date();
  var currentDay = currentDate.getDay();

  // Check if the current day is Monday, Tuesday, or Wednesday
  if (currentDay >= 1 && currentDay <= 3) {
    // Display the banner
    var banner = document.getElementById("banner");
    banner.style.display = "block";
  }

  // Add event listener to the close button
  var closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", function() {
    // Hide the banner when the close button is clicked
    banner.style.display = "none";
  });
