//Song 
const correctSound = new Audio("sounds/correct.wav");
const wrongSound = new Audio("sounds/incorrect.mp3");
//Dom element
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Begin question , on peut l'ameliore encore plus de questions
const quizQuestions = [
    {
        question: "Une fonction est dite croissante si : ",
        answers: [
            { text: "Elle diminue toujours", correct: false },
            { text: "Elle ne change jamais", correct: false },
            { text: "Quand x augmente, f(x) augmente", correct: true },
            { text: "Elle est négative", correct: false },
        ],
    },
    {
        question: "Quelle structure est utilisée pour répéter une instruction ? ",
        answers: [
            { text: "if", correct: false },
            { text: "switch", correct: false },
            { text: "for", correct: true },
            { text: "break", correct: false },
        ],
    },
    {
        question: "Que signifie HTML ? ",
        answers: [
            { text: "Hyper Tool Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
        ],
    },
    {
        question: "La vitesse est égale à :",
        answers: [
            { text: "distance × temps", correct: false },
            { text: "distance / temps", correct: true },
            { text: "temps / distance", correct: false },
            { text: "masse × vitesse", correct: false },
        ],
    },
    {
        question: "Le binaire utilise combien de chiffres ?",
        answers: [
            { text: "2", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "16", correct: false },
        ],
    },
];
//QUIZ START VARS
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;
totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//Event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

//Function
function startQuiz() {


    //Reset  VAR
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}
function showQuestion() {
    //Reset state
    answerDisabled = false
    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent = currentQuestionIndex + 1
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"
    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")
        //what is dataSites
        button.dataset.correct = answer.correct
        button.addEventListener("click", selectAnswer)
        answersContainer.appendChild(button)

    })

    function selectAnswer(event) {
        //optimisation check
        if (answerDisabled) return
        answerDisabled = true

        const selectedButton = event.target;
        const isCorrect = selectedButton.dataset.correct === "true"
        //todo:explain this in a sec
        Array.from(answersContainer.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct")
            } else if (button === selectedButton) {
                button.classList.add("incorrect")
            }
        });
        if (isCorrect) {
            score++;
            scoreSpan.textContent = score
            correctSound.play();
            correctSound.currentTime=0;
        }else {
            wrongSound.currentTime=0;
            wrongSound.play();
        }
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion()
            } else {
                showResults()
            }
        }, 1000)
    }


}
function showResults() {
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")
    finalScoreSpan.textContent = score;
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) {
        resultMessage.textContent = "Perfect ! ";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Encore ! , tu es presques ";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Oh!, My god";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Il faut t'ameliorer";
    } else {
        resultMessage.textContent = "Lire des livres ! ";
    }
}


function restartQuiz() {

    resultScreen.classList.remove("active");
    startQuiz();
}
