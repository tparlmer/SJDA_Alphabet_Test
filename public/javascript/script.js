const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-btn");
const answerBox = document.getElementById("answer-box");
var x = document.getElementById("myAudio");

let shuffledQuestions, currentQuestionIndex;
let studentScore = [];
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
  checkAnswer(shuffledQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
  clearLastImage();
  setNextQuestion();
});

//start test function
function startTest() {
  console.log("started");
  //using class hide to make start button disappear after test begins
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}
//next question function
function setNextQuestion() {
  resetAnswerBox();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Clears input box
function resetAnswerBox() {
  answerBox.value = "";
}

//Removes previous image
function clearLastImage() {
  questionElement.removeChild(emoji);
  console.log("image removed");
}

//Displays question using question array
function showQuestion(question) {
  x.pause(); 
  x.currentTime = 0;
  x.play(); 
  console.log(currentQuestionIndex);
  emoji = document.createElement("img");
  emoji.src = question.emojiImage;
  questionElement.appendChild(emoji);
  answerBox.classList.remove("hide");
  nextButton.classList.remove("hide");
}

//Checks answer and push data to studentScore Array
function checkAnswer(questions) {
  let studentAnswer = document.getElementById("answer-box").value;

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
  //console.log("in test finished", currentQuestionIndex);

  if (currentQuestionIndex == questions.length - 1) {
    console.log("test finished");
    const studentScoreString = JSON.stringify(studentScore);
    console.log(studentScoreString);
  } else {
    console.log("test not working");
  }
};

endTest();
