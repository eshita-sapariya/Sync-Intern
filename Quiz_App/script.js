const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My World",
    b: "Hypertext Makeup Language",
    c: "Hypertext Markup Language",
    d: "Hey Text Markup Language",
    ans: "ans3",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheeps",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },
  {
    question: "Q3: What is the full form of HTTP?",
    a: "Hypertext Transfer Product",
    b: "Hypertext Test Protocol",
    c: "Hey Transfer Product",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustSuper",
    d: "JordenSuper",
    ans: "ans1",
  },
];

const questionEl = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector(".submit-btn");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector(".score-div");

let questionCount = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  questionEl.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

let ansId,
  answer,
  score = 0;

const checkedAnswer = () => {
  answers.forEach((currAns) => {
    if (currAns.checked) {
      ansId = currAns.id;
    }
  });
  return ansId;
};

const deselectAll = () => {
  answers.forEach((currAnsEl) => {
    currAnsEl.checked = false;
  });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  answer = checkedAnswer();

  if (answer === undefined) {
    alert("Please select the option");
  } else if (answer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.classList.remove("hidden");
    submit.classList.add("hidden");
    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length}</h3>
    <button class="play-again-btn" onClick="location.reload()">Play Again</button>
    `;
  }
});
