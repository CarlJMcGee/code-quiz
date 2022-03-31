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
var highscore = {
  name: [],
  score: [],
};
//timer
var quizTimer = {
  time: 25,
  pentalty: 3,
};
var defaultQuizTimer = {
  time: 25,
  pentalty: 3,
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
timerEl.id = "timerEl";
timerEl.textContent = "Time: 0";

// op header
var opHeader = document.createElement("h2");
opHeader.className = "quiz-header";
opHeader.textContent = "Coding Quiz Challenge";

// op subheader
var opSubHead = document.createElement("p");
opSubHead.className = "sub-header";
opSubHead.innerHTML =
  "Try to the following code related questions within the " +
  quizTimer.time +
  " second time limit. Keeep in mind that incorrect answers will decrease your scoretime by " +
  quizTimer.pentalty +
  " seconds!";

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
  headerEl.appendChild(timerEl);
  $(startBtn).click(function (e) {
    e.preventDefault();
    quizStart();
  });
};

var quizStart = function () {
  quizTimer.time = defaultQuizTimer.time;
  clearInterval(timeInterval);
  // timer decrements 1 per second
  var timeInterval = setInterval(function () {
    // when timer finishes
    if (quizTimer.time <= -1) {
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
      quizTimer.time = quizTimer.time - quizTimer.pentalty;
      sectionEl.appendChild(wrong);
      Qpage2();
    }
  });
};
var Qpage2 = function () {
  // remove page Elements
  $(mainEl).empty();

  // generate questions
  questionator(Questions.Q2, Answers.Aset2);
  $(".quiz-answers").click(function (e) {
    e.preventDefault();
    var rightAnswer = e.target.dataset.ansId;
    console.log(rightAnswer);
    if (parseInt(rightAnswer) === 2) {
      console.log("correct!");
      $(sectionEl).empty();
      sectionEl.appendChild(right);
      Qpage3();
    } else {
      console.log("Wrong!!");
      quizTimer.time = quizTimer.time - quizTimer.pentalty;
      $(sectionEl).empty();
      sectionEl.appendChild(wrong);
      Qpage3();
    }
  });
};
var Qpage3 = function () {
  // remove page Elements
  $(mainEl).empty();

  // generate questions
  questionator(Questions.Q3, Answers.Aset3);
  $(".quiz-answers").click(function (e) {
    e.preventDefault();
    var rightAnswer = e.target.dataset.ansId;
    console.log(rightAnswer);
    if (parseInt(rightAnswer) === 3) {
      console.log("correct!");
      $(sectionEl).empty();
      sectionEl.appendChild(right);
      Qpage4();
    } else {
      console.log("Wrong!!");
      quizTimer.time = quizTimer.time - quizTimer.pentalty;
      $(sectionEl).empty();
      sectionEl.appendChild(wrong);
      Qpage4();
    }
  });
};
var Qpage4 = function () {
  // remove page Elements
  $(mainEl).empty();

  // generate questions
  questionator(Questions.Q4, Answers.Aset4);
  $(".quiz-answers").click(function (e) {
    e.preventDefault();
    var rightAnswer = e.target.dataset.ansId;
    console.log(rightAnswer);
    if (parseInt(rightAnswer) === 3) {
      console.log("correct!");
      $(sectionEl).empty();
      sectionEl.appendChild(right);
      Qpage5();
    } else {
      console.log("Wrong!!");
      quizTimer.time = quizTimer.time - quizTimer.pentalty;
      $(sectionEl).empty();
      sectionEl.appendChild(wrong);
      Qpage5();
    }
  });
};
var Qpage5 = function () {
  // remove page Elements
  $(mainEl).empty();

  // generate questions
  questionator(Questions.Q5, Answers.Aset5);
  $(".quiz-answers").click(function (e) {
    e.preventDefault();
    var rightAnswer = e.target.dataset.ansId;
    console.log(rightAnswer);
    //check answer
    if (parseInt(rightAnswer) === 3) {
      console.log("correct!");
      $(sectionEl).empty();
      sectionEl.appendChild(right);
      gameEnd();
    } else {
      console.log("Wrong!!");
      quizTimer.time = quizTimer.time - quizTimer.pentalty;
      $(sectionEl).empty();
      sectionEl.appendChild(wrong);
      gameEnd();
    }
  });
};
// clean up screen for game end
function cleanUp() {
  $(mainEl).empty();
  $(timerEl).remove();
}

// end screen
var gameEnd = function () {
  // clear main and timer
  cleanUp();
  // capture timescore
  var capturedScore = quizTimer.time;
  console.log(capturedScore);
  console.log(highscore.score);
  quizTimer.time = 999999;
  // create and append header and subheader
  var endHeader = document.createElement("h2");
  endHeader.className = "quiz-header";
  endHeader.innerHTML = "All Done!";
  mainEl.appendChild(endHeader);
  var endSubHeader = document.createElement("p");
  endSubHeader.className = "sub-header";
  endSubHeader.innerHTML = "Your final score is " + capturedScore + ".";
  mainEl.appendChild(endSubHeader);
  // input for highscore name
  var formEl = document.createElement("form");
  formEl.className = "name-input-container";
  formEl.innerHTML = "Enter Initials";
  // input
  var nameInput = document.createElement("input");
  nameInput.className = "name-input";
  nameInput.innerHTML = "";
  nameInput.setAttribute("placeholder", "CUP");
  // submit
  var nameSubmit = document.createElement("button");
  nameSubmit.className = "button";
  nameSubmit.innerHTML = "Submit";
  nameSubmit.setAttribute("type", "submit");
  mainEl.appendChild(formEl);
  formEl.appendChild(nameInput);
  formEl.appendChild(nameSubmit);
  // hide right/wrong on input focus
  $(nameInput).focus(function (e) {
    e.preventDefault();
    $(sectionEl).empty();
  });
  // save name and score to local storage
  $(formEl).submit(function (e) {
    e.preventDefault();
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("highscore", capturedScore);
    nameInput.value = "";
  });

  // restart button
  var goBackBtn = document.createElement("button");
  goBackBtn.className = "button";
  goBackBtn.innerHTML = "Go Back";
  mainEl.appendChild(goBackBtn);
  $(goBackBtn).click(function (e) {
    e.preventDefault();
    $(mainEl).empty();
    quiz();
  });
};

$(highscoreLink).click(function (e) {
  e.preventDefault();
  var highscorePage = function () {
    $(mainEl).empty();
    var topName = localStorage.getItem("name");
    var topScore = localStorage.getItem("highscore");
    if (topName === null) {
      topName = "none";
      topScore = "0";
    }
    console.log(topScore);
    var highscoreHeader = document.createElement("h2");
    highscoreHeader.className = "quiz-header`";
    highscoreHeader.innerHTML = "Highscore:";
    var score = document.createElement("span");
    score.className = "score";
    score.innerHTML = "1. " + topName + "- " + topScore;
    mainEl.appendChild(highscoreHeader);
    mainEl.appendChild(score);

    var scoreBtnDiv = document.createElement("div");
    scoreBtnDiv.className = "";
    scoreBtnDiv.innerHTML = "";
    mainEl.appendChild(scoreBtnDiv);
    // go back button
    var goBackBtn = document.createElement("button");
    goBackBtn.className = "button";
    goBackBtn.innerHTML = "Go Back";
    scoreBtnDiv.appendChild(goBackBtn);
    $(goBackBtn).click(function (e) {
      e.preventDefault();
      $(mainEl).empty();
      quiz();
    });

    // delete score button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "button";
    deleteBtn.innerHTML = "Delete Highscore";
    scoreBtnDiv.appendChild(deleteBtn);
    $(deleteBtn).click(function (e) {
      e.preventDefault();
      localStorage.removeItem("highscore");
      localStorage.removeItem("name");
      highscorePage();
    });
  };
  highscorePage();
});

var timesUp = function () {
  // clear main and timer
  cleanUp();
  // capture timescore
  var capturedScore = quizTimer.time;
  console.log(capturedScore);
  console.log(highscore.score);
  quizTimer.time = 999999;
  // create and append header and subheader
  var endHeader = document.createElement("h2");
  endHeader.className = "quiz-header";
  endHeader.innerHTML = "Times Up!";
  mainEl.appendChild(endHeader);
  var endSubHeader = document.createElement("p");
  endSubHeader.className = "sub-header";
  endSubHeader.innerHTML = "Game Over!";
  mainEl.appendChild(endSubHeader);
  // restart button
  var goBackBtn = document.createElement("button");
  goBackBtn.className = "button";
  goBackBtn.innerHTML = "Go Back";
  mainEl.appendChild(goBackBtn);
  $(goBackBtn).click(function (e) {
    e.preventDefault();
    $(mainEl).empty();
    quiz();
  });
};

quiz();
