import { quiz_culture_g } from './questions.js';

const questionsText = document.getElementById('question-text');
const answersContainer = document.getElementById('options-container');
const buttonNext = document.getElementById('next-button');


let currentQuestionIndex = quiz_culture_g.questions[0];
questionsText.innerText = quiz_culture_g;

currentQuestionIndex.options.forEach(options => {
    const buttonAnswer = document.createElement('button');
    buttonAnswer.innerText = options;
    buttonAnswer.classList.add('options');
    answersContainer.appendChild(buttonAnswer);
  });

// Fonction pour afficher une question basée sur l'index actuel
 // function loadQuestion(){
     // Vider le conteneur des options
 //   answersContainer.innerHTML='';
    //const currentQuestion
 // }
