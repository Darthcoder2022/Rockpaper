//console.log("Hello World");

const gameList = ["rock", "paper", "scissors"];

let computerScore = 0;
let tieCounter = 0;
let playerScore = 0;


function getComputerChoice() {
    return gameList[Math.floor(Math.random() * 3)];

}
//console.log(getComputerChoice());
let computerSelection = getComputerChoice().toLowerCase();
let playerSelection = prompt("Rock,Paper or Scissors").toLowerCase();


function playround(playerSelection, computerSelection) {
    
    
    if (playerSelection === gameList[0] && computerSelection === gameList[2]) {
        playerScore++;
        return "You win Rock beats Scissors";
        

    } else if (playerSelection === gameList[1] && computerSelection === gameList[0]) {
        playerScore++;
        return "You win Paper beats Rock";

    } else if (playerSelection === gameList[2] && computerSelection === gameList[1]) {
        playerScore++;
        return "You win Scissors beats Paper";
    } else if (playerSelection === gameList[2] && computerSelection === gameList[0]) {
        computerScore++;
        return "You lose Rock beats Scissors";
    } else if (playerSelection === gameList[1] && computerSelection === gameList[2]) {
        computerScore++;
        return "You lose Scissors beats Paper";


    } else if (playerSelection === gameList[0] && computerSelection === gameList[1]) {
        computerScore++;
        return "You lose Paper beats Rock";

    }else if(playerSelection===computerSelection){
        tieCounter++
        return "It is a tie";
    }

}

console.log(playround(playerSelection,computerSelection));

function game(){
    for(let i = 0; i<4 ; i++){
        computerSelection=getComputerChoice().toLowerCase();
        playerSelection = prompt("Rock,Paper or Scissors").toLowerCase();
        console.log(playround(playerSelection,computerSelection));
        console.log("Your score : "+String(playerScore)+" Computer score: "+String(computerScore)+" and there is: "+String(tieCounter)+" tie.");
       
    }
    console.log("Your score : "+String(playerScore)+" Computer score: "+String(computerScore)+" and there is: "+String(tieCounter)+" tie.");
}

game();
/*for(let i=0;i<5;i++){
   computerSelection=getComputerChoice().toLowerCase();
   playerSelection = prompt("Rock,Paper or Scissors").toLowerCase();
   console.log(playround(playerSelection,computerSelection));
   console.log("Your score : "+String(playerScore)+" Computer score: "+String(computerScore)+" and there is: "+String(tieCounter));

    
}
*/

