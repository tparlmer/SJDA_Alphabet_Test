//establishing start button and question container
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')

//event listener for start button
startButton.addEventListener('click', startQuiz)

//start quiz function
function startQuiz() {
    console.log('started');
    //using class hide to make start button disappear after quiz begins
    startButton.classList.add('hide');
}

//next question function
function setNextQuestion() {

}

//select answer function
function selectAnswer() {

}