class BowlingKata {
  constructor() {
    this.rolls = [];
  }
  roll(pins) {
    if (pins > 10 || pins > 0) {
      throw new Error("roll not between 0 and 10");
    }
    this.rolls.push(pins);
  }

  get score() {
    let score = 0;
    let rollsIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollsIndex] + this.rolls[rollsIndex + 1];

      //if there is a strike
      if (this.rolls[rollsIndex] === 10) {
        score += 10 + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2];
        rollsIndex++;
        continue;
      }
      //if there is a spare
      if (
        frameScore === 10 &&
        this.rolls[rollsIndex] !== 10 &&
        this.rolls[rollsIndex + 1] !== 10
      ) {
        score += 10 + this.rolls[rollsIndex + 2];
      }
      // normal game without strike or spare
      else {
        score += frameScore;
      }

      rollsIndex += 2;
    }
    return score;
  }
}

module.exports = BowlingKata;
