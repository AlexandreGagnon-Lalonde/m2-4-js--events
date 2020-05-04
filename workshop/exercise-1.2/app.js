// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)

// select useful html elements
let button = document.querySelector('button');
let timeText = document.querySelector('.time-text');
let time = document.querySelector('#time');
let resultText = document.querySelector('.result');
let playZone = document.querySelector('.play-zone');
let countdown = document.querySelector('.countdown');
// create gameLoss variable for setTimeout
let gameLoss;

button.addEventListener('click', function(event) {
  // create random time between 3 and 5 seconds
  let randomTime = Math.floor(Math.random() * 3) + 3;
  // remove gameLoss changes
  clearTimeout(gameLoss);
  // update background to white after games
  playZone.style.backgroundColor = '#fff';
  // show how much time they have to click
  time.innerText = randomTime;
  // clear .result HTML
  resultText.innerText = '';
  // change button text
  button.innerText = 'Click, quick!'
  // text color to be visible on white
  playZone.style.color = '#000';
  // clear message for new game
  countdown.innerText = '';
  // delay before failure screen
  gameLoss = setTimeout(function() {
    // remove the win effects
    playZone.removeEventListener('click', gameWin);
    // custom message when game is over
    timeText.innerText = `You had ${randomTime} seconds to click`;
    // red background
    playZone.style.backgroundColor = '#ce3131';
    // loss message
    resultText.innerText = 'Better luck next time';
    // new button message after game
    button.innerText = 'Try again'
    // text color to white
    playZone.style.color = '#fff';
    // generic message for the player
    countdown.innerText = 'Press the button to try again'
  }, randomTime * 1000)
  // add the click listener for a win
  playZone.addEventListener('click', gameWin);
})

function gameWin() {
  // remove loss effect
  clearTimeout(gameLoss);
  // green background
  playZone.style.backgroundColor = 'green';
  // win message
  resultText.innerText = 'Success';
  // new button message after game
  button.innerText = 'Try again'
  // text color to white
  playZone.style.color = '#fff';
  // generic message for the player
  countdown.innerText = 'Press the button to try again'
}