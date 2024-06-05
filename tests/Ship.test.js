import Ship from "../src/Ship.js";

test("Testing if ship can be createad properly", () => {
  const ship = new Ship(3, 0);

  expect(ship.length).toBe(3);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("Testing if hit increases when the method is called", () => {
  const ship = new Ship(3, 0);
  ship.hit();

  expect(ship.hits).toBe(1);
});

test("Testing if a ship can be sunk", () => {
  const ship = new Ship(3, 0);
  ship.hits = 3;
  ship.isSunk();

  expect(ship.sunk).toBe(true);
});
