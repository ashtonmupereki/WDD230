const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click",()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const apiKey = '20fe2e5ccd70febfced2ffc798e5a3bf';
const city = 'Gweru';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the necessary weather information from the response
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    // Update the HTML elements with the weather information
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.alt = 'Weather Icon';

    const weatherInfoContainer = document.getElementById('weather-info');

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${temperature}°C`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${description}`;

    // Clear any existing content in the weather-info container
    weatherInfoContainer.innerHTML = '';

    // Append the weather information to the weather-info container
    weatherInfoContainer.appendChild(weatherIcon);
    weatherInfoContainer.appendChild(temperatureElement);
    weatherInfoContainer.appendChild(descriptionElement);
  })
  .catch(error => {
    console.log('Error:', error);
  });

  