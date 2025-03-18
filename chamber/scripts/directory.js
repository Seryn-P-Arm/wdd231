// Animation of the navigation
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('#animateNav');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// member cards display and fetch and async/await
const url = './data/members.json';

const cards = document.querySelector('#memberCards');

async function getMemberData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        console.log("Fetched Data:", data); // Debugging step
        displayMembers(data.members || data); // Adjust based on structure

    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

// toggle grid/list view of member cards with buttons
document.addEventListener('DOMContentLoaded', () => {
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const memberCards = document.getElementById('memberCards');

    memberCards.classList.add('grid');

    gridButton.addEventListener('click', () => {
        memberCards.classList.remove('list');
        memberCards.classList.add('grid');
    });

    listButton.addEventListener('click', () => {
        memberCards.classList.remove('grid');
        memberCards.classList.add('list');
    });
})

// display members
const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');

        let topSection = document.createElement('div');
        let memberName = document.createElement('h3');
        let tagLine = document.createElement('p');

        let bottomSection = document.createElement('div');
        let leftDiv = document.createElement('div');
        let rightDiv = document.createElement('div');
        let image = document.createElement('img');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        memberName.textContent = `${member.name}`;
        tagLine.textContent = `Membership level: ${member.membership}`;
        email.innerHTML = `<strong>EMAIL:</strong> ${member.email}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${member.phoneNumber}`;
        website.innerHTML = `<strong>URL:</strong> ${member.websiteURL}`;

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '140');
        image.setAttribute('height', '140');

        topSection.classList.add('top-section');
        bottomSection.classList.add('bottom-section')
        leftDiv.classList.add('left-side');
        rightDiv.classList.add('right-side');
        tagLine.setAttribute('class', 'tag-line');
        email.setAttribute('class', 'email');
        phone.setAttribute('class', 'phone');
        website.setAttribute('class', 'website-url'),

        topSection.appendChild(memberName);
        topSection.appendChild(tagLine);

        leftDiv.appendChild(image);
        rightDiv.appendChild(email);
        rightDiv.appendChild(phone);
        rightDiv.appendChild(website);

        bottomSection.appendChild(leftDiv);
        bottomSection.appendChild(rightDiv);

        card.appendChild(topSection);
        card.appendChild(bottomSection);

        cards.appendChild(card);
    });
}

getMemberData();