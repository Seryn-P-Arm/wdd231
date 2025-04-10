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

// Load and display the gallery
async function loadGallery() {
    try {
        const response = await fetch("data/artwork.json"); // Make sure the path matches your folder structure
        const artworks = await response.json();
        const gallery = artworks.galleryImages;

        const galleryContainer = document.getElementById("gallery-container");

        // Clear the gallery container before adding new images to avoid duplicates
        galleryContainer.innerHTML = "";

        gallery.forEach((art) => {
            const card = document.createElement("div");
            card.classList.add("art-card");

            const img = document.createElement("img");
            img.src = art.src;
            img.alt = art.alt;

            card.appendChild(img);
            galleryContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Failed to load gallery 😢", error);
    }
}

// Enable the popup functionality
function enablePopup() {
    const popup = document.getElementById("popup");
    const popupImg = document.querySelector(".popup-img");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll("#gallery-container img").forEach(img => {
        img.addEventListener("click", () => {
            popupImg.src = img.src;
            popupImg.alt = img.alt;
            popup.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
        popupImg.src = "";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.add("hidden");
            popupImg.src = "";
        }
    });
}

// Load gallery and enable popup when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    loadGallery().then(enablePopup); // Load gallery and enable popup in a single flow
});
