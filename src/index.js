import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";
import displayBoard from "./displayBoard.js";
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

player.placeShip(carrier, 0, 2, "horizontal");
player.placeShip(battleship, 1, 4, "horizontal");
player.placeShip(submarine, 2, 4, "horizontal");
player.placeShip(destroyer, 3, 4, "horizontal");
player.placeShip(patrolBoat, 4, 4, "horizontal");

computer.placeShip(carrier, 0, 4, "horizontal");
computer.placeShip(battleship, 1, 4, "horizontal");
computer.placeShip(submarine, 2, 4, "horizontal");
computer.placeShip(destroyer, 3, 4, "horizontal");
computer.placeShip(patrolBoat, 4, 4, "horizontal");
displayBoard(player, ".player");
displayBoard(computer, ".computer");
