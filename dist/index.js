"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockPaperScissors = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class RockPaperScissors {
    constructor() {
        (this.player = ""), (this.computer = ""), (this.rounds = 0), (this.playerWon = 0), (this.computerWon = 0), (this.tie = 0);
    }
    makeMove() {
        while (true) {
            const move = prompt("Make a move: ");
            if (["Rock", "Paper", "Scissors"].includes(move)) {
                this.player = move;
                break;
            }
            else {
                console.log("Please select a valid move.");
            }
        }
    }
    computerMove() {
        const randomNumber = Math.floor(Math.random() * 3);
        const moves = ["Rock", "Paper", "Scissors"];
        this.computer = moves[randomNumber];
        console.log(`Computer choose: ${this.computer}`);
        return this.computer;
    }
    winnerOfRound(player, computer) {
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
exports.RockPaperScissors = RockPaperScissors;
const game = new RockPaperScissors();
while (game.rounds < 5) {
    game.makeMove();
    game.computerMove();
    game.winnerOfRound(game.player, game.computer);
    game.winnerOfgame();
}
