console.log("Hello World");

const gameList = ["rock", "paper", "scissors"];



function getComputerChoice() {
    return gameList[Math.floor(Math.random() * 3)];

}
//console.log(getComputerChoice());
const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt("Rock,Paper or Scissors").toLowerCase();

function playround(playerSelection, computerSelection) {
    if (playerSelection === gameList[0] && computerSelection === gameList[2]) {
        return "You win Rock beats Scissors";

    } else if (playerSelection === gameList[1] && computerSelection === gameList[0]) {
        return "You win Paper beats Rock";

    } else if (playerSelection === gameList[2] && computerSelection === gameList[1]) {
        return "You win Scissors beats Paper";
    } else if (playerSelection === gameList[2] && computerSelection === gameList[0]) {
        return "You lose Rock beats Scissors";
    } else if (playerSelection === gameList[1] && computerSelection === gameList[2]) {
        return "You lose Scissors beats Paper";

    } else if (playerSelection === gameList[0] && computerSelection === gameList[1]) {
        return "You lose Paper beats Rock";

    }else if(playerSelection===computerSelection){
        return "It is a tie"
    }

}

console.log(playround(playerSelection,computerSelection));


