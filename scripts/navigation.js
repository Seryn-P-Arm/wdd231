document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Toggle the 'show-menu' class on click to hide/show the navigation
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show-menu");
    });
});
