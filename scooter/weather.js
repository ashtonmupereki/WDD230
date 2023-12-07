const apiKey = '20fe2e5ccd70febfced2ffc798e5a3bf';
const city = 'Gweru';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const alertsUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=59.99&lon=59.99&exclude=current,minutely,hourly,daily&appid=${apiKey}`;

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const humidity = data.main.humidity;

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.alt = 'Weather Icon';

    const weatherElement = document.querySelector('.weather');
    weatherElement.innerHTML = `${temperature}°C - ${description} (Humidity: ${humidity}%)`;
    weatherElement.appendChild(weatherIcon);
  })
  .catch(error => {
    console.log('Error fetching weather data:', error);
  });

fetch(alertsUrl)
  .then(response => response.json())
  .then(data => {
    const alerts = data.alerts;
    const weatherAlertsElement = document.querySelector('.weather-alerts');

    if (alerts && alerts.length > 0) {
      let alertHTML = '';
      alerts.forEach(alert => {
        alertHTML += `
          <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            ${alert.event}: ${alert.description}
          </div>
        `;
      });
      weatherAlertsElement.innerHTML = alertHTML;
    } else {
      weatherAlertsElement.innerHTML = 'No weather alerts at the moment.';
    }
  })
  .catch(error => {
    console.log('Error fetching weather alerts:', error);
  });