const quizData = [
  {
    question: "Монгол нийслэл хотын нэр?",
    option: ["Улаанбаатар", "Дархан", "Эрднэт", "Архангай"],
    currentAnswer: "Улаанбаатар",
  },
  {
    question: "Монгол нийслэл хотын нэр?",
    option: ["Улаанбаатар", "Дархан", "Эрднэт", "Архангай"],
    currentAnswer: "Улаанбаатар",
  },
];
const questionElement = document.getElementById("question");
const optionContainer = document.getElementById("options");
function startQuiz() {
  showQuiz();
}
function showQuiz() {
  // questionTag = document.createElement("h3");
  questionElement.innerText = quizData.question;
  quizData.option.forEach((el) => {
    const button = document.createElement("button");
    button.innerText = el;
    button.addEventListener("click", checkAnswer);
    optionContainer.appendChild(button);
  });
}
function checkAnswer(event) {
  const selectedButton = event.target;
  const correct = selectedButton.innerText === quizData.currentAnswer;
  if (correct) {
    alert("хариулт зөв байна");
    return;
  }
  alert("хариулт буруу байна");
}
startQuiz();
