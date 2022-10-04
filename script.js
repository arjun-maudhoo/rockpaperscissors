var options = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice.toLowerCase();
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    let filtchoice = choice.toLowerCase();
    if (filtchoice == "rock") {
        return "rock";
    }
    else if (filtchoice == "scissors") {
        return "scissors";
    }
    else if (filtchoice == "paper") {
        return "paper";
    }
    else {
        return ("not an option");
    }
}
function playRound(getComputerChoice, getPlayerChoice) {
    let winner = ""
    if (getComputerChoice == getPlayerChoice) {
        winner = "tie"
    }
    else if 
    (
        (getPlayerChoice == "rock" && getComputerChoice == "scissors") ||
        (getPlayerChoice == "paper" && getComputerChoice == "rock") ||
        (getPlayerChoice == "scissors" && getComputerChoice == "paper")
    ) {
        winner = "player";
    }
    else {
        winner = "computer";
    }
    console.log(winner);
}

