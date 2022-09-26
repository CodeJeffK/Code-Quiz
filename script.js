const startButton = document.getElementById('quizButton');
let timer = document.getElementById('timer');
let timeLeft = 75;
let quizEnd = false;
let bonus = 5;
let penalty = 10;

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
            return;
        }

    })
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