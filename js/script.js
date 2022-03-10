// Computer plays randomly
function computerPlay() {
    switch (getRandomInt(1, 3)) {
        case 1:
            play = "Rock";
            break;
        case 2:
            play = "Paper";
            break;
        case 3:
            play = "Scissors";
            break;
    }

    return (play);
}

//Get Random Integer between two numbers, inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Evaluate Game Result
function roundEval(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        message = "Draw!";
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        
            message = "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        message = "You lose! " + computerSelection + " beats " + playerSelection;
    }
    return (message);
}

function playRound() {
    let playerString = "";
    while (playerString === "") {
        
        let str = prompt("Select Rock, Paper, or Scissors:");
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1);
        
        if (str === "Rock" || str === "Paper" || str === "Scissors") {
            playerString = str;
        } else {
            console.log("Player must choose rock, paper, or scissors. Please try again.");
        }
    }
    return(playerString);
}

console.log(playRound());