startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

welcome = document.getElementById("welcome-container");

questionsStart = document.getElementById("quiz-container");

var questions = [
    { q: "Which is not a data type?",
        choices: {
            1: "Boolean", 2: "String", 3: "Node", 4: "Array"
        },
        correctAnswer: "3"
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

function WelcomePage(){
    getElementById

}
function startGame(){
    welcome.classList.add("hide");
    questionsStart.classList.remove("hide");
    // setInterval(function(){ 
    //     alert("Hello");
    // }, 2000);
    

}
// function startQuestions(){

// }




