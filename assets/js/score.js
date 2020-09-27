//THE PRINT HIGH SCORE FUNCTION
let printHighScore = function () {
  //get saved score from localstorage, or empty array
  let highScoreArr =
    JSON.parse(window.localStorage.getItem("high-scores")) || [];
  //compare which score is the hightest
  highScoreArr.sort(function (a, b) {
    return a.score - b.score;
  });
  //print the high score on the pink bar
  highScoreArr.forEach(function (score) {
    let scoreTag = document.createElement("li");
    scoreTag.textContent =
      score.nickname + " got " + score.score + " @ " + score.date;
    let scorePrintBox = document.getElementById("score-box");
    scorePrintBox.innerHTML = "";
    scorePrintBox.appendChild(scoreTag);
  });
};

//REMOVE & RELOAD LOCAL STORAGE
let clearScore = function () {
  window.localStorage.removeItem("high-scores");
  window.location.reload();
};

//CLICK CLEAR BTN
let toClearScore = document.getElementById("clear-score");
toClearScore.onclick = clearScore;

//CALL PRINT HIGH SCORE FUNCTION
printHighScore();
