function computerPlay() {
    let playInt = getRandomInt(1, 3);
    return(playInt);
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