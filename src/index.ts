import promptSync from "prompt-sync";

const prompt = promptSync();

export class RockPaperScissors {
  player: string;
  computer: string;
  rounds: number;
  playerWon: number;
  computerWon: number;
  tie: number;
  constructor() {
    (this.player = ""), (this.computer = ""), (this.rounds = 0), (this.playerWon = 0), (this.computerWon = 0), (this.tie = 0);
  }

  makeMove() {
    while (true) {
      const move = prompt("Make a move: ");

      if (["Rock", "Paper", "Scissors"].includes(move)) {
        this.player = move;
        break;
      } else {
        console.log("Please select a valid move.");
      }
    }
  }

  computerMove() {
    const randomNumber = Math.floor(Math.random() * 3);
    const moves: string[] = ["Rock", "Paper", "Scissors"];
    this.computer = moves[randomNumber];
    console.log(`Computer choose: ${this.computer}`);
    return this.computer;
  }

  winnerOfRound(player: string, computer: string) {
    if (player == "Rock" && computer == "Rock") {
      console.log("It's a tie.");
      this.tie += 1;
    }
    if (player == "Rock" && computer == "Paper") {
      console.log("Player Lost.");
      this.computerWon += 1;
    }
    if (player == "Rock" && computer == "Scissors") {
      console.log("Player won.");
      this.playerWon += 1;
    }
    if (player == "Paper" && computer == "Rock") {
      console.log("Player won.");
      this.playerWon += 1;
    }
    if (player == "Paper" && computer == "Paper") {
      console.log("It's a tie.");
      this.tie += 1;
    }
    if (player == "Paper" && computer == "Scissors") {
      console.log("Player Lost.");
      this.computerWon += 1;
    }
    if (player == "Scissors" && computer == "Rock") {
      console.log("Player Lost.");
      this.computerWon += 1;
    }
    if (player == "Scissors" && computer == "Paper") {
      console.log("Player won.");
      this.playerWon += 1;
    }
    if (player == "Scissors" && computer == "Scissors") {
      console.log("It's a tie.");
      this.tie += 1;
    }
    console.log("\n");
    this.rounds += 1;
  }

  winnerOfgame() {
    const result = [[`Player wins: ${this.playerWon}`], [`Com[puter] wins: ${this.computerWon}`]];

    if (this.rounds == 5) {
      console.log(result);
    }
    if (this.rounds == 5 && this.playerWon > this.computerWon) {
      console.log(`Player won with ${this.playerWon} wins`);
    }
    if (this.rounds == 5 && this.playerWon < this.computerWon) {
      console.log(`Computer won with ${this.computerWon} wins`);
    }
    if (this.rounds == 5 && this.playerWon == this.computerWon) {
      console.log(`It's a tie.`);
    }
  }
}

const game = new RockPaperScissors();

while (game.rounds < 5) {
  game.makeMove();
  game.computerMove();
  game.winnerOfRound(game.player, game.computer);

  game.winnerOfgame();
}
