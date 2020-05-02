// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// select the body
let body = document.querySelector('body');
// select the button to start the game
let button = document.querySelector('Button');
// select the paragraph to show the results
let resultHTML = document.querySelector('p');
// variable for the delay function call
let time;

button.addEventListener('click', function(event) {
  // update background to not be red or green
  resultHTML.style.backgroundColor = '#fff';
  // update message to be neutral
  resultHTML.innerText = 'You have 1 second to click in the white area';
  // change result color to make it visible
  resultHTML.style.color = '#000';
  // change button message
  button.innerText = 'Click, Quick!';
  // stop the click from the button to bubble up to the body
  event.stopPropagation();
  // call the start game function
  startGame();
})

function gameWin() {
  // change result background to green
  resultHTML.style.backgroundColor = '#31ce31';
  // change result text color to white 
  resultHTML.style.color = '#fff';
  // change result message
  resultHTML.innerText = 'Success';
  // change button message
  button.innerText = 'Good job, Try again';
  // clear the timeout to cancel the red screen to appear
  clearTimeout(time);
}

function gameLoss() {
  // change result background to red
  resultHTML.style.backgroundColor = '#ce3131';
  // change result text color to white 
  resultHTML.style.color = '#fff';  
  // change result message
  resultHTML.innerText = 'Better luck next time';  
  // change button message
  button.innerText = 'Try again';  
  // remove the event so the function gameWin doesn't work
  body.removeEventListener('click', gameWin);
}

function startGame() {
  // setTimeout so that after 1second game is lost
  time = setTimeout(gameLoss, 1000);
  // click event listener to win game
  body.addEventListener('click', gameWin)
}