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
    var a = charA.charCodeAt(0), z = charZ.charCodeAt(0);
    for (; a <= z; a++) {
      this.letters.push(String.fromCharCode(a));
    }
    return this.letters;
  },

  // generate random letter from a to z
  genLetterToGuess: function() {
    this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
  },


  updateGuesses: function() {
    this.guessesLeft--
  },

  updateGame: function(letter) {
    
    this.guessedLettersArr.push(letter);
  },

  restartGame: function() {
    this.genLetterToGuess();
    this.guessesLeft = 10;
    this.guessedLettersArr = []
    
  }
}








// Initialize game
// Generate letters array
letterGuessGame.genLettersArr('a', 'z');
letterGuessGame.genLetterToGuess();




// Listener for keyup event
document.addEventListener('keyup', function(e) {
  letterGuessGame.guessedLetter = e.key;
  //loop through all letters in guessLettersArr and only update letters guessed if it is a letter from a to z
  for (i = 0; i < letterGuessGame.letters.length; i++) {
    if (letterGuessGame.guessedLetter == letterGuessGame.letters[i]) {
      letterGuessGame.updateGame(letterGuessGame.guessedLetter);
    }
  }
})