homePage = document.getElementById("homePage-container");
// Quiz questions pop up
quizStart = document.getElementById("questions-container");
questionEl = document.getElementById("question");
optionEl = Array.from(document.getElementsByClassName("option"));
// high scores page
highScoreContainer = document.getElementById("your-score");
initials = document.getElementById("initials-input");
// Timer Element
const timerEl = document.getElementById("timer");

// one minute
const startingTime = 1;
// 60 seconds
var time = startingTime * 60;
var currentQuestion = {};
var correctOption = true;
var possibleQuestions = [];
var questionIndex = -1;
var timeInterval;
// Homepage "start" button
document.getElementById("start-button").addEventListener("click", startGame);
// Homepage "nextQ-button" button
document.getElementById("nextQ-button").addEventListener("click", loadNextQuestion);
// Homepage "prevQ-button" button
// document.getElementById("prevQ-button").addEventListener("click", loadPrevQuestion);
// Question and subsequent answer options
// Homepage "option-1" button
document.getElementById("option-1").addEventListener("click", function () { if (currentQuestion.correctAnswer == "1") { loadNextQuestion(); } else { console.log("Wrong!"); loadNextQuestion(); deductTime();} });
// Homepage "option-2" button
document.getElementById("option-2").addEventListener("click", function () { if (currentQuestion.correctAnswer == "2") { loadNextQuestion(); } else { console.log("Wrong!"); loadNextQuestion(); deductTime();} });
// Homepage "option-3" button
document.getElementById("option-3").addEventListener("click", function () { if (currentQuestion.correctAnswer == "3") { loadNextQuestion(); } else { console.log("Wrong!"); loadNextQuestion(); deductTime(); } });
// Homepage "option-4" button
document.getElementById("option-4").addEventListener("click", function () { if (currentQuestion.correctAnswer == "4") { loadNextQuestion(); } else { console.log("Wrong!"); loadNextQuestion(); deductTime(); } });
document.getElementById("submit-initials-button").addEventListener("click", saveHighScore);

var questionsArr = [
    {
        question: "Which is not a data type?", option1: "Boolean", option2: "String", option3: "Node", option4: "Array", correctAnswer: "3"
    },
    {
        question: "Which symbol returns the division remainder?", option1: "/", option2: "++", option3: "*", option4: "%", correctAnswer: "4"
    },
    {
        question: "How would you access \"giraffe\" in this array\:var zoo = [\"zebra\",\"hippo\",\"giraffe\"]; ?", option1: "zoo[3]", option2: "zoo[2]", option3: "zoo[-3]", option4: "zoo[giraffe]", correctAnswer: "2"
    },
    {
        question: "Fixed values are called?", option1: "Literals", option2: "Variables", option3: "Operators", option4: "Arrays", correctAnswer: "1"
    }
];

// var allQuestions = questionsArr.length;
var endOfQuestions = questionsArr.length;

function startGame() {
    timeInterval = setInterval(startTimer, 1000);
    insertQuestion();

}

function startTimer() {

    if (numOfQuestions = possibleQuestions.length - 1) {
        quizStart.classList.add("hide");
    }
    homePage.classList.add("hide");
    quizStart.classList.remove("hide");
    const minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (time <= 0) {
        return timerEl.innerHTML = "OH NO! Time's Up!";
        // unhide replay button
    }

    timerEl.innerHTML = minutes + ":" + seconds;
    time--;

}

function insertQuestion() {
    possibleQuestions = [...questionsArr];
    // console.log(possibleQuestions)
    loadNextQuestion();
}
function deductTime() {
    if(time -= 10){
    timerEl.innerText = timeInterval + time ;
}
}
function loadNextQuestion() {
    var numOfQuestions = possibleQuestions.length - 1;
    if (questionIndex < numOfQuestions) {
        questionIndex += 1;

        currentQuestion = possibleQuestions[questionIndex];

        question.innerHTML = currentQuestion.question;

        answer.innerHTML = currentQuestion.correctAnswer;

        optionEl.forEach(optionEl => {
            var number = optionEl.dataset['number'];
            optionEl.innerText = currentQuestion["option" + number];
        });
    } else {
        highScoresPage();
    }

};
function endGame(){
    highScoresPage();
}
// function loadPrevQuestion() {
//     //var questionIndex = Math.floor(Math.random() * possibleQuestions.length);

//     if (questionIndex > 0) {
//         questionIndex -= 1;
//     }

//     currentQuestion = possibleQuestions[questionIndex];

//     question.innerHTML = currentQuestion.question;

//     answer.innerHTML = currentQuestion.correctAnswer;

//     optionEl.forEach(optionEl => {
//         var number = optionEl.dataset['number'];
//         optionEl.innerText = currentQuestion["option" + number];

//     });
// };

function highScoresPage() {
    quizStart.classList.add("hide");
    highScoreContainer.classList.remove("hide");
    clearInterval(timeInterval);
    var highScore = timerEl;
    console.log(timerEl);
}
// Got code below with help of tutor 
function saveHighScore(){
    // number of right answers times time Left
    // save initials of user
    // create object id:score 
    // stringify highscore 
    var int =initials.value;

    var highScoresArr = [];
    highScoresArr =  JSON.parse(localStorage.getItem("highScores")) || [];

    console.log(highScoresArr)
    var score = time;

    scoreObj = {
        int, 
        score
    }
    console.log(scoreObj);
    highScoresArr.push(scoreObj);
    localStorage.clear();
    localStorage.setItem("highScores", JSON.stringify(highScoresArr));
    console.log(localStorage);
    printHighScores(highScoresArr);

}

function printHighScores(highScoresArr){
    console.log(highScoresArr);
    highScoresArr.sort(function(a,b){
        return b.score - a.score;
    })
}
