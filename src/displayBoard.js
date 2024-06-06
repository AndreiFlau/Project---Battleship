import Ship from "./Ship.js";

export default function displayBoard(player, whereToDisplay) {
  const htmlDisplay = document.querySelector(whereToDisplay);
  const parentDiv = document.createElement("div");
  parentDiv.className = "gameboard";
  const gameBoard = player.board;
  const board = player.board.board;
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      const cell = document.createElement("div");
      if (board[y][x] === "X") {
        cell.innerText = "X";
        cell.className = "shot";
      } else if (board[y][x] === "M") {
        cell.innerText = "M";
        cell.className = "shot";
      } else if (board[y][x] instanceof Ship) {
        cell.addEventListener("click", () => {
          gameBoard.receiveAttack(y, x);
        });
        cell.innerText = "S";
      } else {
        cell.addEventListener("click", () => {
          gameBoard.receiveAttack(y, x);
        });
        cell.innerText = "-";
      }
      parentDiv.appendChild(cell);
      htmlDisplay.appendChild(parentDiv);
    }
  }
}

function clickToAttack(gameBoard, y, x) {
  gameBoard.receiveAttack(y, x);
}
