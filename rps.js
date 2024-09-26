console.log("Welcome to the Jammin Rock Paper Scissors (RPS) game!");
console.log("can you see this?")

function getComputerChoice(){
    compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

function getPlayerChoice(){
    playerChoice = Number(prompt("Please input 0, 1, or 2. 0: Rock , 1: Paper, 2: Scissors - "))
    return playerChoice;
}

let pinput = getPlayerChoice()