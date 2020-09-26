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

//the process starts here:
//////////////
//time changing
function clockTick() {
  timeAll--;
  timeLeft.textContent = timeAll;
  if (timeAll <= 0) {
    quizDonePage();
  }
  console.log(timeAll);
}

//////////////
//////////////

//JUMP TO QUESTION PAGE
function showQuestionsPage() {
  //START TIMER
  timer = setInterval(clockTick, 1000);
  //starting time
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

  //clear previous choices
  currentQuestionChoices.innerHTML = "";

  //show choices
  currentQuestion.choices.forEach(function (choiceBtn, i) {
    // create choice buttons
    let eachChoiceBtn = document.createElement("button");
    eachChoiceBtn.setAttribute("class", "choice");
    eachChoiceBtn.setAttribute("value", choiceBtn);
    eachChoiceBtn.textContent = "►  " + choiceBtn;
    //add choices to choices-div
    currentQuestionChoices.appendChild(eachChoiceBtn);
    //click on one of the choices, will show current question feedback
    eachChoiceBtn.onclick = questionFeedback;
  });
}

///////////
//current question feedback
function questionFeedback() {
  timeLeft.textContent = timeAll;

  //if the choice is wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    feedbackResult.textContent = "😔 Wrong";
    //release feedback
    feedbackDiv.removeAttribute("class");
    timeAll -= 15;
    timeLeft.textContent = timeAll;
  }
  //if the choice is correct
  else {
    feedbackResult.textContent = "👍 Correct!";
    //release feedback
    feedbackDiv.removeAttribute("class");
    finalScoreNum += 20;
  }

  //test if all questions are done
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.onclick = quizDonePage;
  } else {
    nextBtn.onclick = moreQuestions;
  }
}

function moreQuestions() {
  timeLeft.textContent = timeAll;
  if (timeLeft <= 0) {
    quizDonePage();
  }
  //hide the feedback again
  feedbackDiv.setAttribute("class", "hide");
  //move to next question
  currentQuestionIndex++;
  /////////////////////////////////////////
  ///////will put into a function/////////
  console.log("Question Page " + currentQuestionIndex);
  //show questions
  let currentQuestion = questions[currentQuestionIndex];
  currentQuestionTitle.textContent = currentQuestion.title;
  //clear previous choices
  currentQuestionChoices.innerHTML = "";
  //show choices
  currentQuestion.choices.forEach(function (choiceBtn, i) {
    // create choice buttons
    let eachChoiceBtn = document.createElement("button");
    eachChoiceBtn.setAttribute("class", "choice");
    eachChoiceBtn.setAttribute("value", choiceBtn);
    eachChoiceBtn.textContent = "►  " + choiceBtn;
    //add choices to choices-div
    currentQuestionChoices.appendChild(eachChoiceBtn);
    //click on one of the choices, will show current question feedback
    eachChoiceBtn.onclick = questionFeedback;
  });
  ///////will put into a function/////////
  /////////////////////////////////////////
}

function quizDonePage() {
  //end timer
  clearInterval(timer);

  //hide the feedback again
  feedbackDiv.setAttribute("class", "hide");
  //hide the questions
  quizDiv.setAttribute("class", "hide");
  //show the quiz done div
  quizDoneDiv.removeAttribute("class");

  //show final score, chnage to timeleft * 5
  finalScore.textContent = finalScoreNum;
  console.log("the final score is " + finalScoreNum);
}

//RECEIVE CLICK - PROCERSS TO QUESTION PAGE
let startQuizHandler = function (event) {
  event.preventDefault();
  console.log("Now the quiz starts");

  showQuestionsPage();
};

//CLICK THE BUTTON TO START QUESTIONS
startBtn.onclick = startQuizHandler;
