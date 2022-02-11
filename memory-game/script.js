const card = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard

card.forEach(card => card.addEventListener('click', function flipCard() {
    this.classList.add('flip')

    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this
    } else {
        hasFlippedCard = false
        secondCard = this

        checkMatch()
    }

    function checkMatch() {
        if(firstCard.dataset.img === secondCard.dataset.img) {
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('flip')
                    secondCard.classList.remove('flip')
                }, 1500)
                
            }
    }

   
}))