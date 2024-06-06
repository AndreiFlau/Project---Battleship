import Ship from "./Ship.js";

export default function displayBoard(player, whereToDisplay, boardsClass, opponent) {
  const htmlDisplay = document.querySelector(whereToDisplay);
  const parentDiv = document.createElement("div");
  const boardElement = document.querySelector(`${boardsClass}`);
  parentDiv.className = "gameboard";
  const gameBoard = player.board;
  const oppenentGameBoard = opponent.board;
  const board = player.board.board;
  let someoneWon = false;

  if (gameBoard.checkGameOver()) {
    const winElement = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = `${opponent.name} Won`;
    winElement.appendChild(h2);
    winElement.className = "win";
    boardElement.insertAdjacentElement("afterend", winElement);
    someoneWon = true;
  }

  if (oppenentGameBoard.checkGameOver()) {
    someoneWon = true;
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      const cell = document.createElement("div");
      if (board[y][x] === "X") {
        cell.innerText = "X";
        cell.className = "shot";
      } else if (board[y][x] === "M") {
        cell.innerText = "+";
        cell.className = "shot";
      } else if (board[y][x] instanceof Ship) {
        cell.innerText = "S";
        if (!someoneWon) {
          cell.addEventListener("click", () => {
            gameBoard.receiveAttack(y, x);
            resetTheGame(parentDiv, player, whereToDisplay, boardsClass, opponent);
          });
        }
      } else {
        if (!someoneWon) {
          cell.addEventListener("click", () => {
            gameBoard.receiveAttack(y, x);
            resetTheGame(parentDiv, player, whereToDisplay, boardsClass, opponent);
          });
        }
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

function resetTheGame(div, player, whereToDisplay, boardsClass, opponent) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  displayBoard(player, whereToDisplay, boardsClass, opponent);
}
