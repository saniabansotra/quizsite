const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Makeup Language",
    ans: "ans3",
  },
  {
    question: "Q1: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheet",
    d: "Cascadin Super Sheet",
    ans: "ans1",
  },
  {
    question: "Q1: What is the full form of HTTP?",
    a: "Hypertext Transfer product",
    b: "Hypertext Transfer Protocol",
    c: "Hypertool transfer Protocol",
    d: "Hypertext Test Protocol",
    ans: "ans2",
  },
  {
    question: "Q1: What is the full form of JS?",
    a: "JsonScript",
    b: "JavaScript",
    c: "JavaStyle",
    d: "JavaSheets",
    ans: "ans2",
  },
  {
    question: "Q1: What is the full form of JSON?",
    a: "JavaScript Object Notation",
    b: "JavaStyle Object Notation",
    c: "Java Object Notation",
    d: "JavaScript Opaque Notation",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option5 = document.querySelector("#option5");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answers = curAnsElem.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount]) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
<h3>You Scored ${score}/${quizDB.length} </h3>
<button class="btn" onclick="location.reload()">Play Again</button>
`;
    showScore.classList.remove("scoreArea");
  }
});
