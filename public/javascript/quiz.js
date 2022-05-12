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

// A - apple
// B - bike
// C - cat
// D - duck
// E - egg
// F - fish
// G - goat
// H - house
// I - iguana
// J - juice
// K - kite
// L - lion
// M - mouse
// N - nose
// O - octopus
// P - panda
// Q - quilt
// R - rope
// S - sandwich
// T - television
// U - umbrella
// V - violin
// W - wagon
// X - xylophone - NEED STILL
// Y - yo-yo
// Z - zebra

let studentScore;

const correctAnswers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const questions = [{ image: "./public/images/aImage.svg" }];
