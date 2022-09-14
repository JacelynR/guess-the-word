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
    outputBox.innerText = "";
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

//Function to check if input is a valid letter
const checkLetter = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    //if player didn't enter a letter
    if (input.length === 0) {
        outputBox.innerText = "Please enter a letter!";
    } 
    else if (input.length > 1) {
        //more than 1 letter entered
        outputBox.innerText = "Please only enter 1 letter";
    } 
    else if (!input.match(acceptedLetter)) {
        //input is not a letter
        outputBox.innerText = "You did not enter in a letter, please enter a letter from A to Z"
    } 
    else {
        //1 letter has been entered
        return input;
    }
};

//function to accept letters guessed by player
const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    //check for duplicate guessed letter
    if (guessedLetters.includes(guess)) {
        outputBox.innerText = "Letter has already been used. Please Try again";
    } 
    else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        wordInProgressUpdate(guessedLetters);
    }
};

//Function to show the Guessed Letters
const showGuessedLetters = function() {
    //start with an empty list
    guessedLettersList.innerHTML = "";

    for (let letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
};

//function to update word in progress
const wordInProgressUpdate = function(guessedLetters) {
    //change word to uppercase
    const wordUpper = word.toUpperCase();
    //split word
    const wordArray = wordUpper.split("");
    //console.log(wordArray);
    //new array to push letters
    const lettersInPlay = [];
     
    for (let letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            lettersInPlay.push(letter.toUpperCase());
        } 
        else {
            lettersInPlay.push("●");
        }
    }
    //console.log(lettersInPlay);
    wordInProgress.innerText = lettersInPlay.join("");
    checkForWin();

}

//Function to check if Player has won
const checkForWin = function() {
    if (word.toUpperCase() === wordInProgress.innerText) {
        //add 'win' class element if word was guessed correctly
        outputBox.classList.add("win");
        //message to player if word guessed is correct
        outputBox.innerHTML = `
            <p class="highlight">You guessed the correct word!! Congrats!</p>
        `;
    }
};
