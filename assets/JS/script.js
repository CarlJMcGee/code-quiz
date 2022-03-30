// objects
var Answers = {
  Aset1: ["strings", "booleans", "alerts", "numbers"],
  Aset2: ["quotes", "curly brackets", "parentheses", "square brackets"],
  Aset3: [
    "numbers and strings",
    "other arrays",
    "booleans",
    "all of the above",
  ],
  Aset4: ["commas", "curly brackets", "quotes", "parentheses"],
  Aset5: ["JavaScript", "terminal/bash", "for loops", "console log"],
};

var Questions = {
  Q1: "Commonly used data type DO NOT include:",
  Q2: "The condition in an If/Else statment is enclosed within ____.",
  Q3: "Arrays in JavaScript can be used to store ____",
  Q4: "String values must be enclosed within ____ when being assaigned to a variable.",
  Q5: "A very useful tool used in development and debugging for printing content to the debugger is:",
};
// html hard elements
var headerEl = document.querySelector(".page-header");
var mainEl = document.querySelector(".page-main");
var sectionEl = document.querySelector(".page-section");

// top left highscore link
var highscoreLink = document.createElement("span");
highscoreLink.textContent = "View Highscores";
headerEl.appendChild(highscoreLink);

// top right timer
var timerEl = document.createElement("p");
timerEl.textContent = "Time: 0";
headerEl.appendChild(timerEl);

//timer
var quizTimer = { time: 500 };

// op header
var opHeader = document.createElement("h2");
opHeader.className = "quiz-header";
opHeader.textContent = "Coding Quiz Challenge";

// op subheader
var opSubHead = document.createElement("p");
opSubHead.className = "sub-header";
opSubHead.innerHTML =
  "Try to the following code related questions within the time limit. Keeep in mind that incorrect answers will decrease your scoretime by 10 seconds!";

// op start button
var startBtn = document.createElement("button");
startBtn.className = "button";
startBtn.innerHTML = "Start Quiz";

// right
var right = document.createElement("h3");
right.className = "rightNwrong";
right.innerHTML = "Correct!";

// wrong
var wrong = document.createElement("h3");
wrong.className = "rightNwrong";
wrong.innerHTML = "Wrong!";

var quiz = function () {
  //   debugger;
  mainEl.appendChild(opHeader);
  mainEl.appendChild(opSubHead);
  mainEl.appendChild(startBtn);
  $(startBtn).click(function (e) {
    e.preventDefault();
    quizStart();
  });
};

var quizStart = function () {
  // timer decrements 1 per second
  var timeInterval = setInterval(function () {
    // when timer finishes
    if (quizTimer.time === -1) {
      clearInterval(timeInterval);
      console.log("test successful!");
      timesUp();
      // timer is still going
    } else {
      timerEl.textContent = "Time: " + quizTimer.time;
      quizTimer.time--;
    }
  }, 1000);
  Qpage1();
};

var questionator = function (currentQuestion, currentAnswers) {
  // header
  var qHeader = document.createElement("h2");
  qHeader.className = "quiz-header";
  qHeader.innerHTML = currentQuestion;
  mainEl.appendChild(qHeader);
  // answers ol
  var qAnswerContainer = document.createElement("ol");
  qAnswerContainer.className = "quiz-answers";
  qAnswerContainer.innerHTML = "";
  mainEl.appendChild(qAnswerContainer);
  // answer li
  for (i = 0; i < 4; i++) {
    var answer = currentAnswers[i];
    var qAnswer = document.createElement("li");
    qAnswer.className = "answer-li";
    // qAnswer.setAttribute("data-AnID", [i]);
    qAnswer.innerHTML =
      "<button class='button' data-ans-id='" +
      [i] +
      "'>" +
      [i + 1] +
      ". " +
      answer +
      "</button>";
    qAnswerContainer.appendChild(qAnswer);
    console.log(qAnswer);
  }
};

// Question pages
var Qpage1 = function () {
  // remove page Elements
  $(mainEl).empty();

  // generate questions
  questionator(Questions.Q1, Answers.Aset1);
  $(".quiz-answers").click(function (e) {
    e.preventDefault();
    var rightAnswer = e.target.dataset.ansId;
    console.log(rightAnswer);
    if (parseInt(rightAnswer) === 2) {
      console.log("correct!");
      sectionEl.appendChild(right);
      Qpage2();
    } else {
      console.log("Wrong!!");
      quizTimer = quizTimer - 10;
      sectionEl.appendChild(wrong);
      Qpage2();
    }
  });
};

var Qpage2 = function () {
  $(mainEl).empty();
  console.log("page 2");
  questionator();
};

var timesUp = function () {
  $(mainEl).html("<h2 class='quiz-header'>Times Up!</h2>");
};

quiz();
