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

// Evaluate Game Result: return ["winner", "message"]
function roundEval(roundNum, playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = ["draw", "Round " + roundNum + ": Draw!"];
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {

        result = ["player", "Round " + roundNum + ": You win the round! " + playerSelection + " beats " + computerSelection];
    } else {
        result = ["computer", "Round " + roundNum + ": You lose the round! " + computerSelection + " beats " + playerSelection];
    }
    return (result);
}

//Get player selection
function playerPlay() {
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
    return (playerString);
}

//Handle single round
function playRound(roundNum) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    let results = roundEval(roundNum, playerSelection, computerSelection);
    let winner = results[0];
    console.log(results[1]);
    return(winner);
}

function game() {
    
    let playerScore = 0
    let computerScore = 0
    
    for (let i = 0; i < 5; i++) {
        switch (playRound(i + 1)) {
            case "player":
                playerScore++;
                break;
            case "computer":
                computerScore++;
                break;
            case "draw":
                break;
        };
    }
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if ( playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("Draw!")
    }
}

game();