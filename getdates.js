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