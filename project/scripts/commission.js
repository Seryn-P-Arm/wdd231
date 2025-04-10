// Create a commission order object
let commissionOrder = {
    name: "",
    email: "",
    description: "",
    preferredStyle: "",
    budget: "",
    deadline: ""
};

// Function to update the object with form data
function updateCommissionOrder() {
    commissionOrder.name = document.querySelector("#name").value;
    commissionOrder.email = document.querySelector("#email").value;
    commissionOrder.description = document.querySelector("#description").value;
    commissionOrder.preferredStyle = document.querySelector("#style").value;
    commissionOrder.budget = document.querySelector("#budget").value;
    commissionOrder.deadline = document.querySelector("#deadline").value;
}

// Create an array to hold multiple commission orders
let commissionOrders = [];

// Function to save the commission order to the array
function saveCommissionOrder() {
    updateCommissionOrder();
    commissionOrders.push({ ...commissionOrder }); // Add a copy of the order object to the array
    console.log(commissionOrders); // Log the array to check
    // Save the commission order to localStorage
    localStorage.setItem("commissionOrder", JSON.stringify(commissionOrder));
}

// Save the commission order to localStorage
localStorage.setItem("commissionOrder", JSON.stringify(commissionOrder));

// Retrieve and populate the form with stored data from localStorage
window.onload = function() {
    const savedOrder = JSON.parse(localStorage.getItem("commissionOrder"));
    if (savedOrder) {
        document.querySelector("#name").value = savedOrder.name;
        document.querySelector("#email").value = savedOrder.email;
        document.querySelector("#description").value = savedOrder.description;
        document.querySelector("#style").value = savedOrder.preferredStyle;
        document.querySelector("#budget").value = savedOrder.budget;
        document.querySelector("#deadline").value = savedOrder.deadline;
    }
};

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Handle sending the commission order form
    const commissionForm = document.querySelector("#commission-form");

    commissionForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Save the commission order to localStorage
        const commissionOrder = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            artworkDescription: document.querySelector("#description").value,
            preferredStyle: document.querySelector("#style").value,
            budget: document.querySelector("#budget").value,
            deadline: document.querySelector("#deadline").value
        };

        localStorage.setItem("commissionOrder", JSON.stringify(commissionOrder)); // Save commission order in localStorage

        // Redirect to commission success page
        window.location.href = "success.html"; // Redirect to commission success page
    });
});

// On the success page, retrieve the stored order and display a thank-you message
if (window.location.pathname.includes("success.html")) {
    const savedOrder = JSON.parse(localStorage.getItem("commissionOrder"));
    if (savedOrder) {
        document.querySelector("h1").textContent = `Thank You, ${savedOrder.name}!`;
        document.querySelector("p").textContent = `Your commission order has been successfully submitted. We’ll get in touch with you shortly.`;
    }
}

// Add animation to the "Send Message" button
const sendMessageButton = document.getElementById("send-message-button");
if (sendMessageButton) {
    sendMessageButton.addEventListener("mouseenter", () => {
        sendMessageButton.style.transition = "transform 0.3s ease-in-out";
        sendMessageButton.style.transform = "scale(1.1)";
    });
    sendMessageButton.addEventListener("mouseleave", () => {
        sendMessageButton.style.transform = "scale(1)";
    });
}