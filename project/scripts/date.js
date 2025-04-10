// Get the current year
const currentYear = new Date().getFullYear();

// Update the first paragraph in the footer with the current year
document.getElementById("currentyear").textContent = currentYear;

// Get the document's last modified date
const lastModified = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;