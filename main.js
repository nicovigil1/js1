{
var round = 0;
var guess = document.querySelector('#guess');
var guessBox = document.querySelector('#number-guess');
var rangeBox = document.querySelector('.range-guess')
var range;
var min = document.querySelector('#min')
var max = document.querySelector('#max')
var displayGuess = document.querySelector('#display-guess');
// function pull_guess() {
//   displayGuess = guess;
// }

// validates guess

function guessCheck() {
  filterGuessRange(guess.value);
  if (parseInt(guess.value) === numbers[round]) {
    displayGuess.innerHTML = "BOOM!";
    round++;
    setTimeout(clearInput, 1000)
  } else if (parseInt(guess.value) > numbers[round]) {
    var response = "That is too high";
    document.querySelector('#display-guess').innerHTML = response;
  } else if (parseInt(guess.value) < numbers[round]) {
    var response = "That is too low";
    document.querySelector('#display-guess').innerHTML = response;
  } else if (guess == "negative") {
    document.querySelector('#display-guess').innerHTML = "positive integers only please"
  } else if (guess == "out of range") {
    document.querySelector('#display-guess').innerHTML = "that was out of your range"
  }
}

function filterGuessRange(the_guess) { 
  var guessInt = parseInt(the_guess)
  if (0 < guessInt && numbers.includes(guessInt)) {
    null
  } else if (numbers.includes(guessInt) == false && 0 < guessInt) {
    guess = "out of range"
  } else {
    guess = "negative"
  }
}


// clear guess input 
function clearInput() {
  guess = document.querySelector('#guess');
  guess.value = '';
  displayGuess.innerHTML = '';
}

function disableClear() {
  if (guess.value === "") {
    document.querySelector('#clear').disabled = true
  } else if (guess.value.length > 0) {
    document.querySelector('#clear').disabled = false
  }
}

document.addEventListener('click', disableClear)
guess.addEventListener('click', disableClear)
guess.addEventListener('keypress', disableClear)

// resets game back to round 0
function reset() {
  clearInput();
  round = 0;
}

// toggle view of range & guess divs

function toggleGuessBox(state) {
  guessBox.style.visibility = state;
}

function toggleRangeBox(state) {
 rangeBox.style.visibility = state;
}

// validate & generate array based off of max/min
function check_range() {
  range_state = (typeof numbers === "undefined")
  if (range_state = true) {
    toggleGuessBox('hidden');
  }
}

function setRange() {
  if (typeof(parseInt(min.value && max.value)) === "number") {
    min = min.value;
    max = max.value;
    generateNumbers(min, max);
    toggleRangeBox('hidden');
    toggleGuessBox('visible');
  } 
}

function generateNumbers(start, end) {
  numbers = []
  for (let number = start; number <= end; number++) {
    numbers.push(parseInt(number)) 
  }
}

// decides whether to display range or guess divs
window.onload = check_range()
}