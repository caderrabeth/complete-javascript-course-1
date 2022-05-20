'use strict';

// Selecting Elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
const players = document.querySelectorAll('.player');
let currentScores = [0, 0];
let totalScores = [0, 0];
let activePlayer = 0;

// Setup new game
const newGame = function () {
  imgDice.classList.add('hidden');
  for (let i = 0; i < players.length; i++) {
    players[i].querySelector('.score').textContent = 0;
    players[i].querySelector('.current-score').textContent = 0;
  }
  if (!players[0].classList.contains('player--active')) changePlayer();
};

// Initialize game
newGame();
for (let i = 0; i < players.length; i++) {
  score[i] = Number(players[i].querySelector('.score').textContent);
  currentScore[i] = Number(
    players[i].querySelector('.current-score').textContent
  );
}

// Dice Roller
const rollDice = function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  if (imgDice.classList.contains('hidden')) imgDice.classList.remove('hidden');
  imgDice.src = `dice-${diceRoll}.png`;
  diceRoll !== 1 ? addScore(diceRoll) : addScore(0);
};

// Add value to active player's current score.
const addScore = function (val) {
  const currentScore = document
    .querySelector('.player--active')
    .querySelector('.current-score');
  if (val === 0) {
    currentScore.textContent = 0;
    changePlayer();
  } else {
    const cval = Number(currentScore.textContent);
    currentScore.textContent = cval + val;
  }
};

// Bank active player's current score to total.
const holdScore = function () {
  const currentScore = document
    .querySelector('.player--active')
    .querySelector('.current-score');
  const totalScore = document
    .querySelector('.player--active')
    .querySelector('.score');
  if (Number(currentScore.textContent) === 0) return;
  totalScore.textContent =
    Number(currentScore.textContent) + Number(totalScore.textContent);
  currentScore.textContent = 0;
  changePlayer();
};

// Change active player
const changePlayer = function () {
  for (let i = 0; i < players.length; i++) {
    players[i].classList.contains('player--active')
      ? players[i].classList.remove('player--active')
      : players[i].classList.add('player--active');
  }
  activePlayer === 0 ? 1 : 0;
};

// Event Listeners
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);
