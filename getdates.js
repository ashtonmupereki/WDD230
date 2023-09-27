// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the first paragraph of the footer
document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} Ashton, Gweru, Zimbabwe`;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}