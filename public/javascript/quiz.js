//user logs in using username (and password?) login screen
////////if logged in
//click start button and start quiz
//start quiz begins questions 1-26
////begin question object "What letter does this begin with?"
////show emoji
////user inputs letter
////check for correct answer
////if correct answer, add +1 to score variable
////if false do not increase score
////next question
////repeat until letter z
//at end of test, show a finish page
//Ask to retake or test another user
//if retake start test over
//if test another user redirect to login page

let studentScore;


const loginButton = document.getElementById("loginBtn");
const startButton = document.getElementById("startBtn");

const verifyLogin = () => {
  event.preventDefault();
  //here we will add fetch for post request to login credentials
};
const startQuiz = () => {
  event.preventDefault;
};

document.addEventListener(loginButton, verifyLogin());
document.addEventListener(startButton, startQuiz());
