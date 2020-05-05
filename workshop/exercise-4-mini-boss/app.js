let gameStartButton = document.querySelector('.gameStartButton');
let commands = document.querySelector('.command');
let body = document.querySelector('body');
let timeboard = document.querySelector('.result');
let timeValue = document.querySelector('.timeBoard');
let gameButton;
let amountOfSquare;
let gameTime;
let timeTimeout;
let buttonsClicked = [];
let buttonsInGame = [];

gameStartButton.addEventListener('click', function() {
  gameTime = document.querySelector('.timeToPlay');
  amountOfSquare = document.querySelector('.numberOfButtons');
  if (gameTime.value >= 1 && gameTime.value <= 100 && amountOfSquare.value <= 100 && amountOfSquare.value >= 1 ) {
    commands.style.display = 'none';
    timeValue.innerText = `${gameTime.value}`;
    timeboard.style.display = 'block';
    for(let i = 0; i < amountOfSquare.value; i++) {
      let top = Math.random() * 100;
      let left = Math.random() * 100;
      let widthHeight = (Math.random() * 30) + 30;
      gameButton = document.createElement('button');
      gameButton.classList.add('gameButton');
      gameButton.innerText = 'B';
      gameButton.style.width = `${widthHeight}px`;
      gameButton.style.height = `${widthHeight}px`;
      if (top > 95) {
        let bottom = 100 - top;
        gameButton.style.bottom = `${bottom}%`
      } else {
        gameButton.style.top = `${top}%`
      }
      if (left > 95) {
        let right = 100 - left;
        gameButton.style.right = `${right}%`
      } else {
        gameButton.style.left = `${left}%`
      }
      gameButton.addEventListener('click', toggleButton);
      body.appendChild(gameButton);
      buttonsInGame.push(gameButton);
    }
    timeTimeout = setTimeout(gameLoss, gameTime.value * 1000);
  } else {
    alert('Pick positive values above 0')
  }
})

function toggleButton() {
  this.classList.toggle('green');
  if (buttonsClicked.indexOf(this) === -1) {
    buttonsClicked.push(this);
  } else {
    buttonsClicked.pop();
  }
  if (buttonsClicked.length === buttonsInGame.length) {
    clearInterval(timeTimeout);
    timeboard.innerText = `Good job! You clicked all the buttons.`;
    timeboard.style.zIndex = '1';
    removeClickEvent();
  }
}

function gameLoss() {
  removeClickEvent();
  if ((buttonsInGame.length - buttonsClicked.length) === 1) {
    timeboard.innerText = `Better luck next time. You had 1 button to click left.`;
  } else {
    timeboard.innerText = `Better luck next time. You had ${buttonsInGame.length - buttonsClicked.length} buttons to click left.`;
  }
}

function removeClickEvent() {
  gameButton = document.querySelectorAll('.gameButton');
  for (let i = 0; i < gameButton.length; i++) {
    gameButton[i].removeEventListener('click', toggleButton);
  }
}