function resetTheGame(div, displayBoard, player, whereToDisplay) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  displayBoard(player, whereToDisplay);
}
