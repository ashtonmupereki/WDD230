// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
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
  
  // Function to fetch forecast data from OpenWeatherMap API
  function fetchForecastData() {
    const apiKey = 'a46fbe9048f9add8c93a01bd93c8d12c';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=chamber&appid=' + apiKey;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extract and display 3-day forecast
        const forecastList = document.getElementById('forecastList');
  
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