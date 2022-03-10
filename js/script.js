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

    return(play);
}

//Get Random Integer between two numbers, inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() *(max - min + 1) + min);
}
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());