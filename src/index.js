import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";
import displayBoard from "./displayBoard.js";
import playAgainstAi from "./playAgainstAi.js";
import Player from "./player.js";
import "./styles.css";
import "modern-normalize/modern-normalize.css";

const player = new Player("Human", "Human");
const computer = new Player("Computer", "AI");
const carrier = new Ship(5);
const battleship = new Ship(4);
const submarine = new Ship(3);
const destroyer = new Ship(3);
const patrolBoat = new Ship(2);

const carrier2 = new Ship(5);
const battleship2 = new Ship(4);
const submarine2 = new Ship(3);
const destroyer2 = new Ship(3);
const patrolBoat2 = new Ship(2);

player.placeShip(carrier, 0, 2, "horizontal");
player.placeShip(battleship, 1, 4, "horizontal");
player.placeShip(submarine, 2, 4, "horizontal");
player.placeShip(destroyer, 3, 4, "horizontal");
player.placeShip(patrolBoat, 4, 4, "horizontal");

computer.placeShip(carrier2, 0, 4, "horizontal");
computer.placeShip(battleship2, 1, 4, "horizontal");
computer.placeShip(submarine2, 2, 4, "horizontal");
computer.placeShip(destroyer2, 3, 4, "horizontal");
computer.placeShip(patrolBoat2, 4, 4, "horizontal");

playAgainstAi(player, ".player", ".computer", ".boards", computer);
// displayBoard(computer, ".computer", ".boards", player);
