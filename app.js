const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  quiz.innerHTML = `
    <div class="quiz-header">
      <h2 id="question">${quizData[currentQuiz].question}</h2>
      <ul>
        <li>
          <input type="radio" name="answer" id="a" class="answer" />
          <label for="a" id="a_text">${quizData[currentQuiz].a}</label>
        </li>
        <li>
          <input type="radio" name="answer" id="b" class="answer" />
          <label for="b" id="b_text">${quizData[currentQuiz].b}</label>
        </li>
        <li>
          <input type="radio" name="answer" id="c" class="answer" />
          <label for="c" id="c_text">${quizData[currentQuiz].c}</label>
        </li>
        <li>
          <input type="radio" name="answer" id="d" class="answer" />
          <label for="d" id="d_text">${quizData[currentQuiz].d}</label>
        </li>
      </ul>
    </div>
    <button id="submit">Submit</button>
  `;

  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", () => {
    const answerEls = document.querySelectorAll(".answer");
    let selected = null;
    answerEls.forEach((el) => {
      if (el.checked) selected = el.id;
    });

    if (!selected) {
      alert("Please select an answer!");
      return;
    }

    if (selected === quizData[currentQuiz].correct) score++;
    currentQuiz++;

    if (currentQuiz < quizData.length) loadQuiz();
    else showResult();
  });
}

function showResult() {
  quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly 🎉</h2>
    <button id="playAgain">Play Again</button>
  `;
  document.getElementById("playAgain").addEventListener("click", () => {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
  });
}

// Start the quiz immediately
loadQuiz();
