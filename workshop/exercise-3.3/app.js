// select the container for the buttons
let container = document.querySelector('.container');
// create button variable
let button;

for(let i = 0; i < 20; i++) {
  // create random number between 0 and 99.99
  let top = Math.random() * 100;
  let left = Math.random() * 100;
  // create button every increment
  button = document.createElement('button');
  // add the position to absolute for every button
  button.style.position = 'absolute';
  // change position value from top to bottom if value too high
  if (top > 95) {
    // calculate bottom number
    let bottom = 100 - top;
    // update button parameter
    button.style.bottom = `${bottom}%`;
  } else {
    // update button parameter
    button.style.top = `${top}%`;
  }
  // change position from left to right if value too high
  if (left > 95) {
    // calculate right number
    let right = 100 - left;
    // update button parameter
    button.style.right = `${right}%`;
  } else {
    // update button parameter
    button.style.left = `${left}%`;
  }
  // add B text to buttons
  button.innerText = 'B';
  // append the buttons to the container
  container.appendChild(button);
  // toggle the button backgroundColor every click
  button.addEventListener('click', function() {
    this.classList.toggle('green');
  })
}