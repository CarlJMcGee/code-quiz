// html hard elements
var headerEl = document.querySelector(".page-header");
var mainEl = document.querySelector(".page-main");

// top left highscore link
var highscoreLink = document.createElement("span");
highscoreLink.textContent = "View Highscores";
headerEl.appendChild(highscoreLink);

// top right timer
var timerEl = document.createElement("p");
timerEl.textContent = "Time: 0";
headerEl.appendChild(timerEl);

//timer
var quizTimer = { time: 5 };

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
  // remove openning page El
  $(mainEl).empty();
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
};

var timesUp = function () {
  console.log("time's up!");
};

quiz();
