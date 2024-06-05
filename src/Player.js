import GameBoard from "./GameBoard.js";

export default class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.board = new GameBoard();
  }

  placeShip(ship, corY, corX, direction) {
    this.board.addShip(ship, corY, corX, direction);
  }
}
