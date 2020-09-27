let printHighScore = function () {
  //get saved score from localstorage, or empty array
  let highScoreArr =
    JSON.parse(window.localStorage.getItem("high-scores")) || [];

  console.log("test test");

  highScoreArr.sort(function (a, b) {
    return a.score - b.score;
  });

  highScoreArr.forEach(function (score) {
    let scoreTag = document.createElement("li");
    scoreTag.textContent =
      score.nickname + " got " + score.score + " @ " + score.date;

    let scorePrintBox = document.getElementById("score-box");
    scorePrintBox.innerHTML = "";
    scorePrintBox.appendChild(scoreTag);
  });
};

let clearScore = function () {
  window.localStorage.removeItem("high-scores");
  window.location.reload();
};

let toClearScore = document.getElementById("clear-score");
toClearScore.onclick = clearScore;

printHighScore();
