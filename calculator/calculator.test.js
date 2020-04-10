const calculator = require("./calculator");

test("adds numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("multiplies numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("divides numbers", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
