/* Coding Quiz:
GIVEN I am taking a code quiz
WHEN I click the start button:
(needed: eventListener: click event) -- timer starts and I am presented with a question and a set of multiple-choice answers: (needed: timer-intervals)

WHEN I answer a question 
THEN I am presented with another question (eventlistener click event; if statement about correct or incorrect answer, )
WHEN I answer a question incorrectly
THEN time is subtracted from the clock ()
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score*/

//TIMER
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element 
var mainEl = document.querySelector("main");

//var secondsLeft = 75;
function countdown() {
    var timeLeft = 75;
  
var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timeEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timeEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);}

/*function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create game finish. 
        sendMessage();
      }
  
    }, 1000);
}*/
function displayMessage() {
    timeEl.textContent = " ";
    var initialsEl = document.createElement(".initials-form");
    initialsEl.getAttribute();
    mainEl.appendChild(initialsEl);
  };
  countdown();
