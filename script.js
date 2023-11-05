const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'OS computer abbreviation usually means?',
    answers: [
      { text: 'Order of Significance', correct: false },
      { text: 'Open Software', correct: false },
      { text: 'Operating System', correct: true },
      { text: 'Optical Sensor', correct: false }
    ]
  },
  {
    question: 'What is part of a database that holds only one type of information?',
    answers: [
      { text: 'Report', correct: false },
      { text: 'Field', correct: true },
      { text: 'Record', correct: false },
      { text: 'File', correct: false }
    ]
  },
  {
    question: 'Which of the following is used for comments in C++?',
    answers: [
      { text: '/* comment */', correct: false },
      { text: '// comment */', correct: false },
      { text: '// comment', correct: false },
      { text: 'both // comment or /* comment */', correct: true }
    ]
  },
  {
    question: 'Which of the following is not a type of Constructor in C++?',
    answers: [
      { text: 'Default constructor', correct: false },
      { text: 'Parameterized constructor', correct: false },
      { text: 'Copy constructor', correct: false },
      { text: 'Friend constructor', correct: true }
    ]
  },
  {
    question: 'Which of the following correctly declares an array in C++?',
    answers: [
      { text: 'array{10};', correct: false },
      { text: 'array array[10];', correct: false },
      { text: 'int array;', correct: false },
      { text: 'int array[10];', correct: true }
    ]
  },
  {
    question: 'WhatsApp concurrent model is implemented using which programming language?',
    answers: [
      { text: 'Java;', correct: false },
      { text: 'Node.js;', correct: false },
      { text: 'Erlang;', correct: true },
      { text: 'C;', correct: false }
    ]
  },
   {
    question: 'Which of the following includes Chromes V8 JavaScriptrt Engine?' ,
    answers: [
      { text: 'jQuery;', correct: false },
      { text: 'Java;', correct: false },
      { text: 'npm;', correct: false },
      { text: 'Node.js;', correct: true }
    ]
  },
  {
    question: 'Which of the following is not a type of computer code related to program execution?',
    answers: [
      { text: 'Source code;', correct: false },
      { text: 'Bytecode;', correct: false },
      { text: 'Machine code;', correct: false },
      { text: 'Hex code;', correct: true }
    ]
  },
  {
    question: 'Which of the following is not a programming language?',
    answers: [
      { text: 'TypeScript;', correct: false },
      { text: 'Python;', correct: false },
      { text: 'Anaconda;', correct: false },
      { text: 'Java;', correct: true }
    ]
  },
  {
    question: 'What word describes characters that can be moved in a Scratch program?',
    answers: [
      { text: 'Goblin;', correct: false },
      { text: 'Sprite;', correct: true },
      { text: 'Imp;', correct: false },
      { text: 'Pixie;', correct: false }
    ]
  },

]