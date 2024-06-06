import Ship from "./Ship.js";

export default function displayBoard(player, whereToDisplay) {
  const htmlDisplay = document.querySelector(whereToDisplay);
  const parentDiv = document.createElement("div");
  parentDiv.className = "gameboard";
  const board = player.board.board;
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      const cell = document.createElement("div");
      cell.innerText = "X";
      if (board[y][x] instanceof Ship) {
        cell.innerText = "S";
      }
      parentDiv.appendChild(cell);
      htmlDisplay.appendChild(parentDiv);
    }
  }
}
