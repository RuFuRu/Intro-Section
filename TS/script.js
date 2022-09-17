"use strict";
const hamburgerMenu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const hamMenu = document.querySelector('.ham-menu');
const hamMenuExit = document.querySelector('.exit');
hamburgerMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamMenu.animate(animationSpecOpen, animationTiming);
});
hamMenuExit.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});
const animationSpecOpen = [
    { width: '0%' },
    { width: '60%' }
];
const animationTiming = {
    duration: 100,
    iterations: 1
};
