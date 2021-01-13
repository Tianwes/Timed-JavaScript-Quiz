homePage = document.getElementById("homePage-container");
quizStart = document.getElementById("questions-container");
questionEl = document.getElementById("question");
optionEl = Array.from(document.getElementsByClassName("option"));
highScoreContainer = document.getElementById("your-score");
initials = document.getElementById("initials-input");
const timerEl = document.getElementById("timer");
timesUpCont = document.getElementById("timesUp");
// help bellow!
scoreNumHere = document.getElementById("scoreNumGoesHere")
scoreBoardCont = document.getElementById("scoreBoard");
coderInt = document.getElementById("coderInt");
userScore = document.getElementById("coderScore");
highScoresList = document.getElementById("highScoresList");

document.getElementById("option-1").addEventListener("click", function () { checkanswer("1") });
document.getElementById("option-2").addEventListener("click", function () { checkanswer("2") });
document.getElementById("option-3").addEventListener("click", function () { checkanswer("3") });
document.getElementById("option-4").addEventListener("click", function () { checkanswer("4") });
document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("submit-initials-button").addEventListener("click", saveHighScore);

// one minute
const startingTime = 1;
// 60 seconds
var time = startingTime * 60;
var currentQuestion = {};
var correctOption = true;
var possibleQuestions = [];
var questionIndex = -1;
var timeInterval;
var questionsArr = [
    {
        question: "Which is not a data type?", option1: "Boolean", option2: "String", option3: "Node", option4: "Array", correctAnswer: "3"
    },
    {
        question: "Which symbol returns the division remainder?", option1: "/", option2: "++", option3: "*", option4: "%", correctAnswer: "4"
    },
    {
        question: "How would you access \"giraffe\" in this array? \: <br> var zoo = [\"zebra\",\"hippo\",\"giraffe\"]", option1: "zoo[3]", option2: "zoo[2]", option3: "zoo[-3]", option4: "zoo[giraffe]", correctAnswer: "2"
    },
    {
        question: "Fixed values are called?", option1: "Literals", option2: "Variables", option3: "Operators", option4: "Arrays", correctAnswer: "1"
    }
];

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
        timerEl.innerHTML = "OH NO! Time's Up!";
        quizStart.classList.add("hide");
        timesUpCont.classList.remove("hide");
    }
    
    timerEl.innerHTML = minutes + ":" + seconds;
    time--;

}

function insertQuestion() {
    possibleQuestions = [...questionsArr];
    // console.log(possibleQuestions)
    loadNextQuestion();
}
// function deductTime() {
//     if(time -= 10){
//     timerEl.innerText = timeInterval + time ;
// }
// }
function checkanswer(value) {
    if (currentQuestion.correctAnswer == value) {
        loadNextQuestion();
    }
    else {
        time = time - 9;
        timerEl.innerHTML ="0:" + time;
        loadNextQuestion();
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
function endGame() {
    highScoresPage();
}

function highScoresPage() {
    quizStart.classList.add("hide");
    highScoreContainer.classList.remove("hide");
    clearInterval(timeInterval);
    var highScore = timerEl;
    // console.log(timerEl);
    scoreNumHere.innerText ="[" + time + "]";
}
const MAX_HIGHSCORES = 11;
// Got some of code below with help of tutor 
function saveHighScore() {
    var highScoresArr = [];
    highScoresArr = JSON.parse(localStorage.getItem("highScores")) || [];
    console.log(highScoresArr)
    // save initials of user
    var int = initials.value;
    var score = time;
    // package 1 user initials with their score(time)
    scoreObj = {
        int,
        score
    }
    console.log(scoreObj);
    // push each individual user's initials and score to end of array of highscores
    highScoresArr.push(scoreObj);
    // stringify highscore 
    localStorage.setItem("highScores", JSON.stringify(highScoresArr));
    console.log(localStorage);
    printHighScores(highScoresArr);

function printHighScores(highScoresArr) {
    // move to scoreBoard container 
    highScoreContainer.classList.add("hide");
    scoreBoardCont.classList.remove("hide");

    // console.log(highScoresArr);
    highScoresArr.sort( (a, b) => b.score - a.score)
    highScoresArr.splice(11);
    
    // for each object created, make it a list and append
    highScoresArr.forEach(scoreObj => {
        const listItem = document.createElement('li');
        listItem.innerText = `${scoreObj.int}   -   ${scoreObj.score}`;
        listItem.classList.add('highScoresList');
        highScoresList.appendChild(listItem);
       })
}
}
