'use strict';

// Selecting Elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
const players = document.querySelectorAll('.player');
let currentScores, totalScores, activePlayer;

// Getters
const player = () => document.querySelector(`.player--${activePlayer}`);
const currentScore = () => document.getElementById(`current--${activePlayer}`);
const totalScore = () => document.getElementById(`score--${activePlayer}`);

// Initialize
function init() {
  currentScores = [0, 0];
  totalScores = [0, 0];
  activePlayer = 0;

  hideDice();
  for (let i = 0; i < players.length; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
    players[i].classList.remove('player--winner', 'player--active');
  }
  players[0].classList.add('player--active');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
}

// Dice Roller
function rollDice() {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  diceRoll !== 1 ? addScore(diceRoll) : changePlayer();

  imgDice.src = `dice-${diceRoll}.png`;
  if (imgDice.classList.contains('hidden')) imgDice.classList.remove('hidden');
}

// Init Functions
function hideDice() {
  imgDice.classList.add('hidden');
}

// Add value to active player's current score.
function addScore(val) {
  if (val === 0) {
    currentScores[activePlayer] = 0;
  } else {
    currentScores[activePlayer] += val;
  }
  currentScore().textContent = currentScores[activePlayer];
}

// Bank active player's current score to total.
function holdScore() {
  if (currentScores[activePlayer] === 0) return;

  // update script
  totalScores[activePlayer] += currentScores[activePlayer];
  currentScores[activePlayer] = 0;

  // update display
  totalScore().textContent = totalScores[activePlayer];
  addScore(0);
  hideDice();
  totalScores[activePlayer] >= 100 ? playerWin() : changePlayer();
}

// Change active player
function changePlayer() {
  addScore((currentScores[activePlayer] = 0));
  activePlayer = activePlayer === 0 ? 1 : 0;

  for (let i = 0; i < players.length; i++)
    players[i].classList.toggle('player--active');
}

// Declare a winner
function playerWin() {
  player().classList.remove('player--active');
  player().classList.add('player--winner');
  btnRoll.classList.add('hidden');
  btnHold.classList.add('hidden');
}

// Event Listeners
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', init);

// run
init();
