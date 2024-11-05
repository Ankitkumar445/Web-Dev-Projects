const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who is the current CEO of Tesla?",
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Jeff Bezos",
        d: "Mark Zuckerberg",
        correct: "b"
    },
    {
        question: "Which is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c"
    }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = `
        <h2>${quizData[currentQuiz].question}</h2>
        <input type="radio" name="answer" value="a"> ${quizData[currentQuiz].a} <br>
        <input type="radio" name="answer" value="b"> ${quizData[currentQuiz].b} <br>
        <input type="radio" name="answer" value="c"> ${quizData[currentQuiz].c} <br>
        <input type="radio" name="answer" value="d"> ${quizData[currentQuiz].d} <br>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selected = undefined;
    answers.forEach((answer) => {
        if (answer.checked) {
            selected = answer.value;
        }
    });
    return selected;
}

function submitQuiz() {
    const selectedAnswer = getSelected();
    if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById("quiz").innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
        document.getElementById("submit").disabled = true;
    }
}

document.getElementById("submit").addEventListener("click", submitQuiz);

window.onload = loadQuiz;
