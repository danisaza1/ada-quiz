//Import de question
import { quiz_culture_g } from './questions.js';

//Récuperer les emplacements en HTML pour inserer les questions et les options 
const questionsText = document.getElementById('question-text');
const answersContainer = document.getElementById('options-container');
const buttonNext = document.getElementById('next-button');

//Variables pour suivre l'état du quiz
let questionIndex =0;


//Fonction pour afficher une question basée sur l'index actuel
  function loadQuestion(){
     // Vider le conteneur des options
    answersContainer.innerHTML='';
    // Récupérer la question actuelle
    const currentQuestion=quiz_culture_g.questions[questionIndex];
    // Injecter la question dans le HTML
    questionsText.innerText = currentQuestion.questions;
  //Pour chaque option on crée un boutton et on l'ajoute
questionIndex.options.forEach(options => {
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
    if ( < __________.questions.length) {
      // Afficher la question suivante
      __________();
    } else {
      // Si plus de questions, indiquer la fin du quiz
      __________.innerText = '__________';
      __________.innerHTML = ''; // Effacer les options
      __________.style.display = '__________'; // Cacher le bouton Suivant
    }
  });