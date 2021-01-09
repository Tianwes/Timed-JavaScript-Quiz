// Homepage "start" button
startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);
homePage = document.getElementById("homePage-container");
// Quiz questions pop up
quizStart = document.getElementById("questions-container");
questionEl = document.getElementById("question");
optionEl = Array.from(document.getElementsByClassName("option"));
// Timer Element
const timerEl = document.getElementById("timer");
// one minute
const startingTime = 1;
// 60 seconds
var time = startingTime * 60;

var currentQuestion = {};
var correctOption = true;
var possibleQuestions= [];



// Question and subsequent answer options
// var questionEl = document.getElementById("question");
// var option1 = document.getElementById("option-1");
// var option2 = document.getElementById("option-2");
// var option3 = document.getElementById("option-3");
// var option4 = document.getElementById("option-4");

var questionsArr = [
    {
        question: "Which is not a data type?",
        option1: "Boolean",
        option2: "String",
        option3: "Node",
        option4: "Array",
        correctAnswer: 3
    },
    {
        question: "Which symbol returns the division remainder?",
        option1: "/",
        option2: "++",
        option3: "*",
        option4: "%",
        correctAnswer: 4
    },
    {
        question: "How would you access \"giraffe\" in this array\:var zoo = [\"zebra\",\"hippo\",\"giraffe\"]; ?",
        option1: "zoo[3]",
        option2: "zoo[2]",
        option3: "zoo[-3]",
        option4: "zoo[giraffe]",
        correctAnswer: 2
    },
    {
        question: "Fixed values are called?",
        option1: "Literals",
        option2: "Variables",
        option3: "Operators",
        option4: "Arrays",
        correctAnswer: 1
    }
];

// var allQuestions = questionsArr.length;
var endOfQuestions = questionsArr.length;

function startGame() {
    
    function startTimer() {
        insertQuestion();
        homePage.classList.add("hide");
        quizStart.classList.remove("hide");
        const minutes = Math.floor(time / 60);
        var seconds = time % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        } if (time <= 0) {
            return timerEl.innerHTML = "OH NO! Time's Up!";
            // unhide replay button
        } else {
            seconds;
        }
        timerEl.innerHTML = minutes + ":" + seconds;
        time--;
    }
    function insertQuestion() {
        possibleQuestions = [...questionsArr];
        console.log(possibleQuestions)
        loadNextQuestion();
    }
    function loadNextQuestion(){
        var questionIndex = Math.floor(Math.random() * possibleQuestions.length);
        currentQuestion = possibleQuestions[questionIndex];
        question.innerHTML = currentQuestion.question;

        optionEl.forEach(optionEl => {
            var number = optionEl.dataset['number'];
            optionEl.innerText = currentQuestion["option" + number];

        });
    };
    
    setInterval(startTimer, 1000);
    
    clearInterval();

}
