// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the first paragraph of the footer
document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} Ashton, Gweru, Zimbabwe`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',()=>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
});

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `We are pleased with your first visit. Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

const apiKey = '20fe2e5ccd70febfced2ffc798e5a3bf';
const city = 'Gweru';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the necessary weather information from the response
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    // Update the HTML elements with the weather information
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.alt = 'Weather Icon';
    document.querySelector('.weather').textContent = `${temperature}°C - ${description}`;
    document.querySelector('.weather').appendChild(weatherIcon);
  })
  .catch(error => {
    console.log('Error:', error);
  });
