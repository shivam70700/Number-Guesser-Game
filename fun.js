let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('please enter a valid number')
    } else{
        prevGuess.push(guess)
        if(numGuess === 9){
            displayGuess(guess)
            displayMessage(`Game Over! random number = ${randomNumber}`);
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it Right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Too Low`)
    } else {
        displayMessage(`Too High`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remain.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute = ('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e) {
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remain.innerHTML = `${10-numGuess}`
        lowOrHi.innerHTML = ''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}