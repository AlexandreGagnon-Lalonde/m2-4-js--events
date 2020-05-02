// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// select body
let body = document.querySelector('body');
// initiate counter
let counter = 0;

body.addEventListener('click', function() {
  // increment counter
  counter++;
  // create div element
  let div = document.createElement('div');
  // insert div in body
  body.appendChild(div);
  // change background-color depending on odd or even row
  if (counter % 2 === 0) {
    // background color orange
    div.style.backgroundColor = '#ff7c50';
    // change innerText
    div.innerText = 'clack';
  } else {
    // background color blue
    div.style.backgroundColor = '#57f2ff';
    // change innerText
    div.innerText = 'click';
  }
})