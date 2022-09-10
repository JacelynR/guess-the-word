const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessedLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessDisplay = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const playerGuess = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

//default starting word
const word = "magnolia";

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

    const playerInput = guessedLetter.value;
    //console.log(playerInput);
    guessedLetter.value = "";
});

