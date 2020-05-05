let gameStartButton = document.querySelector('.gameStartButton');
let commands = document.querySelector('.command');
let body = document.querySelector('body');
let timeboard = document.querySelector('.result');
let timeValue = document.querySelector('.timeBoard');
let gameDiv;
let gameButton;
let amountOfSquare = 5;
let gameTime = 3;
let gameStatus = [];
let timeTimeout;
// const gridSize;
// const gameTime;

gameStartButton.addEventListener('click', function() {
  commands.style.display = 'none';

  body.style.display = 'grid';
  body.style.gridTemplateColumns = 'repeat(20, 1fr)';
  body.style.gridTemplateRows = 'repeat(20, 1fr)';
  body.style.border = '1px solid black';

  timeValue.innerText = `${gameTime}`;

  timeboard.style.display = 'block';

  for(let i = 0; i < 400; i++) {
    gameDiv = document.createElement('div');
    gameDiv.classList.add('gameDiv');
    body.appendChild(gameDiv);
  }

  for(let i = 0; i < amountOfSquare; i++) {
    gameDiv = document.querySelectorAll('.gameDiv');
    gameButton = document.createElement('button');
    gameButton.classList.add('gameButton');
    gameButton.innerText = i + 1;
    gameButton.addEventListener('click', toggleButton);
    gameStatus.push(false);
    gameDiv[i].appendChild(gameButton);
  }

  timeTimeout = setTimeout(gameLoss, gameTime * 1000);
})

function toggleButton() {
  this.classList.toggle('green');
}

function gameLoss() {
  timeboard.innerText = `Better luck next time. You had ${12} buttons to click left.`;

  gameButton = document.querySelectorAll('.gameButton');
  for (let i = 0; i < gameButton.length; i++) {
    gameButton[i].removeEventListener('click', toggleButton);
  }
}