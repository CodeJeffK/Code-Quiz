const startButton = document.getElementById('quizButton');
let timer = document.getElementById('timer');
let timeLeft = 75;
let quizEnd = false;
let bonus = 5;
let penalty = 10;
let questionSetContainer = document.querySelector('section');
let questionSet = document.getElementById('questions');
let answerSet = document.getElementById('answers');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let result = document.getElementById('result');
let hidden = document.getElementById('main');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let textClear = document.querySelector('pre');
let score = document.getElementById('score');

//Add event listener to start quiz button
startButton.addEventListener('click', startQuiz);

//Function to start quiz
function startQuiz(event) {
    event.preventDefault();
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.innerHTML = 'Time: ' + timeLeft;
        if (timeLeft <= 0 || quizEnd == true) {
            clearInterval(timeInterval);
            quizOver();
            return;
        }
    }, 1000);
    hidden.classList.add("hide");
    questionSetContainer.classList.remove("hidden");
    currentQuestion = 0
    quiz();
}

//Quiz questions and answers
let quizContent = [
    {
        question: 'Commonly used data types DO NOT include: ',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        correct: 'alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed with _______.',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correct: 'parenthesis',
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correct: 'all of the above',
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        correct: 'quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correct: 'console.log',
    },
];

//Display questions and answers
function quiz() {
    questionSet.innerHTML = quizContent[currentQuestion].question;
    answer1.innerHTML = quizContent[currentQuestion].choices[0];
    answer2.innerHTML = quizContent[currentQuestion].choices[1];
    answer3.innerHTML = quizContent[currentQuestion].choices[2];
    answer4.innerHTML = quizContent[currentQuestion].choices[3];
    answer1.addEventListener('click', answerChoice);
    answer2.addEventListener('click', answerChoice);
    answer3.addEventListener('click', answerChoice);
    answer4.addEventListener('click', answerChoice);
}

//Loop for questions
function nextQuestion() {
    questionSet.innerHTML = quizContent[currentQuestion].question;
    answer1.innerHTML = quizContent[currentQuestion].choices[0];
    answer2.innerHTML = quizContent[currentQuestion].choices[1];
    answer3.innerHTML = quizContent[currentQuestion].choices[2];
    answer4.innerHTML = quizContent[currentQuestion].choices[3];
    answer1.addEventListener('click', answerChoice);
    answer2.addEventListener('click', answerChoice);
    answer3.addEventListener('click', answerChoice);
    answer4.addEventListener('click', answerChoice);
}

//Check answer choice and give time penalty or bonus and loop next questions
function answerChoice(event) {
    let choice = event.target.innerHTML;
    console.log(currentQuestion);
    if (quizContent[currentQuestion].correct === choice) {
        timeLeft = timeLeft + bonus;
        result.innerHTML = 'Correct, bonus has been added.';
    } else {
        timeLeft = timeLeft - penalty;
        result.innerHTML = 'Incorrect, penalty has been applied.'
    }
    resetButton();
    currentQuestion++;
    if (currentQuestion < quizContent.length) {
        nextQuestion();
    } else {
        quizOver();
        quizEnd = true;
    }
}

//Reset to allow next question set
function resetButton() {
    questionSet.innerHTML = '';
    answer1.innerHTML = '';
    answer2.innerHTML = '';
    answer3.innerHTML = '';
    answer4.innerHTML = '';
}

//Quiz over
function quizOver() {
    questionSetContainer.classList.add('hidden');
    hidden.classList.remove('hide');
    score.classList.remove('hide');
    h1.innerHTML = "Game Over!";
    h2.innerHTML = '';
    textClear.innerHTML = '';
    startButton.innerHTML = '';
    let finalScore = document.createElement('p');
    timer.classList.add('hidden');
    quizEndScore = timer.innerHTML;
    let finalScoreText = document.createTextNode(quizEndScore);
    finalScore.appendChild(finalScoreText);
    h1.appendChild(finalScore);
}