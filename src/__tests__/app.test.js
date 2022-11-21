const { bowlingKata , roll , score } = require('../app');


describe("app test the roll ", () => {
  test("should return the current month", () => {
    expect(roll(3)).toBe(3);
  });
});
