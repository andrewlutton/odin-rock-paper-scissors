const playBtns = document.querySelectorAll(".play-btn");
playBtns.forEach(btn => btn.addEventListener("click", playRound));

const scoreReport = document.querySelector(".message-container");

let compScore = 0;
let playerScore = 0;

const resultsMsg = document.querySelector("#results-message");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");

const compScoreReport = document.createElement("p");
const playerScoreReport = document.createElement("p");

compScoreReport.textContent = "Pink Robots: " + compScore;
playerScoreReport.textContent = "Yoshimi: " + playerScore;

scoreReport.appendChild(compScoreReport);
scoreReport.appendChild(playerScoreReport);

// Computer plays randomly
function computerPlay() {
    switch (getRandomInt(1, 3)) {
        case 1:
            play = "rock";
            break;
        case 2:
            play = "paper";
            break;
        case 3:
            play = "scissors";
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
function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = this.id;

    playerChoice.textContent = "You chose: " + this.id;
    computerChoice.textContent = "Pink Robots chose: " + computerSelection;

    if (playerSelection === computerSelection) {
        resultsMsg.textContent = "Draw! The universe will have it's way. Try again.";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            resultsMsg.textContent = "You've clearly taken lots of vitamins. I know you can beat them. ";
            playerScore += 1;
            playerScoreReport.textContent = "Yoshimi: " + playerScore;
    } else {
        resultsMsg.textContent = "You have to discipline your body. Those evil-natured robots are programmed to destroy us. You've got to be strong to fight them. Try again.";
        compScore += 1;
        compScoreReport.textContent = "Pink Robots: " + compScore;
    }
    checkVictory();
}

function checkVictory() {
    if (playerScore >= 5) {
        resultsMsg.textContent = "The Pink Robots have been defeated! Thank you for your service to the city!"
    } else if (compScore >= 5) {
        resultsMsg.textContent = "Those evil robots won. Now they're going to eat us."
    }
}

//Get player selection
// function playerPlay() {
//     let playerString = "";
//     while (playerString === "") {

//         let str = prompt("Select Rock, Paper, or Scissors:");
//         str = str.toLowerCase();
//         str = str.charAt(0).toUpperCase() + str.slice(1);

//         if (str === "Rock" || str === "Paper" || str === "Scissors") {
//             playerString = str;
//         } else {
//             console.log("Player must choose rock, paper, or scissors. Please try again.");
//         }
//     }
//     return (playerString);
// }

// function game() {
    
//     let playerScore = 0
//     let computerScore = 0
    
//     for (let i = 0; i < 5; i++) {
//         switch (playRound(i + 1)) {
//             case "player":
//                 playerScore++;
//                 break;
//             case "computer":
//                 computerScore++;
//                 break;
//             case "draw":
//                 break;
//         };
//     }
//     console.log("Your score: " + playerScore);
//     console.log("Computer score: " + computerScore);
//     if (playerScore > computerScore) {
//         console.log("You win!");
//     } else if ( playerScore < computerScore) {
//         console.log("You lose!");
//     } else {
//         console.log("Draw!")
//     }
// }