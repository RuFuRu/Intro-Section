const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLElement;
const overlay = document.querySelector('.overlay') as HTMLElement;
const hamMenu = document.querySelector('.ham-menu') as HTMLElement;
const hamMenuExit = document.querySelector('.exit') as HTMLElement;
const clickableList = document.querySelectorAll('.clickable-list');
 
console.log(clickableList);


hamburgerMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  animateSth('width','0%','60%',100,1,hamMenu);
});

hamMenuExit.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

let clicker: number = 2;

clickableList.forEach(listItem => {
  listItem.addEventListener('click' , () => {
    const subList1 = document.querySelector('.sl1') as HTMLElement;
    const subList2 = document.querySelector('.sl2') as HTMLElement;
    if(listItem.classList.contains('cl1')) {
      subList1.classList.toggle('active');
      const image = document.querySelector('.cl1-image') as HTMLElement;
      changeImg(image);
    } else if(listItem.classList.contains('cl2')) {
      subList2.classList.toggle('active');
      const image = document.querySelector('.cl2-image') as HTMLElement;
      changeImg(image);
    }
  })
})


function changeImg(image: HTMLElement) {
  if(clicker % 2 === 0) {
    image.setAttribute('src', 'images/icon-arrow-down.svg');
    clicker++;
  } else if(clicker % 2 !== 0) {
    image.setAttribute('src', 'images/icon-arrow-up.svg');
    clicker++;
  }
}

function animateSth
  (
    property: string,
    valueStart: string,
    valueFinish: string,
    duration: number, 
    iterations: number,
    element: HTMLElement
  ) 
  {
    const animationOpen = [
      {[property]: valueStart},
      {[property]: valueFinish}
    ];

    const animationClose = {
      duration: duration,
      iterations: iterations
    };

    element.animate(animationOpen, animationClose);
  }