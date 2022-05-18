const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const loginButton = document.getElementById("login-btn");
const questionContainerElement = document.getElementById("question-container");
const teacherLoginElement = document.getElementById("teacherlogin");
const teacherLoginConElement = document.getElementById("teacherlogin-container");
const headerElement = document.getElementById("card-header");
const answerButtonsElement = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-btn");
const answerBox = document.getElementById("answer-box");
var quesAudio = document.getElementById("quesAudio");
var emptyInputAudio = document.getElementById("emptyInputAudio");
var letterValidAudio = document.getElementById("letterValidAudio");

let shuffledQuestions, currentQuestionIndex;
let studentScore = [];
let numberCorrect = 0;
let emoji;

//Array of questions with relative file path
const questions = [
  {
    emojiImage: "./public/images/apple.svg",
    correct_answer: "a",
  },
  {
    emojiImage: "./public/images/bike.svg",
    correct_answer: "b",
  },
  {
    emojiImage: "./public/images/cat.svg",
    correct_answer: "c",
  },
  {
    emojiImage: "./public/images/duck.svg",
    correct_answer: "d",
  },
  {
    emojiImage: "./public/images/egg.svg",
    correct_answer: "e",
  },
  {
    emojiImage: "./public/images/fish.svg",
    correct_answer: "f",
  },
  {
    emojiImage: "./public/images/goat.svg",
    correct_answer: "g",
  },
  {
    emojiImage: "./public/images/house.svg",
    correct_answer: "h",
  },
  {
    emojiImage: "./public/images/ice.svg",
    correct_answer: "i",
  },
  {
    emojiImage: "./public/images/juice.svg",
    correct_answer: "j",
  },
  {
    emojiImage: "./public/images/kite.svg",
    correct_answer: "k",
  },
  {
    emojiImage: "./public/images/lion.svg",
    correct_answer: "l",
  },
  {
    emojiImage: "./public/images/mouse.svg",
    correct_answer: "m",
  },
  {
    emojiImage: "./public/images/nose.svg",
    correct_answer: "n",
  },
  {
    emojiImage: "./public/images/octopus.svg",
    correct_answer: "o",
  },
  {
    emojiImage: "./public/images/panda.svg",
    correct_answer: "p",
  },
  {
    emojiImage: "./public/images/question.svg",
    correct_answer: "q",
  },
  {
    emojiImage: "./public/images/rainbow.svg",
    correct_answer: "r",
  },
  {
    emojiImage: "./public/images/star.svg",
    correct_answer: "s",
  },
  {
    emojiImage: "./public/images/television.svg",
    correct_answer: "t",
  },
  {
    emojiImage: "./public/images/umbrella.svg",
    correct_answer: "u",
  },
  {
    emojiImage: "./public/images/volcano.svg",
    correct_answer: "v",
  },
  {
    emojiImage: "./public/images/watch.svg",
    correct_answer: "w",
  },
  {
    emojiImage: "./public/images/x-ray.svg",
    correct_answer: "x",
  },
  {
    emojiImage: "./public/images/yo-yo.svg",
    correct_answer: "y",
  },
  {
    emojiImage: "./public/images/zebra.svg",
    correct_answer: "z",
  },
];

//event listener for start button and next button
startButton.addEventListener("click", startTest);
nextButton.addEventListener("click", () => {

  //Validate user input
  if(answerBox.value == '') {
    emptyInputAudio.play();
  } else if(answerBox.value.length != 1 || !isCharacterALetter(answerBox.value)) {
    letterValidAudio.play();
  } else {
    checkAnswer(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
    clearLastImage();
    setNextQuestion();
  } 
});

loginButton.addEventListener("click",() => {
  loginButton.classList.add("hide");
  teacherLoginConElement.classList.remove("hide");
  startButton.classList.add("hide");
});

teacherSubmitBtn.addEventListener("click",() => {
  alert("Submitted form");
});

// Check if the input entered is a letter
function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

//start test function
function startTest() {
  console.log("started");
  //using class hide to make start button disappear after test begins
  startButton.classList.add("hide");
  teacherLoginElement.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

const checkEndTest = (currentQuestion) => {
  //console.log("in test finished", currentQuestionIndex);

  if (currentQuestion == 26) {
    console.log("test finished");
    const studentScoreString = JSON.stringify(studentScore);
    console.log(studentScoreString);
    return true;
  } else {
    console.log("test not finished");
    return false;
  }
};
//next question function
function setNextQuestion() {
  resetAnswerBox();

  if (checkEndTest(currentQuestionIndex) === false) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  } else if (checkEndTest(currentQuestionIndex) == true) {
    endTest();
  }
}

//Clears input box
function resetAnswerBox() {
  answerBox.value = "";
}

//Removes previous image
function clearLastImage() {
  headerElement.removeChild(emoji);
  console.log("image removed");
}

//Displays question using question array
function showQuestion(question) {
  quesAudio.pause(); 
  quesAudio.currentTime = 0;
  quesAudio.play(); 
  console.log(currentQuestionIndex);
  emoji = document.createElement("img");
  emoji.src = question.emojiImage;
  headerElement.appendChild(emoji);
  answerBox.classList.remove("hide");
  nextButton.classList.remove("hide");
}

//Checks answer and push data to studentScore Array
function checkAnswer(questions) {
  let studentAnswer = document.getElementById("answer-box").value;

  // Check for case-insensitive input
  if (questions.correct_answer.toUpperCase() == studentAnswer.toUpperCase()) {
    console.log('correctanswer');
    numberCorrect++;
  }
  studentScore.push({
    letter: questions.correct_answer,
    answer: studentAnswer,
  });

  //console.log(studentScore);
  nextButton.classList.remove("hide");
  //const studentScoreString = JSON.stringify(studentScore);
  //console.log(studentScoreString);
}

const endTest = () => {
  answerBox.classList.add("hide");
  nextButton.classList.remove("hide");
  headerElement.textContent = "Alphabet Test Finished";
  const scoreBox = document.createElement("div");
  scoreBox.textContent = numberCorrect + " Out of 26 Correct";
  headerElement.appendChild(scoreBox);
};
