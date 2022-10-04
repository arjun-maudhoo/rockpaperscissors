let computerScore = 0
let playerScore = 0

function getComputerChoice() {
    var options = [
        "Rock",
        "Paper",
        "Scissors"
    ];
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

function playRound() {
    let winner = ""
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log("The Computer picked " + computerChoice);
    console.log("Player picked " + playerChoice);
    if (computerChoice == playerChoice) {
        winner = "Tie, try again";
        return winner;
    }
    else if 
    (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        winner = "Player wins this round";
        playerScore ++
        return winner;
    }
    else {
        winner = "Computer wins this round";
        computerScore ++
        return winner;
    }
    console.log(winner);
}

function playGame(){
        playRound();
        if (playerScore == 3) {
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log("Player wins the game!");
            return;
        }
        else if (computerScore == 3) {
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log("Computer wins the game!");
            return;
        }
        else {
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            playGame();
        }
}