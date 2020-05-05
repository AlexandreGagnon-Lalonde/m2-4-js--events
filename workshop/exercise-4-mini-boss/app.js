// html elements selection
let gameStartButton = document.querySelector('.gameStartButton');
let commands = document.querySelector('.command');
let body = document.querySelector('body');
let timeboard = document.querySelector('.result');
let timeValue = document.querySelector('.timeBoard');
let buttonValue = document.querySelector('.buttonBoard');
// initiate different variables for the game
let gameButton;
let amountOfSquare;
let gameTime;
let timeTimeout;
let buttonsClicked = [];
let buttonsInGame = [];

gameStartButton.addEventListener('click', function() {
  //select the two inputs from the user
  gameTime = document.querySelector('.timeToPlay');
  amountOfSquare = document.querySelector('.numberOfButtons');
  // make sure the user doesn't try to mess up the inputs
  if (gameTime.value >= 1 && gameTime.value <= 100 && amountOfSquare.value <= 100 && amountOfSquare.value >= 1 ) {
    // hide the commands and the start button
    commands.style.display = 'none';
    // update time and button value in the title
    timeValue.innerText = `${gameTime.value}`;
    buttonValue.innerText = `${amountOfSquare.value}`;
    // make the title board appear
    timeboard.style.display = 'block';
    // for loop to add all buttons
    for(let i = 0; i < amountOfSquare.value; i++) {
      // create random values for position and size of button
      let top = Math.random() * 100;
      let left = Math.random() * 100;
      let widthHeight = (Math.random() * 30) + 30;
      // create the button
      gameButton = document.createElement('button');
      // style the button
      gameButton.classList.add('gameButton');
      gameButton.innerText = 'B';
      gameButton.style.width = `${widthHeight}px`;
      gameButton.style.height = `${widthHeight}px`;
      // make sure the button doesn't disappear at the bottom
      if (top > 95) {
        let bottom = 100 - top;
        gameButton.style.bottom = `${bottom}%`
      } else {
        gameButton.style.top = `${top}%`
      }
      // make sure the bottom doesn't disappear to the right
      if (left > 95) {
        let right = 100 - left;
        gameButton.style.right = `${right}%`
      } else {
        gameButton.style.left = `${left}%`
      }
      // add the event to toggle the green background
      gameButton.addEventListener('click', toggleButton);
      // add the button to the body
      body.appendChild(gameButton);
      // push the button in an array to compare later
      buttonsInGame.push(gameButton);
    }
    // gameLoss function after the time set by the user
    timeTimeout = setTimeout(gameLoss, gameTime.value * 1000);
  } else {
    // alert the user if value is not between 1 and 100
    alert('Pick a value between 1 and 100')
  }
})

function toggleButton() {
  // toggle the class .green for each button
  this.classList.toggle('green');
  // add and remove buttons to Clicked array
  if (buttonsClicked.indexOf(this) === -1) {
    // push button in another array if clicked
    buttonsClicked.push(this);
  } else {
    // remove button if already clicked
    buttonsClicked.pop();
  }
  // condition for game win
  if (buttonsClicked.length === buttonsInGame.length) {
    // remove gameLoss function after timeout
    clearInterval(timeTimeout);
    // update winning text
    timeboard.innerText = `Good job! You clicked all the buttons.`;
    timeboard.style.zIndex = '1';
    // remove click event to all buttons
    removeClickEvent();
  }
}

function gameLoss() {
  // remove click event to all buttons
  removeClickEvent();
  // custom losing message if theres 1 or more button left
  if ((buttonsInGame.length - buttonsClicked.length) === 1) {
    timeboard.innerText = `Better luck next time. You had 1 button to click left.`;
  } else {
    timeboard.innerText = `Better luck next time. You had ${buttonsInGame.length - buttonsClicked.length} buttons to click left.`;
  }
}

function removeClickEvent() {
  // get all buttons
  gameButton = document.querySelectorAll('.gameButton');
  // loop through all buttons and remove the click event
  for (let i = 0; i < gameButton.length; i++) {
    gameButton[i].removeEventListener('click', toggleButton);
  }
}