// vars

var time = 75;
var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questionArr");
var choicesEl = document.getElementById("choices");
var responseEl = document.getElementById("response");
var submitBtn = document.getElementById("submit")
var timerId;








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

//   
function getQuestion() {




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








