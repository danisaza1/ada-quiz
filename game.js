//Import de question
import { quiz_culture_g } from './questions.js';

//Récuperer les emplacements en HTML pour inserer les questions et les options 
const questionsText = document.getElementById('question-text');
const answersContainer = document.getElementById('options-container');
const buttonNext = document.getElementById('next-button');
const replayButton = document.getElementById('replay-button');

//Variables pour suivre l'état du quiz
let questionIndex =0;


//Fonction pour afficher une question basée sur l'index actuel
  function loadQuestion(){
     // Vider le conteneur des options
    answersContainer.innerHTML='';
    // Récupérer la question actuelle
    const currentQuestion =quiz_culture_g.questions[questionIndex];
    // Injecter la question dans le HTML
    questionsText.innerText = currentQuestion.questions;
  //Pour chaque option on crée un boutton et on l'ajoute
  currentQuestion.options.forEach(options => {
    const buttonAnswer = document.createElement('button');
    buttonAnswer.innerText = options;
    buttonAnswer.classList.add('options');
    answersContainer.appendChild(buttonAnswer);
  });
}


  // Ajouter un écouteur d'événements pour le bouton "Suivant"
buttonNext.addEventListener('click', () => {
  // Incrémenter l'index de la question
  questionIndex++;

  // Vérifier s'il reste des questions
  if ( questionIndex< quiz_culture_g.questions.length) {
    // Afficher la question suivante
    loadQuestion();
  } else {
    // Si plus de questions, indiquer la fin du quiz
    answersContainer.innerText = ''; // Effacer les options
    questionsText.innerHTML = ''; // Effacer les questions
    buttonNext.style.display = 'none'; // Cacher le bouton Suivant
    replayButton.style.display = 'inline-block';
  }
});

loadQuestion();

replayButton.addEventListener('click', () => {
  questionIndex = 0;
  replayButton.style.display = 'none';
  buttonNext.style.display = 'inline-block';
  loadQuestion();
})