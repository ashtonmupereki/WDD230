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

document.addEventListener("DOMContentLoaded", function () {
  const toggleInput = document.querySelector(".toggle-input");
  toggleInput.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });

  