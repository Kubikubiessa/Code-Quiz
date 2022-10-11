/* Coding Quiz:
GIVEN I am taking a code quiz
WHEN I click the start button:
(needed: eventListener: click event) -- timer starts and I am presented with a question and a set of multiple-choice answers: (needed: timer-intervals)

WHEN I answer a question 
THEN I am presented with another question (eventlistener click event; if statement about correct or incorrect answer, )
WHEN I answer a question incorrectly
THEN time is subtracted from the clock (need: way to add time [10 seconds] to the countdown)
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score*/

//TIMER
// Selects element by class
var startGame = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");

// Selects element
var mainEl = document.querySelector("main");

//display the questions
startGame.addEventListener("click", function showQuestions() {
  document.getElementById("container").style.visibility = "visible";

  //Array of all questions and answers

  var questions = [
    {
      question: "Commonly used data types DO NOT include: ",
      answers: {
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers",
      },
      correctAnswer: "3",
    },
    {
      question: "The condition in an if/else statement is enclosed within: ",
      answers: {
        1: "quotes",
        2: "curly braces",
        3: "parentheses",
        4: "square brackets",
      },
      correctAnswer: "2",
    },
    {
      question: "Arrays in JavaScript can be used to store: ",
      answers: {
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above",
      },
      correctAnswer: "4",
    },

    {
      question: "String values must be enclosed within: ",
      answers: {
        1: "commas",
        2: "curly braces",
        3: "quotes",
        4: "parentheses",
      },
      correctAnswer: "3",
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is : ",
      answers: {
        1: "JavaScrip",
        2: "terminal/bash",
        3: "for loops",
        4: "console.log",
      },
      correctAnswer: "4",
    },
  ];

  document.getElementById("container").innerHTML += questions[0]; //[questions.length-1];
  startGame.addEventListener("click", function countdown() {
    //running the timer
    var timeLeft = 6;

    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timeEl.textContent = timeLeft + " seconds remaining";

        timeLeft--;
      } else if (timeLeft === 1) {
        timeEl.textContent = timeLeft + " second remaining";
        timeLeft--;
      } else {
        timeEl.textContent = "";
        //   to stop the timer with clearInterval
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
    function displayMessage() {
      mainEl.textContent = " ";
      var initialsEl = document.createElement("form");
      var h2El = document.createElement("h2");
      h2El.textContent = "All done!";
      var h3El = document.createElement("h3");
      h3El.textContent = "Your final score is:  " + timeLeft;
      var inputEl = document.createElement("input");
      inputEl.setAttribute("placeholder", "Enter initials");
      var buttonEl = document.createElement("button");
      buttonEl.textContent = "Submit";
      buttonEl.classList.add("submit-button");

      mainEl.appendChild(initialsEl);
      mainEl.appendChild(h2El);
      mainEl.appendChild(h3El);
      mainEl.appendChild(inputEl);
      mainEl.appendChild(buttonEl);

      buttonEl.addEventListener("click", function displayFinalPage() {
        mainEl.textContent = " ";
        var h2El = document.createElement("h2");
        h2El.textContent = "High scores";
        var highScoreListEl = document.createElement("ul");
        highScoreListEl.classList.add("high-scores");
        //inputEl.setAttribute("placeholder", "Enter initials");
        var backButtonEl = document.createElement("button");
        backButtonEl.textContent = "Go Back";
        buttonEl.classList.add("back-button");
        var clearButtonEl = document.createElement("button");
        clearButtonEl.textContent = "Clear High scores";
        clearButtonEl.classList.add("clear-button");

        mainEl.appendChild(h2El);
        mainEl.appendChild(highScoreListEl);
        mainEl.appendChild(backButtonEl);
        mainEl.appendChild(clearButtonEl);

        backButtonEl.addEventListener("click", showQuestions());

        backButtonEl.addEventListener("click", countdown());
      });
    }
  });
});

//for (let i = 0; i < questions.length; i++) {
/*var question1 = questions[0];
  var question2 = questions[1];
  var question3 = questions[2];
  var question4 = questions[3];
  var question5 = questions[4];*/
/*var questionSuccession = [];
  if (startGame.clicked === true) {
    questionSuccession = questionSuccession.concat(questions[0])
   };*/
