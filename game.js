//Import de question et reponses à partir de notre base de donnees
import { quiz_culture_g } from './questions.js';

//Récuperer les emplacements en HTML pour inserer tout dont on a besoin 
const questionsText = document.getElementById('question-text');
const answersContainer = document.getElementById('options-container');
const buttonNext = document.getElementById('next-button');
const replayButton = document.getElementById('replay-button');
<<<<<<< HEAD
let answerSelected = false;
=======
const textEnd = document.getElementById('messageEnd');
>>>>>>> 123b55d408a57d83a6e1fe5a473a1bd4a7c0f0d9

//Variables pour suivre l'état du quiz
let questionIndex = 0;
let score = 0;


//Fonction pour afficher une question basée sur l'index actuel
  function loadQuestion(){
     // Vider le conteneur des options, pour afficher la premiere question
    answersContainer.innerHTML='';
    // Récupérer la question actuelle, donc variable egal a notre base de donnees et puis notre index
    const currentQuestion =quiz_culture_g.questions[questionIndex];
<<<<<<< HEAD
    // Injecter la question dans le HTML
    questionsText.innerText = currentQuestion.text; // .text et non .questions
=======
    // Inserter la question dans le HTML
    questionsText.innerText = currentQuestion.text;
>>>>>>> 123b55d408a57d83a6e1fe5a473a1bd4a7c0f0d9
  //Pour chaque option on crée un boutton et on l'ajoute
  currentQuestion.options.forEach(options => {
    const buttonAnswer = document.createElement('button');
    buttonAnswer.innerText = options;
    buttonAnswer.classList.add('option-button');
    answersContainer.appendChild(buttonAnswer);
  }); 
  //on desactive les buttons pour que l'utilisateur puisse click sur un seule
const allButtons = buttonAnswer.querySelectorAll('button')
allButtons.forEach (button => {
    button.disable = true;
})



}


  // Ajouter un écouteur d'événements pour le bouton "Suivant"
buttonNext.addEventListener('click', () => {
  // Incrémenter l'index de la question et le score
  questionIndex++;
  score++;
  // Vérifier s'il reste des questions
  if ( questionIndex< quiz_culture_g.questions.length) {
    // Afficher la question suivante
    loadQuestion();
  } else {
    // Si plus de questions, indiquer la fin du quiz
    textEnd.innerHTML = 'Vous avez fini et votre score est : ' + score;
    answersContainer.innerText = ''; // Effacer les options
    questionsText.innerHTML = ''; // Effacer les questions
    buttonNext.style.display = 'none'; // Cacher le bouton Suivant
    replayButton.style.display = 'inline-block'; //on montre le button rejouer
  }
});


//ajouter un evenement pour replay
replayButton.addEventListener('click', () => {
<<<<<<< HEAD
  questionIndex = 0;
  replayButton.style.display = 'none';
  buttonNext.style.display = 'inline-block';
  loadQuestion();
})

// Fonction pour vérifier les réponses des joueurs

function checkAnswer(buttonAnswer, correct_answer) {
  if (answerSelected) return; // Empêche de cliquer plusieurs fois
  answerSelected = true;

  const allButtons = document.querySelectorAll('.option-button');

  allButtons.forEach(btn.disabled = true);
  if (buttonAnswer.innerText.trim() === correct_answer.trim()) {
    buttonAnswer.style.border = '3px solid green';
    score++;
  } else {
    buttonAnswer.style.border = '3px solid red';
    allButtons.forEach(btn => {
      if (btn.innerText.trim() === correct_answer.trim()) {
          btn.style.border = '3px solid green';
      }
    });
  }
}
=======
  questionIndex = 0; // on montre la premiere question
  replayButton.style.display = 'none'; //on fait disparaitre la question rejouer 
  buttonNext.style.display = 'inline-block'; //on fait apparaitre la question next 
  loadQuestion(); //on appelle les questions
})

//on appelle tous les questions
loadQuestion();
>>>>>>> 123b55d408a57d83a6e1fe5a473a1bd4a7c0f0d9
