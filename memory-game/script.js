const card = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

card.forEach(card => card.addEventListener('click', function flipCard() {
    card.classList.add('flip')
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
    }
}))