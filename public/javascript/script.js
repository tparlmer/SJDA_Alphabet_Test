const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
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
    emojiImage: "./images/apple.svg",
    correct_answer: "a",
  },
  {
    emojiImage: "./images/bike.svg",
    correct_answer: "b",
  },
  {
    emojiImage: "./images/cat.svg",
    correct_answer: "c",
  },
  {
    emojiImage: "./images/duck.svg",
    correct_answer: "d",
  },
  {
    emojiImage: "./images/egg.svg",
    correct_answer: "e",
  },
  {
    emojiImage: "./images/fish.svg",
    correct_answer: "f",
  },
  {
    emojiImage: "./images/goat.svg",
    correct_answer: "g",
  },
  {
    emojiImage: "./images/house.svg",
    correct_answer: "h",
  },
  {
    emojiImage: "./images/ice.svg",
    correct_answer: "i",
  },
  {
    emojiImage: "./images/juice.svg",
    correct_answer: "j",
  },
  {
    emojiImage: "./images/kite.svg",
    correct_answer: "k",
  },
  {
    emojiImage: "./images/lion.svg",
    correct_answer: "l",
  },
  {
    emojiImage: "./images/mouse.svg",
    correct_answer: "m",
  },
  {
    emojiImage: "./images/nose.svg",
    correct_answer: "n",
  },
  {
    emojiImage: "./images/octopus.svg",
    correct_answer: "o",
  },
  {
    emojiImage: "./images/panda.svg",
    correct_answer: "p",
  },
  {
    emojiImage: "./images/question.svg",
    correct_answer: "q",
  },
  {
    emojiImage: "./images/rainbow.svg",
    correct_answer: "r",
  },
  {
    emojiImage: "./images/star.svg",
    correct_answer: "s",
  },
  {
    emojiImage: "./images/television.svg",
    correct_answer: "t",
  },
  {
    emojiImage: "./images/umbrella.svg",
    correct_answer: "u",
  },
  {
    emojiImage: "./images/volcano.svg",
    correct_answer: "v",
  },
  {
    emojiImage: "./images/watch.svg",
    correct_answer: "w",
  },
  {
    emojiImage: "./images/x-ray.svg",
    correct_answer: "x",
  },
  {
    emojiImage: "./images/yo-yo.svg",
    correct_answer: "y",
  },
  {
    emojiImage: "./images/zebra.svg",
    correct_answer: "z",
  },
];

//event listener for start button and next button
startButton.addEventListener("click", startTest);
nextButton.addEventListener("click", () => {
  console.log("***answerBox", answerBox.value);
  if (answerBox.value == "") {
    emptyInputAudio.play();
  } else if (
    answerBox.value.length != 1 ||
    !isCharacterALetter(answerBox.value)
  ) {
    letterValidAudio.play();
  } else {
    checkAnswer(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
    clearLastImage();
    setNextQuestion();
  }
});

// Check if the input entered is a letter
function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}

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
  if (questions.correct_answer == studentAnswer) {
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

const sendScore = () => {
  fetch("/api/quiz", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentScore),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert("Error: " + response.statusText);
    })
    .then((postResponse) => {
      console.log(postResponse);
      alert("Student score added!");
    });
};

const endTest = () => {
  answerBox.classList.add("hide");
  nextButton.classList.remove("hide");
  headerElement.textContent = "Alphabet Test Finished";
  const scoreBox = document.createElement("div");
  scoreBox.textContent = numberCorrect + " Out of 26 Correct";
  headerElement.appendChild(scoreBox);
  sendScore();
};
