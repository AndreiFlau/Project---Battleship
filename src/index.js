import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";
import displayBoard from "./displayBoard.js";
import playAgainstAi from "./playAgainstAi.js";
import Player from "./player.js";
import "./styles.css";
import "modern-normalize/modern-normalize.css";

let player = new Player("Human", "Human");
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

const dialog = document.querySelector(".battleshipdialog");
const form = document.querySelector(".battleshipform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const shipPositions = {
    carrier: {
      y: parseInt(formData.get("carrierY")),
      x: parseInt(formData.get("carrierX")),
      direction: formData.get("carrierdirection"),
    },
    battleship: {
      y: parseInt(formData.get("battleshipY")),
      x: parseInt(formData.get("battleshipX")),
      direction: formData.get("battleshipdirection"),
    },
    submarine: {
      y: parseInt(formData.get("submarineY")),
      x: parseInt(formData.get("submarineX")),
      direction: formData.get("submarinedirection"),
    },
    destroyer: {
      y: parseInt(formData.get("destroyerY")),
      x: parseInt(formData.get("destroyerX")),
      direction: formData.get("destroyerdirection"),
    },
    patrolBoat: {
      y: parseInt(formData.get("patrolboatY")),
      x: parseInt(formData.get("patrolboatX")),
      direction: formData.get("patrolboatdirection"),
    },
  };
  try {
    player.placeShip(carrier, shipPositions.carrier.y, shipPositions.carrier.x, shipPositions.carrier.direction);
    player.placeShip(battleship, shipPositions.battleship.y, shipPositions.battleship.x, shipPositions.battleship.direction);
    player.placeShip(submarine, shipPositions.submarine.y, shipPositions.submarine.x, shipPositions.submarine.direction);
    player.placeShip(destroyer, shipPositions.destroyer.y, shipPositions.destroyer.x, shipPositions.destroyer.direction);
    player.placeShip(patrolBoat, shipPositions.patrolBoat.y, shipPositions.patrolBoat.x, shipPositions.patrolBoat.direction);
    dialog.close();
    playAgainstAi(player, ".player", ".computer", ".boards", computer);
  } catch (error) {
    alert(error);
    player = new Player("Human", "Human");
  }
});

let move1 = aiPlacementRandomizer(computer);
let move2 = aiPlacementRandomizer(computer);
let move3 = aiPlacementRandomizer(computer);
let move4 = aiPlacementRandomizer(computer);
let move5 = aiPlacementRandomizer(computer);

do {
  try {
    computer.placeShip(carrier2, move1.Y, move1.X, move1.Direction);
    break;
  } catch (error) {
    move1 = aiPlacementRandomizer(computer);
  }
} while (true);

do {
  try {
    computer.placeShip(battleship2, move2.Y, move2.X, move2.Direction);
    break;
  } catch (error) {
    move2 = aiPlacementRandomizer(computer);
  }
} while (true);

do {
  try {
    computer.placeShip(submarine2, move3.Y, move3.X, move3.Direction);
    break;
  } catch (error) {
    move3 = aiPlacementRandomizer(computer);
  }
} while (true);

do {
  try {
    computer.placeShip(destroyer2, move4.Y, move4.X, move4.Direction);
    break;
  } catch (error) {
    move4 = aiPlacementRandomizer(computer);
  }
} while (true);

do {
  try {
    computer.placeShip(patrolBoat2, move5.Y, move5.X, move5.Direction);
    break;
  } catch (error) {
    move5 = aiPlacementRandomizer(computer);
  }
} while (true);

function aiPlacementRandomizer() {
  let randomMoveY = Math.floor(Math.random() * 10);
  let randomMoveX = Math.floor(Math.random() * 10);
  const directions = ["horizontal", "vertical"];
  let randomDirection = directions[Math.floor(Math.random() * 2)];
  while (player.board.board[randomMoveY][randomMoveX] === "S") {
    randomMoveY = Math.floor(Math.random() * 10);
    randomMoveX = Math.floor(Math.random() * 10);
    randomDirection = directions[Math.floor(Math.random() * 2)];
  }
  return { Y: randomMoveY, X: randomMoveX, Direction: randomDirection };
}
