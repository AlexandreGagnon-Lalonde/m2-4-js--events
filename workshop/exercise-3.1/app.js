// select the container for the buttons
let container = document.querySelector('.container');
// create button variable
let button;

for (let i = 0; i < 20; i++) {
  // create button every increment
  button = document.createElement('button');
  // append button to container
  container.appendChild(button);
  // add text to the button
  button.innerText = 'button';
  // change backgroundColor to green when button is clicked
  button.addEventListener('click', function() {
    // using THIS so each button has an event
    this.style.backgroundColor = '#31ce31';
  })
}