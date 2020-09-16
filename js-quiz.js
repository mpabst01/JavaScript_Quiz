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

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');




var startQuizBtn = document.getElementById('startQuizBtn')
startQuizBtn.addEventListener("click", startQuiz);

function startQuiz(){
    timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time left: " + timeLeft;
        if (timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
    }, 1000);
    quizMain.style.display = "block";

}

function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}


function showResults(){}

const myQuestions = [
    {
        question: "What is a global object that is used in the construction of arrays; which are high level, list-like objects?",
        answers: {
            a: ".forEach",
            b: "item index array",
            c: "array",
            d: "Array.prototype",
        },
        correctAnswer: "array"
    },
    { 
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    }
]

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}


buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);



