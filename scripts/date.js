document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    const year = new Date().getFullYear();  // Corrected this line
    currentYear.innerHTML = `&copy; ${year}`;

    // Populate last modified date
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
})
