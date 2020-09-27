//BUTTON TO START QUESTIONS
let startBtn = document.querySelector("#start-btn");

//QUESTIONS
let quizDiv = document.getElementById("quiz-div");
let currentQuestionTitle = document.querySelector("#questions");
let currentQuestionChoices = document.querySelector("#choices-div");
let eachChoice = document.querySelector("#choice");
let currentQuestionIndex = 0;

//QUIZ DONE
let quizDoneDiv = document.getElementById("quiz-done");
let finalScore = document.getElementById("final-score");
let finalScoreNum = 0;

//TIME
let timeAll = 100;
console.log(questions.length * 10);
let timeLeft = document.getElementById("time-left");
let timer;

//FEEDBACK
let feedbackDiv = document.getElementById("feedback-div");
let feedbackResult = document.getElementById("feedback");
let nextBtn = document.getElementById("next-btn");

//SCORE
let nicknameBox = document.getElementById("nickname");
let submitBtn = document.getElementById("submit-btn");

/////////////////// THE QUIZ STARTS ///////////////////

//TIMER
function clockTick() {
  timeAll--;
  timeLeft.textContent = timeAll;
  if (timeAll <= 0) {
    quizDonePage();
  }
  console.log("remaining time is " + timeAll);
}

//JUMP TO QUESTION PAGE
function showQuestionsPage() {
  //timer starts
  timer = setInterval(clockTick, 1000);
  //the timer show how much time left
  timeLeft.textContent = timeAll;
  //hide intro page
  let intro = document.getElementById("intro");
  intro.setAttribute("class", "hide");
  //ready to release questions
  quizDiv.removeAttribute("class");
  //show questions
  console.log("Question Page " + currentQuestionIndex + 1);
  let currentQuestion = questions[currentQuestionIndex];
  currentQuestionTitle.textContent = currentQuestion.title;
  //clear html placeholders
  currentQuestionChoices.innerHTML = "";
  //show choices
  currentQuestion.choices.forEach(function (choiceBtn, i) {
    //create choice buttons
    let eachChoiceBtn = document.createElement("button");
    eachChoiceBtn.setAttribute("class", "choice");
    eachChoiceBtn.setAttribute("id", "one-of-the-choice");
    eachChoiceBtn.setAttribute("value", choiceBtn);
    eachChoiceBtn.textContent = "►  " + choiceBtn;
    //add choices to choices-div
    currentQuestionChoices.appendChild(eachChoiceBtn);
    //click on one of the choices, will show current question feedback
    eachChoiceBtn.onclick = questionFeedback;
  });
}

//CURRENT QUESTION & CHOICE FEEDBACK
function questionFeedback() {
  let disableBtns = document.getElementById("quiz-div");
  disableBtns.setAttribute("class", "no-click");

  //the timer show how much time left
  timeLeft.textContent = timeAll;
  //if the choice is wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    feedbackResult.textContent = "😱 Incorrect answer!";
    //release feedback
    feedbackDiv.removeAttribute("class");
    timeAll -= 15;
    timeLeft.textContent = timeAll;
  }
  //if the choice is correct
  else {
    feedbackResult.textContent = "👍 Correct answer! 🎉";
    //release feedback
    feedbackDiv.removeAttribute("class");
    finalScoreNum += 20;
  }
  //check if all questions are done
  if (currentQuestionIndex === questions.length - 1) {
    //all questions are done
    nextBtn.onclick = quizDonePage;
  } else {
    //still work on questions
    nextBtn.onclick = moreQuestions;
  }
}

//THE NEXT QUESTION PAGE
function moreQuestions() {
  //the timer show how much time left
  timeLeft.textContent = timeAll;
  if (timeLeft <= 0) {
    quizDonePage();
  }
  //hide the feedback again
  feedbackDiv.setAttribute("class", "hide");
  //ready to release questions
  quizDiv.removeAttribute("class");
  //move to next question
  currentQuestionIndex++;
  //show questions
  let currentQuestion = questions[currentQuestionIndex];
  currentQuestionTitle.textContent = currentQuestion.title;
  //clear html placeholders
  currentQuestionChoices.innerHTML = "";
  //show choices
  currentQuestion.choices.forEach(function (choiceBtn, i) {
    // create choice buttons
    let eachChoiceBtn = document.createElement("button");
    eachChoiceBtn.setAttribute("class", "choice");
    eachChoiceBtn.setAttribute("id", "one-of-the-choice");
    eachChoiceBtn.setAttribute("value", choiceBtn);
    eachChoiceBtn.textContent = "►  " + choiceBtn;
    //add choices to choices-div
    currentQuestionChoices.appendChild(eachChoiceBtn);
    //click on one of the choices, will show current question feedback
    eachChoiceBtn.onclick = questionFeedback;
  });
}
//QUIZ END
function quizDonePage() {
  //end timer
  clearInterval(timer);
  //hide the feedback again
  feedbackDiv.setAttribute("class", "hide");
  //hide the questions
  quizDiv.setAttribute("class", "hide");
  //show the quiz done div
  quizDoneDiv.removeAttribute("class");
  //show final score (each correct choices is 20)
  finalScore.textContent = finalScoreNum;
  console.log("the final score is " + finalScoreNum);
}

//SUBMIT NAME & SAVE
submitBtn.onclick = saveHighScore;

//CHECK INPUT & SAVE HIGH SCORE
function saveHighScore(event) {
  event.preventDefault();
  let nicknameInput = document.querySelector("input[name='nickname']").value;
  //if no input
  if (!nicknameInput || nicknameInput == "") {
    alert("⚠️You need to submit your name!");
  }
  //if there is an input
  else {
    //get saved score from localstorage, or empty array
    let highScoreArr =
      JSON.parse(window.localStorage.getItem("high-scores")) || [];
    //get the quiz time
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    //sort the current score object info, for future save into array
    let currentScore = {
      score: finalScoreNum,
      nickname: nicknameInput,
      date: dateTime,
    };
    //save current score object to localstorage
    highScoreArr.push(currentScore);
    window.localStorage.setItem("high-scores", JSON.stringify(highScoreArr));
    //link to the your score page/last page
    window.location.href = "score.html";
  }
}

//More recent and much cleaner way to check user enter input use event.key
function checkIfEnter(event) {
  if (event.key === "Enter") {
    saveHighScore();
  }
}

//RECEIVE CLICK - PROCERSS TO QUESTION PAGE
let startQuizHandler = function (event) {
  event.preventDefault();
  console.log("Now the quiz starts");
  //show the first question
  showQuestionsPage();
};

//CLICK THE BUTTON TO START QUESTIONS
startBtn.onclick = startQuizHandler;
