// Add animation to header and footer icons
document.querySelectorAll(".header-icon, .footer-icon").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transition = "transform 0.3s ease-in-out";
        icon.style.transform = "translateY(-10px)";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "translateY(0)";
    });
});

// Add animation to navigation links
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transition = "color 0.3s ease-in-out, transform 0.3s ease-in-out";
        link.style.color = "var(--secondary-color)";
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "#000";
        link.style.transform = "scale(1)";
    });
});