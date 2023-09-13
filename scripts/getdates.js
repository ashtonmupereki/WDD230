// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Update the copyright year in the first paragraph of the footer
document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} Your Name, Your State/Country`;

// Update the last modified date in the second paragraph of the footer
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModifiedDate}`;