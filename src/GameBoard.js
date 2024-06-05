import Ship from "./Ship.js";

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
    this.continue = false;
    this.ships = [];
  }

  addShip(ship, corY, corX, direction) {
    const originalShipsLength = ship.length;
    let shipsLength = ship.length;
    let shipCounter = 0;
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board.length; x++) {
        if (
          y === corY &&
          x === corX &&
          shipCounter < originalShipsLength &&
          direction === "vertical"
        ) {
          if (this.board[y][x] instanceof Ship) {
            throw "Your ship cannot be placed on top of another ship!";
          }
          if (shipsLength >= this.board.length && originalShipsLength > 1) {
            throw "Ship is vertically bigger than the board!";
          }
          this.board[y][x] = ship;
          corY = corY + 1;
          shipCounter += 1;
          shipsLength -= 1;
          this.ships.push(ship);
        }

        if (
          y === corY &&
          x === corX &&
          shipCounter < originalShipsLength &&
          direction === "horizontal"
        ) {
          if (this.board[y][x] instanceof Ship) {
            throw "Your ship cannot be placed on top of another ship!";
          }
          if (shipsLength >= this.board[x].length - x && originalShipsLength > 1) {
            throw "Ship is horizontally bigger than the board!";
          }
          this.board[y][x] = ship;
          corX = corX + 1;
          shipCounter += 1;
          shipsLength -= 1;
          this.ships.push(ship);
        }
      }
    }
  }

  receiveAttack(corY, corX) {
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board.length; x++) {
        if ((y === corY && x === corX && this.board[y][x] === "X") || this.board[y][x] === "M") {
          throw "You already shot at these coordinates!";
        } else {
          if (y === corY && x === corX && this.board[y][x] instanceof Ship) {
            this.board[y][x].hit();
            this.board[y][x] = "X";
            this.continue = true;
          } else if (y === corY && x === corX && !(this.board[y][x] instanceof Ship)) {
            this.board[y][x] = "M";
            this.continue = false;
          }
        }
      }
    }
  }

  checkGameOver() {
    let shipCounter = 0;
    for (let ship = 0; ship < this.ships.length; ship++) {
      if (this.ships[ship].sunk === true) {
        shipCounter += 1;
      }
    }
    if (shipCounter === this.ships.length) {
      return true;
    }
    return false;
  }
}
