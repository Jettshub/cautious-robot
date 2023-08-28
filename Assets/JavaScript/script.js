// vars

var time = 75;
var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questionArr");
var choicesEl = document.getElementById("choices");
var responseEl = document.getElementById("response");
var submitBtn = document.getElementById("submit")
var timerId;
var questionIndex = 0;







// start button/Start quiz

function startButton() {
    var startQuiz = document.getElementById("intro");
    startQuiz.setAttribute("class", "intro hide");
        
    questionsEl.setAttribute("class", " ");
   
    // starts timer 
    timerId = setInterval(function () {
        setTimer();
      }, 1000);
      // Display start time
      timerEl.textContent = time;

      getQuestion();
};

startBtn.onclick = startButton;

// timer
function setTimer() {
    time--;
    timerEl.textContent = time;
  
    if (time <= 0) quizEnd();
};

// grabs question from array  
function getQuestion() {
   var currentQuestion = questionArr[questionIndex];
    // shows question    
   questionsEl.children[0].textContent = currentQuestion.question;
    // keeps choices with the question
   while (choicesEl.hasChildNodes()) {
    choicesEl.removeChild(choicesEl.lastChild);
   }
    // populates the amount of choices  
   for (var i = 0; i < currentQuestion.choices.length; i++) {
    // creates button for choices
    var choiceButton = document.createElement("button");
    // shows the choices of the current question
    choiceButton.textContent = currentQuestion.choices[i];
    // shows choices button
    choicesEl.appendChild(choiceButton);
   }
    // adds a click function to each choice button   
    choicesEl.children[0].addEventListener("click", function (event) {
        choiceClick(choicesEl.children[0]);
    });
    choicesEl.children[1].addEventListener("click", function (event) {
        choiceClick(choicesEl.children[1]);
    });
    choicesEl.children[2].addEventListener("click", function (event) {
        choiceClick(choicesEl.children[2]);
    });
    choicesEl.children[3].addEventListener("click", function (event) {
        choiceClick(choicesEl.children[3]);
    });
};

// function that happens when choice is made for question
function choiceClick() {



}

// answer question

// next question

// wrong answer

// time reduced from wrong answer

// timer ending/all questions answered

// game over
function endScreen() {

}
// leaderboard seperate js file?

// questions seperate js file?

// GIVEN I am taking a code quiz
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








