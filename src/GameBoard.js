export default class GameBoard {
  constructor() {
    this.board = [
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ];
  }

  addShip(ship, corY, corX, direction) {
    const shipsLength = ship.length;
    let shipCounter = 0;
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board.length; x++) {
        if (y === corY && x === corX && shipCounter < shipsLength && direction === "vertical") {
          this.board[y][x] = "S";
          corY = corY + 1;
          shipCounter += 1;
        }
      }
    }
  }
}
