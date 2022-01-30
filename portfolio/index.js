import i18Obj from './translate.js';

const portfolioButton = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio__img');
const allButton = document.querySelector('.portfolio__list');
const hamburger = document.querySelector('.burger-menu');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const language = document.querySelector('.language');
const langButton = document.querySelectorAll('.language-button');
const rulanguages = document.querySelector('.button-ru');
const enlanguages = document.querySelector('.button-en');
const themeArry = document.querySelectorAll(['body, .skills, .portfolio, .theme-container, .header__image, .hero__image, .navigation__link, .logo, .wrapper, .section-title, .portfolio-button, .hero__block, .hero__block .button, .contacts__form .button, .language-button.current, .price__item, .price__cost, .input, .textarea, .contacts__title, .contacts .section__container, .footer__data, .github__link, .school__link, .instagram__icon, .facebook__icon, .twitter__icon, .pinterest__icon'])
const themeButton = document.querySelector('.theme-container')
let lang = 'en'
let theme = 'dark'


// switch theme

themeButton.addEventListener('click', function changeTheme() {
  themeArry.forEach((themeArry) => {
    themeArry.classList.toggle('light-theme')
  })
});

// switch languages

function getTranslate(languages) {
  const item = document.querySelectorAll('[data-i18]');
  item.forEach((elem) => {
    elem.textContent = i18Obj[languages][elem.dataset.i18];
  })
}

rulanguages.addEventListener('click', () => getTranslate('ru', lang = 'ru'));
enlanguages.addEventListener('click', () => getTranslate('en', lang = 'en'));

// button portfolio current switch

allButton.addEventListener('click', function changeClassActive(event) {
  if(event.target.classList.contains('portfolio-button')) {
  portfolioButton.forEach(portfolioButton => {
    portfolioButton.classList.remove('active')
  });
}
  event.target.classList.add('active');

});

// // button leng current switch

language.addEventListener('click', function changeClassActive(event) {
  if(event.target.classList.contains('language-button')) {
  langButton.forEach(langButton => {
    langButton.classList.remove('current')
  });
}
  event.target.classList.add('current');
});

// // image portfolio switch

allButton.addEventListener('click', function changeImage(event) {
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

// // burger menu toggle button

hamburger.addEventListener('click', function toggleMenu() {
  hamburger.classList.toggle('burger-menu_active');
});

// // image cashe

function preloadImages() {
  for(let i = 1; i <= 6; i++) {
    seasons.forEach((item) => {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    });
    
  }
}
preloadImages();





function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
  }
}
window.addEventListener('load', getLocalStorage)




console.log("Смена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\nДополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +2(только язык)\n\n Итого 77")
