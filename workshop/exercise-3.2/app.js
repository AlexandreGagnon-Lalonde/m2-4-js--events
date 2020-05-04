// select the container for the buttons
let container = document.querySelector('.container');
// create button variable
let button;

for(let i = 0; i < 20; i++) {
  // create button every increment
  button = document.createElement('button');
  // append button to container
  container.appendChild(button);
  // add text to the button
  button.innerText = 'button';
  // toggle backgroundColor when button is clicked
  button.addEventListener('click', function() {
    // using THIS so each button has an event
    this.classList.toggle('green');
  })
}