// vars
var secondsLeft = 75;
var time = questionArr.length * 15;








// start button/Start quiz
function startButton(){
    var startQuiz = document.getElementById("intro");
    startQuiz.setAttribute("class", "intro hide")


}
// timer
function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "time "+ secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to show end screen
        endScreen();
      }
  
    }, 1000);
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








