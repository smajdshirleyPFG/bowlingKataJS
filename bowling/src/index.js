import { getRoles } from "@testing-library/react";

class Bowling {
  constructor() {
    this.bucket = 0;
    this.rolls = new Array();
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    for (let rollIndex = 0; rollIndex < 20; rollIndex++) {
      if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10)
      
      {

      } //add else stmt
      this.bucket += this.rolls[rollIndex];
    }

    return this.bucket;
  }
}

export { Bowling }