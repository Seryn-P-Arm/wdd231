// Animation of the navigation
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('#animateNav');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Call to Action button
function navigateToAboutUs() {
    window.location.href = "#";
}

// Attach the function to the button
document.getElementById("call-to-action-button").addEventListener("click", navigateToAboutUs);

const spotlightContainer = document.querySelector('#company-spotlights');
const url = './data/members.json';

// get member data
async function fetchMembers() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

// Function to display the company spotlights
function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    // Filter only Gold and Silver members
    const filteredMembers = members.filter(member => 
        member.membership === "Gold" || member.membership === "Silver"
    );

    // Randomly shuffle and select 2 or 3 members
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffled.slice(0, 3);

    selectedMembers.forEach(member => {
        let card = document.createElement('div');
        card.classList.add('spotlight-card');

        let image = document.createElement('img');
        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');

        let name = document.createElement('h3');
        name.textContent = member.name;

        let phone = document.createElement('p');
        phone.innerHTML = `<strong>Phone:</strong> ${member.phoneNumber}`;

        let address = document.createElement('p');
        address.innerHTML = `<strong>Address:</strong> ${member.address.street}, ${member.address.city}, ${member.address.province}`;

        let website = document.createElement('p');
        website.innerHTML = `<strong>Website:</strong> <a href="${member.websiteURL}" target="_blank">${member.websiteURL}</a>`;

        let membership = document.createElement('p');
        membership.innerHTML = `<strong>Membership Level:</strong> ${member.membership}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);

        spotlightContainer.appendChild(card);
    });
}

fetchMembers();