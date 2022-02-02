const hamburger = document.querySelector(".burger-menu");
const navigationButton = document.querySelectorAll(".navigation__item");
const allButton = document.querySelector(".navigation__list");
const mainImg = document.querySelector(".main-index");

// burger menu toggle button

hamburger.addEventListener("click", function toggleMenu() {
  hamburger.classList.toggle("burger-menu_active");
});

// button navigation current switch

allButton.addEventListener("click", function changeClassActive(event) {
  if (event.target.classList.contains("navigation__item")) {
    navigationButton.forEach((navigationButton) => {
      navigationButton.classList.remove("active");
    });
  }
  event.target.classList.add("active");
});

// audio player
const playerButton = document.querySelector(".player-button");
const audio = document.querySelector("audio");
const songs = ["forest", "solovey", "drozd", "javoronok", "zarynka", "slavka"];
let songIndex = 0;

function loadSong(song) {
  audio.src = `./assets/audio/${song}.mp3`;
}

loadSong(songs[songIndex]);

function playAudio(event) {
  audio.classList.add("play");
  playerButton.style.backgroundImage = `url(./assets/svg/pause.svg`;
  audio.play();
}

function pauseAudio() {
  audio.classList.remove("play");
  playerButton.style.backgroundImage = `url(./assets/svg/play.svg`;
  audio.pause();
}

playerButton.addEventListener("click", () => {
  const isPlay = audio.classList.contains("play");
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
});

// switch image

allButton.addEventListener("click", function changeImage(event) {
  event.target.dataset.item;
  mainImg.style.backgroundImage = `url(./assets/img/${event.target.dataset.item}.jpg)`;
  audio.src = `./assets/audio/${event.target.dataset.item}.mp3`;
  playAudio();
});
