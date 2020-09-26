//BUTTON TO START QUESTIONS
let startBtn = document.querySelector("#start-btn");

//QUESTIONS
let quizDiv = document.getElementById("quiz-div");
let currentQuestionTitle = document.querySelector("#questions");
let currentQuestionChoices = document.querySelector("#choices-div");
let eachChoice = document.querySelector("#choice");
let currentQuestionIndex = 0;

//TIMER
let timeAll = questions.length * 15;
let timeLeft = document.getElementById("time-left");
let timerId;

//FEEDBACK
let feedbackDiv = document.getElementById("feedback-div");
let feedbackResult = document.getElementById("feedback");
let nextBtn = document.getElementById("next-btn");

//JUMP TO QUESTION PAGE
function showQuestionsPage() {
  console.log("Question Page" + currentQuestionIndex);

  //hide intro page
  let intro = document.getElementById("intro");
  intro.setAttribute("class", "hide");

  //ready to release questions
  quizDiv.removeAttribute("class");

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
}

///////////
//current question feedback
function questionFeedback() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    feedbackResult.textContent = "😔 Wrong";
    //release feedback
    feedbackDiv.removeAttribute("class");
  } else {
    feedbackResult.textContent = "👍 Correct!";
    //release feedback
    feedbackDiv.removeAttribute("class");
  }

  nextBtn.onclick = moreQuestions;
}

function moreQuestions() {
  //hide the feedback again
  feedbackDiv.setAttribute("class", "hide");
  //move to next question
  currentQuestionIndex++;
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
}

//RECEIVE CLICK - PROCERSS TO QUESTION PAGE
let startQuizHandler = function (event) {
  event.preventDefault();
  console.log("Now the quiz starts");
  showQuestionsPage();
};

//CLICK THE BUTTON TO START QUESTIONS
startBtn.onclick = startQuizHandler;
