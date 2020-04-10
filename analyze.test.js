const analyze = require("./analyze");

test("returns object with average, min, max and length", () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
