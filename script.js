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
// Selects element by class
var startGame = document.querySelector(".start-button");
var gameInstructions = document.querySelector(".instructions")
var timeEl = document.querySelector(".time");
var quizContainer = document.querySelector("#container");
var answerContainer = document.querySelector("#answer-container");
var score = document.getElementById("score");
var formEl = document.querySelector("form");
var h3El = document.querySelector("#final-score");
var h2El = document.querySelector("#all-done");
//var inputEl = document.querySelector("#initials-input");
var buttonEl = document.querySelector(".submit-button");
var allScores = document.getElementById("all-scores");
var initialsEl = document.getElementById("initials-input");

// Selects element
var mainEl = document.querySelector("main");
var nextMoveIndex = 1;
var timeLeft = 15;
var gameScores = [];

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
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within: ",
    answers: {
      1: "quotes",
      2: "curly braces",
      3: "parentheses",
      4: "square brackets",
    },
    correctAnswer: "curly braces",
  },
  {
    question: "Arrays in JavaScript can be used to store: ",
    answers: {
      1: "numbers and strings",
      2: "other arrays",
      3: "booleans",
      4: "all of the above",
    },
    correctAnswer: "all of the above",
  },

  {
    question: "String values must be enclosed within: ",
    answers: {
      1: "commas",
      2: "curly braces",
      3: "quotes",
      4: "parentheses",
    },
    correctAnswer: "quotes",
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
    correctAnswer: "console.log",
  },
];

//display the questions and hide game start.
startGame.addEventListener("click", function questionsLayout() {
  document.getElementById("container").style.visibility = "visible";
  startGame.setAttribute("style", "display: none");
  gameInstructions.setAttribute("style", "display: none");

});
  
startGame.addEventListener("click", function () {
  countdown();
  showQuestions(questions[0]);
});

//TIMER
//document.getElementById("container").innerHTML += questions[0]; //[questions.length-1];
function countdown() {
  //running the timer
  var timeInterval = setInterval(function () {
     // Display time and decrease by second
     timeEl.textContent = timeLeft;
     timeLeft--;


     // Once the timer hits zero, game is ended
     if (timeLeft <= 0) {
         clearInterval(timeInterval);
         timeEl.textContent = "0";
         quizContainer.innerHTML = " ";
         nextMoveIndex = 0;
         quizContainer.setAttribute("display", "none");
         //startGame.setAttribute("style", "display: block;");
         h3El.textContent = "Your final score is:  " + timeLeft;
          
     } 
     // Stop timer when user finished all the questions and end game
     else if (nextMoveIndex === 5) {
         clearInterval(timeInterval);
         // Reset stats so user can start a new game
         questionNumber = 0;
         displayMessage();
          
     }

 }, 1000);
} 
//traverse the dom to target needed question elements to display, match questions and answers and append.
function showQuestions(currentQuestion) {
  var questionEl = document.querySelector(".question-title");
  var answersEl = document.querySelector(".questions-list");
  var possibleAnswer1 = document.querySelector("#possible-answer1");
  var possibleAnswer2 = document.querySelector("#possible-answer2");
  var possibleAnswer3 = document.querySelector("#possible-answer3");
  var possibleAnswer4 = document.querySelector("#possible-answer4");

  questionEl.textContent = currentQuestion.question;
  possibleAnswer1.textContent = currentQuestion.answers[1];
  possibleAnswer2.textContent = currentQuestion.answers[2];
  possibleAnswer3.textContent = currentQuestion.answers[3];
  possibleAnswer4.textContent = currentQuestion.answers[4];

  answersEl.append(possibleAnswer1);
  answersEl.append(possibleAnswer2);
  answersEl.append(possibleAnswer3);
  answersEl.append(possibleAnswer4);
  quizContainer.append(questionEl);
  quizContainer.append(answersEl);
}

//adding the moving from one question to the next until the end of the quiz, including correct and incorrect answer events
quizContainer.addEventListener("click", function (event) {
  if (nextMoveIndex === 6 && timeLeft > 1) {
    answerContainer.textContent = "FINISHED!";
    clearInterval();
    h3El.textContent = timeLeft;
    //score.textContent = timeLeft;
  } else if (
    event.target.textContent !== questions[nextMoveIndex - 1].correctAnswer
  ) {
    answerContainer.textContent = "Incorrect answer.";
    timeLeft -= 10;
  } else {
    answerContainer.textContent = "Correct answer!";
    console.log(timeLeft);
    nextMoveIndex++;
    showQuestions(questions[nextMoveIndex - 1]);
  }
});
 
function displayMessage() {
  quizContainer.style.visibility = "hidden";
  formEl.style.visibility = "visible";
  h3El.style.visibility = "visible";
  h3El.textContent = "Your final score is:  " + timeLeft;
  
}



 
buttonEl.addEventListener("click", function displayFinalPage() {
  mainEl.textContent = " ";
  allScores.style.visibility = "visible"
  //var h2El = document.createElement("h2");
  //h2El.textContent = "High scores";
  //var highScoreListEl = document.createElement("ul");
  //highScoreListEl.classList.add("high-scores");
  var backButtonEl = document.createElement("button");
  backButtonEl.textContent = "Go Back";
  backButtonEl.classList.add("back-button");
  var clearButtonEl = document.createElement("button");
  clearButtonEl.textContent = "Clear";
  clearButtonEl.classList.add("clear-button");

  mainEl.appendChild(h2El);
  //mainEl.appendChild(highScoreListEl);
  mainEl.appendChild(backButtonEl);
  mainEl.appendChild(clearButtonEl);


  backButtonEl.addEventListener("click", showQuestions())
  {
    document.getElementById("container").style.visibility = "visible";

  backButtonEl.addEventListener("click", countdown());
}})
var initials = document.getElementById('initials-input');
buttonEl.addEventListener("click", function (event) {
event.preventDefault();

        console.log(initials)    
const results = {

  initials: initials.value.trim(),
  score: timeLeft
}
gameScores.push(results);
console.log(gameScores)
  // gameScores();
  setTimeout(()=>
renderGameScores(), 2000)

})
//add high scores in list
// var allScores = document.querySelector("#all-scores");
function renderGameScores() {
  for (let i = 0; i < gameScores.length; i++){
  console.log(gameScores[i]);
  var highScore = document.createElement("li");
  // console.log(gameScores[i], 'got here')
  highScore.innerHTML = gameScores[i].initials + " " + gameScores[i].score;
   allScores.style.visibility = "visible";
  allScores.appendChild(highScore);
  console.log(allScores)
  }
}

function storeResults() {
  console.log(gameScores);
  localStorage.setItem("games", JSON.stringify(gameScores));
}

function pickUp() {
  var storeResults = JSON.parse(localStorage.getItem("games"));
  if (storeResults !== null) {
    gameScores = storeResults;
  }
}
pickUp();

