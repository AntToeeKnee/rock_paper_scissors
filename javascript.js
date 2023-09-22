//Number to be used in getComputerChoice
let numberGiven = getRandomInt(3);
let computerSelectionName = getComputerChoice(numberGiven);
console.log(computerSelectionName);

//calls function and asks player for choice
let playerSelection = getPlayerChoice();
console.log(playerSelection);

playRound(computerSelectionName, playerSelection);

function playRound(computerSelectionName, playerSelection) {
    if(computerSelectionName == playerSelection) {
        console.log("Tie!");
    }
    else if(computerSelectionName == "Rock" && playerSelection == "Scissors" || computerSelectionName == "Paper" && playerSelection == "Rock" || computerSelectionName == "Scissors" && playerSelection == "Paper") {
        console.log("You lose")
    }
    else {
        console.log("You win!")
    }
}

function getComputerChoice(numberGivenMethod) {
    if(numberGivenMethod == 0) {
        return "Rock";
    }
    else if(numberGivenMethod == 1) {
        return "Paper";
    }
    else if(numberGivenMethod == 2) {
        return "Scissors";
    }
}

function getPlayerChoice() {
    let choiceHolder = prompt("Rock, Paper, or Scissors?");
    if(choiceHolder.toLowerCase() == "rock") {
        return "Rock";
    }
    else if(choiceHolder.toLowerCase() == "paper") {
        return "Paper";
    }
    else if(choiceHolder.toLowerCase() == "scissors") {
        return "Scissors";
    }
    else {
        console.log("Not a valid choice")
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}