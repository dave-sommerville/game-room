'use strict';
/*------------------------------------------------>

<------------------------------------------------*/

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

function addClass(element, customClass) {
  element.classList.add(customClass);
  return element;
}

function removeClass(element, customClass) {
  element.classList.remove(customClass);
  return element;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*------------------------------------------------------->

<-------------------------------------------------------*/

const guessCounterDisplay = select('.guess-counter');
const playerInput = select('.player-input');
const accuracyReport = select('.accuracy');
const startBtn = select('.start');
const restartBtn = select('.restart');

/*------------------------------------------------------->
  Number Guesser 
<-------------------------------------------------------*/

let guessCounter = 0;
let compNum = 0;

function pickNum() {
  compNum = getRandomNumber(1, 100);
  return compNum;
}

function getGuess() {
  let playerGuess = Number(playerInput.value.trim());
  if (!isNaN(playerGuess) && playerGuess > 0 && playerGuess <= 100) {
    return playerGuess;
  } else {
    console.log('Please enter a valid number between 1 and 100');
    accuracyReport.textContent = 'Invalid input. Enter a number between 1 and 100.';
  }
}

function countGuess() {
  guessCounter++;
  guessCounterDisplay.textContent = `Guesses: ${guessCounter}`;
  return guessCounter;
}

function compareNum(playerNum) {
  if (compNum === playerNum) {
    console.log('You got it!');
    accuracyReport.textContent = 'You got it!';
  } else if (compNum > playerNum) {
    console.log('You guessed less than my number');
    accuracyReport.textContent = 'Too low!';
  } else {
    console.log('You guessed more than my number');
    accuracyReport.textContent = 'Too high!';
  }
}

function resetGame() {
  playerNum = 0;
  guessCounter = 0;
  compNum = pickNum();
  guessCounterDisplay.textContent = `Guesses: ${guessCounter}`;
  accuracyReport.textContent = '';
  playerInput.value = '';
}

listen('click', startBtn, () => {
  compNum = pickNum();
  console.log(`Random number picked: ${compNum}`);
  accuracyReport.textContent = 'Game started! Make your first guess.';
});

listen('keydown', playerInput, (ev) => {
  if (ev.key === 'Enter') {
    const playerNum = getGuess();
    if (playerNum !== undefined) {
      countGuess();
      compareNum(playerNum);
      playerInput.value = ''; 
    }
  }
});


listen('click', restartBtn, () => {
  resetGame();
});


/*------------------------------------------------>
Draggable, possibly 8 ball 
<------------------------------------------------*/

/*const draggable = select('#draggable');


//    Gotta take the functions out, but action is very smooth
draggable.onmousedown = function(event) {
    let shiftX = event.clientX - draggable.getBoundingClientRect().left;
    let shiftY = event.clientY - draggable.getBoundingClientRect().top;
    // UMMMM, I should be able to css this, 
    draggable.style.position = 'absolute';
    draggable.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        draggable.style.left = pageX - shiftX + 'px';
        draggable.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    draggable.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        draggable.onmouseup = null;
    };
};

draggable.ondragstart = function() {
    return false;
};


/*------------------------------------------------>
Matching Game 
<------------------------------------------------


const cards = [
  { id: 1, img: 'img1.png' },
  { id: 2, img: 'img2.png' },
  // Add more cards
];

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.id === secondCard.dataset.id;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));
*/



