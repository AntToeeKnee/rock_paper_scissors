//Number to be used in getComputerChoice
const computerNumber = getRandomInt(3);
console.log(getComputerChoice());

function getComputerChoice() {
    if(computerNumber == 0) {
        return "Rock";
    }
    else if(computerNumber == 1) {
        return "Paper";
    }
    else if(computerNumber == 2) {
        return "Scissors";
    }
}

function playRound( getComputerChoice, ) {

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}