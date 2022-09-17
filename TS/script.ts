const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLElement;
const overlay = document.querySelector('.overlay') as HTMLElement;
const hamMenu = document.querySelector('.ham-menu') as HTMLElement;
const hamMenuExit = document.querySelector('.exit') as HTMLElement;
const clickableList = document.querySelectorAll('.clickable-list');
const featuresNav = document.querySelector('nav > .features') as HTMLElement;
const companyNav = document.querySelector('nav > .company') as HTMLElement;
const featuresList = document.querySelector('.features-list') as HTMLElement;
const companyList = document.querySelector('.company-list') as HTMLElement;

featuresNav.addEventListener('click', () => {
  featuresList.classList.toggle('active');
  const image = document.querySelector('.image-features') as HTMLImageElement;
  changeImg(image);
})

companyNav.addEventListener('click', () => {
  companyList.classList.toggle('active');
  const image = document.querySelector('.image-company') as HTMLImageElement;
  changeImg(image);
})

hamburgerMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  animateSth('width','0%','60%',100,1,hamMenu);
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
      const image = document.querySelector('.cl1-image') as HTMLImageElement;
      changeImg(image);
    } else if(listItem.classList.contains('cl2')) {
      subList2.classList.toggle('active');
      const image = document.querySelector('.cl2-image') as HTMLImageElement;
      changeImg(image);
    }
  })
})


function changeImg(image: HTMLImageElement) {
  if(image.getAttribute('src') === 'images/icon-arrow-down.svg') {
    image.setAttribute('src', 'images/icon-arrow-up.svg');
  } else if(image.getAttribute('src') === 'images/icon-arrow-up.svg') {
    image.setAttribute('src', 'images/icon-arrow-down.svg');
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