'use strict';

let target;
newTarget();
let score = 20;
let highscore = 0;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const txtNumber = document.querySelector('.number');

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!score) return;

  if (!guess) {
    setMessage('No Number!');
  } else if (guess < 1 || guess > 20) {
    setMessage('Out of Range!');
  } else if (guess === target) {
    setMessage('You Win!');
    setBackground('#60b347');
    txtNumber.textContent = target;
    txtNumber.style.width = '30rem';
  } else {
    updateScore(--score);
    guess > target ? setMessage('Too High!') : setMessage('Too Low!');
  }

  if (!score) txtMessage.textContent = 'You Lost!';
});

btnAgain.addEventListener('click', function () {
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
    highscore = score;
  }

  newTarget();
  setBackground('#222');
  txtNumber.textContent = '?';
  txtNumber.style.width = '15rem';
  score = 20;
  updateScore(20);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});

function newTarget() {
  target = Math.ceil(Math.random() * 20);
}

const updateScore = val => (document.querySelector('.score').textContent = val);

const setBackground = val =>
  (document.querySelector('body').style.backgroundColor = val);

const setMessage = val =>
  (document.querySelector('.message').textContent = val);
