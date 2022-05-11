//establishing start button and question container
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

//event listener for start button
startButton.addEventListener('click', startTest)

//start test function
function startTest() {
    console.log('started');
    //using class hide to make start button disappear after test begins
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

//next question function
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

//select answer function
//passing event through as parameter
function selectAnswer(e) {

}

const questions = [
    {
        question: 'What does "Apple" start with?',
        answers: [
            { text: 'A', correct: true },
            { text: 'F', correct: false }
        ]
    }
]