const questions = [
    {
        question: "Tsarists power in Russia collapsed in the year"
        answers: [
            { text: "1905", correct: false},
            { text: "1916", correct: false},
            { text: "1917", correct: true},
            { text: "1920", correct: false},
        ]
    },
    {
        question: "The Leader of the Bolshevik party was?"
        answers: [
            { text: "Stalin", correct: false},
            { text: "Lenin", correct: true},
            { text: "Louis-blank", correct: false},
            { text: "Karl-Marx", correct: false},
        ]
    },{
        question: "Tsarina Alexander was of the "
        answers: [
            { text: "German Origin", correct: true},
            { text: "French Origin", correct: false},
            { text: "Russian Origin", correct: false},
            { text: "Dutch Origin", correct: false},
        ]
    },
    {
        question: "The main occupation of the people of Russia in the beginning of the twentieth century was "
        answers: [
            { text: "Manufacturing", correct: false},
            { text: "Poultry Farming", correct: false},
            { text: "Fishing", correct: false},
            { text: "Agriculture", correct: true},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerhtml = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
}