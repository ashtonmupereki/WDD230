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

f3c61e6adcb4f31195c10ee3e27d62ab
