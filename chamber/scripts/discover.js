import {places} from '../data/places.mjs';
console.log(places);

// Animation of the navigation
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('#animateNav');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

const cards = document.querySelector('#allplaces');

function displayPlaces(places) {
    places.forEach(place => {
        // build card
        const card = document.createElement('div');

        // build photo
        const photo = document.createElement('img');

        photo.src = `images/${place.photo_url}`;
        photo.alt = place.name;
        card.appendChild(photo);

        // build title
        const title = document.createElement('h2');

        title.innerText = place.name;
        card.appendChild(title);

        // build address
        const location = document.createElement('address');

        location.innerText = place.address;
        card.appendChild(location);

        // build description
        const desc = document.createElement('p');

        desc.innerText = place.description;
        card.appendChild(desc);

        cards.appendChild(card);
    });
}

displayPlaces(places.activities);

// Sidebar Message Logic
const sidebarMessage = document.createElement("p");
const sidebar = document.querySelector("#sidebar"); // Adjust selector based on where you want it

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit < 1) {
        sidebarMessage.textContent = "Back so soon! Awesome!";
    } else {
        sidebarMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
    }
}

// Store the current visit date in localStorage
localStorage.setItem("lastVisit", now);

// Append the message to the sidebar
sidebar.prepend(sidebarMessage);
