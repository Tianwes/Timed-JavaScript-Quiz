// Homepage "start" button
startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

homePage = document.getElementById("homePage-container");
questionsStart = document.getElementById("questions-container");

// answerButton = document.getElementsByClassName("btn");
// answerButton.addEventListener("click",setInterval);

const timerEl = document.getElementById("timer");
// one minute
const startingTime = 1;
// 60 seconds
var time = startingTime * 60;

var currentQuestion = [0];

// Question and subsequent answer options
var questionEl = document.getElementById("question");
var option1 = document.getElementById("option-1");
var option2 = document.getElementById("option-2");
var option3 = document.getElementById("option-3");
var option4 = document.getElementById("option-4");


var questionsArr = [
    {
        q: "Which is not a data type?",
        option1: "Boolean",
        option2: "String",
        option3: "Node",
        option4: "Array",
        correctAnswer: "3"
    },
    {
        "question": "Which symbol returns the division remainder?",
        "option1": "/",
        "option2": "++",
        "option3": "*",
        "option4": "%",
        "correctAnswer": "4"
    },
    {
        "question": "How would you access \"giraffe\" in this array\:var zoo = [\"zebra\",\"hippo\",\"giraffe\"]; ?",
        "option1": "zoo[3]",
        "option2": "zoo[2]",
        "option3": "zoo[-3]",
        "option4": "zoo[giraffe]",
        "correctAnswer": "2"
    },
    {
        "question": "Fixed values are called?",
        "option1": "Literals",
        "option2": "Variables",
        "option3": "Operators",
        "option4": "Arrays",
        "correctAnswer": "1"
    }
];
// var allQuestions = questionsArr.length;
var endOfQuestions = questionsArr.length;

function startGame() {
    // homePage.classList.add("hide");
    // questionsStart.classList.remove("hide");

    function startTimer() {
        insertQuestion();
        homePage.classList.add("hide");
        questionsStart.classList.remove("hide");
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
        
    // startGame();

    }
    function insertQuestion(){
    //     var q = questionsArr.q;
    questionEl.innerText = questionsArr[0].q;
        option1.textContent = questionsArr[0].option1;
        option2.textContent = questionsArr[0].option2;
        option3.textContent = questionsArr[0].option3;
        option4.textContent = questionsArr[0].option4;
    }
    
    setInterval(startTimer, 1000);
    }
    clearInterval();
   
