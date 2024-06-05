import Ship from "../src/Ship";
import Player from "../src/player";

test("Player - Check if an error is thrown when adding a ship bigger than the board", () => {
  const player = new Player();
  const ship = new Ship(30, 0);

  expect(() => {
    player.placeShip(ship, 4, 4, "vertical");
  }).toThrow("Ship is vertically bigger than the board!");

  expect(() => {
    player.placeShip(ship, 4, 4, "horizontal");
  }).toThrow("Ship is horizontally bigger than the board!");
});

test("Player - Check if you can add a ship vertically and horizontally to the board", () => {
  const player = new Player();
  const shipY = new Ship(3, 0);
  const shipX = new Ship(3, 0);
  const carrier = new Ship(5, 0);

  player.placeShip(shipY, 4, 4, "vertical");
  player.placeShip(shipX, 0, 4, "horizontal");

  expect(() => {
    player.placeShip(carrier, 3, 5, "horizontal");
    console.log(player.board);
  }).not.toThrow();
});
