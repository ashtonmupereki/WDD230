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

function getCurrentWeather() {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-19.416663&lon=29.833330&exclude=minutely,hourly&appid=20fe2e5ccd70febfced2ffc798e5a3bf')
    .then(response => response.json())
    .then(data => {
      const currentTemperature = data.current.temp;
      const currentWeatherDescription = data.current.weather[0].description;
      const forecastData = data.daily.slice(0, 3);

      // Display current temperature and weather description
      document.getElementById('current-weather').innerHTML = `
        <p>Temperature: ${currentTemperature}°C</p>
        <p>Description: ${currentWeatherDescription}</p>
      `;

      // Display 3-day temperature forecast
      document.getElementById('forecast').innerHTML = `
        <h3>3-Day Forecast</h3>
        <ul>
          ${forecastData.map(day => `<li>${day.temp.day}°C</li>`).join('')}
        </ul>
      `;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

// Function to close the banner
function closeBanner() {
  document.getElementById('banner').classList.add('close');
}

// Function to check if it's Monday, Tuesday, or Wednesday
function isBannerVisible() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    document.getElementById('banner').style.display = 'block';
  }
}

// Call the functions when the page loads
window.onload = function () {
  getCurrentWeather();
  isBannerVisible();
};

function initMap() {
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });

  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
    );
    infoWindow.open(map);
  });
}

window.initMap = initMap;