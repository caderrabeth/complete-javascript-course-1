'use strict';

const target = Math.ceil(Math.random() * 20);

const btnCheck = document.querySelector('.check');
const userGuess = document.querySelector('.guess');
const txtNumber = document.querySelector('.number');
let score = 20;

txtNumber.textContent = target;

btnCheck.addEventListener('click', function () {
  const txtMessage = document.querySelector('.message');
  const guess = Number(userGuess.value);

  if (!score) return;

  if (!guess) {
    txtMessage.textContent = 'No Number!';
  } else if (guess === target) {
    txtMessage.textContent = 'You Win!';
  } else if (guess > target) {
    txtMessage.textContent = 'Too High!';
    updateScore(--score);
  } else if (guess < target) {
    txtMessage.textContent = 'Too Low!';
    updateScore(--score);
  }

  if (!score) txtMessage.textContent = 'You Lost!';
});

function updateScore(val) {
  document.querySelector('.score').textContent = val;
}
