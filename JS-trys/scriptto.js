// Homepage "start" button
startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

// Homepage "nextQ-button" button
// nextQbutton = document.getElementById("nextQ-button"); 
// nextQbutton.addEventListener("click", loadNextQuestion);

// Homepage "prevQ-button" button
// prevQbutton = document.getElementById("prevQ-button");
// prevQbutton.addEventListener("click", loadPrevQuestion);

homePage = document.getElementById("homePage-container");
// Quiz questions pop up
quizStart = document.getElementById("questions-container");
questionEl = document.getElementById("question");
optionEl = Array.from(document.getElementsByClassName("option"));
// answerButton = document.getElementsByClassName("btn");
// answerButton.addEventListener("click", nextQuestionAfterClick);

// Timer Element
const timerEl = document.getElementById("timer");
// one minute
const startingTime = 1;
// 60 seconds
var time = startingTime * 60;

var currentQuestion = {};
var correctOption = true;
var possibleQuestions= [];


// Homepage "option-1" button

document.getElementById("option-1").addEventListener("click",  function() { console.log( "You pressed A" );  loadNextQuestion(); });
document.getElementById("option-2").addEventListener("click",  function() { console.log( "You pressed B" );  loadNextQuestion(); });
document.getElementById("option-3").addEventListener("click",  function() { console.log( "You pressed C" );  loadNextQuestion(); });
document.getElementById("option-4").addEventListener("click",  function() { console.log( "You pressed D" );  loadNextQuestion(); });

 

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
        correctOption: 3
    },
    {
        question: "Which symbol returns the division remainder?",
        option1: "/",
        option2: "++",
        option3: "*",
        option4: "%",
        correctOption: 4
    },
    {
        question: "How would you access \"giraffe\" in this array\:var zoo = [\"zebra\",\"hippo\",\"giraffe\"]; ?",
        option1: "zoo[3]",
        option2: "zoo[2]",
        option3: "zoo[-3]",
        option4: "zoo[giraffe]",
        correctOption: 2
    },
    {
        question: "Fixed values are called?",
        option1: "Literals",
        option2: "Variables",
        option3: "Operators",
        option4: "Arrays",
        correctOption: 1
    }
];

// var allQuestions = questionsArr.length;
var endOfQuestions = questionsArr.length;

function startGame() {
    
    function startTimer() 
    {
       // insertQuestionAndAnswers();
                    
    //    var context = new AudioContext()
    //    var o = context.createOscillator()
    //    o.type = "sine"
    //    o.connect(context.destination)
    //    o.start()

    //    o.stop() 
       
        homePage.classList.add("hide");
        quizStart.classList.remove("hide");
        const minutes = Math.floor(time / 60);
        var seconds = time % 60;
        if (seconds < 10){
            seconds = "0" + seconds;     
        } 
        if (time <= 0) {
                return timerEl.innerHTML = "OH NO! Time's Up!";
                // unhide replay button
         } else {
                seconds;
         }

        timerEl.innerHTML = minutes + ":" + seconds;
        time--;
    }

    // startTimer();
    setInterval(startTimer, 1000)

    function insertQuestionAndAnswers() {
        possibleQuestions = [...questionsArr];
        var questionIndex = Math.floor(Math.random() * possibleQuestions.length);
        console.log(possibleQuestions)
        currentQuestion = possibleQuestions[questionIndex];
        question.innerHTML = currentQuestion.question;
        optionEl.forEach(optionEl => {
        var number = optionEl.dataset['number'];
        optionEl.innerText = currentQuestion["option" + number];  
        });
    }
   
    insertQuestionAndAnswers();
    clearInterval();
}  


optionEl.forEach((choice) => {
    // var number = optionEl.dataset['number'];
    choice.addEventListener('click', (e) => {
        var possibleQuestions = [...questionsArr];
        // if (!correctOption) return;
        // var theRightButton = possibleQuestions.correctOption;
        for(var i=0; i <possibleQuestions.length; i++){
        if(choice.dataset['number'] === possibleQuestions[i].correctOption){
            console.log("YES!!!");
            // loadNextQuestion();

        }else{
            console.log("NOPE!!!");
            // loadNextQuestion();
        }
}
        correctOption = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        
    
    });
});
    // moveToNextQuestion();
    // questionEl = document.getElementById("question");
    // optionEl = Array.from(document.getElementsByClassName("option"));
    // startButton.addEventListener("click", startGame);
    
    // document.getElementsByClassName('btn').addEventListener('click', function moveToNextQuestion() {
    //     possibleQuestions++;
    //     currentQuestion++;

        
    //   });
    //   moveToNextQuestion();
    // function nextQuestionAfterClick(){

    // }
    

function loadNextQuestion()
{
    var questionIndex = Math.floor(Math.random() * possibleQuestions.length);
    currentQuestion = possibleQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    optionEl.forEach(optionEl => 
        {
        var number = optionEl.dataset['number'];
        optionEl.innerText = currentQuestion["option" + number];

    });
};

// function loadPrevQuestion()
// {
//     var questionIndex = Math.floor(Math.random() * possibleQuestions.length);
//     currentQuestion = possibleQuestions[questionIndex];
//     question.innerHTML = currentQuestion.question;

//     optionEl.forEach(optionEl => 
//         {
//         var number = optionEl.dataset['number'];
//         optionEl.innerText = currentQuestion["option" - number];

//     });
// };

