// Animation of the navigation
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('#animateNav');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
    // Autofill timestamp field
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    } else {
        console.error("Timestamp field not found.");
    }

    // Membership card animations
    const membershipCards = document.querySelectorAll(".membership-card");
    membershipCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("fade-in");
        }, index * 300);
    });

    // Modal functionality
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const closeButtons = document.querySelectorAll(".close");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            const targetModalId = this.getAttribute("data-target");
            const modal = document.getElementById(targetModalId);
            if (modal) {
                modal.showModal();
            } else {
                console.error(`Modal with ID '${targetModalId}' not found.`);
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modal = this.closest("dialog");
            if (modal) {
                modal.close();
            }
        });
    });

    // Close modal if user clicks outside the modal content
    document.addEventListener("click", function (event) {
        document.querySelectorAll("dialog[open]").forEach(modal => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });

    // Form validation for organization title
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const orgTitle = document.querySelector("[name='organization_title']");
            const pattern = /^[A-Za-z0-9\s-]{7,}$/; // Updated to include numbers
            if (!pattern.test(orgTitle.value)) {
                event.preventDefault();
                alert("Organization title must be at least 7 characters and contain only letters, numbers, spaces, or hyphens.");
                orgTitle.focus();
            }
        });
    } else {
        console.error("Membership form not found.");
    }
});
