//BUTTON TO START QUESTIONS
let startBtn = document.querySelector("#start-btn");

//QUESTIONS
let quizDiv = document.getElementById("quiz-div");
let currentQuestionTitle = document.querySelector("#questions");
let currentQuestionChoices = document.querySelector("#choices-div");
let eachChoice = document.querySelector("#choice");

//CURRENT QUESTION INDEX
let currentQuestionIndex = 0;
let currentQuestionChoicesIndex = 0;

//TIMER
let timerId;

//You can see question page now
function showQuestionsPage() {
  console.log("Question Page");

  //hide intro page
  let intro = document.getElementById("intro");
  intro.setAttribute("class", "hide");

  //un-block questions
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

    eachChoiceBtn.onclick = questionResult;
    currentQuestionChoices.appendChild(eachChoiceBtn);
  });
}

function questionResult() {}

let startQuizHandler = function (event) {
  event.preventDefault();
  console.log("Now the quiz starts");
  showQuestionsPage();
};

//CLICK THE BUTTON TO START QUESTIONS
//startBtn.addEventListener("click", startQuizHandler);
startBtn.onclick = startQuizHandler;
