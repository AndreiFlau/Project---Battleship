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
  }

  //TODO - If the ship is bigger than the board, make it so goes upwards instead
  //TODO - Check if a ship already exists in the cell, if it does throw an error
  //TODO - Check if the ship is being placed on the edge/ is bigger than the board, if so, throw an error
  addShip(ship, corY, corX, direction) {
    const shipsLength = ship.length;
    let shipCounter = 0;
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board.length; x++) {
        if (y === corY && x === corX && shipCounter < shipsLength && direction === "vertical") {
          if (this.board[y][x] instanceof Ship) {
            throw "Your ship cannot be placed on top of another ship!";
          }
          if (shipsLength > y && shipsLength > 1) {
            throw "Ship is vertically bigger than the board!";
          }
          this.board[y][x] = ship;
          corY = corY + 1;
          shipCounter += 1;
        }

        if (y === corY && x === corX && shipCounter < shipsLength && direction === "horizontal") {
          if (this.board[y][x] instanceof Ship) {
            throw "Your ship cannot be placed on top of another ship!";
          }
          if (shipsLength > x && shipsLength > 1) {
            throw "Ship is horizontally bigger than the board!";
          }
          this.board[y][x] = ship;
          corX = corX + 1;
          shipCounter += 1;
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
          } else if (y === corY && x === corX && !(this.board[y][x] instanceof Ship)) {
            this.board[y][x] = "M";
          }
        }
      }
    }
  }
}
