// grab html elements
let clockHour = document.querySelector('.clockHour');
let clockMinute = document.querySelector('.clockMinute');
let clockSecond = document.querySelector('.clockSecond');
let stopwatchHour = document.querySelector('.stopwatchHour');
let stopwatchMinute = document.querySelector('.stopwatchMinute');
let stopwatchSecond = document.querySelector('.stopwatchSecond');
let countdownHour = document.querySelector('.countdownHour');
let countdownMinute = document.querySelector('.countdownMinute');
let countdownSecond = document.querySelector('.countdownSecond');
let stopwatchStartButton = document.querySelector('.stopwatchStart');
let stopwatchStopButton = document.querySelector('.stopwatchStop');
let countdownStartButton = document.querySelector('.countdownStart');
// initiate a bunch of variables
// clock
let date;
// stopwatch
let stopwatchS = 0;
let stopwatchM = 0;
let stopwatchH = 0;
let stopwatchInterval;
// countdown
let countdownValue;
let countdownInterval;
let audio;

/***********************************************/
/******************** CLOCK ********************/
/***********************************************/

// do this every 1000ms
setInterval(function() {
  // create new date every second in the interval
  date = new Date();
  // hour update
  clockHour.innerText = `${date.getHours()}`;
  // add a zero if only one digit
  if (clockHour.innerText.length === 1) {
    clockHour.innerText = `0${date.getHours()}`;
  }
  // minute update
  clockMinute.innerText = `${date.getMinutes()}`;
  // add a zero if only one digit
  if (clockMinute.innerText.length === 1) {
    clockMinute.innerText = `0${date.getMinutes()}`;
  }
  // second update
  clockSecond.innerText = `${date.getSeconds()}`;
  // add a zero if only one digit
  if (clockSecond.innerText.length === 1) {
    clockSecond.innerText = `0${date.getSeconds()}`;
  }
}, 1000);

/***************************************************/
/******************** STOPWATCH ********************/
/***************************************************/

// click listener on the stopwatch start button using the function stopwatch
stopwatchStartButton.addEventListener('click', stopwatch)

function stopwatch() {
  // do this every 1000ms
  stopwatchInterval = setInterval(function() {
    // increment seconds
    stopwatchS++;
    // second update
    stopwatchSecond.innerText = stopwatchS % 60;
    // add a zero if only one digit
    if (stopwatchSecond.innerText.length <= 1) {
      stopwatchSecond.innerText = `0${stopwatchS % 60}`;
    }
    // do this every 60 * 1000ms
    if (stopwatchS % 60 === 0) {
      // increment minutes
      stopwatchM++;
      // minute update
      stopwatchMinute.innerText = stopwatchM % 60;
      // add a zero if only one digit
      if (stopwatchMinute.innerText.length === 1) {
        stopwatchMinute.innerText = `0${stopwatchM % 60}`;
      }
    }
    // do this every 3600 * 1000ms
    if (stopwatchS % 3600 === 0 && stopwatchM !== 0) {
      // increment hour
      stopwatchH++;
      // hour update
      stopwatchHour.innerText = stopwatchH % 60;
      // add a zero if only one digit
      if (stopwatchHour.innerText.length === 1) {
        stopwatchHour.innerText = `0${stopwatchH % 60}`;
      }
    }
  }, 1000);
  // change the stop button innerText to stop if reset is active
  stopwatchStopButton.innerText = 'Stop';
  // remove the start button functionality
  stopwatchStartButton.removeEventListener('click', stopwatch);
  // add the stop button functionality
  stopwatchStopButton.addEventListener('click', stopwatchStop);
  // remove the reset functionality
  stopwatchStopButton.removeEventListener('click', stopwatchReset);
}

function stopwatchReset() {
  // reinitiate the stopwatch
  stopwatchS = 0;
  stopwatchM = 0;
  stopwatchH = 0;
  // change stop button text to stop after clicking on reset
  stopwatchStopButton.innerText = 'Stop';
  // reset the stopwatch digits
  stopwatchSecond.innerText = `0${stopwatchS % 60}`;
  stopwatchMinute.innerText = `0${stopwatchM % 60}`;
  stopwatchHour.innerText = `0${stopwatchH % 60}`;
}

function stopwatchStop() {
  // remove the interval
  clearInterval(stopwatchInterval);
  // add the click event to start the stopwatch
  stopwatchStartButton.addEventListener('click', stopwatch)
  // change the stop button text to reset
  stopwatchStopButton.innerText = 'Reset';
  // add reset functionality
  stopwatchStopButton.addEventListener('click', stopwatchReset);
  // remove stop functionality
  stopwatchStopButton.removeEventListener('click', stopwatchStop);
}

/***************************************************/
/******************** COUNTDOWN ********************/
/***************************************************/

// add click event on countdown start button
countdownStartButton.addEventListener('click', countdown);

function countdown() {
  // grab the number input value 
  countdownValue = document.querySelector('input').value;
  // check if value is valid
  if (countdownValue <= 359999 && countdownValue > 0) {
    // do this every 1000ms
    countdownInterval = setInterval(function() {
      // second update
      countdownSecond.innerText = countdownValue % 60;
      // add a zero if only one digit
      if (countdownSecond.innerText.length === 1) {
        countdownSecond.innerText = `0${countdownValue % 60}`;
      }
      // minute update
      countdownMinute.innerText = Math.floor((countdownValue / 60) % 60);
      // add a zero if only one digit
      if (countdownMinute.innerText.length === 1) {
        countdownMinute.innerText = `0${Math.floor((countdownValue / 60) % 60)}`;
      }
      // hour update
      countdownHour.innerText = Math.floor(countdownValue / 3600);
      // add a zero if only one digit
      if (countdownHour.innerText.length === 1) {
        countdownHour.innerText = `0${Math.floor(countdownValue / 3600)}`;
      }
      // decrement value
      countdownValue--;
      // stop the countdown
      if (countdownValue === -1) {
        // remove the interval
        clearInterval(countdownInterval);
        // alert the user
        alert('Timer is up!');
        // grab the audio
        audio = new Audio('chime.mp3');
        // play the audio
        audio.play();
        // reset start button text to start again
        countdownStartButton.innerText = 'Start';
        // remove reset functionality
        countdownStartButton.removeEventListener('click', countdownReset);
        // add start functionality
        countdownStartButton.addEventListener('click', countdown);
      }
    }, 1000);
    // change start button to reset
    countdownStartButton.innerText = 'Reset';
    // remove start button functionality
    countdownStartButton.removeEventListener('click', countdown);
    // add reset functionality
    countdownStartButton.addEventListener('click', countdownReset);
  } else {
    alert('Pick a value between 1 and 359 999');
  }
}

function countdownReset() {
  // reset all digits to 00
  countdownSecond.innerText = `00`;
  countdownMinute.innerText = `00`;
  countdownHour.innerText = `00`;
  // reset start button text to start again
  countdownStartButton.innerText = 'Start';
  // clear interval to stop going down
  clearInterval(countdownInterval);
  // remove reset functionality
  countdownStartButton.removeEventListener('click', countdownReset);
  // add start functionality
  countdownStartButton.addEventListener('click', countdown);
}