const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const loginButton = document.getElementById("login-btn");
const questionContainerElement = document.getElementById("question-container");
const teacherLoginElement = document.getElementById("teacherlogin");
const teacherLoginConElement = document.getElementById("teacherlogin-container");
const resDashboardConElement = document.getElementById("resDashboard-container");
const headerElement = document.getElementById("card-header");
const answerButtonsElement = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-btn");
const answerBox = document.getElementById("answer-box");
var quesAudio = document.getElementById("quesAudio");
var emptyInputAudio = document.getElementById("emptyInputAudio");
var letterValidAudio = document.getElementById("letterValidAudio");
var table = document.getElementById("quiztable");
var isFirstQuestion = false;
var stFirstName, stLastName;

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
  //Validate user input
  if (answerBox.value == "") {
    emptyInputAudio.pause();
    emptyInputAudio.currentTime = 0;
    emptyInputAudio.play();
  } else if (
    answerBox.value.length != 1 ||
    !isCharacterALetter(answerBox.value)
  ) {
    letterValidAudio.pause();
    letterValidAudio.currentTime = 0;
    letterValidAudio.play();
  } else {
    emptyInputAudio.pause();
    emptyInputAudio.currentTime = 0;
    letterValidAudio.pause();
    letterValidAudio.currentTime = 0;
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
 
  //TODO: Authentication

  loginButton.classList.add("hide");
  startButton.classList.add("hide");
  teacherLoginConElement.classList.add("hide");
  resDashboardConElement.classList.remove("hide");
  
});

// Get saved quiz from database
function searchByName() {
  var firstname = document.getElementById("firstnameSearchinput").value;
  var lastname = document.getElementById("lastnameSearchinput").value;
  var queryParam = '';

  console.log('firstname',firstname);
  console.log('lastname',lastname);

  if(firstname) {
    queryParam = '?firstname='+firstname ;
  } 
  if(lastname) {
    if(!firstname) {
      window.alert('Please enter first name');
    } else {
      queryParam = '?firstname='+firstname+'&lastname='+lastname;
    }   
  } 

  if(!firstname && !lastname) {
    queryParam = '' ;
  }
  console.log('queryParam',queryParam);

  fetch(`/api/users${queryParam}`,{
    method: "GET"
  }) 
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    alert("Error: " + response.statusText);
  })
  .then(data => {
    console.log('data',data);
    for(i=0;i<data.length;i++) {
      console.log('data',data.id);
      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);

     // Cell 1
      var cell1 = row.insertCell(0);
      cell1.innerHTML = data[i].id;

      // Cell 2
      var cell2 = row.insertCell(0);
      cell2.innerHTML = data[i].firstname;

      // Cell 3
      var cell3 = row.insertCell(0);
      cell3.innerHTML = data[i].lastname;

      // Cell 4
      var cell4 = row.insertCell(0);
      cell4.innerHTML = data[i].created_at;
    }
  });
 /* .then(data => {
    console.log('datafromuser',data);
    if(data != null && data.length > 0) {
      stFirstName = data[0].firstname;
      stLastName = data[0].lastname;
      fetch(`/api/quiz/${data[0].id}`,{
        method: "GET"
      })  
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        alert("Error: " + response.statusText);
      })
      .then(data => {
        console.log('data',data);
        for(i=0;i<data.length;i++) {
          var rowCount = table.rows.length;
          var row = table.insertRow(rowCount);
    
         // Cell 1
          var cell1 = row.insertCell(0);
          cell1.innerHTML = data[i].id;
    
          // Cell 2
          var cell2 = row.insertCell(0);
          cell2.innerHTML = stFirstName;
    
          // Cell 3
          var cell3 = row.insertCell(0);
          cell3.innerHTML = stLastName;
    
          // Cell 4
          var cell4 = row.insertCell(0);
          cell4.innerHTML = data[i].created_at;
        }
      });
    } else{
      console.log('No matching user records found');
    }
   
  }) */
 
}

// Saved quiz search
nameSearchBtn.addEventListener("click",searchByName); 

// Check if the input entered is a letter
function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
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

  if(!isFirstQuestion) {
    quesAudio.pause();
    quesAudio.currentTime = 0;
    quesAudio.play();
    isFirstQuestion = true;
  }
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
    console.log("correctanswer");
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
    body: JSON.stringify({
      user_id: 1, //change this later (dummy data for testing)
      quizData: studentScore
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert("Error: " + response.statusText);
    })
    .then((postResponse) => {
      console.log(postResponse);
      //alert("Student score added!");
    });
};

const endTest = () => {
  answerBox.classList.add("hide");
  nextButton.classList.add("hide");
  headerElement.textContent = "Alphabet Test Finished";
  const scoreBox = document.createElement("div");
  scoreBox.textContent = numberCorrect + " Out of 26 Correct";
  headerElement.appendChild(scoreBox);
  sendScore();
};
