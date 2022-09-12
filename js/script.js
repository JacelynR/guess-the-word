const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessedLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessDisplay = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const outputBox = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

//default starting word
const word = "magnolia";
const guessedLetters = [];

const displayBox = function(word) {
    const displayBoxLetters = [];
    for (let letter of word) {
        //console.log(letter);
        displayBoxLetters.push("●");
    }
    wordInProgress.innerText = displayBoxLetters.join("");
};

displayBox(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    //empty output to start
    outputBox.value = "";
    //input from player
    const guess = guessedLetter.value;
    //console.log(guess);
    const inputCheck = checkLetter(guess);

    //valid guess, game in play
    if (inputCheck) {
        //console.log(inputCheck);
        makeGuess(guess);
    }
    guessedLetter.value = "";

});

const checkLetter = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    //if player didn't enter a letter
    if (input === 0) {
        outputBox.innerText = "Please enter a letter!";
    } else if (input.length > 1) {
        //more than 1 letter entered
        outputBox.innerText = "Please only enter 1 letter";
    } else if (!input.match(acceptedLetter)) {
        //input is not a letter
        outputBox.innerText = "You did not enter in a letter, please enter a letter from A to Z"
    } else {
        //1 letter has been entered
        return input;
    }
};

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    //check for duplicate guessed letter
    if (guessedLetters.includes(guess)) {
        outputBox.innerText = "Letter has already been used. Please Try again";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
}
