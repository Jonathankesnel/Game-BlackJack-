let player = {
    name: 'Jonathan',
    chips: '$150'
}


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl =  document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " +  player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()* 13) + 1
    
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    }
     else {
        return randomNumber
    }
    
   
}




function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secoundCard = getRandomCard()
    cards = [firstCard , secoundCard]
    sum = firstCard + secoundCard
    
    renderGame()
}


function renderGame() {

    
    cardsEl.textContent = "Cards: "

    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }

    sumEl.textContent = 'Sum: ' + sum

    if(sum <= 20) {
        message = "Do you want to draw a new card? :) "
    } else if(sum === 21) {
        message = "Woohoo! You've got a BlackJack!!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
  
    
}

function newCard() {
        if(hasBlackJack === false && isAlive === true) {

            let card = getRandomCard()
            sum += card
            cards.push(card)
           
            renderGame()

        }
   
}



/*


let sentence = ["Hello ", "My ", "name ", "is ", "Per"]
let greetingEl = document.getElementById('greeting-el')

for(i = 0; i <= sentence.length; i++){
    greetingEl.textContent = sentence
} */