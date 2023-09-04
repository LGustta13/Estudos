import getScore from "./getScore";

test("Returns an A grade", () => {
  expect(getScore(90)).toBe("A");
});

test("Returns an B grade", () => {
  expect(getScore(80)).toBe("B");
});

test("Returns an C grade", () => {
  expect(getScore(70)).toBe("C");
});

test("Returns an D grade", () => {
  expect(getScore(60)).toBe("D");
});

test("Returns an E grade", () => {
  expect(getScore(Math.floor(Math.random()*59))).toBe("E");
});

test("Returns invalid if score not between 0 and 100", () => {
  expect(getScore(-1)).toBe("Invalid score");
});

test("Returns not a number if not inserted a number", () => {
  expect(getScore("123")).toBe("Not a number");
  expect(getScore("1asda1123")).toBe("Not a number");
  expect(getScore(true)).toBe("Not a number");
  expect(getScore(NaN)).toBe("Not a number");
  expect(getScore(undefined)).toBe("Not a number");
  expect(getScore({})).toBe("Not a number");
  expect(getScore([])).toBe("Not a number");
});

