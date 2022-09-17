"use strict";
const hamburgerMenu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const hamMenu = document.querySelector('.ham-menu');
const hamMenuExit = document.querySelector('.exit');
const clickableList = document.querySelectorAll('.clickable-list');
const featuresNav = document.querySelector('nav > .features');
const companyNav = document.querySelector('nav > .company');
const featuresList = document.querySelector('.features-list');
const companyList = document.querySelector('.company-list');
featuresNav.addEventListener('click', () => {
    featuresList.classList.toggle('active');
    const image = document.querySelector('.image-features');
    changeImg(image);
});
companyNav.addEventListener('click', () => {
    companyList.classList.toggle('active');
    const image = document.querySelector('.image-company');
    changeImg(image);
});
hamburgerMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    animateSth('width', '0%', '60%', 100, 1, hamMenu);
});
hamMenuExit.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});
clickableList.forEach(listItem => {
    listItem.addEventListener('click', () => {
        const subList1 = document.querySelector('.sl1');
        const subList2 = document.querySelector('.sl2');
        if (listItem.classList.contains('cl1')) {
            subList1.classList.toggle('active');
            const image = document.querySelector('.cl1-image');
            changeImg(image);
        }
        else if (listItem.classList.contains('cl2')) {
            subList2.classList.toggle('active');
            const image = document.querySelector('.cl2-image');
            changeImg(image);
        }
    });
});
function changeImg(image) {
    if (image.getAttribute('src') === 'images/icon-arrow-down.svg') {
        image.setAttribute('src', 'images/icon-arrow-up.svg');
    }
    else if (image.getAttribute('src') === 'images/icon-arrow-up.svg') {
        image.setAttribute('src', 'images/icon-arrow-down.svg');
    }
}
function animateSth(property, valueStart, valueFinish, duration, iterations, element) {
    const animationOpen = [
        { [property]: valueStart },
        { [property]: valueFinish }
    ];
    const animationClose = {
        duration: duration,
        iterations: iterations
    };
    element.animate(animationOpen, animationClose);
}
