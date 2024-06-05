import GameBoard from "../src/GameBoard";
import Ship from "../src/Ship";

test("Check if gameboard has a board", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.board).toBeDefined();
});

test("Check if you can add a ship vertically and horizontally to the board", () => {
  const gameBoard = new GameBoard();
  const shipY = new Ship(3, 0);
  const shipX = new Ship(3, 0);
  const shipSmall = new Ship(1, 0);
  let shipCount = 0;

  gameBoard.addShip(shipY, 4, 4, "vertical");
  gameBoard.addShip(shipX, 0, 4, "horizontal");
  gameBoard.addShip(shipSmall, 0, 0, "horizontal");
  for (let y = 0; y < gameBoard.board.length; y++) {
    for (let x = 0; x < gameBoard.board.length; x++) {
      if (gameBoard.board[y][x] instanceof Ship) {
        shipCount += 1;
      }
    }
  }

  expect(shipCount).toBe(7);
});

test("Is unable to add a ship on top of another ship", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3, 0);
  gameBoard.addShip(ship, 4, 4, "vertical");

  expect(() => {
    const ship1 = new Ship(3, 0);
    gameBoard.addShip(ship1, 4, 4, "vertical");
  }).toThrow("Your ship cannot be placed on top of another ship!");
});

test("Check if an error is thrown when adding a ship bigger than the board", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(30, 0);

  expect(() => {
    gameBoard.addShip(ship, 4, 4, "vertical");
  }).toThrow("Ship is vertically bigger than the board!");

  expect(() => {
    gameBoard.addShip(ship, 4, 4, "horizontal");
  }).toThrow("Ship is horizontally bigger than the board!");
});

test("receiveAttack misses", () => {
  const gameBoard = new GameBoard();
  gameBoard.receiveAttack(0, 0);
  let hitCounter = 0;

  for (let y = 0; y < gameBoard.board.length; y++) {
    for (let x = 0; x < gameBoard.board.length; x++) {
      if (gameBoard.board[y][x] === "M") {
        hitCounter += 1;
      }
    }
  }

  expect(hitCounter).toBe(1);
});

test("receiveAttack hits a ship", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3, 0);
  gameBoard.addShip(ship, 0, 4, "horizontal");
  gameBoard.receiveAttack(0, 5);

  expect(ship.hits).toBe(1);
});

test("receiveAttack throws error when hitting the same spot", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3, 0);
  gameBoard.addShip(ship, 0, 4, "horizontal");
  gameBoard.receiveAttack(0, 5);

  expect(() => {
    gameBoard.receiveAttack(0, 5);
  }).toThrow("You already shot");
});
