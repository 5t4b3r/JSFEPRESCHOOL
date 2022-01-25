const hamburger = document.querySelector('.burger-menu');


hamburger.addEventListener('click', function toggleMenu() {
  hamburger.classList.toggle('burger-menu_active');
});

console.log("Вёрстка соответствует макету. Ширина экрана 768px +48\n\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22")