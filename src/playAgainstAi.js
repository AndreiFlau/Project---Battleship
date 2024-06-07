import Ship from "./Ship.js";

const gameState = {
  playerWon: false,
  computerWon: false,
};

export default function playAgainstAi(player, whereToDisplayPlayer, whereToDisplayAI, boardsClass, computer) {
  const htmlDisplayPlayer = document.querySelector(whereToDisplayPlayer);
  const htmlDisplayAI = document.querySelector(whereToDisplayAI);
  const parentDiv = document.createElement("div");
  const aiParentDiv = document.createElement("div");
  const boardElement = document.querySelector(`${boardsClass}`);
  parentDiv.className = "unclickable gameboard";
  aiParentDiv.className = "gameboard";
  const gameBoard = player.board;
  const board = player.board.board;
  const computerGameBoard = computer.board;
  const computerBoard = computer.board.board;

  if (gameBoard.checkGameOver() && gameState.computerWon === false) {
    const winElement = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = `Computer Won!`;
    winElement.appendChild(h2);
    winElement.className = "win";
    boardElement.insertAdjacentElement("afterend", winElement);
    gameState.computerWon = true;
  } else if (computerGameBoard.checkGameOver() && gameState.playerWon === false) {
    const winElement = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = `You Won!`;
    winElement.appendChild(h2);
    winElement.className = "win";
    boardElement.insertAdjacentElement("afterend", winElement);
    gameState.playerWon = true;
  }

  //playerBoard
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      const cell = document.createElement("div");
      if (board[y][x] === "X") {
        cell.innerText = "X";
        cell.className = "shot hit";
      } else if (board[y][x] === "M") {
        cell.innerText = "+";
        cell.className = "shot miss";
      } else if (board[y][x] instanceof Ship) {
        cell.className = "ship";
        cell.innerText = "S";
      } else {
        cell.className = "water";
        cell.innerText = "-";
      }
      parentDiv.appendChild(cell);
      htmlDisplayPlayer.appendChild(parentDiv);
    }
  }

  //computerBoard
  for (let y = 0; y < computerBoard.length; y++) {
    for (let x = 0; x < computerBoard.length; x++) {
      const cell = document.createElement("div");
      if (computerBoard[y][x] === "X") {
        cell.innerText = "X";
        cell.className = "shot hit";
      } else if (computerBoard[y][x] === "M") {
        cell.innerText = "+";
        cell.className = "shot miss";
      } else if (computerBoard[y][x] instanceof Ship) {
        if (!gameState.playerWon && !gameState.computerWon) {
          cell.addEventListener("click", () => {
            computerGameBoard.receiveAttack(y, x);
            aiMove(gameBoard);
            resetTheGame(parentDiv, player, whereToDisplayPlayer, whereToDisplayAI, boardsClass, computer);
            resetTheGame(aiParentDiv, player, whereToDisplayPlayer, whereToDisplayAI, boardsClass, computer);
          });
        }
        cell.className = "water";
        cell.innerText = "-";
      } else {
        if (!gameState.playerWon && !gameState.computerWon) {
          cell.addEventListener("click", () => {
            computerGameBoard.receiveAttack(y, x);
            aiMove(gameBoard);
            resetTheGame(parentDiv, player, whereToDisplayPlayer, whereToDisplayAI, boardsClass, computer);
            resetTheGame(aiParentDiv, player, whereToDisplayPlayer, whereToDisplayAI, boardsClass, computer);
          });
        }
        cell.className = "water";
        cell.innerText = "-";
      }
      aiParentDiv.appendChild(cell);
      htmlDisplayAI.appendChild(aiParentDiv);
    }
  }
}

function aiMove(gameBoard) {
  let randomMoveY = Math.floor(Math.random() * 10);
  let randomMoveX = Math.floor(Math.random() * 10);
  while (gameBoard.board[randomMoveY][randomMoveX] === "X" || gameBoard.board[randomMoveY][randomMoveX] === "M") {
    randomMoveY = Math.floor(Math.random() * 10);
    randomMoveX = Math.floor(Math.random() * 10);
  }
  gameBoard.receiveAttack(randomMoveY, randomMoveX);
}

function clickToAttack(gameBoard, y, x) {
  gameBoard.receiveAttack(y, x);
}

function resetTheGame(div, player, whereToDisplayPlayer, whereToDisplayAI, boardsClass, computer) {
  const playerDiv = document.querySelector(`${whereToDisplayPlayer} .gameboard`);
  const computerDiv = document.querySelector(`${whereToDisplayAI} .gameboard`);
  playerDiv.remove();
  computerDiv.remove();
  playAgainstAi(player, whereToDisplayPlayer, whereToDisplayAI, boardsClass, computer);
}
