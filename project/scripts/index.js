function navigateToAboutUs() {
    window.location.href = "contact-page.html";
}

// Attach the function to the button
document.getElementById("about-us-button").addEventListener("click", navigateToAboutUs);

// Add animation to the "Find Out More" button
const aboutUsButton = document.getElementById("about-us-button");
if (aboutUsButton) {
    aboutUsButton.addEventListener("mouseenter", () => {
        aboutUsButton.style.transition = "transform 0.3s ease-in-out";
        aboutUsButton.style.transform = "scale(1.1)";
    });
    aboutUsButton.addEventListener("mouseleave", () => {
        aboutUsButton.style.transform = "scale(1)";
    });
}