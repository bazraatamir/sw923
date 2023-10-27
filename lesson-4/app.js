class HangmanGame {
  constructor(words) {
    this.words = words;
    this.word = this.pickRandomWord();
    this.chance = 6;
    this.correctGuesses = new Array(this.word.length).fill(false);
    this.incorrectGuesses = [];
  }
  pickRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return this.words[randomIndex].toLowerCase();
  }
  makeGuess(letter) {
    if (this.word.includes(letter)) {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          this.correctGuesses[i] = true;
        }
      }
    } else {
      this.chance--;
      this.incorrectGuesses.push(letter);
    }
  }
  getDisplayWord() {
    let display = "";
    for (let i = 0; i < this.word.length; i++) {
      if (this.correctGuesses[i]) {
        display += this.word[i];
      } else {
        display += "*";
      }
    }
    return display.trim();
  }
  gameOver() {
    return this.chance === 0 && this.getDisplayWord().includes("*");
  }
}

const words = ["January", "February", "March", "April", "May", "June", "July"];

const game = new HangmanGame(words);

function handleGuess() {
  let guessInput = document.getElementById("guess-input");
  const guess = guessInput.value.toLowerCase();

  if (guess && !game.gameOver()) {
    game.makeGuess(guess);
    guessInput.value = "";
    console.log(guessInput.value);

    display();
    if (game.gameOver()) {
      if (game.getDisplayWord().includes("*")) {
        alert("Та хожигдлоо");
      } else {
        alert("Та яллаа");
      }
    }
  }
}

function display() {
  const wordDisplay = document.getElementById("word-display");
  const incorrecAnswer = document.getElementById("incorrect-guesses");
  wordDisplay.textContent = game.getDisplayWord();
  incorrecAnswer.textContent = game.incorrectGuesses.join(",");
}
display();
