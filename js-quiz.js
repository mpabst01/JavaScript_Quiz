//As you proceed in your career as a web developer, 
//you will probably be asked to complete a coding assessment, 
//which is typically a combination of multiple-choice questions and interactive 
//challenges. Build a timed code quiz with multiple-choice questions. 
//This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. 
//It will also feature a clean and polished user interface and be responsive, ensuring that it 
//adapts to multiple screen sizes.


//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn");
var secondsLeft = (questions.length * 15 + 1);
var timerElement = document.getElementById("timer");
var submitScoreElement = document.querySelector("#submit-score");
var userScoreElement = document.getElementById("#user-score");
var userNameInput;
var questionHead = document.getElementById("#questions");
var answerChoices = document.getElementById("#answers");
var questions = [
    {
        title: "What is a global object that is used in the construction of arrays; which are high level, list-like objects?",
        choices: ["Array", "class", "global variable", "window"],
        answer: "Array"
    },
  
    {
        title: "Add to the end of an Array.",
        choices: [".pop", ".push", ".append", ".addChild"],
        answer: ".push"
    },
  
    {
        title: "Which of the following usually take in an argument/parameter? (choose 2)",
        choices: ["shift", "pop", "unshift", "push"],
        answer: ["push", "unshift"]
    },
  
    {
        title: "Find the index of an item in the Array.",
        choices: [".addBtn", ".indexOf", ".class[var]", ".pop"],
        answer: ".indexOf"
    },
  
    {
        title: "Which creates a new array from an array-like or iterable object?",
        choices: [".from", ".slice", ".addBtn", ".append"],
        answer: ".from"
    },
  
    {
        title: "All Array instances inherit from what?",
        choices: ["Array.prototype", ".sort", ".classOf", ".indexOf"],
        answer: "Array.prototype"
    },
  
  
  ];

var questionNumber = -1;
var answer;

function startTimer() {
 
  document.getElementById("home").classList.add('d-none');
  document.getElementById("quiz").classList.remove('d-none');

  // timer set and begins 120 second countdown
  setTimer();

  // create questions to display
  makeQuestions();
}

function setTimer() {

  var countdown = setInterval(function () {
      secondsLeft--;
      timerElement.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0 || questionNumber === questions.length) {
          clearInterval(countdown);
          setTimeout(displayScore, 500);
      }
  }, 1000);
}

function makeQuestions() {
  questionNumber++;
  answer = (questions[questionNumber].answer);

  questionHead.textContent = questions[questionNumber].title;
  answerChoices.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var q = 0; q < choices.length; q++) {
      var nextChoice = document.createElement("button");

      nextChoice.textContent = (choices[q]);
      var answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
  }
}

// display option to enter name to scoreboard
function displayScore() {
  document.getElementById("quiz").classList.add('d-none');
  document.getElementById("submit-score").classList.remove('d-none');
  userScoreElement.textContent = "FINAL SCORE: " + secondsLeft + ".";
}

// Event Listeners for Main Buttons
startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  addScore();
  
  window.location.href = './highscores.html';
});

function addScore () {
  userNameInput = document.getElementById("userName").value;
  
  // create a new object with name and score keys
var newScore = {
      name: userNameInput,
      score: secondsLeft
  };
  // check if there are scores in local storage first and take value
  //if not, make a blank array
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  // push object into score array
  highScores.push(newScore);
  // turn objects into an array of strings + put it into local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideFeedback(){
  var pElement = document.getElementsByClassName("feedback")[0];
  pElement.style.display='none'
}

function showFeedback(){
  var pElement = document.getElementsByClassName("feedback")[0];
  pElement.removeAttribute('style');
}

answerChoices.addEventListener("click", function (event) {
  var pElement = document.getElementsByClassName("feedback")[0];
  
  // evaluation of user's answer choices & feedback
  if (answer === event.target.textContent) {   
      pElement.innerHTML = "YES!";
      setTimeout(hideFeedback,1225);
      showFeedback();   
      
  } else {
      pElement.innerHTML = "WRONG.";
      setTimeout(hideFeedback,1225);
      secondsLeft = secondsLeft - 15;
      showFeedback();
  }    
  makeQuestions();
});





