// Add animation to the "Send Message" button
const sendMessageButton = document.getElementById("send-message-button");
const submitRequestButton = document.getElementById("submit-request-button");
const moreInfoCommunityButton = document.getElementById("more-info-community-button");
const moreInfoPartnerButton = document.getElementById("more-info-partner-button");

if (sendMessageButton) {
    sendMessageButton.addEventListener("mouseenter", () => {
        sendMessageButton.style.transition = "transform 0.3s ease-in-out";
        sendMessageButton.style.transform = "scale(1.1)";
    });
    sendMessageButton.addEventListener("mouseleave", () => {
        sendMessageButton.style.transform = "scale(1)";
    });
}

// Add animation to the "Submit Request" button
if (submitRequestButton) {
    submitRequestButton.addEventListener("mouseenter", () => {
        submitRequestButton.style.transition = "transform 0.3s ease-in-out";
        submitRequestButton.style.transform = "scale(1.1)";
    });
    submitRequestButton.addEventListener("mouseleave", () => {
        submitRequestButton.style.transform = "scale(1)";
    });
}

// Add animation to the "More Info" buttons
if (moreInfoCommunityButton) {
    moreInfoCommunityButton.addEventListener("mouseenter", () => {
        moreInfoCommunityButton.style.transition = "transform 0.3s ease-in-out";
        moreInfoCommunityButton.style.transform = "scale(1.1)";
    });
    moreInfoCommunityButton.addEventListener("mouseleave", () => {
        moreInfoCommunityButton.style.transform = "scale(1)";
    });
}

if (moreInfoPartnerButton) {
    moreInfoPartnerButton.addEventListener("mouseenter", () => {
        moreInfoPartnerButton.style.transition = "transform 0.3s ease-in-out";
        moreInfoPartnerButton.style.transform = "scale(1.1)";
    });
    moreInfoPartnerButton.addEventListener("mouseleave", () => {
        moreInfoPartnerButton.style.transform = "scale(1)";
    });
}

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Handle sending the message from the contact form
    const contactForm = document.querySelector("#contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Save the message to localStorage
        const contactMessage = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
        };

        localStorage.setItem("message", JSON.stringify(contactMessage)); // Save message in localStorage

        // Redirect to contact success page
        window.location.href = "contact-success.html"; // Redirect to contact success page
    });
});

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Handle sending the message from the contact form
    const requestForm = document.querySelector("#request-form");

    requestForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Save the message to localStorage
        const requestMessage = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            membership: document.querySelector("#membership").value,
            message: document.querySelector("#message").value
        };

        localStorage.setItem("message", JSON.stringify(requestMessage)); // Save message in localStorage

        // Redirect to contact success page
        window.location.href = "request-success.html"; // Redirect to contact success page
    });
});