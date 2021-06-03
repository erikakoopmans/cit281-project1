/*
    CIT 281 Project 1
    Name: Erika Koopmans
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomLetter(number) {
    let word = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(i=0; i < number; i++) {
        word += alphabet[Math.floor(Math.random() * (alphabet.length+1))];
    }
    return word;
}
console.log(getRandomLetter(getRandomInteger(5, 25)));
