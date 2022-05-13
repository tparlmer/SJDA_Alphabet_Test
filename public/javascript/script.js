//establishing start button and question container

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

//event listener for start button
startButton.addEventListener("click", startTest);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
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
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  let emoji = document.createElement("img");
  emoji.src = question.emojiImage;
  questionElement.appendChild(emoji);

  /* question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  }); */
}

function resetState() {
  clearStatusClass(document.body);
  //hides next button as user moves through test
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//select answer function
//passing event through as parameter
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    emojiImage: "./public/images/apple.svg",
    answer: "a",
  },
  {
    emojiImage: "./public/images/bike.svg",
    answer: "b",
  },
  {
    emojiImage: "./public/images/cat.svg",
    answer: "c",
  },
  {
    emojiImage: "./public/images/duck.svg",
    answer: "d",
  },
  {
    emojiImage: "./public/images/egg.svg",
    answer: "e",
  },
  {
    emojiImage: "./public/images/fish.svg",
    answer: "f",
  },
  {
    emojiImage: "./public/images/goat.svg",
    answer: "g",
  },
  {
    emojiImage: "./public/images/house.svg",
    answer: "h",
  },
  {
    emojiImage: "./public/images/ice.svg",
    answer: "i",
  },
  {
    emojiImage: "./public/images/juice.svg",
    answer: "j",
  },
  {
    emojiImage: "./public/images/kite.svg",
    answer: "k",
  },
  {
    emojiImage: "./public/images/lion.svg",
    answer: "l",
  },
  {
    emojiImage: "./public/images/mouse.svg",
    answer: "m",
  },
  {
    emojiImage: "./public/images/nose.svg",
    answer: "n",
  },
  {
    emojiImage: "./public/images/octopus.svg",
    answer: "o",
  },
  {
    emojiImage: "./public/images/panda.svg",
    answer: "p",
  },
  {
    emojiImage: "./public/images/question.svg",
    answer: "q",
  },
  {
    emojiImage: "./public/images/rainbow.svg",
    answer: "r",
  },
  {
    emojiImage: "./public/images/star.svg",
    answer: "s",
  },
  {
    emojiImage: "./public/images/television.svg",
    answer: "t",
  },
  {
    emojiImage: "./public/images/umbrella.svg",
    answer: "u",
  },
  {
    emojiImage: "./public/images/volcano.svg",
    answer: "v",
  },
  {
    emojiImage: "./public/images/watch.svg",
    answer: "w",
  },
  {
    emojiImage: "./public/images/x-ray.svg",
    answer: "x",
  },
  {
    emojiImage: "./public/images/yo-yo.svg",
    answer: "y",
  },
  {
    emojiImage: "./public/images/zebra.svg",
    answer: "z",
  },
];
