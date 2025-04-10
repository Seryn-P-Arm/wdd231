// Animation of the navigation
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('#animateNav');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});