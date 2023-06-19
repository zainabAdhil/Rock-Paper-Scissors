const computerChoiceDisplay = document.getElementById('display-computerChoice');
const userChoiceDisplay = document.getElementById('display-userChoice');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('img');

let userScore = 0;
let computerScore = 0;

let result;
let computerChoice;
let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;

  generateComputerChoice();
  lost();
  win();
  score();
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;


  if(randomNumber === 1){
    computerChoice = 'Rock'
  }

  if(randomNumber === 2){
    computerChoice = 'Paper'
  }

  if(randomNumber === 3){
    computerChoice = 'Scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function lost(){
  
  if (computerChoice === 'Rock' && userChoice === 'Scissors'){
    result ='You Lost'
  }
  if (computerChoice === 'Paper' && userChoice === 'Rock'){
    result ='You Lost'

  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper'){
 }
  result = 'You Lost'

  resultDisplay.innerHTML = result;

}

function score(){
  if(result === 'You Lost'){
    computerScore += 1;
  }
  if (result === 'You Win'){
    userScore += 1;
  }
  else {
    userScore = userScore;
    computerScore = computerScore;
  }

  resultDisplay.innerHTML = result;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
}

function win(){

  if (computerChoice === 'Rock' && userChoice === 'Paper'){
    result ='You Win'
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors'){
    result ='You Win'

  }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
    result ='You Win'

  }
  if (computerChoice === userChoice){
    result ='Its a Draw'
  }

  resultDisplay.innerHTML = result;
}
