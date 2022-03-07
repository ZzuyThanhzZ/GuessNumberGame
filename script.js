'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 500) + 1;
let score = 100;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

function displayScore(score) {
    return document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {   //When there is no input
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {    //When player wins
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {    //When guess is wrong
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score -= 10;
            displayScore(score);
        } else {
            displayMessage('🤦‍♂️ You lost the game!');
            displayScore(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 100;
    secretNumber = Math.trunc(Math.random() * 500) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})