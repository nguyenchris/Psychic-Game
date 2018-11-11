letterGuessGame = {
  letters: [],
  guessedLettersArr: [],
  letterToGuess: null,
  guessedLetter: null,
  guessesLeft: 10,
  wins: 0,
  losses: 0,

  // generate all letters from a to z
  genLettersArr: function(charA, charZ) {
    var a = charA.charCodeAt(0) 
    var z = charZ.charCodeAt(0);
    for (; a <= z; a++) {
      this.letters.push(String.fromCharCode(a));
    }
    return this.letters;
  },

  // generate random letter from a to z
  genLetterToGuess: function() {
    this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
  },

  checkGuess: function(letter) {
    // check if letter has already been guessed
    if (this.guessedLettersArr.indexOf(letter) == -1) {
      // if not guessed, add to array of letters guessed
      this.guessedLettersArr.push(letter);
      this.guessesLeft--;
    }

    // Check if there are any remaining guess
    if (this.guessesLeft === 0) {
      this.restartGame();
      this.losses++;

      //check if the guessed letter is the letter to guess
    } else if (this.guessedLetter == this.letterToGuess) {
      this.wins++;
      this.restartGame();
    } else {
      this.updateGame();
    }
  },

  updateGame: function() {
    // update DOM
    document.querySelector("#displayWin").textContent = this.wins;
    document.querySelector("#displayLoss").textContent = this.losses;
    document.querySelector("#displayGuessesLeft").textContent = this.guessesLeft;
    document.querySelector("#displayGuesses").textContent = this.guessedLettersArr.join(", ").toUpperCase();
  },

  restartGame: function() {
    //generate new random letter to guess
    this.genLetterToGuess();
    //reset amount of guesses remaining
    this.guessesLeft = 10;
    // reset letters guessed
    this.guessedLettersArr = [];
    this.updateGame();
  }
};

// Initialize game
// Generate letters array and random letter to guess
letterGuessGame.genLettersArr("a", "z");
letterGuessGame.genLetterToGuess();

// Listener for keyup event
document.addEventListener("keyup", function(e) {
  letterGuessGame.guessedLetter = e.key;
  //loop through all letters in guessLettersArr and only update letters guessed if it is a letter from a to z
  for (i = 0; i < letterGuessGame.letters.length; i++) {
    if (letterGuessGame.guessedLetter == letterGuessGame.letters[i]) {
      letterGuessGame.checkGuess(letterGuessGame.guessedLetter);
    }
  }
});
