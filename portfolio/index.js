const allButtons = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio__img');
const portfolioBtns = document.querySelector('.portfolio__list');
const hamburger = document.querySelector('.burger-menu');

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
    portfolioBtns.classList.add('active');
  }

  else if(event.target.dataset.season == "summer") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
  }

  else if(event.target.dataset.season == "autumn") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    
  }
});

// burger menu toggle button

function toggleMenu() {
  hamburger.classList.toggle('burger-menu_active');
}

hamburger.addEventListener('click', toggleMenu);




$(function() {  
  $('.button')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});



console.log("-Вёрстка соответствует макету. Ширина экрана 768px +48\n\n-Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n\n-На ширине экрана 768рх и меньше реализовано адаптивное меню +22")