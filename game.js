//Import de question et reponses à partir de notre base de donnees
import { quiz_culture_g } from './questions.js';

//Récuperer les emplacements en HTML pour inserer tout dont on a besoin 
const questionsText = document.getElementById('question-text');
const answersContainer = document.getElementById('options-container');
const buttonNext = document.getElementById('next-button');
const replayButton = document.getElementById('replay-button');
const textEnd = document.getElementById('messageEnd');
const explication = document.getElementById('explication');
const timerElement = document.getElementById('timer');
let time = 5;
timerElement.innerText = time;


//Variables pour suivre l'état du quiz
let questionIndex = 0;
let score = 0;

// Afficher un timer


function diminuerTemps() {
  let minutes = parseInt(time / 60, 10);
  let secondes = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;
  
  timerElement.innerText = minutes + ":" + secondes;
  time = time <= 0 ? 0 : time - 1;
  if (time === 0) {
    checkAnswer.disabled = true;
    buttonNext.disabled = false;
  }
  
 
}
setInterval(diminuerTemps, 1000);



//Fonction pour afficher une question basée sur l'index actuel
  function loadQuestion(){
     // Vider le conteneur des options, pour afficher la premiere question
    answersContainer.innerHTML='';
    // Récupérer la question actuelle, donc variable egal a notre base de donnees et puis notre index
    const currentQuestion = quiz_culture_g.questions[questionIndex];
    // Inserter la question dans le HTML
    questionsText.innerText = currentQuestion.text;
  //Pour chaque option on crée un boutton et on l'ajoute
  currentQuestion.options.forEach(options => {
    const buttonAnswer = document.createElement('button');
    buttonAnswer.innerText = options;
    buttonAnswer.classList.add('option-button');
    answersContainer.appendChild(buttonAnswer);
// Ajoute l'événement pour vérifier la réponse
    buttonAnswer.addEventListener('click', () => checkAnswer(buttonAnswer, currentQuestion));
    buttonNext.disabled = true;
  
  }); 
}



// Fonction pour vérifier les réponses des joueurs

function checkAnswer(buttonAnswer, currentQuestion) {
const allButtons = document.querySelectorAll('.option-button');

const userAnswer = buttonAnswer.innerText;
const goodAnswer = currentQuestion.correct_answer;
buttonNext.disabled = false;

if (userAnswer.trim() === goodAnswer.trim()) {
  buttonAnswer.style.border = '3px solid green';
  score++;
  explication.innerHTML = currentQuestion.explication_answer;
  explication.style.display = 'block';
  console.log(score);

} else {
  buttonAnswer.style.border = '3px solid red';
  explication.innerText = currentQuestion.explication_answer;
  explication.style.display = 'block';
  console.log(explication);
}
  allButtons.forEach(btn => {
    btn.disabled = true;
  })



}





  // Ajouter un écouteur d'événements pour le bouton "Suivant"
buttonNext.addEventListener('click', () => {
  buttonNext.disabled = true;
  // Incrémenter l'index de la question et le score
  questionIndex++;
  explication.style.display = 'none';
  // Vérifier s'il reste des questions

  if ( questionIndex< quiz_culture_g.questions.length) {
    // Afficher la question suivante
    loadQuestion();
  } else {
    // Si plus de questions, indiquer la fin du quiz
   reactionFinal(score);
    answersContainer.innerText = ''; // Effacer les options
    questionsText.innerHTML = ''; // Effacer les questions
    buttonNext.style.display = 'none'; // Cacher le bouton Suivant
    replayButton.style.display = 'inline-block'; //on montre le button rejouer
  }
  diminuerTemps.reset();
});



function reactionFinal(score) {
  if (score <= 4) {
    textEnd.innerText = 'Tu peux mieux faire';
  } else if (score >= 5 && score <= 7) {
    textEnd.innerText = 'Bien joué ! 👍';
  } else if (score > 7 && score < 10) {  // Modifié ici
    textEnd.innerText = 'Quel as !';
  } else {
    textEnd.innerText = 'Parfait ! Un véritable sans-faute ! ';
    var end = Date.now() + (15 * 100);

// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
  }
}



//ajouter un evenement pour replay
replayButton.addEventListener('click', () => {
  questionIndex = 0;
  score = 0;
  replayButton.style.display = 'none';
  buttonNext.style.display = 'inline-block';
  textEnd.style.display = 'none';
    loadQuestion();
})



loadQuestion(); // Afficher la première question