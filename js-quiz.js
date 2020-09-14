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

function buildQuiz(){}

function showResults(){}

const myQuestions = [
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



buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);



