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