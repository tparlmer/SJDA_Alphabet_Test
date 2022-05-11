//establishing start button and question container
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

//event listener for start button
startButton.addEventListener('click', startQuiz)

//start quiz function
function startQuiz() {
    console.log('started');
    //using class hide to make start button disappear after quiz begins
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

//next question function
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

//select answer function
function selectAnswer() {

}

const questions = [
    {
        question: 'What does "Apple" start with?',
        answers: [
            { text: 'a', correct: true },
            { text: 'f', correct: false }
        ]
    }
]