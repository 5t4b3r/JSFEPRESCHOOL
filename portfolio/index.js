import i18Obj from './translate.js';

console.log(i18Obj);

const allButtons = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio__img');
const portfolioBtns = document.querySelector('.portfolio__list');
const hamburger = document.querySelector('.burger-menu');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

// button current switch

portfolioBtns.addEventListener('click', function changeClassActive(event) {
  allButtons.forEach(allButtons => {
    allButtons.classList.remove('active');
  })
  event.target.classList.add('active');
});


// image portfolio switch

portfolioBtns.addEventListener('click', function changeImage(event) {
  if(event.target.dataset.season == "winter") {
      portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
  }

  else if(event.target.dataset.season == "spring") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
  }

  else if(event.target.dataset.season == "summer") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
  }

  else if(event.target.dataset.season == "autumn") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    
  }
});

// burger menu toggle button


hamburger.addEventListener('click', function toggleMenu() {
  hamburger.classList.toggle('burger-menu_active');

});

hamburger.addEventListener('click', toggleMenu);


// image cashe


function preloadImages() {
  for(let i = 1; i <= 6; i++) {
    seasons.forEach((item) => {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    });
    
  }
}
preloadImages();


console.log("Вёрстка соответствует макету. Ширина экрана 768px +48\n\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22")

