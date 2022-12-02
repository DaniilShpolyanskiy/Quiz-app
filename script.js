const quizData = [
  {
    question: "How old is Perm city?",
    a: "289",
    b: "299",
    c: "249",
    d: "310",
    correct: "b",
  },
  {
    question: "Who is presiden of Russia?",
    a: "Vladimir Putin",
    b: "Vladimir Zelenskiy",
    c: "Daniil Shpolyanskiy",
    d: "Alla Pugacheva",
    correct: "a",
  },
  {
    question: "What Daniil Shpolyanskiy like to drink in the morning?",
    a: "Coffe",
    b: "Whiski",
    c: "Tea",
    d: "Tea with milk",
    correct: "a",
  },
  {
    question: "In what year did people fly into space for fun?",
    a: "1993",
    b: "1935",
    c: "1961",
    d: "1978",
    correct: "c",
  },
  {
    question: "What brand of cars used to produce tractors?",
    a: "BWM",
    b: "Mersedes-Bens",
    c: "Alfa-Romeo",
    d: "Lamborghini",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0;
let score = 0;


loadQuiz()

function loadQuiz() {
   decilectAnsewrs();
   const currentQuizData = quizData[currentQuiz]
   questionEl.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
}
function getSelected() {

  let answer = undefined

  answersEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

function decilectAnsewrs() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected()
  console.log(answer)
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} qustions.</h2><button onClick="location.reload()">Reload</button>`
    }
  }  
  })

