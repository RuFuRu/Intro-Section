const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLElement;
const overlay = document.querySelector('.overlay') as HTMLElement;
const hamMenu = document.querySelector('.ham-menu') as HTMLElement;
const hamMenuExit = document.querySelector('.exit') as HTMLElement;


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
  {width: '0%'},
  {width: '60%'}
];

const animationTiming = {
  duration: 100,
  iterations: 1
};