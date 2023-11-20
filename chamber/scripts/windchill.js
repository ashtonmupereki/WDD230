function calculateWindChill() {
    // Get the input values of temperature and wind speed
    const temperatureInput = document.getElementById("temperature").value;
    const windSpeedInput = document.getElementById("wind-speed").value;
  
    // Convert input values to numbers
    const temperature = parseFloat(temperatureInput);
    const windSpeed = parseFloat(windSpeedInput);
  
    // Check if the input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate the wind chill factor
      const windChillFactor = calculateWindChillFactor(temperature, windSpeed);
      // Display the wind chill factor
      document.getElementById("wind-chill").textContent = windChillFactor.toFixed(2);
    } else {
      // Display "N/A" if the input values do not meet the requirements
      document.getElementById("wind-chill").textContent = "N/A";
    }
  }
  
  // Function to calculate the wind chill factor
  function calculateWindChillFactor(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  }