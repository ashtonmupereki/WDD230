// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3) {
    var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
}

// Get the elements from the page
var temperatureInputElement = document.getElementById('temperatureInput');
var windSpeedInputElement = document.getElementById('windSpeedInput');
var windChillElement = document.getElementById('windChillValue');
var calculateButton = document.getElementById('calculateButton');

// Function to handle the button click event
function calculateButtonClicked() {
  // Get the temperature and wind speed values entered by the user
  var temperature = parseFloat(temperatureInputElement.value);
  var windSpeed = parseFloat(windSpeedInputElement.value);

  // Calculate the wind chill
  var windChillValue = calculateWindChill(temperature, windSpeed);

  // Display the wind chill value in the weather section on the home page
  windChillElement.textContent = windChillValue;
}

// Attach the calculateButtonClicked function to the button click event
calculateButton.addEventListener('click', calculateButtonClicked);