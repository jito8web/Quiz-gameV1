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
/*const quizQuestions = [
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
    {

        //Eto serie de 10 questions 
        question: "Quel langage est principalement utilisé pour structurer une page web ?",
        answers: [
            { text: "python", correct: false },
            { text: "HTML", correct: true },
            { text: "C", correct: false },
            { text: "java", correct: false },
        ],

    },
    {

        question: "Quelle est l’unité de la force ?",
        answers: [
            { text: "joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Watt", correct: false },
            { text: "volt", correct: false },
        ],

    },
    {

        question: "Quel composant est le “cerveau” de l’ordinateur ?",
        answers: [
            { text: "RAM", correct: false },
            { text: "Disque Dur", correct: false },
            { text: "CPU", correct: true },
            { text: "Cart Graphiques", correct: false },
        ],

    },
    {   // Utilisation des Unicode pour des puissance
        question: "Résoudre : 2x² - 4x - 6 = 0",
        answers: [
            { text: "x = 3 ou x = -1", correct: true },
            { text: "x = 1 ou x = -3", correct: false },
            { text: "x = 2 ou x = -2", correct: false },
            { text: "x = 0 ou x = 3", correct: false },
        ],
    },
    {

        question: "Dans un circuit en série :",
        answers: [
            { text: "La tension est la même partout", correct: false },
            { text: "Le courant est le même partout", correct: true },
            { text: "La résistance diminue", correct: false },
            { text: "Le courant se divise", correct: false },
        ],

    },
    {
        question: "Si la masse augmente et la force reste constante, alors :",
        answers: [
            { text: "L’accélération augmente", correct: false },
            { text: "L’accélération diminue", correct: true },
            { text: "L’accélération reste constante", correct: false },
            { text: "La force diminue", correct: false },
        ],

    },
    {


        question: "Quelle commande SQL permet de supprimer une table ?",
        answers: [
            { text: "DELETE", correct: false },
            { text: "REMOVE", correct: false },
            { text: "DROP", correct: true },
            { text: "CLEAR", correct: false },
        ],

    },
    {


        question: "Quelle structure de données est utilisée pour implémenter un parcours en largeur (BFS) ?",
        answers: [
            { text: "Pile (Stack)", correct: false },
            { text: "File (Queue)", correct: true },
            { text: "Arbre binaire", correct: false },
            { text: "Table de hachage", correct: false },
        ],

    },
    {


        question: "Quel protocole est utilisé pour transférer des pages web ?",
        answers: [
            { text: "FTP", correct: false },
            { text: "HTTP", correct: true },
            { text: "SMTP", correct: false },
            { text: "SSH", correct: false },
        ],

    },
    {


        question: "Dans un circuit en parallèle :",
        answers: [
            { text: "La résistance totale augmente", correct: false },
            { text: "La résistance totale diminue", correct: true },
            { text: "Le courant diminue", correct: false },
            { text: "La tension change", correct: false },
        ],

    },
    {

        question: "Quel langage est principalement utilisé pour le backend ?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "javaScript", correct: false },
            { text: "php", correct: true },
        ],

    },
    {

        question: "Quelle commande SQL permet d’ajouter des données ?",
        answers: [
            { text: "ADD", correct: false },
            { text: "INSERT", correct: true },
            { text: "UPDATE", correct: false },
            { text: "CREATE", correct: false },
        ],

    },
    {


        question: "L’unité du courant électrique est :",
        answers: [
            { text: "Volt", correct: false },
            { text: "Ohm", correct: false },
            { text: "Ampere", correct: true },
            { text: "watt", correct: false },
        ],

    },
    {

        question: "Quel système gère la mémoire et les processus ??",
        answers: [
            { text: "BIOS", correct: false },
            { text: "compilateur", correct: false },
            { text: "Systeme d'exploitations", correct: true },
            { text: "antivirus", correct: false },
        ],

    },
    {

        question: "Si la tension double et le courant reste constant :",
        answers: [
            { text: "La puissance est divisée par 2", correct: false },
            { text: "La puissance reste constante", correct: false },
            { text: "La puissance double", correct: true },
            { text: "La puissance est multipliée par 4", correct: false },
        ],

    },
];*/
let quizQuestions = [];

fetch("questions.json")
    .then(res => res.json())
    .then(data => {
        quizQuestions = data;
        totalQuestionSpan.textContent = quizQuestions.length;
        maxScoreSpan.textContent = quizQuestions.length;
        //startQuiz();
    });
//QUIZ START VARS
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;
let timeLeft = 10;
let timerInterval;

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
    shuffleArray(quizQuestions);

    showQuestion()
}
function showQuestion() {
    //Reset state
    answerDisabled = false
    const currentQuestion = quizQuestions[currentQuestionIndex]
    shuffleArray(currentQuestion.answers);
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
  
    startTimer();

}
 function selectAnswer(event) {
        //optimisation check
        if (answerDisabled) return
        answerDisabled = true
        stopTimer();
        // 

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
            correctSound.currentTime = 0;
        } else {
            wrongSound.currentTime = 0;
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
function autoNextQuestion() {
    answerDisabled = true;

    // montrer la bonne réponse
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}
//utilisation  l'algorithme Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//
function stopTimer() {
    clearInterval(timerInterval);
}
//
function startTimer() {
    timeLeft = 10;
    document.getElementById("timer").textContent = timeLeft;

    clearInterval(timerInterval); // sécurité

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        // 
        if (timeLeft <= 3) {
            document.getElementById("timer").style.color = "red";
        } else {
            document.getElementById("timer").style.color = "black";
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            autoNextQuestion();
        }
    }, 1000);
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
//Protection simple 
document.addEventListener("contextmenu", e => e.preventDefault());
//blocage de F12
document.onkeydown = function (e) {
    if (e.key === "F12") {
        return false;
    }
};