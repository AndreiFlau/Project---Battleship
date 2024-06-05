import GameBoard from "../src/GameBoard";
import Ship from "../src/Ship";

test("Check if gameboard has a board", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.board).toBeDefined();
});

test("Check if you can add a ship to the board", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3, 0);
  let shipCount = 0;
  gameBoard.addShip(ship, 4, 4, "vertical");
  for (let y = 0; y < gameBoard.board.length; y++) {
    for (let x = 0; x < gameBoard.board.length; x++) {
      if (gameBoard.board[y][x] === "S") {
        shipCount += 1;
      }
    }
  }

  expect(shipCount).toBe(3);
});
