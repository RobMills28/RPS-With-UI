//========FUNCTION DECLARATIONS============

function computerPlay() {
    // make variable with options in an array
    let rpg = ['rock', 'paper', 'scissors'];
    // generate random number
    ranNum = Math.floor(Math.random()*rpg.length);
    //return random entry from array
    return rpg[ranNum]; 
}

function playRound(playerSelection, computerSelection) {
    //=====YOU PLAY ROCK==========
    if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'rock'){
            return('Tie!');
        } else if (computerSelection === 'paper'){
            return('You Lose! Paper beats Rock');
        } else if (computerSelection === 'scissors'){
            return('You Win! Rock beats Scissors');
        }
    //=====YOU PLAY PAPER==========
    } else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'rock'){
            return('You Win! Paper beats Rock');
        } else if (computerSelection === 'paper'){
            return('Tie!');
        } else if (computerSelection === 'scissors'){
            return('You Lose! Scissors beats Paper');
        }
    //=====YOU PLAY SCISSORS==========   
    } else if (playerSelection.toLowerCase() === 'scissors');{
        if (computerSelection === 'rock'){
            return('You Lose! Rock beats Scissors');
        } else if (computerSelection === 'paper'){
            return('You Win! Scissors beats Rock');
        } else if (computerSelection === 'scissors'){
            return('Tie!');
        } 
    }
}

function endOfGame(playerScore, computerScore) {
    if (playerScore > computerScore) {
        endGame.textContent = ('You Win the Game!!!');
    } else if (playerScore < computerScore) {
        endGame.textContent = ('You Lose, Sorry!');
    } else {
        endGame.textContent = ('This Game was Tied...');
    }
    container.appendChild(endGame);
}

//=======VARIABLE & CONSTANT DECLARATIONS==========

let playerSelection;
let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;
let clickLog = 0 ;
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const result = document.createElement('div');
result.setAttribute('id', 'result');
const score = document.createElement('div');
score.setAttribute('id', 'score');
const endGame = document.createElement('h1');
endGame.setAttribute('id', 'endGame');//so we can look up element to remove if it exists from a previous game

//=========EVENT LISTENER=========================
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playerSelection = (button.id);
    computerSelection = computerPlay();
    roundResult = playRound(playerSelection, computerSelection);
    if (document.getElementById("endGame")) { //resets game if not the first in session
        container.removeChild(endGame);
        container.removeChild(result);
        playerScore = 0;
        computerScore = 0;
    }
    result.textContent = roundResult;
    container.appendChild(result);
    if (roundResult.slice(0,5) === 'You W' ) {
        playerScore += 1;
    } else if (roundResult.slice(0,5) === 'You L' ) {
        computerScore += 1;
    } else {
        playerScore += 1;
        computerScore += 1;
    }
    score.textContent = ('current score: \nPlayer: ' + playerScore + '\nComputer: ' + computerScore);
    container.appendChild(score);
    clickLog += 1;
    if (clickLog >= 5) {
        endOfGame(playerScore, computerScore);
        clickLog = 0;
    }
    });
});       