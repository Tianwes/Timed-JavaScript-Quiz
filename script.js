startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);
// answerButton = document.getElementsByClassName("btn");
// answerButton.addEventListener("click",setInterval);

homePage = document.getElementById("homePage-container");
questionsStart = document.getElementById("questions-container");

const timerEl = document.getElementById("timer");

// one minute
const startingTime = 1;
// 60 seconds
var time = startingTime * 60;

setInterval(runCountDown, 1000);

function runCountDown(){
    const minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (seconds < 10){
        seconds = "0" + seconds;
    }else{
        seconds;
    }
    timerEl.innerHTML = minutes + ":" + seconds;
    time--;
}

var questions = [
    { q: "Which is not a data type?",
        choices: {
            1: "Boolean",
            2: "String",
            3: "Node",
            4: "Array"
        },  correctAnswer: "3"
    },
    { q: "Which symbol returns the division remainder?",
        choices: {
            1: "/", 2: "++", 3: "*", 4: "%"
        },
        correctAnswer: "4"
    },
    { q: "How would you access \"giraffe\" in this array\:var zoo = [\"zebra\",\"hippo\",\"giraffe\"]; ?",
        choices: {
            1: "zoo[3]", 2: "zoo[2]", 3: "zoo[-3]", 4: "zoo[giraffe]"
        },
        correctAnswer: "2"
    },
    { q: "Fixed values are called?",
        choices: {
            1: "Literals", 2: "Variables", 3: "Operators", 4: "Arrays"
        },
        correctAnswer: "1"
    }
];

// startClock();
function startGame(){
    homePage.classList.add("hide");
    questionsStart.classList.remove("hide");
    // timeDecrease();
    // timer.innerHtml = 
    

}

// function startQuestions(){

// }

 // setInterval(function(){ 
    //     for(var i = 0; i <= questions.length; i++){
            

            // questions[0];  

        // i need to pass in an index into question and answer and go 
        // down array after button clicks
        // }
        
    // }, 6000);
    




