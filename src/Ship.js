export default class Ship {
  constructor(length, hit = 0) {
    this.length = length;
    this.hits = hit;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
    this.isSunk();
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
}
