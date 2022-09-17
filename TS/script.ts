const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLElement;
const overlay = document.querySelector('.overlay') as HTMLElement;
const hamMenu = document.querySelector('.ham-menu') as HTMLElement;
const hamMenuExit = document.querySelector('.exit') as HTMLElement;
const clickableList = document.querySelectorAll('.clickable-list');
 
console.log(clickableList);


hamburgerMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  hamMenu.animate(animationSpecOpen, animationTiming);
});

hamMenuExit.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

clickableList.forEach(listItem => {
  listItem.addEventListener('click' , () => {
    const subList1 = document.querySelector('.sl1') as HTMLElement;
    const subList2 = document.querySelector('.sl2') as HTMLElement;
    if(listItem.classList.contains('cl1')) {
      subList1.classList.toggle('active');
    } else if(listItem.classList.contains('cl2')) {
      subList2.classList.toggle('active');
    }
  })
})


const animationSpecOpen = [
  {width: '0%'},
  {width: '60%'}
];

const animationTiming = {
  duration: 100,
  iterations: 1
};